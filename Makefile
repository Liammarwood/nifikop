# Image URL to use all building/pushing image targets
SERVICE_NAME			:= nifikop
DOCKER_REGISTRY_BASE 	?= ghcr.io/konpyutaika/docker-images
IMAGE_TAG				?= $(shell git describe --tags --abbrev=0 --match '[0-9].*[0-9].*[0-9]' 2>/dev/null)
IMAGE_NAME 				?= $(SERVICE_NAME)
BUILD_IMAGE				?= ghcr.io/konpyutaika/docker-images/nifikop-build
GOLANG_VERSION          ?= 1.17
IMAGE_TAG_BASE ?= <registry>/<operator name>
OS = $(shell go env GOOS)
ARCH = $(shell go env GOARCH)

# workdir
WORKDIR := /go/nifikop

# Debug variables
TELEPRESENCE_REGISTRY ?= datawire

DEV_DIR := docker/build-image

# BUNDLE_GEN_FLAGS are the flags passed to the operator-sdk generate bundle command
BUNDLE_GEN_FLAGS ?= -q --overwrite --version $(VERSION) $(BUNDLE_METADATA_OPTS)

# USE_IMAGE_DIGESTS defines if images are resolved via tags or digests
# You can enable this value if you would like to use SHA Based Digests
# To enable set flag to true
USE_IMAGE_DIGESTS ?= false
ifeq ($(USE_IMAGE_DIGESTS), true)
	BUNDLE_GEN_FLAGS += --use-image-digests
endif

# ENVTEST_K8S_VERSION refers to the version of kubebuilder assets to be downloaded by envtest binary.
ENVTEST_K8S_VERSION = 1.22

# Repository url for this project
# in gitlab CI_REGISTRY_IMAGE=repo/path/name:tag
ifdef CI_REGISTRY_IMAGE
	REPOSITORY := $(CI_REGISTRY_IMAGE)
else
	REPOSITORY := $(DOCKER_REGISTRY_BASE)/$(IMAGE_NAME)
endif
IMAGE_TAG_BASE = $(REPOSITORY)

# Branch is used for the docker image version
ifdef CIRCLE_BRANCH
#	removing / for fork which lead to docker error
	BRANCH := $(subst /,-,$(CIRCLE_BRANCH))
else
	ifdef CIRCLE_TAG
		BRANCH := $(CIRCLE_TAG)
	else
		BRANCH=$(shell git rev-parse --abbrev-ref HEAD | sed -e 's/\//_/')
	endif
endif

