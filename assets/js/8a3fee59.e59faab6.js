"use strict";(self.webpackChunkreact_native_website=self.webpackChunkreact_native_website||[]).push([[10813],{27919:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>d,contentTitle:()=>r,default:()=>h,frontMatter:()=>o,metadata:()=>i,toc:()=>c});const i=JSON.parse('{"id":"3_manage_nifi/2_manage_users_and_accesses/3_managed_groups","title":"Managed groups","description":"In some case these two features could be heavy to define, for example when you have 10 dataflows with one cluster for each of them, it will lead in a lot of .yaml files.","source":"@site/versioned_docs/version-v1.5.0/3_manage_nifi/2_manage_users_and_accesses/3_managed_groups.md","sourceDirName":"3_manage_nifi/2_manage_users_and_accesses","slug":"/3_manage_nifi/2_manage_users_and_accesses/3_managed_groups","permalink":"/nifikop/docs/v1.5.0/3_manage_nifi/2_manage_users_and_accesses/3_managed_groups","draft":false,"unlisted":false,"editUrl":"https://github.com/konpyutaika/nifikop/edit/master/site/website/versioned_docs/version-v1.5.0/3_manage_nifi/2_manage_users_and_accesses/3_managed_groups.md","tags":[],"version":"v1.5.0","lastUpdatedBy":"Juldrixx","lastUpdatedAt":1707144987000,"frontMatter":{"id":"3_managed_groups","title":"Managed groups","sidebar_label":"Managed groups"},"sidebar":"docs","previous":{"title":"Groups management","permalink":"/nifikop/docs/v1.5.0/3_manage_nifi/2_manage_users_and_accesses/2_groups_management"},"next":{"title":"Design Principles","permalink":"/nifikop/docs/v1.5.0/3_manage_nifi/3_manage_dataflows/0_design_principles"}}');var a=s(62540),t=s(43023);const o={id:"3_managed_groups",title:"Managed groups",sidebar_label:"Managed groups"},r=void 0,d={},c=[];function l(e){const n={admonition:"admonition",code:"code",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(n.p,{children:["In some case these two features could be heavy to define, for example when you have 10 dataflows with one cluster for each of them, it will lead in a lot of ",(0,a.jsx)(n.code,{children:".yaml"})," files.\nTo simplify this, we implement in the operator 2 ",(0,a.jsx)(n.code,{children:"managed groups"}),":"]}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.strong,{children:"Admins:"})," a group giving access to everything on the NiFi Cluster,"]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.strong,{children:"Readers:"})," a group giving access as viewer on the NiFi Cluster."]}),"\n"]}),"\n",(0,a.jsxs)(n.p,{children:["You can directly define the list of users who belong to each of them in the ",(0,a.jsx)(n.code,{children:"NifiCluster.Spec"})," field:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-yaml",children:'apiVersion: nifi.konpyutaika.com/v1\nkind: NifiCluster\nmetadata:\n  name: mynifi\nspec:\n  ...\n  oneNifiNodePerNode: false\n  propagateLabels: true\n  managedAdminUsers:\n    -  identity: "alexandre.guitton@konpyutaika.com"\n       name: "aguitton"\n    -  identity: "nifiuser@konpyutaika.com"\n       name: "nifiuser"\n  managedReaderUsers:\n    -  identity: "toto@konpyutaika.com"\n       name: "toto"\n    ...\n'})}),"\n",(0,a.jsxs)(n.p,{children:["In this example the operator will create and manage 3 ",(0,a.jsx)(n.code,{children:"NifiUsers"}),":"]}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.strong,{children:"aguitton"}),", with the identity: ",(0,a.jsx)(n.code,{children:"alexandre.guitton@konpyutaika.com"})]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.strong,{children:"nifiuser"}),", with the identity: ",(0,a.jsx)(n.code,{children:"nifiuser@konpyutaika.com"})]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.strong,{children:"toto"}),", with the identity: ",(0,a.jsx)(n.code,{children:"toto@konpyutaika.com"})]}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:"And create and manage two groups:"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.strong,{children:"managed-admins:"})," that will contain 3 users (",(0,a.jsx)(n.strong,{children:"aguitton"}),", ",(0,a.jsx)(n.strong,{children:"nifiuser"}),", ",(0,a.jsx)(n.strong,{children:"nc-controller.nifikop.mgt.cluster.local"})," which is the controller user)."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.strong,{children:"managed-readers:"})," that will contain 1 user (",(0,a.jsx)(n.strong,{children:"toto"}),")"]}),"\n"]}),"\n",(0,a.jsxs)(n.p,{children:["And the rest of the stuff will be reconciled and managed as described for ",(0,a.jsx)(n.code,{children:"NifiUsers"})," and ",(0,a.jsx)(n.code,{children:"NifiUserGroups"}),"."]}),"\n",(0,a.jsxs)(n.admonition,{type:"note",children:[(0,a.jsxs)(n.p,{children:["There is one more group that is created and managed by the operator, this is the ",(0,a.jsx)(n.strong,{children:"managed-nodes"})," group, for each node a ",(0,a.jsx)(n.code,{children:"NifiUser"})," is created, and we automatically add them to this group to give them the right list of accesses."]}),(0,a.jsxs)(n.p,{children:["To get the list of managed groups just check the list of ",(0,a.jsx)(n.code,{children:"NifiUserGroup"}),":"]}),(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-console",children:"kubectl get -n nifikop nifiusergroups.nifi.konpyutaika.com \nNAME              AGE\nmanaged-admins    6d7h\nmanaged-nodes     6d7h\nmanaged-readers   6d7h\n"})})]})]})}function h(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(l,{...e})}):l(e)}},43023:(e,n,s)=>{s.d(n,{R:()=>o,x:()=>r});var i=s(63696);const a={},t=i.createContext(a);function o(e){const n=i.useContext(t);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),i.createElement(t.Provider,{value:n},e.children)}}}]);