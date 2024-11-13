"use strict";(self.webpackChunkreact_native_website=self.webpackChunkreact_native_website||[]).push([[32943],{40579:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>h,frontMatter:()=>r,metadata:()=>t,toc:()=>d});const t=JSON.parse('{"id":"7_upgrade_guides/3_v0.16.0_to_v1.0.0","title":"v0.16.0 to v1.0.0","description":"Moving from v0.16.0 to v1.0.0 version implies the migration of some CRD versions from v1alpha1 to v1:","source":"@site/versioned_docs/version-v1.11.0/7_upgrade_guides/3_v0.16.0_to_v1.0.0.md","sourceDirName":"7_upgrade_guides","slug":"/7_upgrade_guides/3_v0.16.0_to_v1.0.0","permalink":"/nifikop/docs/v1.11.0/7_upgrade_guides/3_v0.16.0_to_v1.0.0","draft":false,"unlisted":false,"editUrl":"https://github.com/konpyutaika/nifikop/edit/master/site/website/versioned_docs/version-v1.11.0/7_upgrade_guides/3_v0.16.0_to_v1.0.0.md","tags":[],"version":"v1.11.0","lastUpdatedBy":"Juldrixx","lastUpdatedAt":1729868832000,"frontMatter":{"id":"3_v0.16.0_to_v1.0.0","title":"v0.16.0 to v1.0.0","sidebar_label":"v0.16.0 to v1.0.0"},"sidebar":"docs","previous":{"title":"v0.14.1 to v0.15.0","permalink":"/nifikop/docs/v1.11.0/7_upgrade_guides/2_v0.14.1_to_v0.15.0"},"next":{"title":"v1.3.1 to v1.4.0","permalink":"/nifikop/docs/v1.11.0/7_upgrade_guides/4_v1.3.1_to_v1.4.0"}}');var s=i(62540),o=i(43023);const r={id:"3_v0.16.0_to_v1.0.0",title:"v0.16.0 to v1.0.0",sidebar_label:"v0.16.0 to v1.0.0"},a="Getting started",c={},d=[];function l(e){const n={code:"code",h1:"h1",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,o.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"getting-started",children:"Getting started"})}),"\n",(0,s.jsxs)(n.p,{children:["Moving from ",(0,s.jsx)(n.code,{children:"v0.16.0"})," to ",(0,s.jsx)(n.code,{children:"v1.0.0"})," version implies the migration of some CRD versions from ",(0,s.jsx)(n.code,{children:"v1alpha1"})," to ",(0,s.jsx)(n.code,{children:"v1"}),":"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"NifiCluster"}),"\n",(0,s.jsx)(n.li,{children:"NifiDataflow"}),"\n",(0,s.jsx)(n.li,{children:"NifiParameterContext"}),"\n",(0,s.jsx)(n.li,{children:"NifiRegistryClient"}),"\n",(0,s.jsx)(n.li,{children:"NifiUser"}),"\n",(0,s.jsx)(n.li,{children:"NifiUserGroup"}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"To manage this resource version migration, you have to:"}),"\n",(0,s.jsxs)(n.p,{children:["1 - Upgrade your NifiKop helm chart release, that will enable conversion webhook in the operator pod (as the ",(0,s.jsx)(n.code,{children:"webhook.enabled"})," values is set to ",(0,s.jsx)(n.code,{children:"true"})," by default).\n2 - Patch the CRDs associated to the resources with:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",children:"...\nannotations:\n    cert-manager.io/inject-ca-from: ${namespace}/${certificate_name}\n...\nspec:\n  ...\n  conversion:\n    strategy: Webhook\n    webhook:\n      clientConfig:\n        service:\n          namespace: ${namespace}\n          name: ${webhook_service_name}\n          path: /convert\n      conversionReviewVersions:\n        - v1\n        - v1alpha1\n  ...\n"})}),"\n",(0,s.jsx)(n.p,{children:"Where:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"namespace"}),": is the namespace in which you will deploy your helm chart."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"certificate_name"}),": is ",(0,s.jsx)(n.code,{children:"${helm release name}-webhook-cert"})]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"webhook_service_name"}),": is ",(0,s.jsx)(n.code,{children:"${helm release name}-webhook-cert"})]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},43023:(e,n,i)=>{i.d(n,{R:()=>r,x:()=>a});var t=i(63696);const s={},o=t.createContext(s);function r(e){const n=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),t.createElement(o.Provider,{value:n},e.children)}}}]);