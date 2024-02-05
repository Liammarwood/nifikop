"use strict";(self.webpackChunkreact_native_website=self.webpackChunkreact_native_website||[]).push([[92515],{10243:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>r,contentTitle:()=>s,default:()=>p,frontMatter:()=>a,metadata:()=>c,toc:()=>l});var t=i(24246),o=i(71670);const a={id:"1_deploy_connection",title:"Deploy connection",sidebar_label:"Deploy connection"},s=void 0,c={id:"3_manage_nifi/4_manage_connections/1_deploy_connection",title:"Deploy connection",description:"You can create NiFi connections either:",source:"@site/versioned_docs/version-v1.6.0/3_manage_nifi/4_manage_connections/1_deploy_connection.md",sourceDirName:"3_manage_nifi/4_manage_connections",slug:"/3_manage_nifi/4_manage_connections/1_deploy_connection",permalink:"/nifikop/docs/v1.6.0/3_manage_nifi/4_manage_connections/1_deploy_connection",draft:!1,unlisted:!1,editUrl:"https://github.com/konpyutaika/nifikop/edit/master/site/website/versioned_docs/version-v1.6.0/3_manage_nifi/4_manage_connections/1_deploy_connection.md",tags:[],version:"v1.6.0",lastUpdatedBy:"Juldrixx",lastUpdatedAt:1707144987,formattedLastUpdatedAt:"Feb 5, 2024",frontMatter:{id:"1_deploy_connection",title:"Deploy connection",sidebar_label:"Deploy connection"},sidebar:"docs",previous:{title:"Deploy dataflow",permalink:"/nifikop/docs/v1.6.0/3_manage_nifi/3_manage_dataflows/1_deploy_dataflow"},next:{title:"Compatibility versions",permalink:"/nifikop/docs/v1.6.0/4_compatibility_versions"}},r={},l=[];function d(e){const n={a:"a",admonition:"admonition",code:"code",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.p,{children:"You can create NiFi connections either:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"directly against the cluster through its REST API (using UI or some home made scripts), or"}),"\n",(0,t.jsxs)(n.li,{children:["via the ",(0,t.jsx)(n.code,{children:"NifiConnection"})," CRD."]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["To deploy a ",(0,t.jsx)(n.a,{href:"../../5_references/8_nifi_connection",children:"NifiConnection"})," you have to start by deploying at least 2 ",(0,t.jsx)(n.a,{href:"../../5_references/5_nifi_dataflow",children:"NifiDataflows"})," because ",(0,t.jsx)(n.strong,{children:"NiFiKop"})," manages connection between 2 ",(0,t.jsx)(n.a,{href:"../../5_references/5_nifi_dataflow",children:"NifiDataflows"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["If you want more details about how to deploy ",(0,t.jsx)(n.a,{href:"../../5_references/5_nifi_dataflow",children:"NifiDataflow"}),", just have a look on the ",(0,t.jsx)(n.a,{href:"../3_manage_dataflows/1_deploy_dataflow",children:"how to deploy dataflow page"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["Below is an example of 2 ",(0,t.jsx)(n.a,{href:"../../5_references/5_nifi_dataflow",children:"NifiDataflows"})," named respectively ",(0,t.jsx)(n.code,{children:"input"})," and ",(0,t.jsx)(n.code,{children:"output"}),":"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",children:"apiVersion: nifi.konpyutaika.com/v1alpha1\nkind: NifiDataflow\nmetadata:\n  name: input\n  namespace: nifikop\nspec:\n  clusterRef:\n    name: nc\n    namespace: nifikop\n  bucketId: deedb9f6-65a4-44e9-a1c9-722008fcd0ba\n  flowId: ab95431d-980d-41bd-904a-fac4bd864ba6\n  flowVersion: 1\n  registryClientRef:\n    name: registry-client-example\n    namespace: nifikop\n  skipInvalidComponent: true\n  skipInvalidControllerService: true\n  syncMode: always\n  updateStrategy: drain\n  flowPosition:\n    posX: 0\n    posY: 0\n---\napiVersion: nifi.konpyutaika.com/v1alpha1\nkind: NifiDataflow\nmetadata:\n  name: output\n  namespace: nifikop\nspec:\n  clusterRef:\n    name: nc\n    namespace: nifikop\n  bucketId: deedb9f6-65a4-44e9-a1c9-722008fcd0ba\n  flowId: fc5363eb-801e-432f-aa94-488838674d07\n  flowVersion: 2\n  registryClientRef:\n    name: registry-client-example\n    namespace: nifikop\n  skipInvalidComponent: true\n  skipInvalidControllerService: true\n  syncMode: always\n  updateStrategy: drain\n  flowPosition:\n    posX: 750\n    posY: 0\n"})}),"\n",(0,t.jsxs)(n.p,{children:["We will obtain the following initial setup:\n",(0,t.jsx)(n.img,{alt:"Initial setup",src:i(4787).Z+"",width:"1920",height:"1080"})]}),"\n",(0,t.jsx)(n.admonition,{type:"important",children:(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"input"})," dataflow must have an ",(0,t.jsx)(n.code,{children:"output port"})," and the ",(0,t.jsx)(n.code,{children:"output"})," dataflow must have an ",(0,t.jsx)(n.code,{children:"input port"}),"."]})}),"\n",(0,t.jsxs)(n.p,{children:["Now that we have 2 ",(0,t.jsx)(n.a,{href:"../../5_references/5_nifi_dataflow",children:"NifiDataflows"}),", we can connect them with a ",(0,t.jsx)(n.a,{href:"../../5_references/8_nifi_connection",children:"NifiConnection"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["Below is an example of a ",(0,t.jsx)(n.a,{href:"../../5_references/8_nifi_connection",children:"NifiConnection"})," named ",(0,t.jsx)(n.code,{children:"connection"})," between the 2 previously deployed dataflows:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",children:"apiVersion: nifi.konpyutaika.com/v1alpha1\nkind: NifiConnection\nmetadata:\n  name: connection\n  namespace: nifikop\nspec:\n  source:\n    name: input\n    namespace: nifikop\n    subName: output\n    type: dataflow\n  destination:\n    name: output\n    namespace: nifikop\n    subName: input\n    type: dataflow\n  configuration:\n    backPressureDataSizeThreshold: 100 GB\n    backPressureObjectThreshold: 10000\n    flowFileExpiration: 1 hour\n    labelIndex: 0\n    bends:\n      - posX: 550\n        posY: 550\n      - posX: 550\n        posY: 440\n      - posX: 550\n        posY: 88\n  updateStrategy: drain\n"})}),"\n",(0,t.jsxs)(n.p,{children:["You will obtain the following setup:\n",(0,t.jsx)(n.img,{alt:"Connection setup",src:i(17179).Z+"",width:"1920",height:"1080"})]}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"prioritizers"})," field takes a list of prioritizers, and the order of the list matters in NiFi so it matters in the resource."]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"prioriters=[NewestFlowFileFirstPrioritizer, FirstInFirstOutPrioritizer, OldestFlowFileFirstPrioritizer]"})," ",(0,t.jsx)(n.img,{alt:"Connection prioritizers 0",src:i(54273).Z+"",width:"765",height:"565"})]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"prioriters=[FirstInFirstOutPrioritizer, NewestFlowFileFirstPrioritizer, OldestFlowFileFirstPrioritizer]"})," ",(0,t.jsx)(n.img,{alt:"Connection prioritizers 1",src:i(54273).Z+"",width:"765",height:"565"})]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"prioriters=[PriorityAttributePrioritizer]"})," ",(0,t.jsx)(n.img,{alt:"Connection prioritizers 2",src:i(54273).Z+"",width:"765",height:"565"})]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"labelIndex"})," field will place the label of the connection according to the bends.\nIf we take the previous bending configuration, you will get this setup for these labelIndex:"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"labelIndex=0"}),": ",(0,t.jsx)(n.img,{alt:"Connection labelIndex 0",src:i(84497).Z+"",width:"1151",height:"618"})]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"labelIndex=1"}),": ",(0,t.jsx)(n.img,{alt:"Connection labelIndex 1",src:i(12185).Z+"",width:"1146",height:"573"})]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"labelIndex=2"}),": ",(0,t.jsx)(n.img,{alt:"Connection labelIndex 2",src:i(26156).Z+"",width:"1145",height:"573"})]}),"\n"]})]})}function p(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},84497:(e,n,i)=>{i.d(n,{Z:()=>t});const t=i.p+"assets/images/connection_labelindex_0-07fb0edf03edc921949b6d14d5402e1f.jpg"},12185:(e,n,i)=>{i.d(n,{Z:()=>t});const t=i.p+"assets/images/connection_labelindex_1-b947dbfc65c542ca46c88cd371796733.jpg"},26156:(e,n,i)=>{i.d(n,{Z:()=>t});const t=i.p+"assets/images/connection_labelindex_2-62f934b9f3a0152740bf20fa7561bb01.jpg"},54273:(e,n,i)=>{i.d(n,{Z:()=>t});const t=i.p+"assets/images/connection_prioritizers_0-1b3c7812874fc86c2da5ca0af680d6bc.jpg"},17179:(e,n,i)=>{i.d(n,{Z:()=>t});const t=i.p+"assets/images/connection_setup-183be5ff2aa9c3f25f20c5b9f5574309.jpg"},4787:(e,n,i)=>{i.d(n,{Z:()=>t});const t=i.p+"assets/images/initial_setup-eeb6837667edb2f8f755d2f35f2f3482.jpg"},71670:(e,n,i)=>{i.d(n,{Z:()=>c,a:()=>s});var t=i(27378);const o={},a=t.createContext(o);function s(e){const n=t.useContext(a);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),t.createElement(a.Provider,{value:n},e.children)}}}]);