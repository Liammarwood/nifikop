"use strict";(self.webpackChunkreact_native_website=self.webpackChunkreact_native_website||[]).push([[25234],{3819:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>r,default:()=>h,frontMatter:()=>s,metadata:()=>a,toc:()=>d});var i=t(24246),o=t(71670);const s={id:"3_v0.16.0_to_v1.0.0",title:"v0.16.0 to v1.0.0",sidebar_label:"v0.16.0 to v1.0.0"},r="Getting started",a={id:"7_upgrade_guides/3_v0.16.0_to_v1.0.0",title:"v0.16.0 to v1.0.0",description:"Moving from v0.16.0 to v1.0.0 version implies the migration of some CRD versions from v1alpha1 to v1:",source:"@site/versioned_docs/version-v1.3.0/7_upgrade_guides/3_v0.16.0_to_v1.0.0.md",sourceDirName:"7_upgrade_guides",slug:"/7_upgrade_guides/3_v0.16.0_to_v1.0.0",permalink:"/nifikop/docs/v1.3.0/7_upgrade_guides/3_v0.16.0_to_v1.0.0",draft:!1,unlisted:!1,editUrl:"https://github.com/konpyutaika/nifikop/edit/master/site/website/versioned_docs/version-v1.3.0/7_upgrade_guides/3_v0.16.0_to_v1.0.0.md",tags:[],version:"v1.3.0",lastUpdatedBy:"Juldrixx",lastUpdatedAt:1707144987,formattedLastUpdatedAt:"Feb 5, 2024",frontMatter:{id:"3_v0.16.0_to_v1.0.0",title:"v0.16.0 to v1.0.0",sidebar_label:"v0.16.0 to v1.0.0"},sidebar:"docs",previous:{title:"v0.14.1 to v0.15.0",permalink:"/nifikop/docs/v1.3.0/7_upgrade_guides/2_v0.14.1_to_v0.15.0"}},c={},d=[];function l(e){const n={code:"code",h1:"h1",li:"li",p:"p",pre:"pre",ul:"ul",...(0,o.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"getting-started",children:"Getting started"}),"\n",(0,i.jsxs)(n.p,{children:["Moving from ",(0,i.jsx)(n.code,{children:"v0.16.0"})," to ",(0,i.jsx)(n.code,{children:"v1.0.0"})," version implies the migration of some CRD versions from ",(0,i.jsx)(n.code,{children:"v1alpha1"})," to ",(0,i.jsx)(n.code,{children:"v1"}),":"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"NifiCluster"}),"\n",(0,i.jsx)(n.li,{children:"NifiDataflow"}),"\n",(0,i.jsx)(n.li,{children:"NifiParameterContext"}),"\n",(0,i.jsx)(n.li,{children:"NifiRegistryClient"}),"\n",(0,i.jsx)(n.li,{children:"NifiUser"}),"\n",(0,i.jsx)(n.li,{children:"NifiUserGroup"}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"To manage this resource version migration, you have to:"}),"\n",(0,i.jsxs)(n.p,{children:["1 - Upgrade your NifiKop helm chart release, that will enable conversion webhook in the operator pod (as the ",(0,i.jsx)(n.code,{children:"webhook.enabled"})," values is set to ",(0,i.jsx)(n.code,{children:"true"})," by default).\n2 - Patch the CRDs associated to the resources with:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-yaml",children:"...\nannotations:\n    cert-manager.io/inject-ca-from: ${namespace}/${certificate_name}\n...\nspec:\n  ...\n  conversion:\n    strategy: Webhook\n    webhook:\n      clientConfig:\n        service:\n          namespace: ${namespace}\n          name: ${webhook_service_name}\n          path: /convert\n      conversionReviewVersions:\n        - v1\n        - v1alpha1\n  ...\n"})}),"\n",(0,i.jsx)(n.p,{children:"Where:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"namespace"}),": is the namespace in which you will deploy your helm chart."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"certificate_name"}),": is ",(0,i.jsx)(n.code,{children:"${helm release name}-webhook-cert"})]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"webhook_service_name"}),": is ",(0,i.jsx)(n.code,{children:"${helm release name}-webhook-cert"})]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},71670:(e,n,t)=>{t.d(n,{Z:()=>a,a:()=>r});var i=t(27378);const o={},s=i.createContext(o);function r(e){const n=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);