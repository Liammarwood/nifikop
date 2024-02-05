"use strict";(self.webpackChunkreact_native_website=self.webpackChunkreact_native_website||[]).push([[70504],{4591:(e,s,i)=>{i.r(s),i.d(s,{assets:()=>l,contentTitle:()=>n,default:()=>a,frontMatter:()=>c,metadata:()=>d,toc:()=>h});var t=i(24246),r=i(71670);const c={id:"2_nifi_user",title:"NiFi User",sidebar_label:"NiFi User"},n=void 0,d={id:"5_references/2_nifi_user",title:"NiFi User",description:"NifiUser is the Schema for the nifi users API.",source:"@site/versioned_docs/version-v1.0.0/5_references/2_nifi_user.md",sourceDirName:"5_references",slug:"/5_references/2_nifi_user",permalink:"/nifikop/docs/v1.0.0/5_references/2_nifi_user",draft:!1,unlisted:!1,editUrl:"https://github.com/konpyutaika/nifikop/edit/master/site/website/versioned_docs/version-v1.0.0/5_references/2_nifi_user.md",tags:[],version:"v1.0.0",lastUpdatedBy:"Juldrixx",lastUpdatedAt:1707144987,formattedLastUpdatedAt:"Feb 5, 2024",frontMatter:{id:"2_nifi_user",title:"NiFi User",sidebar_label:"NiFi User"},sidebar:"docs",previous:{title:"External Service Config",permalink:"/nifikop/docs/v1.0.0/5_references/1_nifi_cluster/7_external_service_config"},next:{title:"NiFi Registry Client",permalink:"/nifikop/docs/v1.0.0/5_references/3_nifi_registry_client"}},l={},h=[{value:"NifiUser",id:"nifiuser",level:2},{value:"NifiUserSpec",id:"nifiuserspec",level:2},{value:"NifiUserStatus",id:"nifiuserstatus",level:2},{value:"ClusterReference",id:"clusterreference",level:2},{value:"AccessPolicy",id:"accesspolicy",level:2},{value:"AccessPolicyType",id:"accesspolicytype",level:2},{value:"AccessPolicyAction",id:"accesspolicyaction",level:2},{value:"AccessPolicyResource",id:"accesspolicyresource",level:2}];function o(e){const s={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.code,{children:"NifiUser"})," is the Schema for the nifi users API."]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-yaml",children:"apiVersion: nifi.konpyutaika.com/v1\nkind: NifiUser\nmetadata:\n  name: aguitton\nspec:\n  identity: alexandre.guitton@konpyutaika.com\n  clusterRef:\n    name: nc\n    namespace: nifikop\n  createCert: false\n"})}),"\n",(0,t.jsx)(s.h2,{id:"nifiuser",children:"NifiUser"}),"\n",(0,t.jsxs)(s.table,{children:[(0,t.jsx)(s.thead,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.th,{children:"Field"}),(0,t.jsx)(s.th,{children:"Type"}),(0,t.jsx)(s.th,{children:"Description"}),(0,t.jsx)(s.th,{children:"Required"}),(0,t.jsx)(s.th,{children:"Default"})]})}),(0,t.jsxs)(s.tbody,{children:[(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"metadata"}),(0,t.jsx)(s.td,{children:(0,t.jsx)(s.a,{href:"https://godoc.org/k8s.io/apimachinery/pkg/apis/meta/v1#ObjectMeta",children:"ObjectMetadata"})}),(0,t.jsx)(s.td,{children:"is metadata that all persisted resources must have, which includes all objects users must create."}),(0,t.jsx)(s.td,{children:"No"}),(0,t.jsx)(s.td,{children:"nil"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"spec"}),(0,t.jsx)(s.td,{children:(0,t.jsx)(s.a,{href:"#nifiuserspec",children:"NifiUserSpec"})}),(0,t.jsx)(s.td,{children:"defines the desired state of NifiUser."}),(0,t.jsx)(s.td,{children:"No"}),(0,t.jsx)(s.td,{children:"nil"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"status"}),(0,t.jsx)(s.td,{children:(0,t.jsx)(s.a,{href:"#nifiuserstatus",children:"NifiUserStatus"})}),(0,t.jsx)(s.td,{children:"defines the observed state of NifiUser."}),(0,t.jsx)(s.td,{children:"No"}),(0,t.jsx)(s.td,{children:"nil"})]})]})]}),"\n",(0,t.jsx)(s.h2,{id:"nifiuserspec",children:"NifiUserSpec"}),"\n",(0,t.jsxs)(s.table,{children:[(0,t.jsx)(s.thead,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.th,{children:"Field"}),(0,t.jsx)(s.th,{children:"Type"}),(0,t.jsx)(s.th,{children:"Description"}),(0,t.jsx)(s.th,{children:"Required"}),(0,t.jsx)(s.th,{children:"Default"})]})}),(0,t.jsxs)(s.tbody,{children:[(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"identity"}),(0,t.jsx)(s.td,{children:"string"}),(0,t.jsx)(s.td,{children:"used to define the user identity on NiFi cluster side, when the user's name doesn't suit with Kubernetes resource name."}),(0,t.jsx)(s.td,{children:"No"}),(0,t.jsx)(s.td,{children:"-"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"secretName"}),(0,t.jsx)(s.td,{children:"string"}),(0,t.jsx)(s.td,{children:"name of the secret where all cert resources will be stored."}),(0,t.jsx)(s.td,{children:"No"}),(0,t.jsx)(s.td,{children:"-"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"clusterRef"}),(0,t.jsx)(s.td,{children:(0,t.jsx)(s.a,{href:"#clusterreference",children:"ClusterReference"})}),(0,t.jsx)(s.td,{children:"contains the reference to the NifiCluster with the one the user is linked."}),(0,t.jsx)(s.td,{children:"Yes"}),(0,t.jsx)(s.td,{children:"-"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"DNSNames"}),(0,t.jsx)(s.td,{children:"[\xa0]string"}),(0,t.jsx)(s.td,{children:"list of DNSNames that the user will used to request the NifiCluster (allowing to create the right certificates associated)."}),(0,t.jsx)(s.td,{children:"Yes"}),(0,t.jsx)(s.td,{children:"-"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"includeJKS"}),(0,t.jsx)(s.td,{children:"boolean"}),(0,t.jsx)(s.td,{children:"whether or not the the operator also include a Java keystore format (JKS) with you secret."}),(0,t.jsx)(s.td,{children:"Yes"}),(0,t.jsx)(s.td,{children:"-"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"createCert"}),(0,t.jsx)(s.td,{children:"boolean"}),(0,t.jsx)(s.td,{children:"whether or not a certificate will be created for this user."}),(0,t.jsx)(s.td,{children:"No"}),(0,t.jsx)(s.td,{children:"-"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"accessPolicies"}),(0,t.jsxs)(s.td,{children:["[\xa0]",(0,t.jsx)(s.a,{href:"#accesspolicy",children:"AccessPolicy"})]}),(0,t.jsx)(s.td,{children:"defines the list of access policies that will be granted to the group."}),(0,t.jsx)(s.td,{children:"No"}),(0,t.jsx)(s.td,{children:"[]"})]})]})]}),"\n",(0,t.jsx)(s.h2,{id:"nifiuserstatus",children:"NifiUserStatus"}),"\n",(0,t.jsxs)(s.table,{children:[(0,t.jsx)(s.thead,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.th,{children:"Field"}),(0,t.jsx)(s.th,{children:"Type"}),(0,t.jsx)(s.th,{children:"Description"}),(0,t.jsx)(s.th,{children:"Required"}),(0,t.jsx)(s.th,{children:"Default"})]})}),(0,t.jsxs)(s.tbody,{children:[(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"id"}),(0,t.jsx)(s.td,{children:"string"}),(0,t.jsx)(s.td,{children:"the nifi user's node id."}),(0,t.jsx)(s.td,{children:"Yes"}),(0,t.jsx)(s.td,{children:"-"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"version"}),(0,t.jsx)(s.td,{children:"string"}),(0,t.jsx)(s.td,{children:"the last nifi  user's node revision version catched."}),(0,t.jsx)(s.td,{children:"Yes"}),(0,t.jsx)(s.td,{children:"-"})]})]})]}),"\n",(0,t.jsx)(s.h2,{id:"clusterreference",children:"ClusterReference"}),"\n",(0,t.jsxs)(s.table,{children:[(0,t.jsx)(s.thead,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.th,{children:"Field"}),(0,t.jsx)(s.th,{children:"Type"}),(0,t.jsx)(s.th,{children:"Description"}),(0,t.jsx)(s.th,{children:"Required"}),(0,t.jsx)(s.th,{children:"Default"})]})}),(0,t.jsxs)(s.tbody,{children:[(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"name"}),(0,t.jsx)(s.td,{children:"string"}),(0,t.jsx)(s.td,{children:"name of the NifiCluster."}),(0,t.jsx)(s.td,{children:"Yes"}),(0,t.jsx)(s.td,{children:"-"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"namespace"}),(0,t.jsx)(s.td,{children:"string"}),(0,t.jsx)(s.td,{children:"the NifiCluster namespace location."}),(0,t.jsx)(s.td,{children:"Yes"}),(0,t.jsx)(s.td,{children:"-"})]})]})]}),"\n",(0,t.jsx)(s.h2,{id:"accesspolicy",children:"AccessPolicy"}),"\n",(0,t.jsxs)(s.table,{children:[(0,t.jsx)(s.thead,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.th,{children:"Field"}),(0,t.jsx)(s.th,{children:"Type"}),(0,t.jsx)(s.th,{children:"Description"}),(0,t.jsx)(s.th,{children:"Required"}),(0,t.jsx)(s.th,{children:"Default"})]})}),(0,t.jsxs)(s.tbody,{children:[(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"type"}),(0,t.jsx)(s.td,{children:(0,t.jsx)(s.a,{href:"#accesspolicytype",children:"AccessPolicyType"})}),(0,t.jsx)(s.td,{children:'defines the kind of access policy, could be "global" or "component".'}),(0,t.jsx)(s.td,{children:"Yes"}),(0,t.jsx)(s.td,{children:"-"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"action"}),(0,t.jsx)(s.td,{children:(0,t.jsx)(s.a,{href:"#accesspolicyaction",children:"AccessPolicyAction"})}),(0,t.jsx)(s.td,{children:'defines the kind of action that will be granted, could be "read" or "write".'}),(0,t.jsx)(s.td,{children:"Yes"}),(0,t.jsx)(s.td,{children:"-"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"resource"}),(0,t.jsx)(s.td,{children:(0,t.jsx)(s.a,{href:"#accesspolicyresource",children:"AccessPolicyResource"})}),(0,t.jsxs)(s.td,{children:["defines the kind of resource targeted by this access policies, please refer to the following page: ",(0,t.jsx)(s.a,{href:"https://nifi.apache.org/docs/nifi-docs/html/administration-guide.html#access-policies",children:"https://nifi.apache.org/docs/nifi-docs/html/administration-guide.html#access-policies"})]}),(0,t.jsx)(s.td,{children:"Yes"}),(0,t.jsx)(s.td,{children:"-"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"componentType"}),(0,t.jsx)(s.td,{children:"string"}),(0,t.jsx)(s.td,{children:'used if the type is "component", it allows to define the kind of component on which is the access policy.'}),(0,t.jsx)(s.td,{children:"No"}),(0,t.jsx)(s.td,{children:"-"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"componentId"}),(0,t.jsx)(s.td,{children:"string"}),(0,t.jsx)(s.td,{children:'used if the type is "component", it allows to define the id of the component on which is the access policy.'}),(0,t.jsx)(s.td,{children:"No"}),(0,t.jsx)(s.td,{children:"-"})]})]})]}),"\n",(0,t.jsx)(s.h2,{id:"accesspolicytype",children:"AccessPolicyType"}),"\n",(0,t.jsxs)(s.table,{children:[(0,t.jsx)(s.thead,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.th,{children:"Name"}),(0,t.jsx)(s.th,{children:"Value"}),(0,t.jsx)(s.th,{children:"Description"})]})}),(0,t.jsxs)(s.tbody,{children:[(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"GlobalAccessPolicyType"}),(0,t.jsx)(s.td,{children:"global"}),(0,t.jsx)(s.td,{children:"Global access policies govern the following system level authorizations"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"ComponentAccessPolicyType"}),(0,t.jsx)(s.td,{children:"component"}),(0,t.jsx)(s.td,{children:"Component level access policies govern the following component level authorizations"})]})]})]}),"\n",(0,t.jsx)(s.h2,{id:"accesspolicyaction",children:"AccessPolicyAction"}),"\n",(0,t.jsxs)(s.table,{children:[(0,t.jsx)(s.thead,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.th,{children:"Name"}),(0,t.jsx)(s.th,{children:"Value"}),(0,t.jsx)(s.th,{children:"Description"})]})}),(0,t.jsxs)(s.tbody,{children:[(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"ReadAccessPolicyAction"}),(0,t.jsx)(s.td,{children:"read"}),(0,t.jsx)(s.td,{children:"Allows users to view"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"WriteAccessPolicyAction"}),(0,t.jsx)(s.td,{children:"write"}),(0,t.jsx)(s.td,{children:"Allows users to modify"})]})]})]}),"\n",(0,t.jsx)(s.h2,{id:"accesspolicyresource",children:"AccessPolicyResource"}),"\n",(0,t.jsxs)(s.table,{children:[(0,t.jsx)(s.thead,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.th,{children:"Name"}),(0,t.jsx)(s.th,{children:"Value"}),(0,t.jsx)(s.th,{children:"Description"})]})}),(0,t.jsxs)(s.tbody,{children:[(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"FlowAccessPolicyResource"}),(0,t.jsx)(s.td,{children:"/flow"}),(0,t.jsx)(s.td,{children:"About the UI"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"ControllerAccessPolicyResource"}),(0,t.jsx)(s.td,{children:"/controller"}),(0,t.jsx)(s.td,{children:"about the controller including Reporting Tasks, Controller Services, Parameter Contexts and Nodes in the Cluster"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"ParameterContextAccessPolicyResource"}),(0,t.jsx)(s.td,{children:"/parameter-context"}),(0,t.jsx)(s.td,{children:'About the Parameter Contexts. Access to Parameter Contexts are inherited from the "access the controller" policies unless overridden.'})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"ProvenanceAccessPolicyResource"}),(0,t.jsx)(s.td,{children:"/provenance"}),(0,t.jsx)(s.td,{children:"Allows users to submit a Provenance Search and request Event Lineage"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"RestrictedComponentsAccessPolicyResource"}),(0,t.jsx)(s.td,{children:"/restricted-components"}),(0,t.jsx)(s.td,{children:"About the restricted components assuming other permissions are sufficient. The restricted components may indicate which specific permissions are required. Permissions can be granted for specific restrictions or be granted regardless of restrictions. If permission is granted regardless of restrictions, the user can create/modify all restricted components."})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"PoliciesAccessPolicyResource"}),(0,t.jsx)(s.td,{children:"/policies"}),(0,t.jsx)(s.td,{children:"About the policies for all components"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"TenantsAccessPolicyResource"}),(0,t.jsx)(s.td,{children:"/tenants"}),(0,t.jsx)(s.td,{children:"About the users and user groups"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"SiteToSiteAccessPolicyResource"}),(0,t.jsx)(s.td,{children:"/site-to-site"}),(0,t.jsx)(s.td,{children:"Allows other NiFi instances to retrieve Site-To-Site details"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"SystemAccessPolicyResource"}),(0,t.jsx)(s.td,{children:"/system"}),(0,t.jsx)(s.td,{children:"Allows users to view System Diagnostics"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"ProxyAccessPolicyResource"}),(0,t.jsx)(s.td,{children:"/proxy"}),(0,t.jsx)(s.td,{children:"Allows proxy machines to send requests on the behalf of others"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"CountersAccessPolicyResource"}),(0,t.jsx)(s.td,{children:"/counters"}),(0,t.jsx)(s.td,{children:"About counters"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"ComponentsAccessPolicyResource"}),(0,t.jsx)(s.td,{children:"/"}),(0,t.jsx)(s.td,{children:"About the component configuration details"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"OperationAccessPolicyResource"}),(0,t.jsx)(s.td,{children:"/operation"}),(0,t.jsx)(s.td,{children:"to operate components by changing component run status (start/stop/enable/disable), remote port transmission status, or terminating processor threads"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"ProvenanceDataAccessPolicyResource"}),(0,t.jsx)(s.td,{children:"/provenance-data"}),(0,t.jsx)(s.td,{children:"to view provenance events generated by this component"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"DataAccessPolicyResource"}),(0,t.jsx)(s.td,{children:"/data"}),(0,t.jsx)(s.td,{children:"About metadata and content for this component in flowfile queues in outbound connections and through provenance events"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"PoliciesComponentAccessPolicyResource"}),(0,t.jsx)(s.td,{children:"/policies"}),(0,t.jsx)(s.td,{children:"-"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"DataTransferAccessPolicyResource"}),(0,t.jsx)(s.td,{children:"/data-transfer"}),(0,t.jsx)(s.td,{children:"Allows a port to receive data from NiFi instances"})]})]})]})]})}function a(e={}){const{wrapper:s}={...(0,r.a)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(o,{...e})}):o(e)}},71670:(e,s,i)=>{i.d(s,{Z:()=>d,a:()=>n});var t=i(27378);const r={},c=t.createContext(r);function n(e){const s=t.useContext(c);return t.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function d(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:n(e.components),t.createElement(c.Provider,{value:s},e.children)}}}]);