# Operator version is managed in go file
# BaseVersion is for dev docker image tag
BASEVERSION := $(shell awk -F\" '/Version =/ { print $$2}' version/version.go)

ifdef CIRCLE_TAG
	VERSION := ${BRANCH}
else
	VERSION := $(BASEVERSION)-${BRANCH}
endif

HELM_VERSION    := $(shell cat helm/nifikop/Chart.yaml| grep version | awk -F"version: " '{print $$2}')
HELM_TARGET_DIR ?= docs/helm

# if branch master tag latest
ifeq ($(CIRCLE_BRANCH),master)
	PUSHLATEST := true
endif

# The default action of this Makefile is to build the development docker image
.PHONY: default
default: build

.PHONY: all
all: build

# Default bundle image tag
BUNDLE_IMG ?= $(REPOSITORY)-bundle:$(VERSION)
# Options for 'bundle-build'
ifneq ($(origin CHANNELS), undefined)
BUNDLE_CHANNELS := --channels=$(CHANNELS)
endif
ifneq ($(origin DEFAULT_CHANNEL), undefined)
BUNDLE_DEFAULT_CHANNEL := --default-channel=$(DEFAULT_CHANNEL)
endif
BUNDLE_METADATA_OPTS ?= $(BUNDLE_CHANNELS) $(BUNDLE_DEFAULT_CHANNEL)

# Get the currently used golang install path (in GOPATH/bin, unless GOBIN is set)
ifeq (,$(shell go env GOBIN))
GOBIN=$(shell go env GOPATH)/bin
else
GOBIN=$(shell go env GOBIN)
endif

# Setting SHELL to bash allows bash commands to be executed by recipes.
# This is a requirement for 'setup-envtest.sh' in the test target.
# Options are set to exit when a recipe line exits non-zero or a piped command fails.
SHELL = /usr/bin/env bash -o pipefail
.SHELLFLAGS = -ec

# Build manager binary
.PHONY: manager
manager: generate fmt vet
	go build -o bin/manager main.go

# Generate code
.PHONY: generate
generate: controller-gen
	@echo "Generate zzz-deepcopy objects"
	$(CONTROLLER_GEN) object:headerFile="hack/boilerplate.go.txt" paths="./..."

# Generate manifests e.g. CRD, RBAC etc.
.PHONY: manifests
manifests: controller-gen
	$(CONTROLLER_GEN) rbac:roleName=manager-role crd webhook paths="./..." output:crd:artifacts:config=config/crd/bases
	mkdir -p helm/nifikop/crds && cp config/crd/bases/* helm/nifikop/crds

# Build the docker image
.PHONY: docker-build
docker-build:
	docker build -t $(REPOSITORY):$(VERSION) .

.PHONY: build
build: manager manifests docker-build

# Download controller-gen locally if necessary
CONTROLLER_GEN = $(shell pwd)/bin/controller-gen
.PHONY: controller-gen
controller-gen: ## Download controller-gen locally if necessary.
	$(call go-get-tool,$(CONTROLLER_GEN),sigs.k8s.io/controller-tools/cmd/controller-gen@v0.8.0)

# Run go fmt against code
.PHONY: fmt
fmt:
	go fmt ./...

# Run go vet against code
.PHONY: vet
vet:
	go vet ./...

# Run tests
ENVTEST_ASSETS_DIR=$(shell pwd)/testbin
.PHONY: test
test: manifests generate fmt vet envtest
	KUBEBUILDER_ASSETS="$(shell $(ENVTEST) use $(ENVTEST_K8S_VERSION) -p path)" go test ./... -coverprofile cover.out

.PHONY: test-with-vendor
test-with-vendor: manifests generate fmt vet envtest
	KUBEBUILDER_ASSETS="$(shell $(ENVTEST) use $(ENVTEST_K8S_VERSION) -p path)" go test -mod=vendor ./... -coverprofile cover.out

# Run against the configured Kubernetes cluster in ~/.kube/config
.PHONY: run
run: generate fmt vet manifests
	go run ./main.go

ifndef ignore-not-found
  ignore-not-found = false
endif

# Install CRDs into a cluster
.PHONY: install
install: manifests kustomize
	$(KUSTOMIZE) build config/crd | kubectl apply -f -

# Uninstall CRDs from a cluster
.PHONY: uninstall
uninstall: manifests kustomize
	$(KUSTOMIZE) build config/crd | kubectl delete --ignore-not-found=$(ignore-not-found) -f -

# Deploy controller in the configured Kubernetes cluster in ~/.kube/config
.PHONY: deploy
deploy: manifests kustomize
	cd config/manager && $(KUSTOMIZE) edit set image controller=$(REPOSITORY):$(VERSION)
	$(KUSTOMIZE) build config/default | kubectl apply -f -

# UnDeploy controller from the configured Kubernetes cluster in ~/.kube/config
.PHONY: undeploy
undeploy:
	$(KUSTOMIZE) build config/default | kubectl delete --ignore-not-found=$(ignore-not-found) -f -

# Download kustomize locally if necessary
KUSTOMIZE = $(shell pwd)/bin/kustomize
.PHONY: kustomize
kustomize:
	$(call go-get-tool,$(KUSTOMIZE),sigs.k8s.io/kustomize/kustomize/v3@v3.8.7)

ENVTEST = $(shell pwd)/bin/setup-envtest
.PHONY: envtest
envtest: ## Download envtest-setup locally if necessary.
	$(call go-get-tool,$(ENVTEST),sigs.k8s.io/controller-runtime/tools/setup-envtest@latest)

# go-get-tool will 'go install' any package $2 and install it to $1.
PROJECT_DIR := $(shell dirname $(abspath $(lastword $(MAKEFILE_LIST))))
define go-get-tool
@[ -f $(1) ] || { \
set -e ;\
TMP_DIR=$$(mktemp -d) ;\
cd $$TMP_DIR ;\
go mod init tmp ;\
echo "Downloading $(2)" ;\
GOBIN=$(PROJECT_DIR)/bin go install $(2) ;\
rm -rf $$TMP_DIR ;\
}
endef

# Generate bundle manifests and metadata, then validate generated files.
.PHONY: bundle
bundle: manifests kustomize
	operator-sdk generate kustomize manifests --interactive=false -q
	cd config/manager && $(KUSTOMIZE) edit set image controller=$(REPOSITORY):$(VERSION)
	$(KUSTOMIZE) build config/manifests | operator-sdk generate bundle $(BUNDLE_GEN_FLAGS)
	operator-sdk bundle validate ./bundle

# Build the bundle image.
.PHONY: bundle-build
bundle-build:
	docker build -f bundle.Dockerfile -t $(BUNDLE_IMG) .

.PHONY: helm-package
helm-package:
	@echo Packaging $(CHART_VERSION)
ifdef CHART_VERSION
	    echo $(CHART_VERSION)
	    helm package --version $(CHART_VERSION) helm/nifikop
else
		CHART_VERSION=$(HELM_VERSION)
	    helm package helm/nifikop
endif
	mv nifikop-$(CHART_VERSION).tgz $(HELM_TARGET_DIR)
	helm repo index $(HELM_TARGET_DIR)/

# Push the docker image
.PHONY: docker-push
docker-push:
	docker push $(REPOSITORY):$(VERSION)
ifdef PUSHLATEST
	docker tag $(REPOSITORY):$(VERSION) $(REPOSITORY):latest
	docker push $(REPOSITORY):latest
endif
# ----

.DEFAULT_GOAL := help
.PHONY: help
help:
	@grep -E '(^[a-zA-Z_-]+:.*?##.*$$)|(^##)' $(MAKEFILE_LIST) | awk 'BEGIN {FS = ":.*?## "}{printf "\033[32m%-30s\033[0m %s\n", $$1, $$2}' | sed -e 's/\[32m##/[33m/'

.PHONY: get-version
get-version:
	@echo $(VERSION)

.PHONY: clean
clean:
	@rm -rf $(OUT_BIN) || true
	@rm -f api/v1alpha1/zz_generated.deepcopy.go || true

#Generate dep for graph
UNAME := $(shell uname -s)

.PHONY: dep-graph
dep-graph:
ifeq ($(UNAME), Darwin)
	dep status -dot | dot -T png | open -f -a /Applications/Preview.app
endif
ifeq ($(UNAME), Linux)
	dep status -dot | dot -T png | display
endif

.PHONY: debug-port-forward
debug-port-forward:
	kubectl port-forward `kubectl get pod -l app=nifikop -o jsonpath="{.items[0].metadata.name}"` 40000:40000

.PHONY: debug-pod-logs
debug-pod-logs:
	kubectl logs -f `kubectl get pod -l app=nifikop -o jsonpath="{.items[0].metadata.name}"`

define debug_telepresence
	export TELEPRESENCE_REGISTRY=$(TELEPRESENCE_REGISTRY) ; \
	echo "execute : cat nifi-operator.env" ; \
	sudo mkdir -p /var/run/secrets/kubernetes.io ; \
	tdep=$(shell kubectl get deployment -l app=nifikop -o jsonpath='{.items[0].metadata.name}') ; \
  	echo kubectl get deployment -l app=nifikop -o jsonpath='{.items[0].metadata.name}' ; \
	echo telepresence --swap-deployment $$tdep --mount=/tmp/known --env-file nifi-operator.env $1 $2 ; \
 	telepresence --swap-deployment $$tdep --mount=/tmp/known --env-file nifi-operator.env $1 $2
endef

.PHONY: debug-telepresence
debug-telepresence:
	$(call debug_telepresence)

.PHONY: debug-telepresence-with-alias
debug-telepresence-with-alias:
	$(call debug_telepresence,--also-proxy,10.40.0.0/16)

# Build the docker development environment
.PHONY: build-ci-image
build-ci-image:
	docker build --cache-from $(BUILD_IMAGE):latest \
	  --build-arg GOLANG_VERSION=$(GOLANG_VERSION) \
		-t $(BUILD_IMAGE):latest \
		-t $(BUILD_IMAGE):$(GOLANG_VERSION) \
		-f $(DEV_DIR)/Dockerfile \
		.

.PHONY: push-ci-image
push-ci-image:
	docker push $(BUILD_IMAGE):$(GOLANG_VERSION)
ifdef PUSHLATEST
	docker push $(BUILD_IMAGE):latest
endif

## Test if the dependencies we need to run this Makefile are installed
#deps-development:
#ifndef DOCKER
#	@echo "Docker is not available. Please install docker"
#	@exit 1
#endif

.PHONY: opm
OPM = ./bin/opm
opm: ## Download opm locally if necessary.
ifeq (,$(wildcard $(OPM)))
ifeq (,$(shell which opm 2>/dev/null))
	@{ \
	set -e ;\
	mkdir -p $(dir $(OPM)) ;\
	OS=$(shell go env GOOS) && ARCH=$(shell go env GOARCH) && \
	curl -sSLo $(OPM) https://github.com/operator-framework/operator-registry/releases/download/v1.19.1/$${OS}-$${ARCH}-opm ;\
	chmod +x $(OPM) ;\
	}
else
OPM = $(shell which opm)
endif
endif

# A comma-separated list of bundle images (e.g. make catalog-build BUNDLE_IMGS=example.com/operator-bundle:v0.1.0,example.com/operator-bundle:v0.2.0).
# These images MUST exist in a registry and be pull-able.
BUNDLE_IMGS ?= $(BUNDLE_IMG)

# The image tag given to the resulting catalog image (e.g. make catalog-build CATALOG_IMG=example.com/operator-catalog:v0.2.0).
CATALOG_IMG ?= $(IMAGE_TAG_BASE)-catalog:v$(VERSION)

# Set CATALOG_BASE_IMG to an existing catalog image tag to add $BUNDLE_IMGS to that image.
ifneq ($(origin CATALOG_BASE_IMG), undefined)
FROM_INDEX_OPT := --from-index $(CATALOG_BASE_IMG)
endif

# Build a catalog image by adding bundle images to an empty catalog using the operator package manager tool, 'opm'.
# This recipe invokes 'opm' in 'semver' bundle add mode. For more information on add modes, see:
# https://github.com/operator-framework/community-operators/blob/7f1438c/docs/packaging-operator.md#updating-your-existing-operator
.PHONY: catalog-build
catalog-build: opm ## Build a catalog image.
	$(OPM) index add --container-tool docker --mode semver --tag $(CATALOG_IMG) --bundles $(BUNDLE_IMGS) $(FROM_INDEX_OPT)

# Push the catalog image.
.PHONY: catalog-push
catalog-push: ## Push a catalog image.
	$(MAKE) docker-push IMG=$(CATALOG_IMG)