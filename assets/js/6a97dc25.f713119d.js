"use strict";(self.webpackChunkreact_native_website=self.webpackChunkreact_native_website||[]).push([[70163],{35318:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>m});var r=n(27378);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),u=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=u(e.components);return r.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=u(n),m=a,k=d["".concat(p,".").concat(m)]||d[m]||c[m]||i;return n?r.createElement(k,o(o({ref:t},s),{},{components:n})):r.createElement(k,o({ref:t},s))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var u=2;u<i;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},1678:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>p,default:()=>m,frontMatter:()=>l,metadata:()=>u,toc:()=>c});var r=n(25773),a=n(30808),i=(n(27378),n(35318)),o=["components"],l={id:"1_developer_guide",title:"Developer guide",sidebar_label:"Developer guide"},p=void 0,u={unversionedId:"6_contributing/1_developer_guide",id:"version-v1.1.0/6_contributing/1_developer_guide",title:"Developer guide",description:"Operator SDK",source:"@site/versioned_docs/version-v1.1.0/6_contributing/1_developer_guide.md",sourceDirName:"6_contributing",slug:"/6_contributing/1_developer_guide",permalink:"/nifikop/docs/v1.1.0/6_contributing/1_developer_guide",draft:!1,editUrl:"https://github.com/konpyutaika/nifikop/edit/master/site/website/versioned_docs/version-v1.1.0/6_contributing/1_developer_guide.md",tags:[],version:"v1.1.0",lastUpdatedBy:"Juldrixx",lastUpdatedAt:1679343499,formattedLastUpdatedAt:"Mar 20, 2023",frontMatter:{id:"1_developer_guide",title:"Developer guide",sidebar_label:"Developer guide"},sidebar:"docs",previous:{title:"Contribution organization",permalink:"/nifikop/docs/v1.1.0/6_contributing/0_contribution_organization"},next:{title:"Reporting bugs",permalink:"/nifikop/docs/v1.1.0/6_contributing/2_reporting_bugs"}},s={},c=[{value:"Operator SDK",id:"operator-sdk",level:2},{value:"Prerequisites",id:"prerequisites",level:3},{value:"Initial setup",id:"initial-setup",level:3},{value:"Operator sdk",id:"operator-sdk-1",level:3},{value:"Build NiFiKop",id:"build-nifikop",level:3},{value:"Local environment",id:"local-environment",level:4},{value:"Run NiFiKop",id:"run-nifikop",level:3},{value:"Run the Operator Locally with the Go Binary",id:"run-the-operator-locally-with-the-go-binary",level:4},{value:"Deploy using the Helm Charts",id:"deploy-using-the-helm-charts",level:4},{value:"Helm",id:"helm",level:2}],d={toc:c};function m(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"operator-sdk"},"Operator SDK"),(0,i.kt)("h3",{id:"prerequisites"},"Prerequisites"),(0,i.kt)("p",null,"NiFiKop has been validated with :"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://golang.org/doc/install"},"go")," version v1.17+."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://docs.docker.com/get-docker/"},"docker")," version 18.09+"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://kubernetes.io/docs/tasks/tools/install-kubectl/"},"kubectl")," version v1.16+"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://helm.sh/"},"Helm")," version v3.4.2"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/operator-framework/operator-sdk"},"Operator sdk")," version v1.18.1")),(0,i.kt)("h3",{id:"initial-setup"},"Initial setup"),(0,i.kt)("p",null,"Checkout the project."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"git clone https://github.com/konpyutaika/nifikop.git\ncd nifikop\n")),(0,i.kt)("h3",{id:"operator-sdk-1"},"Operator sdk"),(0,i.kt)("p",null,"The full list of command is available here : ",(0,i.kt)("a",{parentName:"p",href:"https://sdk.operatorframework.io/docs/upgrading-sdk-version/v1.0.0/#cli-changes"},"https://sdk.operatorframework.io/docs/upgrading-sdk-version/v1.0.0/#cli-changes")),(0,i.kt)("h3",{id:"build-nifikop"},"Build NiFiKop"),(0,i.kt)("h4",{id:"local-environment"},"Local environment"),(0,i.kt)("p",null,"If you prefer working directly with your local go environment you can simply uses :"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"make build\n")),(0,i.kt)("h3",{id:"run-nifikop"},"Run NiFiKop"),(0,i.kt)("p",null,"We can quickly run NiFiKop in development mode (on your local host), then it will use your kubectl configuration file to connect to your kubernetes cluster."),(0,i.kt)("p",null,"There are several ways to execute your operator :"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Using your IDE directly"),(0,i.kt)("li",{parentName:"ul"},"Executing directly the Go binary"),(0,i.kt)("li",{parentName:"ul"},"deploying using the Helm charts")),(0,i.kt)("p",null,"If you want to configure your development IDE, you need to give it environment variables so that it will uses to connect to kubernetes."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"KUBECONFIG={path/to/your/kubeconfig}\nWATCH_NAMESPACE={namespace_to_watch}\nPOD_NAME={name for operator pod}\nLOG_LEVEL=Debug\nOPERATOR_NAME=ide\n")),(0,i.kt)("h4",{id:"run-the-operator-locally-with-the-go-binary"},"Run the Operator Locally with the Go Binary"),(0,i.kt)("p",null,"This method can be used to run the operator locally outside of the cluster. This method may be preferred during development as it facilitates faster deployment and testing."),(0,i.kt)("p",null,"Set the name of the operator in an environment variable"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"export OPERATOR_NAME=nifi-operator\n")),(0,i.kt)("p",null,"Deploy the CRDs."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl apply -f config/crd/bases/nifi.konpyutaika.com_nificlusters.yaml\nkubectl apply -f config/crd/bases/nifi.konpyutaika.com_nifidataflows.yaml\nkubectl apply -f config/crd/bases/nifi.konpyutaika.com_nifiparametercontexts.yaml\nkubectl apply -f config/crd/bases/nifi.konpyutaika.com_nifiregistryclients.yaml\nkubectl apply -f config/crd/bases/nifi.konpyutaika.com_nifiusergroups.yaml\nkubectl apply -f config/crd/bases/nifi.konpyutaika.com_nifiusers.yaml\n")),(0,i.kt)("p",null,"And deploy the operator."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"make run\n")),(0,i.kt)("p",null,"This will run the operator in the ",(0,i.kt)("inlineCode",{parentName:"p"},"default")," namespace using the default Kubernetes config file at ",(0,i.kt)("inlineCode",{parentName:"p"},"$HOME/.kube/config"),"."),(0,i.kt)("h4",{id:"deploy-using-the-helm-charts"},"Deploy using the Helm Charts"),(0,i.kt)("p",null,"This section provides an instructions for running the operator Helm charts with an image that is built from the local branch."),(0,i.kt)("p",null,"Build the image from the current branch."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"export DOCKER_REPO_BASE={your-docker-repo}\nmake docker-build\n")),(0,i.kt)("p",null,"Push the image to docker hub (or to whichever repo you want to use)"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"$ make docker-push\n")),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"The image tag is a combination of the version as defined in ",(0,i.kt)("inlineCode",{parentName:"p"},"verion/version.go")," and the branch name.")),(0,i.kt)("p",null,"Install the Helm chart."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'helm install skeleton ./helm/nifikop \\\n    --set image.tag=v0.5.1-release \\\n    --namespace-{"nifikop"}\n')),(0,i.kt)("admonition",{type:"important"},(0,i.kt)("p",{parentName:"admonition"},"The ",(0,i.kt)("inlineCode",{parentName:"p"},"image.repository")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"image.tag")," template variables have to match the names from the image that we pushed in the previous step.")),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"We set the chart name to the branch, but it can be anything.")),(0,i.kt)("p",null,"Lastly, verify that the operator is running."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-console"},"$ kubectl get pods -n nifikop\nNAME                                                READY   STATUS    RESTARTS   AGE\nskeleton-nifikop-8946b89dc-4cfs9   1/1     Running   0          7m45s\n")),(0,i.kt)("h2",{id:"helm"},"Helm"),(0,i.kt)("p",null,"The NiFiKop operator is released in the ",(0,i.kt)("inlineCode",{parentName:"p"},"konpyutaika-incubator")," helm repository."),(0,i.kt)("p",null,"In order to package the chart you need to run the following command."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"make helm-package\n")))}m.isMDXComponent=!0}}]);