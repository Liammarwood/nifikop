"use strict";(self.webpackChunkreact_native_website=self.webpackChunkreact_native_website||[]).push([[68929],{35068:(e,i,s)=>{s.r(i),s.d(i,{assets:()=>c,contentTitle:()=>a,default:()=>u,frontMatter:()=>o,metadata:()=>r,toc:()=>l});var t=s(24246),n=s(71670);const o={id:"3_features",title:"Features",sidebar_label:"Features"},a=void 0,r={id:"1_concepts/3_features",title:"Features",description:"To highligt some of the features we needed and were not possible with the operators available, please keep reading",source:"@site/versioned_docs/version-v1.4.1/1_concepts/3_features.md",sourceDirName:"1_concepts",slug:"/1_concepts/3_features",permalink:"/nifikop/docs/v1.4.1/1_concepts/3_features",draft:!1,unlisted:!1,editUrl:"https://github.com/konpyutaika/nifikop/edit/master/site/website/versioned_docs/version-v1.4.1/1_concepts/3_features.md",tags:[],version:"v1.4.1",lastUpdatedBy:"Juldrixx",lastUpdatedAt:1707144987,formattedLastUpdatedAt:"Feb 5, 2024",frontMatter:{id:"3_features",title:"Features",sidebar_label:"Features"},sidebar:"docs",previous:{title:"Design Principles",permalink:"/nifikop/docs/v1.4.1/1_concepts/2_design_principles"},next:{title:"Roadmap",permalink:"/nifikop/docs/v1.4.1/1_concepts/4_roadmap"}},c={},l=[{value:"Fine Grained Node Config Support",id:"fine-grained-node-config-support",level:2},{value:"Graceful NiFi Cluster Scaling",id:"graceful-nifi-cluster-scaling",level:2},{value:"Graceful Rolling Upgrade",id:"graceful-rolling-upgrade",level:2},{value:"Dynamic Configuration Support",id:"dynamic-configuration-support",level:2},{value:"Dataflow lifecycle management via CRD",id:"dataflow-lifecycle-management-via-crd",level:2},{value:"Users and access policies management",id:"users-and-access-policies-management",level:2},{value:"Automatic horizontal NiFi cluster scaling via CRD",id:"automatic-horizontal-nifi-cluster-scaling-via-crd",level:2}];function d(e){const i={a:"a",code:"code",h2:"h2",li:"li",p:"p",strong:"strong",ul:"ul",...(0,n.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(i.p,{children:"To highligt some of the features we needed and were not possible with the operators available, please keep reading"}),"\n",(0,t.jsx)(i.h2,{id:"fine-grained-node-config-support",children:"Fine Grained Node Config Support"}),"\n",(0,t.jsxs)(i.p,{children:["We needed to be able to react to events in a fine-grained way for each Node - and not in the limited way StatefulSet does (which, for example, removes the most recently created Nodes). Some of the available solutions try to overcome these deficits by placing scripts inside the container to generate configs at runtime (a good example is our ",(0,t.jsx)(i.a,{href:"https://github.com/Orange-OpenSource/casskop",children:"Cassandra Operator"}),"), whereas the Orange NiFi operator's configurations are deterministically placed in specific Configmaps."]}),"\n",(0,t.jsx)(i.h2,{id:"graceful-nifi-cluster-scaling",children:"Graceful NiFi Cluster Scaling"}),"\n",(0,t.jsxs)(i.p,{children:["Apache NiFi is a good candidate to create an operator, because everything is made to orchestrate it through REST Api calls. With this comes automation of actions such as scaling, following all required steps: ",(0,t.jsx)(i.a,{href:"https://nifi.apache.org/docs/nifi-docs/html/administration-guide.html#decommission-nodes",children:"https://nifi.apache.org/docs/nifi-docs/html/administration-guide.html#decommission-nodes"}),"."]}),"\n",(0,t.jsx)(i.h2,{id:"graceful-rolling-upgrade",children:"Graceful Rolling Upgrade"}),"\n",(0,t.jsx)(i.p,{children:"Operator supports graceful rolling upgrade. It means the operator will check if the cluster is healthy."}),"\n",(0,t.jsx)(i.h2,{id:"dynamic-configuration-support",children:"Dynamic Configuration Support"}),"\n",(0,t.jsx)(i.p,{children:"NiFi operates with two type of configs:"}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsx)(i.li,{children:"Read-only"}),"\n",(0,t.jsx)(i.li,{children:"PerNode"}),"\n"]}),"\n",(0,t.jsx)(i.p,{children:"Read only config requires node restart to update all the others may be updated dynamically.\nOperator CRD distinguishes these fields, and proceed with the right action. It can be a rolling upgrade, or\na dynamic reconfiguration."}),"\n",(0,t.jsx)(i.h2,{id:"dataflow-lifecycle-management-via-crd",children:"Dataflow lifecycle management via CRD"}),"\n",(0,t.jsx)(i.p,{children:"In a cloud native approach, we are looking for important management features, which we have applied to NiFi Dataflow:"}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.strong,{children:"Automated deployment:"})," Based on the NiFi registry, you can describe your ",(0,t.jsx)(i.code,{children:"NiFiDataflow"})," resource that will be deployed and run on the targeted NiFi cluster."]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.strong,{children:"Portability:"})," On kubernetes everything is a yaml file, so with NiFiKop we give you the ability to describe your clusters but also the ",(0,t.jsx)(i.code,{children:"registry clients"}),", ",(0,t.jsx)(i.code,{children:"parameter contexts"})," and ",(0,t.jsx)(i.code,{children:"dataflows"})," of your NiFi application, so that you can redeploy the same thing in a different namespace or cluster."]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.strong,{children:"State management:"})," With NiFiKop resources, you can describe what you want, and the operator deals with the NiFi Rest API to make sure the resource stays in sync (even if someone manually makes changes directly on NiFi cluster)."]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.strong,{children:"Configurations:"})," Based on the ",(0,t.jsx)(i.code,{children:"Parameter Contexts"}),", NiFiKop allows you to associate to your ",(0,t.jsx)(i.code,{children:"Dataflow"})," (= your applications) with a different configuration depending on the environment !"]}),"\n"]}),"\n",(0,t.jsx)(i.h2,{id:"users-and-access-policies-management",children:"Users and access policies management"}),"\n",(0,t.jsx)(i.p,{children:"Without the management of users and access policies associated, it was not possible to have a fully automated NiFi cluster setup due to:"}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.strong,{children:"Node scaling:"})," when a new node joins the cluster it needs to have some roles like ",(0,t.jsx)(i.code,{children:"proxy user request"}),", ",(0,t.jsx)(i.code,{children:"view data"})," etc., by managing users and access policies we can easily create a user for this node with the right accesses."]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.strong,{children:"Operator admin rights:"})," For the operator to manage efficiently the cluster it needs a lot of rights as ",(0,t.jsx)(i.code,{children:"deploying process groups"}),", ",(0,t.jsx)(i.code,{children:"empty the queues"})," etc., these rights are not available by default when you set a user as ",(0,t.jsx)(i.a,{href:"https://nifi.apache.org/docs/nifi-docs/html/administration-guide.html#initial-admin-identity",children:"InitialAdmin"}),". Once again by giving the ability to define users and access policies we go through this."]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.strong,{children:"User's access:"})," as seen just below we need to define the operator as ",(0,t.jsx)(i.code,{children:"InitialAdmin"}),", in this situation there is no more users that can access to the web UI to manually give access to other users. That's why we extend the ",(0,t.jsx)(i.code,{children:"InitialAdmin"})," concept into the operator, giving the ability to define a list of users as admins."]}),"\n"]}),"\n",(0,t.jsx)(i.p,{children:"In addition to these requirements to have a fully automated and managed cluster, we introduced some useful features:"}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.strong,{children:"User management:"})," using ",(0,t.jsx)(i.code,{children:"NifiUser"})," resource, you are able to create (or bind an existing) user in NiFi cluster and apply some access policies that will be managed and continuously synced by the operator."]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.strong,{children:"Group management:"})," using ",(0,t.jsx)(i.code,{children:"NifiUserGroup"})," resource, you can create groups in NiFi cluster and apply access policies and a list of ",(0,t.jsx)(i.code,{children:"NifiUser"})," that will be managed and continuously synced by the operator."]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.strong,{children:"Default group:"})," As the definition of ",(0,t.jsx)(i.code,{children:"NifiUser"})," and ",(0,t.jsx)(i.code,{children:"NifiUserGroup"})," resources could be heavy for some simple use cases, we also decided to define two default groups that you can feed with a list of users that will be created and managed by the operator (no kubernetes resources to create):","\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.strong,{children:"Admins:"})," a group giving access to everything on the NiFi Cluster,"]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.strong,{children:"Readers:"})," a group giving access as viewer on the NiFi Cluster."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(i.p,{children:"By introducing this feature we are giving you the ability to fully automate your deployment, from the NiFi Cluster to your managed NiFi Dataflow."}),"\n",(0,t.jsx)(i.h2,{id:"automatic-horizontal-nifi-cluster-scaling-via-crd",children:"Automatic horizontal NiFi cluster scaling via CRD"}),"\n",(0,t.jsxs)(i.p,{children:["NiFiKop supports automatically horizontally scaling ",(0,t.jsx)(i.code,{children:"NifiCluster"})," node groups with a ",(0,t.jsx)(i.code,{children:"NifiNodeGroupAutoscaler"})," custom resource."]}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.strong,{children:"Kubernetes native:"})," The ",(0,t.jsx)(i.code,{children:"NifiNodeGroupAutoscaler"})," controller implements the ",(0,t.jsx)(i.a,{href:"https://kubernetes.io/docs/tasks/extend-kubernetes/custom-resources/custom-resource-definitions/#scale-subresource",children:"Kubernetes scale subresource"})," and creates a Kubernetes ",(0,t.jsx)(i.a,{href:"https://kubernetes.io/docs/tasks/run-application/horizontal-pod-autoscale/",children:(0,t.jsx)(i.code,{children:"HorizontalPodAutoscaler"})})," to automatically scale the pods that NiFiKop creates for ",(0,t.jsx)(i.code,{children:"NifiCluster"})," deployments."]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.strong,{children:"Metrics-driven autoscaling:"})," The ",(0,t.jsx)(i.code,{children:"HorizontalPodAutoscaler"})," can be driven by pod usage metrics (e.g. RAM, CPU) or through NiFi application metrics scraped by Prometheus."]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.strong,{children:"Flexible NifiCluster node group autoscaling:"})," The ",(0,t.jsx)(i.code,{children:"NifiNodeGroupAutoscaler"})," scales specific node groups in your ",(0,t.jsx)(i.code,{children:"NifiCluster"})," and you may have as many autoscalers as you like per ",(0,t.jsx)(i.code,{children:"NifiCluster"})," deployment. For example, a ",(0,t.jsx)(i.code,{children:"NifiNodeGroupAutoscaler"})," may manage high-memory or high-cpu sets of nodes for volume burst scenarios or it may manage every node in your cluster."]}),"\n"]}),"\n",(0,t.jsxs)(i.p,{children:["Through this set of features, you may elect to have NiFiKop configure automatic horizontal autoscaling for any subset of nodes in your ",(0,t.jsx)(i.code,{children:"NifiCluster"})," deployment."]})]})}function u(e={}){const{wrapper:i}={...(0,n.a)(),...e.components};return i?(0,t.jsx)(i,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},71670:(e,i,s)=>{s.d(i,{Z:()=>r,a:()=>a});var t=s(27378);const n={},o=t.createContext(n);function a(e){const i=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function r(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:a(e.components),t.createElement(o.Provider,{value:i},e.children)}}}]);