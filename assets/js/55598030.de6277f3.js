"use strict";(self.webpackChunkreact_native_website=self.webpackChunkreact_native_website||[]).push([[71265],{79865:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>l,contentTitle:()=>r,default:()=>p,frontMatter:()=>a,metadata:()=>o,toc:()=>c});var t=i(24246),s=i(71670);const a={id:"0_design_principles",title:"Design Principles",sidebar_label:"Design Principles"},r=void 0,o={id:"3_manage_nifi/3_manage_dataflows/0_design_principles",title:"Design Principles",description:"The Dataflow Lifecycle management feature introduces 3 new CRDs:",source:"@site/versioned_docs/version-v1.1.1/3_manage_nifi/3_manage_dataflows/0_design_principles.md",sourceDirName:"3_manage_nifi/3_manage_dataflows",slug:"/3_manage_nifi/3_manage_dataflows/0_design_principles",permalink:"/nifikop/docs/v1.1.1/3_manage_nifi/3_manage_dataflows/0_design_principles",draft:!1,unlisted:!1,editUrl:"https://github.com/konpyutaika/nifikop/edit/master/site/website/versioned_docs/version-v1.1.1/3_manage_nifi/3_manage_dataflows/0_design_principles.md",tags:[],version:"v1.1.1",lastUpdatedBy:"Juldrixx",lastUpdatedAt:1707144987,formattedLastUpdatedAt:"Feb 5, 2024",frontMatter:{id:"0_design_principles",title:"Design Principles",sidebar_label:"Design Principles"},sidebar:"docs",previous:{title:"Managed groups",permalink:"/nifikop/docs/v1.1.1/3_manage_nifi/2_manage_users_and_accesses/3_managed_groups"},next:{title:"Deploy dataflow",permalink:"/nifikop/docs/v1.1.1/3_manage_nifi/3_manage_dataflows/1_deploy_dataflow"}},l={},c=[];function d(e){const n={a:"a",code:"code",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...(0,s.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.a,{href:"../../1_concepts/3_features#dataflow-lifecycle-management-via-crd",children:"Dataflow Lifecycle management feature"})," introduces 3 new CRDs:"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"NiFiRegistryClient:"})," Allowing you to declare a ",(0,t.jsx)(n.a,{href:"https://nifi.apache.org/docs/nifi-registry-docs/html/getting-started.html#connect-nifi-to-the-registry",children:"NiFi registry client"}),"."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"NiFiParameterContext:"})," Allowing you to create parameter context, with two kinds of parameters, a simple ",(0,t.jsx)(n.code,{children:"map[string]string"})," for non-sensitive parameters and a ",(0,t.jsx)(n.code,{children:"list of secrets"})," which contains sensitive parameters."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"NiFiDataflow:"})," Allowing you to declare a Dataflow based on a ",(0,t.jsx)(n.code,{children:"NiFiRegistryClient"})," and optionally a ",(0,t.jsx)(n.code,{children:"ParameterContext"}),", which will be deployed and managed by the operator on the ",(0,t.jsx)(n.code,{children:"targeted NiFi cluster"}),"."]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"The following diagram shows the interactions between all the components:"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"dataflow lifecycle management schema",src:i(58643).Z+"",width:"1123",height:"1101"})}),"\n",(0,t.jsx)(n.p,{children:"With each CRD comes a new controller, with a reconcile loop:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.strong,{children:"NiFiRegistryClient's controller:"})}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"NiFi registry client&#39;s reconcile loop",src:i(74219).Z+"",width:"682",height:"642"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.strong,{children:"NiFiParameterContext's controller:"})}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"NiFi parameter context&#39;s reconcile loop",src:i(34753).Z+"",width:"922",height:"829"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.strong,{children:"NiFiDataflow's controller:"})}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"NiFi dataflow&#39;s reconcile loop",src:i(52614).Z+"",width:"3146",height:"4117"})})]})}function p(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},58643:(e,n,i)=>{i.d(n,{Z:()=>t});const t=i.p+"assets/images/dataflow_lifecycle_management_schema-e39196d2242598106229e66f18e8826d.jpg"},52614:(e,n,i)=>{i.d(n,{Z:()=>t});const t=i.p+"assets/images/dataflow_reconcile_loop-7b564f9232c78a2c651094a8005ba6a8.jpeg"},34753:(e,n,i)=>{i.d(n,{Z:()=>t});const t=i.p+"assets/images/parameter_context_reconcile_loop-0b9f053e9cb447162535e03e5f5e9fbd.jpeg"},74219:(e,n,i)=>{i.d(n,{Z:()=>t});const t=i.p+"assets/images/registry_client_reconcile_loop-0b8e528b249cd93e61f4186050c59c02.jpeg"},71670:(e,n,i)=>{i.d(n,{Z:()=>o,a:()=>r});var t=i(27378);const s={},a=t.createContext(s);function r(e){const n=t.useContext(a);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),t.createElement(a.Provider,{value:n},e.children)}}}]);