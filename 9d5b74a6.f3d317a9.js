(window.webpackJsonp=window.webpackJsonp||[]).push([[291],{358:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return b})),n.d(t,"default",(function(){return d}));var a=n(2),r=n(6),i=(n(0),n(563)),o=["components"],l={id:"3_node_config",title:"Node configuration",sidebar_label:"Node configuration"},c={unversionedId:"5_references/1_nifi_cluster/3_node_config",id:"5_references/1_nifi_cluster/3_node_config",isDocsHomePage:!1,title:"Node configuration",description:"NodeConfig defines the node configuration",source:"@site/../docs/5_references/1_nifi_cluster/3_node_config.md",slug:"/5_references/1_nifi_cluster/3_node_config",permalink:"/nifikop/docs/next/5_references/1_nifi_cluster/3_node_config",editUrl:"https://github.com/konpyutaika/nifikop/edit/master/site/website/../docs/5_references/1_nifi_cluster/3_node_config.md",version:"current",lastUpdatedBy:"Cannon Palms",lastUpdatedAt:1652123774,sidebar_label:"Node configuration",sidebar:"docs",previous:{title:"Read only configurations",permalink:"/nifikop/docs/next/5_references/1_nifi_cluster/2_read_only_config"},next:{title:"Node",permalink:"/nifikop/docs/next/5_references/1_nifi_cluster/4_node"}},b=[{value:"NodeConfig",id:"nodeconfig",children:[]},{value:"StorageConfig",id:"storageconfig",children:[]},{value:"ExternalVolumeConfig",id:"externalvolumeconfig",children:[]},{value:"Metadata",id:"metadata",children:[]}],p={rightToc:b};function d(e){var t=e.components,n=Object(r.a)(e,o);return Object(i.b)("wrapper",Object(a.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"NodeConfig defines the node configuration"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-yaml"},'   default_group:\n      # provenanceStorage allow to specify the maximum amount of data provenance information to store at a time\n      # https://nifi.apache.org/docs/nifi-docs/html/administration-guide.html#write-ahead-provenance-repository-properties\n      provenanceStorage: "10 GB"\n      #RunAsUser define the id of the user to run in the Nifi image\n      # +kubebuilder:validation:Minimum=1\n      runAsUser: 1000\n      # Set this to true if the instance is a node in a cluster.\n      # https://nifi.apache.org/docs/nifi-docs/html/administration-guide.html#basic-cluster-setup\n      isNode: true\n      # Additionnal metadata to merge to the pod associated\n      podMetadata:\n        annotations:\n          node-annotation: "node-annotation-value"\n        labels:\n          node-label: "node-label-value"\n      # Docker image used by the operator to create the node associated\n      # https://hub.docker.com/r/apache/nifi/\n#      image: "apache/nifi:1.11.2"\n      # nodeAffinity can be specified, operator populates this value if new pvc added later to node\n      # https://kubernetes.io/docs/concepts/configuration/assign-pod-node/#node-affinity\n#      nodeAffinity:\n      # imagePullPolicy define the pull policy for NiFi cluster docker image\n      imagePullPolicy: IfNotPresent\n      # priorityClassName define the name of the priority class to be applied to these nodes\n      priorityClassName: "example-priority-class-name"\n      # externalVolumeConfigs specifies a list of volume to mount into the main container.\n      externalVolumeConfigs:\n        - name: example-volume\n          mountPath: "/opt/nifi/example"\n          secret:\n            secretName: "raw-controller"\n      # storageConfigs specifies the node related configs\n      storageConfigs:\n        # Name of the storage config, used to name PV to reuse into sidecars for example.\n        - name: provenance-repository\n          # Path where the volume will be mount into the main nifi container inside the pod.\n          mountPath: "/opt/nifi/provenance_repository"\n          # Kubernetes PVC spec\n          # https://kubernetes.io/docs/tasks/configure-pod-container/configure-persistent-volume-storage/#create-a-persistentvolumeclaim\n          pvcSpec:\n            accessModes:\n              - ReadWriteOnce\n            storageClassName: "standard"\n            resources:\n              requests:\n                storage: 10Gi\n        - mountPath: "/opt/nifi/nifi-current/logs"\n          name: logs\n          pvcSpec:\n            accessModes:\n              - ReadWriteOnce\n            storageClassName: "standard"\n            resources:\n              requests:\n                storage: 10Gi\n')),Object(i.b)("h2",{id:"nodeconfig"},"NodeConfig"),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",{parentName:"tr",align:null},"Field"),Object(i.b)("th",{parentName:"tr",align:null},"Type"),Object(i.b)("th",{parentName:"tr",align:null},"Description"),Object(i.b)("th",{parentName:"tr",align:null},"Required"),Object(i.b)("th",{parentName:"tr",align:null},"Default"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"provenanceStorage"),Object(i.b)("td",{parentName:"tr",align:null},"string"),Object(i.b)("td",{parentName:"tr",align:null},"provenanceStorage allow to specify the maximum amount of data provenance information to store at a time: ",Object(i.b)("a",{parentName:"td",href:"https://nifi.apache.org/docs/nifi-docs/html/administration-guide.html#write-ahead-provenance-repository-properties"},"write-ahead-provenance-repository-properties")),Object(i.b)("td",{parentName:"tr",align:null},"No"),Object(i.b)("td",{parentName:"tr",align:null},'"8 GB"')),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"runAsUser"),Object(i.b)("td",{parentName:"tr",align:null},"int64"),Object(i.b)("td",{parentName:"tr",align:null},"define the id of the user to run in the Nifi image"),Object(i.b)("td",{parentName:"tr",align:null},"No"),Object(i.b)("td",{parentName:"tr",align:null},"1000")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"fsGroup"),Object(i.b)("td",{parentName:"tr",align:null},"int64"),Object(i.b)("td",{parentName:"tr",align:null},"define the id of the group for each volumes in Nifi image"),Object(i.b)("td",{parentName:"tr",align:null},"No"),Object(i.b)("td",{parentName:"tr",align:null},"1000")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"isNode"),Object(i.b)("td",{parentName:"tr",align:null},"boolean"),Object(i.b)("td",{parentName:"tr",align:null},"Set this to true if the instance is a node in a cluster: ",Object(i.b)("a",{parentName:"td",href:"https://nifi.apache.org/docs/nifi-docs/html/administration-guide.html#basic-cluster-setup"},"basic-cluster-setup")),Object(i.b)("td",{parentName:"tr",align:null},"No"),Object(i.b)("td",{parentName:"tr",align:null},"true")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"image"),Object(i.b)("td",{parentName:"tr",align:null},"string"),Object(i.b)("td",{parentName:"tr",align:null},"Docker image used by the operator to create the node associated. ",Object(i.b)("a",{parentName:"td",href:"https://hub.docker.com/r/apache/nifi/"},"Nifi docker registry")),Object(i.b)("td",{parentName:"tr",align:null},"No"),Object(i.b)("td",{parentName:"tr",align:null},'""')),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"imagePullPolicy"),Object(i.b)("td",{parentName:"tr",align:null},Object(i.b)("a",{parentName:"td",href:"https://godoc.org/k8s.io/api/core/v1#PullPolicy"},"PullPolicy")),Object(i.b)("td",{parentName:"tr",align:null},"define the pull policy for NiFi cluster docker image.)"),Object(i.b)("td",{parentName:"tr",align:null},"No"),Object(i.b)("td",{parentName:"tr",align:null},'""')),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"nodeAffinity"),Object(i.b)("td",{parentName:"tr",align:null},"string"),Object(i.b)("td",{parentName:"tr",align:null},"operator populates this value if new pvc added later to node ",Object(i.b)("a",{parentName:"td",href:"https://kubernetes.io/docs/concepts/configuration/assign-pod-node/#node-affinity"},"node-affinity")),Object(i.b)("td",{parentName:"tr",align:null},"No"),Object(i.b)("td",{parentName:"tr",align:null},"nil")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"storageConfigs"),Object(i.b)("td",{parentName:"tr",align:null},"[","  ","]",Object(i.b)("a",{parentName:"td",href:"#storageconfig"},"StorageConfig")),Object(i.b)("td",{parentName:"tr",align:null},"specifies the node related configs."),Object(i.b)("td",{parentName:"tr",align:null},"No"),Object(i.b)("td",{parentName:"tr",align:null},"nil")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"externalVolumeConfigs"),Object(i.b)("td",{parentName:"tr",align:null},"[","  ","]",Object(i.b)("a",{parentName:"td",href:"#externalvolumeconfig"},"ExternalVolumeConfig")),Object(i.b)("td",{parentName:"tr",align:null},"specifies a list of volume to mount into the main container."),Object(i.b)("td",{parentName:"tr",align:null},"No"),Object(i.b)("td",{parentName:"tr",align:null},"nil")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"serviceAccountName"),Object(i.b)("td",{parentName:"tr",align:null},"string"),Object(i.b)("td",{parentName:"tr",align:null},"specifies the serviceAccount used for this specific node."),Object(i.b)("td",{parentName:"tr",align:null},"No"),Object(i.b)("td",{parentName:"tr",align:null},'"default"')),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"resourcesRequirements"),Object(i.b)("td",{parentName:"tr",align:null},Object(i.b)("a",{parentName:"td",href:"https://godoc.org/k8s.io/api/core/v1#ResourceRequirements"},"ResourceRequirements")),Object(i.b)("td",{parentName:"tr",align:null},"works exactly like Container resources, the user can specify the limit and the requests through this property ",Object(i.b)("a",{parentName:"td",href:"https://kubernetes.io/docs/concepts/configuration/manage-compute-resources-container/"},"manage-compute-resources-container"),"."),Object(i.b)("td",{parentName:"tr",align:null},"No"),Object(i.b)("td",{parentName:"tr",align:null},"nil")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"imagePullSecrets"),Object(i.b)("td",{parentName:"tr",align:null},"[","  ","]",Object(i.b)("a",{parentName:"td",href:"https://godoc.org/k8s.io/api/core/v1#TypedLocalObjectReference"},"LocalObjectReference")),Object(i.b)("td",{parentName:"tr",align:null},"specifies the secret to use when using private registry."),Object(i.b)("td",{parentName:"tr",align:null},"No"),Object(i.b)("td",{parentName:"tr",align:null},"nil")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"nodeSelector"),Object(i.b)("td",{parentName:"tr",align:null},"map","[","string","]","string"),Object(i.b)("td",{parentName:"tr",align:null},"nodeSelector can be specified, which set the pod to fit on a node ",Object(i.b)("a",{parentName:"td",href:"https://kubernetes.io/docs/concepts/configuration/assign-pod-node/#nodeselector"},"nodeselector")),Object(i.b)("td",{parentName:"tr",align:null},"No"),Object(i.b)("td",{parentName:"tr",align:null},"nil")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"tolerations"),Object(i.b)("td",{parentName:"tr",align:null},"[","  ","]",Object(i.b)("a",{parentName:"td",href:"https://godoc.org/k8s.io/api/core/v1#Toleration"},"Toleration")),Object(i.b)("td",{parentName:"tr",align:null},"tolerations can be specified, which set the pod's tolerations ",Object(i.b)("a",{parentName:"td",href:"https://kubernetes.io/docs/concepts/configuration/taint-and-toleration/#concepts"},"taint-and-toleration"),"."),Object(i.b)("td",{parentName:"tr",align:null},"No"),Object(i.b)("td",{parentName:"tr",align:null},"nil")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"podMetadata"),Object(i.b)("td",{parentName:"tr",align:null},Object(i.b)("a",{parentName:"td",href:"#metadata"},"Metadata")),Object(i.b)("td",{parentName:"tr",align:null},"define additionnal metadata to merge to the pod associated."),Object(i.b)("td",{parentName:"tr",align:null},"No"),Object(i.b)("td",{parentName:"tr",align:null},"nil")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"priorityClassName"),Object(i.b)("td",{parentName:"tr",align:null},"string"),Object(i.b)("td",{parentName:"tr",align:null},"Specify the name of the priority class to apply to pods created with this node config"),Object(i.b)("td",{parentName:"tr",align:null},"No"),Object(i.b)("td",{parentName:"tr",align:null},"nil")))),Object(i.b)("h2",{id:"storageconfig"},"StorageConfig"),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",{parentName:"tr",align:null},"Field"),Object(i.b)("th",{parentName:"tr",align:null},"Type"),Object(i.b)("th",{parentName:"tr",align:null},"Description"),Object(i.b)("th",{parentName:"tr",align:null},"Required"),Object(i.b)("th",{parentName:"tr",align:null},"Default"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"name"),Object(i.b)("td",{parentName:"tr",align:null},"string"),Object(i.b)("td",{parentName:"tr",align:null},"Name of the storage config, used to name PV to reuse into sidecars for example."),Object(i.b)("td",{parentName:"tr",align:null},"Yes"),Object(i.b)("td",{parentName:"tr",align:null},"-")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"mountPath"),Object(i.b)("td",{parentName:"tr",align:null},"string"),Object(i.b)("td",{parentName:"tr",align:null},"Path where the volume will be mount into the main nifi container inside the pod."),Object(i.b)("td",{parentName:"tr",align:null},"Yes"),Object(i.b)("td",{parentName:"tr",align:null},"-")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"pvcSpec"),Object(i.b)("td",{parentName:"tr",align:null},Object(i.b)("a",{parentName:"td",href:"https://godoc.org/k8s.io/api/core/v1#PersistentVolumeClaimSpec"},"PersistentVolumeClaimSpec")),Object(i.b)("td",{parentName:"tr",align:null},"Kubernetes PVC spec. ",Object(i.b)("a",{parentName:"td",href:"https://kubernetes.io/docs/tasks/configure-pod-container/configure-persistent-volume-storage/#create-a-persistentvolumeclaim"},"create-a-persistentvolumeclaim"),"."),Object(i.b)("td",{parentName:"tr",align:null},"Yes"),Object(i.b)("td",{parentName:"tr",align:null},"-")))),Object(i.b)("h2",{id:"externalvolumeconfig"},"ExternalVolumeConfig"),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",{parentName:"tr",align:null},"Field"),Object(i.b)("th",{parentName:"tr",align:null},"Type"),Object(i.b)("th",{parentName:"tr",align:null},"Description"),Object(i.b)("th",{parentName:"tr",align:null},"Required"),Object(i.b)("th",{parentName:"tr",align:null},"Default"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null}),Object(i.b)("td",{parentName:"tr",align:null},Object(i.b)("a",{parentName:"td",href:"https://pkg.go.dev/k8s.io/api/core/v1#VolumeMount"},"VolueMount")),Object(i.b)("td",{parentName:"tr",align:null},"describes a mounting of a Volume within a container."),Object(i.b)("td",{parentName:"tr",align:null},"Yes"),Object(i.b)("td",{parentName:"tr",align:null},"-")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null}),Object(i.b)("td",{parentName:"tr",align:null},Object(i.b)("a",{parentName:"td",href:"https://pkg.go.dev/k8s.io/api/core/v1#VolumeSource"},"VolumeSource")),Object(i.b)("td",{parentName:"tr",align:null},"VolumeSource represents the location and type of the mounted volume."),Object(i.b)("td",{parentName:"tr",align:null},"Yes"),Object(i.b)("td",{parentName:"tr",align:null},"-")))),Object(i.b)("h2",{id:"metadata"},"Metadata"),Object(i.b)("p",null,"| annotations | map","[","string","]","string | Additionnal annotation to merge to the pod associated ",Object(i.b)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/#syntax-and-character-set"},"annotations"),". |No|nil|\n| nodeLabels  | map","[","string","]","string | Additionnal labels to merge to the pod associated ",Object(i.b)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/#syntax-and-character-set"},"labels"),".               |No|nil|"))}d.isMDXComponent=!0},563:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return m}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var b=r.a.createContext({}),p=function(e){var t=r.a.useContext(b),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=p(e.components);return r.a.createElement(b.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,b=c(e,["components","mdxType","originalType","parentName"]),d=p(n),u=a,m=d["".concat(o,".").concat(u)]||d[u]||s[u]||i;return n?r.a.createElement(m,l(l({ref:t},b),{},{components:n})):r.a.createElement(m,l({ref:t},b))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=u;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var b=2;b<i;b++)o[b]=n[b];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);