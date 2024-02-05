"use strict";(self.webpackChunkreact_native_website=self.webpackChunkreact_native_website||[]).push([[88839],{88182:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>f,frontMatter:()=>r,metadata:()=>s,toc:()=>c});var a=i(24246),t=i(71670);const r={id:"1_deploy_dataflow",title:"Deploy dataflow",sidebar_label:"Deploy dataflow"},o=void 0,s={id:"3_manage_nifi/3_manage_dataflows/1_deploy_dataflow",title:"Deploy dataflow",description:"You can create NiFi dataflows either:",source:"@site/versioned_docs/version-v1.3.1/3_manage_nifi/3_manage_dataflows/1_deploy_dataflow.md",sourceDirName:"3_manage_nifi/3_manage_dataflows",slug:"/3_manage_nifi/3_manage_dataflows/1_deploy_dataflow",permalink:"/nifikop/docs/v1.3.1/3_manage_nifi/3_manage_dataflows/1_deploy_dataflow",draft:!1,unlisted:!1,editUrl:"https://github.com/konpyutaika/nifikop/edit/master/site/website/versioned_docs/version-v1.3.1/3_manage_nifi/3_manage_dataflows/1_deploy_dataflow.md",tags:[],version:"v1.3.1",lastUpdatedBy:"Juldrixx",lastUpdatedAt:1707144987,formattedLastUpdatedAt:"Feb 5, 2024",frontMatter:{id:"1_deploy_dataflow",title:"Deploy dataflow",sidebar_label:"Deploy dataflow"},sidebar:"docs",previous:{title:"Design Principles",permalink:"/nifikop/docs/v1.3.1/3_manage_nifi/3_manage_dataflows/0_design_principles"},next:{title:"Compatibility versions",permalink:"/nifikop/docs/v1.3.1/4_compatibility_versions"}},l={},c=[];function d(e){const n={a:"a",admonition:"admonition",code:"code",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.p,{children:"You can create NiFi dataflows either:"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"directly against the cluster through its REST API (using UI or some home made scripts), or"}),"\n",(0,a.jsxs)(n.li,{children:["via the ",(0,a.jsx)(n.code,{children:"NifiDataflow"})," CRD."]}),"\n"]}),"\n",(0,a.jsxs)(n.p,{children:["If you want more details about the design, just have a look on the ",(0,a.jsx)(n.a,{href:"./0_design_principles#dataflow-lifecycle-management",children:"design page"})]}),"\n",(0,a.jsxs)(n.p,{children:["To deploy a ",(0,a.jsx)(n.a,{href:"../../5_references/5_nifi_dataflow",children:"NifiDataflow"})," you have to start by deploying a ",(0,a.jsx)(n.a,{href:"../../5_references/3_nifi_registry_client",children:"NifiRegistryClient"})," because ",(0,a.jsx)(n.strong,{children:"NiFiKop"})," manages dataflow using the ",(0,a.jsx)(n.a,{href:"https://nifi.apache.org/registry",children:"NiFi Registry feature"}),"."]}),"\n",(0,a.jsxs)(n.p,{children:["Below is an example of ",(0,a.jsx)(n.a,{href:"../../5_references/3_nifi_registry_client",children:"NifiRegistryClient"}),":"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-yaml",children:'apiVersion: nifi.konpyutaika.com/v1\nkind: NifiRegistryClient\nmetadata:\n  name: registry-client-example\n  namespace: nifikop\nspec:\n  clusterRef:\n    name: nc\n    namespace: nifikop\n  description: "Registry client managed by NiFiKop"\n  uri: "http://nifi.hostname.com:18080"\n'})}),"\n",(0,a.jsxs)(n.p,{children:["Once you have deployed your ",(0,a.jsx)(n.a,{href:"../../5_references/3_nifi_registry_client",children:"NifiRegistryClient"}),", you have the possibility of defining a configuration that you will apply to your ",(0,a.jsx)(n.a,{href:"../../5_references/5_nifi_dataflow",children:"NifiDataflow"}),"."]}),"\n",(0,a.jsxs)(n.p,{children:["This configuration is defined using the ",(0,a.jsx)(n.a,{href:"../../5_references/4_nifi_parameter_context",children:"NifiParameterContext"})," CRD, which NiFiKop will convert into a ",(0,a.jsx)(n.a,{href:"https://nifi.apache.org/docs/nifi-docs/html/user-guide.html#parameter-contexts",children:"Parameter context"}),"."]}),"\n",(0,a.jsxs)(n.p,{children:["Below is an example of ",(0,a.jsx)(n.a,{href:"../../5_references/4_nifi_parameter_context",children:"NifiParameterContext"}),":"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-yaml",children:'apiVersion: nifi.konpyutaika.com/v1\nkind: NifiParameterContext\nmetadata:\n  name: dataflow-lifecycle\n  namespace: demo\nspec:\n  description: "It is a test"\n  clusterRef:\n    name: nc\n    namespace: nifikop\n  secretRefs:\n    - name: secret-params\n      namespace: nifikop\n  parameters:\n    - name: test\n      value: toto\n      description: tutu\n    - name: test2\n      value: toto\n      description: toto\n'})}),"\n",(0,a.jsxs)(n.p,{children:["As you can see, in the ",(0,a.jsx)(n.a,{href:"../../5_references/4_nifi_parameter_context",children:"NifiParameterContext"})," you can refer to some secrets that will be converted into ",(0,a.jsx)(n.a,{href:"https://nifi.apache.org/docs/nifi-docs/html/user-guide.html#using-parameters-with-sensitive-properties",children:"sensitive parameter"}),"."]}),"\n",(0,a.jsx)(n.p,{children:"Here is an example of secret that you can create that will be used by the configuration above:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-console",children:"kubectl create secret generic secret-params \\\n    --from-literal=secret1=yop \\\n    --from-literal=secret2=yep \\\n    -n nifikop\n"})}),"\n",(0,a.jsxs)(n.admonition,{type:"warning",children:[(0,a.jsx)(n.p,{children:"As a sensitive value cannot be retrieved through the Rest API, to update the value of a sensitive parameter, you have to:"}),(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"remove it from the secret"}),"\n",(0,a.jsx)(n.li,{children:"wait for the next loop"}),"\n",(0,a.jsx)(n.li,{children:"insert the parameter with the new value inside the secret"}),"\n"]}),(0,a.jsxs)(n.p,{children:["or you can simply create a new ",(0,a.jsx)(n.a,{href:"../../5_references/4_nifi_parameter_context",children:"NifiParameterContext"})," and refer it into your ",(0,a.jsx)(n.a,{href:"../../5_references/5_nifi_dataflow",children:"NifiDataflow"}),"."]})]}),"\n",(0,a.jsxs)(n.p,{children:["You can now deploy your ",(0,a.jsx)(n.a,{href:"../../5_references/5_nifi_dataflow",children:"NifiDataflow"})," by referencing the previous objects:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-yaml",children:'apiVersion: nifi.konpyutaika.com/v1\nkind: NifiDataflow\nmetadata:\n  name: dataflow-lifecycle\nspec:\n  parentProcessGroupID: "16cfd2ec-0174-1000-0000-00004b9b35cc"\n  bucketId: "01ced6cc-0378-4893-9403-f6c70d080d4f"\n  flowId: "9b2fb465-fb45-49e7-94fe-45b16b642ac9"\n  flowVersion: 2\n  syncMode: always\n  skipInvalidControllerService: true\n  skipInvalidComponent: true\n  clusterRef:\n    name: nc\n    namespace: nifikop\n  registryClientRef:\n    name: registry-client-example\n    namespace: nifikop\n  parameterContextRef:\n    name: dataflow-lifecycle\n    namespace: demo\n  updateStrategy: drain\n'})}),"\n",(0,a.jsxs)(n.p,{children:["To find details about the versioned flow information required check the ",(0,a.jsx)(n.a,{href:"https://nifi.apache.org/docs/nifi-registry-docs/index.html",children:"official documentation"})]}),"\n",(0,a.jsx)(n.p,{children:"You have two modes of control from your dataflow by the operator:"}),"\n",(0,a.jsxs)(n.p,{children:["1 - ",(0,a.jsx)(n.code,{children:"Spec.SyncMode == never"}),": The operator will deploy the dataflow as described in the resource, and never control it (unless you change the field to ",(0,a.jsx)(n.code,{children:"always"}),"). It is useful when you want to deploy your dataflow without starting it."]}),"\n",(0,a.jsxs)(n.p,{children:["2 - ",(0,a.jsx)(n.code,{children:"Spec.SyncMode == once"}),": The operator will deploy the dataflow as described in the resource, run it once, and never control it again (unless you change the field to ",(0,a.jsx)(n.code,{children:"always"}),"). It is useful when you want to deploy your dataflow in a dev environment, and you want to update the dataflow."]}),"\n",(0,a.jsxs)(n.p,{children:["3 - ",(0,a.jsx)(n.code,{children:"Spec.SyncMode == always"}),": The operator will deploy and ensure the dataflow lifecycle, it will avoid all manual modification directly from the Cluster (e.g remove the process group, remove the versioning, update the parent process group, make some local changes ...). If you want to perform update, rollback or stuff like this, you have to simply update the ",(0,a.jsx)(n.a,{href:"../../5_references/5_nifi_dataflow",children:"NifiDataflow"})," resource."]}),"\n",(0,a.jsx)(n.admonition,{type:"important",children:(0,a.jsxs)(n.p,{children:["More information about ",(0,a.jsx)(n.code,{children:"Spec.UpdateStrategy"})," ",(0,a.jsx)(n.a,{href:"../../5_references/5_nifi_dataflow#dataflowupdatestrategy",children:"here"})]})})]})}function f(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},71670:(e,n,i)=>{i.d(n,{Z:()=>s,a:()=>o});var a=i(27378);const t={},r=a.createContext(t);function o(e){const n=a.useContext(r);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),a.createElement(r.Provider,{value:n},e.children)}}}]);