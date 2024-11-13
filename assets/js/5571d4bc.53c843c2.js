"use strict";(self.webpackChunkreact_native_website=self.webpackChunkreact_native_website||[]).push([[22616],{58581:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>a,frontMatter:()=>d,metadata:()=>i,toc:()=>h});const i=JSON.parse('{"id":"5_references/1_nifi_cluster/1_nifi_cluster","title":"NiFi cluster","description":"NifiCluster describes the desired state of the NiFi cluster we want to setup through the operator.","source":"@site/versioned_docs/version-v1.9.0/5_references/1_nifi_cluster/1_nifi_cluster.md","sourceDirName":"5_references/1_nifi_cluster","slug":"/5_references/1_nifi_cluster/","permalink":"/nifikop/docs/v1.9.0/5_references/1_nifi_cluster/","draft":false,"unlisted":false,"editUrl":"https://github.com/konpyutaika/nifikop/edit/master/site/website/versioned_docs/version-v1.9.0/5_references/1_nifi_cluster/1_nifi_cluster.md","tags":[],"version":"v1.9.0","lastUpdatedBy":"Juldrixx","lastUpdatedAt":1717054723000,"frontMatter":{"id":"1_nifi_cluster","title":"NiFi cluster","sidebar_label":"NiFi cluster"},"sidebar":"docs","previous":{"title":"Compatibility versions","permalink":"/nifikop/docs/v1.9.0/4_compatibility_versions"},"next":{"title":"Read only configurations","permalink":"/nifikop/docs/v1.9.0/5_references/1_nifi_cluster/2_read_only_config"}}');var r=s(62540),n=s(43023);const d={id:"1_nifi_cluster",title:"NiFi cluster",sidebar_label:"NiFi cluster"},l=void 0,c={},h=[{value:"NifiCluster",id:"nificluster",level:2},{value:"NifiClusterSpec",id:"nificlusterspec",level:2},{value:"NifiClusterStatus",id:"nificlusterstatus",level:2},{value:"ServicePolicy",id:"servicepolicy",level:2},{value:"PodPolicy",id:"podpolicy",level:2},{value:"ManagedUsers",id:"managedusers",level:2},{value:"DisruptionBudget",id:"disruptionbudget",level:2},{value:"LdapConfiguration",id:"ldapconfiguration",level:2},{value:"SingleUserConfiguration",id:"singleuserconfiguration",level:2},{value:"NifiClusterTaskSpec",id:"nificlustertaskspec",level:2},{value:"ClusterState",id:"clusterstate",level:2},{value:"UserSecretKeys",id:"usersecretkeys",level:2}];function o(e){const t={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,n.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.code,{children:"NifiCluster"})," describes the desired state of the NiFi cluster we want to setup through the operator."]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-yaml",children:'apiVersion: nifi.konpyutaika.com/v1\nkind: NifiCluster\nmetadata:\n  name: simplenifi\nspec:\n  service:\n    headlessEnabled: true\n    annotations:\n      tyty: ytyt\n    labels:\n      cluster-name: simplenifi\n      tete: titi\n  zkAddress: "zookeeper.zookeeper:2181"\n  zkPath: /simplenifi\n  externalServices:\n    - metadata:\n        annotations:\n          toto: tata\n        labels:\n          cluster-name: driver-simplenifi\n          titi: tutu\n      name: driver-ip\n      spec:\n        portConfigs:\n          - internalListenerName: http\n            port: 8080\n        type: ClusterIP\n  clusterImage: "apache/nifi:1.26.0"\n  initContainerImage: "bash:5.2.2"\n  oneNifiNodePerNode: true\n  readOnlyConfig:\n    nifiProperties:\n      overrideConfigs: |\n        nifi.sensitive.props.key=thisIsABadSensitiveKeyPassword\n  pod:\n    annotations:\n      toto: tata\n    labels:\n      cluster-name: simplenifi\n      titi: tutu\n  nodeConfigGroups:\n    default_group:\n      imagePullPolicy: IfNotPresent\n      isNode: true\n      serviceAccountName: default\n      storageConfigs:\n        - mountPath: "/opt/nifi/nifi-current/logs"\n          name: logs\n          reclaimPolicy: Delete\n          pvcSpec:\n            accessModes:\n              - ReadWriteOnce\n            storageClassName: "standard"\n            resources:\n              requests:\n                storage: 10Gi\n      resourcesRequirements:\n        limits:\n          cpu: "1"\n          memory: 2Gi\n        requests:\n          cpu: "1"\n          memory: 2Gi\n  nodes:\n    - id: 1\n      nodeConfigGroup: "default_group"\n    - id: 2\n      nodeConfigGroup: "default_group"\n  propagateLabels: true\n  nifiClusterTaskSpec:\n    retryDurationMinutes: 10\n  listenersConfig:\n    internalListeners:\n      - containerPort: 8080\n        type: http\n        name: http\n      - containerPort: 6007\n        type: cluster\n        name: cluster\n      - containerPort: 10000\n        type: s2s\n        name: s2s\n      - containerPort: 9090\n        type: prometheus\n        name: prometheus\n      - containerPort: 6342\n        type: load-balance\n        name: load-balance\n\n'})}),"\n",(0,r.jsx)(t.h2,{id:"nificluster",children:"NifiCluster"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Field"}),(0,r.jsx)(t.th,{children:"Type"}),(0,r.jsx)(t.th,{children:"Description"}),(0,r.jsx)(t.th,{children:"Required"}),(0,r.jsx)(t.th,{children:"Default"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"metadata"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.a,{href:"https://godoc.org/k8s.io/apimachinery/pkg/apis/meta/v1#ObjectMeta",children:"ObjectMetadata"})}),(0,r.jsx)(t.td,{children:"is metadata that all persisted resources must have, which includes all objects users must create."}),(0,r.jsx)(t.td,{children:"No"}),(0,r.jsx)(t.td,{children:"nil"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"spec"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.a,{href:"#nificlusterspec",children:"NifiClusterSpec"})}),(0,r.jsx)(t.td,{children:"defines the desired state of NifiCluster."}),(0,r.jsx)(t.td,{children:"No"}),(0,r.jsx)(t.td,{children:"nil"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"status"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.a,{href:"#nificlusterstatus",children:"NifiClusterStatus"})}),(0,r.jsx)(t.td,{children:"defines the observed state of NifiCluster."}),(0,r.jsx)(t.td,{children:"No"}),(0,r.jsx)(t.td,{children:"nil"})]})]})]}),"\n",(0,r.jsx)(t.h2,{id:"nificlusterspec",children:"NifiClusterSpec"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Field"}),(0,r.jsx)(t.th,{children:"Type"}),(0,r.jsx)(t.th,{children:"Description"}),(0,r.jsx)(t.th,{children:"Required"}),(0,r.jsx)(t.th,{children:"Default"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"clientType"}),(0,r.jsxs)(t.td,{children:["Enum=","basic"]}),(0,r.jsx)(t.td,{children:"defines if the operator will use basic or tls authentication to query the NiFi cluster."}),(0,r.jsx)(t.td,{children:"No"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"tls"})})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"type"}),(0,r.jsxs)(t.td,{children:["Enum=","internal"]}),(0,r.jsx)(t.td,{children:"defines if the cluster is internal (i.e manager by the operator) or external."}),(0,r.jsx)(t.td,{children:"No"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"internal"})})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"nodeURITemplate"}),(0,r.jsx)(t.td,{children:"string"}),(0,r.jsx)(t.td,{children:"used to dynamically compute node uri."}),(0,r.jsx)(t.td,{children:"if external type"}),(0,r.jsx)(t.td,{children:"-"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"nifiURI"}),(0,r.jsx)(t.td,{children:"stringused access through a LB uri."}),(0,r.jsx)(t.td,{children:"if external type"}),(0,r.jsx)(t.td,{children:"-"}),(0,r.jsx)(t.td,{})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"rootProcessGroupId"}),(0,r.jsx)(t.td,{children:"string"}),(0,r.jsx)(t.td,{children:"contains the uuid of the root process group for this cluster."}),(0,r.jsx)(t.td,{children:"if external type"}),(0,r.jsx)(t.td,{children:"-"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"secretRef"}),(0,r.jsxs)(t.td,{children:["[\xa0]",(0,r.jsx)(t.a,{href:"../4_nifi_parameter_context#secretreference",children:"SecretReference"})]}),(0,r.jsx)(t.td,{children:"reference the secret containing the informations required to authentiticate to the cluster."}),(0,r.jsx)(t.td,{children:"if external type"}),(0,r.jsx)(t.td,{children:"-"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"proxyUrl"}),(0,r.jsx)(t.td,{children:"string"}),(0,r.jsx)(t.td,{children:"defines the proxy required to query the NiFi cluster."}),(0,r.jsx)(t.td,{children:"if external type"}),(0,r.jsx)(t.td,{children:"-"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"service"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.a,{href:"#servicepolicy",children:"ServicePolicy"})}),(0,r.jsx)(t.td,{children:"defines the policy for services owned by NiFiKop operator."}),(0,r.jsx)(t.td,{children:"No"}),(0,r.jsx)(t.td,{children:"-"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"pod"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.a,{href:"#podpolicy",children:"PodPolicy"})}),(0,r.jsx)(t.td,{children:"defines the policy for pod owned by NiFiKop operator."}),(0,r.jsx)(t.td,{children:"No"}),(0,r.jsx)(t.td,{children:"-"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"zkAddress"}),(0,r.jsx)(t.td,{children:"string"}),(0,r.jsxs)(t.td,{children:["specifies the ZooKeeper connection string in the form hostname",":port"," where host and port are those of a Zookeeper server."]}),(0,r.jsx)(t.td,{children:"No"}),(0,r.jsx)(t.td,{children:'""'})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"zkPath"}),(0,r.jsx)(t.td,{children:"string"}),(0,r.jsx)(t.td,{children:"specifies the Zookeeper chroot path as part of its Zookeeper connection string which puts its data under same path in the global ZooKeeper namespace."}),(0,r.jsx)(t.td,{children:"Yes"}),(0,r.jsx)(t.td,{children:'"/"'})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"initContainerImage"}),(0,r.jsx)(t.td,{children:"string"}),(0,r.jsx)(t.td,{children:"can override the default image used into the init container to check if ZoooKeeper server is reachable."}),(0,r.jsx)(t.td,{children:"Yes"}),(0,r.jsx)(t.td,{children:'"bash"'})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"initContainers"}),(0,r.jsx)(t.td,{children:"[\xa0]string"}),(0,r.jsx)(t.td,{children:"defines additional initContainers configurations."}),(0,r.jsx)(t.td,{children:"No"}),(0,r.jsx)(t.td,{children:"[\xa0]"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"clusterImage"}),(0,r.jsx)(t.td,{children:"string"}),(0,r.jsx)(t.td,{children:"can specify the whole nificluster image in one place."}),(0,r.jsx)(t.td,{children:"No"}),(0,r.jsx)(t.td,{children:'""'})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"oneNifiNodePerNode"}),(0,r.jsx)(t.td,{children:"boolean"}),(0,r.jsx)(t.td,{children:"if set to true every nifi node is started on a new node, if there is not enough node to do that it will stay in pending state. If set to false the operator also tries to schedule the nifi node to a unique node but if the node number is insufficient the nifi node will be scheduled to a node where a nifi node is already running."}),(0,r.jsx)(t.td,{children:"No"}),(0,r.jsx)(t.td,{children:"nil"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"propagateLabels"}),(0,r.jsx)(t.td,{children:"boolean"}),(0,r.jsxs)(t.td,{children:["whether the labels defined on the ",(0,r.jsx)(t.code,{children:"NifiCluster"})," metadata will be propagated to resources created by the operator or not."]}),(0,r.jsx)(t.td,{children:"Yes"}),(0,r.jsx)(t.td,{children:"false"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"managedAdminUsers"}),(0,r.jsxs)(t.td,{children:["[\xa0]",(0,r.jsx)(t.a,{href:"#managedusers",children:"ManagedUser"})]}),(0,r.jsx)(t.td,{children:"contains the list of users that will be added to the managed admin group (with all rights)."}),(0,r.jsx)(t.td,{children:"No"}),(0,r.jsx)(t.td,{children:"[]"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"managedReaderUsers"}),(0,r.jsxs)(t.td,{children:["[\xa0]",(0,r.jsx)(t.a,{href:"#managedusers",children:"ManagedUser"})]}),(0,r.jsx)(t.td,{children:"contains the list of users that will be added to the managed admin group (with all rights)."}),(0,r.jsx)(t.td,{children:"No"}),(0,r.jsx)(t.td,{children:"[]"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"readOnlyConfig"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.a,{href:"./2_read_only_config",children:"ReadOnlyConfig"})}),(0,r.jsx)(t.td,{children:"specifies the read-only type Nifi config cluster wide, all theses will be merged with node specified readOnly configurations, so it can be overwritten per node."}),(0,r.jsx)(t.td,{children:"No"}),(0,r.jsx)(t.td,{children:"nil"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"nodeUserIdentityTemplate"}),(0,r.jsx)(t.td,{children:"string"}),(0,r.jsx)(t.td,{children:"specifies the template to be used when naming the node user identity (e.g. node-%d-mysuffix)"}),(0,r.jsx)(t.td,{children:"Yes"}),(0,r.jsx)(t.td,{children:'"node-%d-<cluster-name>"'})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"nodeConfigGroups"}),(0,r.jsxs)(t.td,{children:["map[string]",(0,r.jsx)(t.a,{href:"./3_node_config",children:"NodeConfig"})]}),(0,r.jsx)(t.td,{children:"specifies multiple node configs with unique name"}),(0,r.jsx)(t.td,{children:"No"}),(0,r.jsx)(t.td,{children:"nil"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"nodes"}),(0,r.jsxs)(t.td,{children:["[\xa0]",(0,r.jsx)(t.a,{href:"./3_node_config",children:"Node"})]}),(0,r.jsx)(t.td,{children:"specifies the list of cluster nodes, all node requires an image, unique id, and storageConfigs settings"}),(0,r.jsx)(t.td,{children:"Yes"}),(0,r.jsx)(t.td,{children:"nil"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"disruptionBudget"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.a,{href:"#disruptionbudget",children:"DisruptionBudget"})}),(0,r.jsx)(t.td,{children:"defines the configuration for PodDisruptionBudget."}),(0,r.jsx)(t.td,{children:"No"}),(0,r.jsx)(t.td,{children:"nil"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"ldapConfiguration"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.a,{href:"#ldapconfiguration",children:"LdapConfiguration"})}),(0,r.jsx)(t.td,{children:"specifies the configuration if you want to use LDAP."}),(0,r.jsx)(t.td,{children:"No"}),(0,r.jsx)(t.td,{children:"nil"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"singleUserConfiguration"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.a,{href:"#singleuserconfiguration",children:"SingleUserConfiguration"})}),(0,r.jsx)(t.td,{children:"specifies the configuration if you want to use SingleUser."}),(0,r.jsx)(t.td,{children:"No"}),(0,r.jsx)(t.td,{children:"nil"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"nifiClusterTaskSpec"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.a,{href:"#nificlustertaskspec",children:"NifiClusterTaskSpec"})}),(0,r.jsx)(t.td,{children:"specifies the configuration of the nifi cluster Tasks."}),(0,r.jsx)(t.td,{children:"No"}),(0,r.jsx)(t.td,{children:"nil"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"listenersConfig"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.a,{href:"./6_listeners_config",children:"ListenersConfig"})}),(0,r.jsx)(t.td,{children:"specifies nifi's listener specifig configs."}),(0,r.jsx)(t.td,{children:"No"}),(0,r.jsx)(t.td,{children:"-"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"sidecarConfigs"}),(0,r.jsxs)(t.td,{children:["[\xa0]",(0,r.jsx)(t.a,{href:"https://godoc.org/k8s.io/api/core/v1#Container",children:"Container"})]}),(0,r.jsx)(t.td,{children:"Defines additional sidecar configurations. [Check documentation for more informations]"}),(0,r.jsx)(t.td,{}),(0,r.jsx)(t.td,{})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"externalServices"}),(0,r.jsxs)(t.td,{children:["[\xa0]",(0,r.jsx)(t.a,{href:"./7_external_service_config",children:"ExternalServiceConfigs"})]}),(0,r.jsx)(t.td,{children:"specifies settings required to access nifi externally."}),(0,r.jsx)(t.td,{children:"No"}),(0,r.jsx)(t.td,{children:"-"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"topologySpreadConstraints"}),(0,r.jsxs)(t.td,{children:["[\xa0]",(0,r.jsx)(t.a,{href:"https://godoc.org/k8s.io/api/core/v1#TopologySpreadConstraint",children:"TopologySpreadConstraint"})]}),(0,r.jsx)(t.td,{children:"specifies any TopologySpreadConstraint objects to be applied to all nodes."}),(0,r.jsx)(t.td,{children:"No"}),(0,r.jsx)(t.td,{children:"nil"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"nifiControllerTemplate"}),(0,r.jsx)(t.td,{children:"string"}),(0,r.jsxs)(t.td,{children:["NifiControllerTemplate specifies the template to be used when naming the node controller (e.g. %s-mysuffix) ",(0,r.jsx)(t.strong,{children:"Warning: once defined don't change this value either the operator will no longer be able to manage the cluster"})]}),(0,r.jsx)(t.td,{children:"Yes"}),(0,r.jsx)(t.td,{children:'"%s-controller"'})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"controllerUserIdentity"}),(0,r.jsx)(t.td,{children:"string"}),(0,r.jsxs)(t.td,{children:["ControllerUserIdentity specifies what to call the static admin user's identity ",(0,r.jsx)(t.strong,{children:"Warning: once defined don't change this value either the operator will no longer be able to manage the cluster"})]}),(0,r.jsx)(t.td,{children:"Yes"}),(0,r.jsx)(t.td,{children:"false"})]})]})]}),"\n",(0,r.jsx)(t.h2,{id:"nificlusterstatus",children:"NifiClusterStatus"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Field"}),(0,r.jsx)(t.th,{children:"Type"}),(0,r.jsx)(t.th,{children:"Description"}),(0,r.jsx)(t.th,{children:"Required"}),(0,r.jsx)(t.th,{children:"Default"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"nodesState"}),(0,r.jsxs)(t.td,{children:["map[string]",(0,r.jsx)(t.a,{href:"./5_node_state",children:"NodeState"})]}),(0,r.jsx)(t.td,{children:"Store the state of each nifi node."}),(0,r.jsx)(t.td,{children:"No"}),(0,r.jsx)(t.td,{children:"-"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"State"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.a,{href:"#clusterstate",children:"ClusterState"})}),(0,r.jsx)(t.td,{children:"Store the state of each nifi node."}),(0,r.jsx)(t.td,{children:"Yes"}),(0,r.jsx)(t.td,{children:"-"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"rootProcessGroupId"}),(0,r.jsx)(t.td,{children:"string"}),(0,r.jsx)(t.td,{children:"contains the uuid of the root process group for this cluster."}),(0,r.jsx)(t.td,{children:"No"}),(0,r.jsx)(t.td,{children:"-"})]})]})]}),"\n",(0,r.jsx)(t.h2,{id:"servicepolicy",children:"ServicePolicy"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Field"}),(0,r.jsx)(t.th,{children:"Type"}),(0,r.jsx)(t.th,{children:"Description"}),(0,r.jsx)(t.th,{children:"Required"}),(0,r.jsx)(t.th,{children:"Default"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"headlessEnabled"}),(0,r.jsx)(t.td,{children:"boolean"}),(0,r.jsx)(t.td,{children:"specifies if the cluster should use headlessService for Nifi or individual services using service per nodes may come an handy case of service mesh."}),(0,r.jsx)(t.td,{children:"Yes"}),(0,r.jsx)(t.td,{children:"false"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"serviceTemplate"}),(0,r.jsx)(t.td,{children:"string"}),(0,r.jsx)(t.td,{children:"specifies the template to be used when naming the service."}),(0,r.jsx)(t.td,{children:"Yes"}),(0,r.jsx)(t.td,{children:'If headlessEnabled = true ? "%s-headless" = "%s-all-node"'})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"annotations"}),(0,r.jsx)(t.td,{children:"map[string]string"}),(0,r.jsx)(t.td,{children:"Annotations specifies the annotations to attach to services the NiFiKop operator creates"}),(0,r.jsx)(t.td,{children:"No"}),(0,r.jsx)(t.td,{children:"-"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"labels"}),(0,r.jsx)(t.td,{children:"map[string]string"}),(0,r.jsx)(t.td,{children:"Labels specifies the labels to attach to services the NiFiKop operator creates"}),(0,r.jsx)(t.td,{children:"No"}),(0,r.jsx)(t.td,{children:"-"})]})]})]}),"\n",(0,r.jsx)(t.h2,{id:"podpolicy",children:"PodPolicy"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Field"}),(0,r.jsx)(t.th,{children:"Type"}),(0,r.jsx)(t.th,{children:"Description"}),(0,r.jsx)(t.th,{children:"Required"}),(0,r.jsx)(t.th,{children:"Default"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"annotations"}),(0,r.jsx)(t.td,{children:"map[string]string"}),(0,r.jsx)(t.td,{children:"Annotations specifies the annotations to attach to pods the NiFiKop operator creates"}),(0,r.jsx)(t.td,{children:"No"}),(0,r.jsx)(t.td,{children:"-"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"labels"}),(0,r.jsx)(t.td,{children:"map[string]string"}),(0,r.jsx)(t.td,{children:"Labels specifies the Labels to attach to pods the NiFiKop operator creates"}),(0,r.jsx)(t.td,{children:"No"}),(0,r.jsx)(t.td,{children:"-"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"hostAliases"}),(0,r.jsxs)(t.td,{children:["[\xa0]",(0,r.jsx)(t.a,{href:"https://pkg.go.dev/k8s.io/api/core/v1#HostAlias",children:"HostAlias"})]}),(0,r.jsx)(t.td,{children:"A list of host aliases to include in every pod's /etc/hosts configuration in the scenario where DNS is not available."}),(0,r.jsx)(t.td,{children:"No"}),(0,r.jsx)(t.td,{children:"[\xa0]"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"readinessProbe"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.a,{href:"https://pkg.go.dev/k8s.io/api/core/v1#Probe",children:"Probe"})}),(0,r.jsxs)(t.td,{children:["The readiness probe that the ",(0,r.jsx)(t.code,{children:"Pod"})," is configured with. If not provided, a default will be used."]}),(0,r.jsx)(t.td,{children:"No"}),(0,r.jsx)(t.td,{children:"nil"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"livenessProbe"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.a,{href:"https://pkg.go.dev/k8s.io/api/core/v1#Probe",children:"Probe"})}),(0,r.jsxs)(t.td,{children:["The liveness probe that the ",(0,r.jsx)(t.code,{children:"Pod"})," is configured with. If not provided, a default will be used."]}),(0,r.jsx)(t.td,{children:"No"}),(0,r.jsx)(t.td,{children:"nil"})]})]})]}),"\n",(0,r.jsx)(t.h2,{id:"managedusers",children:"ManagedUsers"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Field"}),(0,r.jsx)(t.th,{children:"Type"}),(0,r.jsx)(t.th,{children:"Description"}),(0,r.jsx)(t.th,{children:"Required"}),(0,r.jsx)(t.th,{children:"Default"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"identity"}),(0,r.jsx)(t.td,{children:"string"}),(0,r.jsx)(t.td,{children:"identity field is use to define the user identity on NiFi cluster side, it use full when the user's name doesn't suite with Kubernetes resource name."}),(0,r.jsx)(t.td,{children:"No"}),(0,r.jsx)(t.td,{children:"-"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"name"}),(0,r.jsx)(t.td,{children:"string"}),(0,r.jsx)(t.td,{children:"name field is use to name the NifiUser resource, if not identity is provided it will be used to name the user on NiFi cluster side."}),(0,r.jsx)(t.td,{children:"Yes"}),(0,r.jsx)(t.td,{children:"-"})]})]})]}),"\n",(0,r.jsx)(t.h2,{id:"disruptionbudget",children:"DisruptionBudget"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Field"}),(0,r.jsx)(t.th,{children:"Type"}),(0,r.jsx)(t.th,{children:"Description"}),(0,r.jsx)(t.th,{children:"Required"}),(0,r.jsx)(t.th,{children:"Default"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"create"}),(0,r.jsx)(t.td,{children:"bool"}),(0,r.jsx)(t.td,{children:"if set to true, will create a podDisruptionBudget."}),(0,r.jsx)(t.td,{children:"No"}),(0,r.jsx)(t.td,{children:"-"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"budget"}),(0,r.jsx)(t.td,{children:"string"}),(0,r.jsx)(t.td,{children:"the budget to set for the PDB, can either be static number or a percentage."}),(0,r.jsx)(t.td,{children:"Yes"}),(0,r.jsx)(t.td,{children:"-"})]})]})]}),"\n",(0,r.jsx)(t.h2,{id:"ldapconfiguration",children:"LdapConfiguration"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Field"}),(0,r.jsx)(t.th,{children:"Type"}),(0,r.jsx)(t.th,{children:"Description"}),(0,r.jsx)(t.th,{children:"Required"}),(0,r.jsx)(t.th,{children:"Default"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"enabled"}),(0,r.jsx)(t.td,{children:"boolean"}),(0,r.jsx)(t.td,{children:"if set to true, we will enable ldap usage into nifi.properties configuration."}),(0,r.jsx)(t.td,{children:"No"}),(0,r.jsx)(t.td,{children:"false"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"url"}),(0,r.jsx)(t.td,{children:"string"}),(0,r.jsx)(t.td,{children:"space-separated list of URLs of the LDAP servers (i.e. ldap://${hostname}:${port})."}),(0,r.jsx)(t.td,{children:"No"}),(0,r.jsx)(t.td,{children:'""'})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"searchBase"}),(0,r.jsx)(t.td,{children:"string"}),(0,r.jsx)(t.td,{children:"base DN for searching for users (i.e. CN=Users,DC=example,DC=com)."}),(0,r.jsx)(t.td,{children:"No"}),(0,r.jsx)(t.td,{children:'""'})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"searchFilter"}),(0,r.jsx)(t.td,{children:"string"}),(0,r.jsxs)(t.td,{children:["Filter for searching for users against the 'User Search Base'. (i.e. sAMAccountName=",0,"). The user specified name is inserted into '",0,"'."]}),(0,r.jsx)(t.td,{children:"No"}),(0,r.jsx)(t.td,{children:'""'})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"authenticationStrategy"}),(0,r.jsx)(t.td,{children:"string"}),(0,r.jsx)(t.td,{children:"How the connection to the LDAP server is authenticated. Possible values are ANONYMOUS, SIMPLE, LDAPS, or START_TLS."}),(0,r.jsx)(t.td,{children:"No"}),(0,r.jsx)(t.td,{children:"START_TLS"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"managerDn"}),(0,r.jsx)(t.td,{children:"string"}),(0,r.jsx)(t.td,{children:"The DN of the manager that is used to bind to the LDAP server to search for users."}),(0,r.jsx)(t.td,{children:"No"}),(0,r.jsx)(t.td,{children:'""'})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"managerPassword"}),(0,r.jsx)(t.td,{children:"string"}),(0,r.jsx)(t.td,{children:"The password of the manager that is used to bind to the LDAP server to search for users."}),(0,r.jsx)(t.td,{children:"No"}),(0,r.jsx)(t.td,{children:'""'})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"tlsKeystore"}),(0,r.jsx)(t.td,{children:"string"}),(0,r.jsx)(t.td,{children:"Path to the Keystore that is used when connecting to LDAP using LDAPS or START_TLS. Not required for LDAPS. Only used for mutual TLS"}),(0,r.jsx)(t.td,{children:"No"}),(0,r.jsx)(t.td,{children:'""'})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"tlsKeystorePassword"}),(0,r.jsx)(t.td,{children:"string"}),(0,r.jsx)(t.td,{children:"Password for the Keystore that is used when connecting to LDAP using LDAPS or START_TLS."}),(0,r.jsx)(t.td,{children:"No"}),(0,r.jsx)(t.td,{children:'""'})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"tlsKeystoreType"}),(0,r.jsx)(t.td,{children:"string"}),(0,r.jsx)(t.td,{children:"Type of the Keystore that is used when connecting to LDAP using LDAPS or START_TLS (i.e. JKS or PKCS12)."}),(0,r.jsx)(t.td,{children:"No"}),(0,r.jsx)(t.td,{children:'""'})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"tlsTruststore"}),(0,r.jsx)(t.td,{children:"string"}),(0,r.jsx)(t.td,{children:"Path to the Truststore that is used when connecting to LDAP using LDAPS or START_TLS. Required for LDAPS"}),(0,r.jsx)(t.td,{children:"No"}),(0,r.jsx)(t.td,{children:'""'})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"tlsTruststorePassword"}),(0,r.jsx)(t.td,{children:"string"}),(0,r.jsx)(t.td,{children:"Password for the Truststore that is used when connecting to LDAP using LDAPS or START_TLS."}),(0,r.jsx)(t.td,{children:"No"}),(0,r.jsx)(t.td,{children:'""'})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"tlsTruststoreType"}),(0,r.jsx)(t.td,{children:"string"}),(0,r.jsx)(t.td,{children:"Type of the Truststore that is used when connecting to LDAP using LDAPS or START_TLS (i.e. JKS or PKCS12)."}),(0,r.jsx)(t.td,{children:"No"}),(0,r.jsx)(t.td,{children:'""'})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"clientAuth"}),(0,r.jsx)(t.td,{children:"string"}),(0,r.jsx)(t.td,{children:"Client authentication policy when connecting to LDAP using LDAPS or START_TLS. Possible values are REQUIRED, WANT, NONE."}),(0,r.jsx)(t.td,{children:"No"}),(0,r.jsx)(t.td,{children:'""'})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"protocol"}),(0,r.jsx)(t.td,{children:"string"}),(0,r.jsx)(t.td,{children:"Protocol to use when connecting to LDAP using LDAPS or START_TLS. (i.e. TLS, TLSv1.1, TLSv1.2, etc)."}),(0,r.jsx)(t.td,{children:"No"}),(0,r.jsx)(t.td,{children:'""'})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"shutdownGracefully"}),(0,r.jsx)(t.td,{children:"string"}),(0,r.jsx)(t.td,{children:"Specifies whether the TLS should be shut down gracefully before the target context is closed. Defaults to false."}),(0,r.jsx)(t.td,{children:"No"}),(0,r.jsx)(t.td,{children:'""'})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"referralStrategy"}),(0,r.jsx)(t.td,{children:"string"}),(0,r.jsx)(t.td,{children:"Strategy for handling referrals. Possible values are FOLLOW, IGNORE, THROW."}),(0,r.jsx)(t.td,{children:"No"}),(0,r.jsx)(t.td,{children:"FOLLOW"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"identityStrategy"}),(0,r.jsx)(t.td,{children:"string"}),(0,r.jsx)(t.td,{children:"Strategy to identify users. Possible values are USE_DN and USE_USERNAME."}),(0,r.jsx)(t.td,{children:"No"}),(0,r.jsx)(t.td,{children:"USE_DN"})]})]})]}),"\n",(0,r.jsx)(t.h2,{id:"singleuserconfiguration",children:"SingleUserConfiguration"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Field"}),(0,r.jsx)(t.th,{children:"Type"}),(0,r.jsx)(t.th,{children:"Description"}),(0,r.jsx)(t.th,{children:"Required"}),(0,r.jsx)(t.th,{children:"Default"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"enabled"}),(0,r.jsx)(t.td,{children:"boolean"}),(0,r.jsx)(t.td,{children:"specifies whether or not the cluster should use single user authentication for Nifi"}),(0,r.jsx)(t.td,{children:"No"}),(0,r.jsx)(t.td,{children:"false"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"authorizerEnabled"}),(0,r.jsx)(t.td,{children:"boolean"}),(0,r.jsx)(t.td,{children:"specifies if the cluster should use use the single-user-authorizer instead of the managed-authorizer (if enabled, the creation of users and user groups will not work in NiFi, and the single user will have no rights by default.)"}),(0,r.jsx)(t.td,{children:"No"}),(0,r.jsx)(t.td,{children:"true"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"secretRef"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.a,{href:"../4_nifi_parameter_context#secretreference",children:"SecretReference"})}),(0,r.jsx)(t.td,{children:"references the secret containing the informations required to authentiticate to the cluster"}),(0,r.jsx)(t.td,{children:"No"}),(0,r.jsx)(t.td,{children:"nil"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"secretKeys"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.a,{href:"#usersecretkeys",children:"UserSecretKeys"})}),(0,r.jsx)(t.td,{children:"references the keys from the secret containing the user name and password."}),(0,r.jsx)(t.td,{children:"No"}),(0,r.jsx)(t.td,{children:'{username:"username", password:"password"}'})]})]})]}),"\n",(0,r.jsx)(t.h2,{id:"nificlustertaskspec",children:"NifiClusterTaskSpec"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Field"}),(0,r.jsx)(t.th,{children:"Type"}),(0,r.jsx)(t.th,{children:"Description"}),(0,r.jsx)(t.th,{children:"Required"}),(0,r.jsx)(t.th,{children:"Default"})]})}),(0,r.jsx)(t.tbody,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"retryDurationMinutes"}),(0,r.jsx)(t.td,{children:"int"}),(0,r.jsx)(t.td,{children:"describes the time the operator waits before going back and retrying a cluster task, which can be: scale up, scale down, rolling upgrade.."}),(0,r.jsx)(t.td,{children:"Yes"}),(0,r.jsx)(t.td,{children:"5"})]})})]}),"\n",(0,r.jsx)(t.h2,{id:"clusterstate",children:"ClusterState"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Name"}),(0,r.jsx)(t.th,{children:"Value"}),(0,r.jsx)(t.th,{children:"Description"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"NifiClusterInitializing"}),(0,r.jsx)(t.td,{children:"ClusterInitializing"}),(0,r.jsx)(t.td,{children:"states that the cluster is still in initializing stage"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"NifiClusterInitialized"}),(0,r.jsx)(t.td,{children:"ClusterInitialized"}),(0,r.jsx)(t.td,{children:"states that the cluster is initialized"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"NifiClusterReconciling"}),(0,r.jsx)(t.td,{children:"ClusterReconciling"}),(0,r.jsx)(t.td,{children:"states that the cluster is still in reconciling stage"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"NifiClusterRollingUpgrading"}),(0,r.jsx)(t.td,{children:"ClusterRollingUpgrading"}),(0,r.jsx)(t.td,{children:"states that the cluster is rolling upgrading"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"NifiClusterRunning"}),(0,r.jsx)(t.td,{children:"ClusterRunning"}),(0,r.jsx)(t.td,{children:"states that the cluster is in running state"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"NifiClusterNoNodes"}),(0,r.jsx)(t.td,{children:"NifiClusterNoNodes"}),(0,r.jsx)(t.td,{children:"states that the cluster has no nodes"})]})]})]}),"\n",(0,r.jsx)(t.h2,{id:"usersecretkeys",children:"UserSecretKeys"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Field"}),(0,r.jsx)(t.th,{children:"Type"}),(0,r.jsx)(t.th,{children:"Description"}),(0,r.jsx)(t.th,{children:"Required"}),(0,r.jsx)(t.th,{children:"Default"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"username"}),(0,r.jsx)(t.td,{children:"string"}),(0,r.jsx)(t.td,{children:"specifies he name of the secret key to retrieve the user name."}),(0,r.jsx)(t.td,{children:"No"}),(0,r.jsx)(t.td,{children:"username"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"password"}),(0,r.jsx)(t.td,{children:"string"}),(0,r.jsx)(t.td,{children:"specifies he name of the secret key to retrieve the user password."}),(0,r.jsx)(t.td,{children:"No"}),(0,r.jsx)(t.td,{children:"password"})]})]})]})]})}function a(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(o,{...e})}):o(e)}},43023:(e,t,s)=>{s.d(t,{R:()=>d,x:()=>l});var i=s(63696);const r={},n=i.createContext(r);function d(e){const t=i.useContext(n);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:d(e.components),i.createElement(n.Provider,{value:t},e.children)}}}]);