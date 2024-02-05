"use strict";(self.webpackChunkreact_native_website=self.webpackChunkreact_native_website||[]).push([[36881],{53486:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>p,frontMatter:()=>a,metadata:()=>r,toc:()=>l});var i=s(24246),t=s(71670);const a={id:"2_groups_management",title:"Groups management",sidebar_label:"Groups management"},o=void 0,r={id:"3_manage_nifi/2_manage_users_and_accesses/2_groups_management",title:"Groups management",description:"To simplify the access management Apache NiFi allows to define groups containing a list of users, on which we apply a list of access policies.",source:"@site/versioned_docs/version-v1.3.0/3_manage_nifi/2_manage_users_and_accesses/2_groups_management.md",sourceDirName:"3_manage_nifi/2_manage_users_and_accesses",slug:"/3_manage_nifi/2_manage_users_and_accesses/2_groups_management",permalink:"/nifikop/docs/v1.3.0/3_manage_nifi/2_manage_users_and_accesses/2_groups_management",draft:!1,unlisted:!1,editUrl:"https://github.com/konpyutaika/nifikop/edit/master/site/website/versioned_docs/version-v1.3.0/3_manage_nifi/2_manage_users_and_accesses/2_groups_management.md",tags:[],version:"v1.3.0",lastUpdatedBy:"Juldrixx",lastUpdatedAt:1707144987,formattedLastUpdatedAt:"Feb 5, 2024",frontMatter:{id:"2_groups_management",title:"Groups management",sidebar_label:"Groups management"},sidebar:"docs",previous:{title:"Users management",permalink:"/nifikop/docs/v1.3.0/3_manage_nifi/2_manage_users_and_accesses/1_users_management"},next:{title:"Managed groups",permalink:"/nifikop/docs/v1.3.0/3_manage_nifi/2_manage_users_and_accesses/3_managed_groups"}},c={},l=[];function d(e){const n={a:"a",admonition:"admonition",code:"code",p:"p",pre:"pre",...(0,t.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.p,{children:["To simplify the access management Apache NiFi allows to define groups containing a list of users, on which we apply a list of access policies.\nThis part is supported by the operator using the ",(0,i.jsx)(n.code,{children:"NifiUserGroup"})," resource:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-yaml",children:'apiVersion: nifi.konpyutaika.com/v1\nkind: NifiUserGroup\nmetadata:\n  name: group-test\nspec:\n  # Contains the reference to the NifiCluster with the one the registry client is linked.\n  clusterRef:\n    name: nc\n    namespace: nifikop\n  # contains the list of reference to NifiUsers that are part to the group.\n  usersRef:\n    - name: nc-0-node.nc-headless.nifikop.svc.cluster.local\n#     namespace: nifikop\n    - name: nc-controller.nifikop.mgt.cluster.local\n  # defines the list of access policies that will be granted to the group.\n  accessPolicies:\n      # defines the kind of access policy, could be "global" or "component".\n    - type: global\n      # defines the kind of action that will be granted, could be "read" or "write"\n      action: read\n      # resource defines the kind of resource targeted by this access policies, please refer to the following page:\n      #\thttps://nifi.apache.org/docs/nifi-docs/html/administration-guide.html#access-policies\n      resource: /counters\n#      # componentType is used if the type is "component", it\'s allow to define the kind of component on which is the\n#      # access policy\n#      componentType: "process-groups"\n#      # componentId is used if the type is "component", it\'s allow to define the id of the component on which is the\n#      # access policy\n#      componentId: ""\n'})}),"\n",(0,i.jsxs)(n.p,{children:["When you create a ",(0,i.jsx)(n.code,{children:"NifiUserGroup"})," resource, the operator will create and manage a group named ",(0,i.jsx)(n.code,{children:"${resource namespace}-${resource name}"})," in Nifi.\nTo declare the users that are part of this group, you just have to declare them in the ",(0,i.jsx)(n.a,{href:"../../5_references/6_nifi_usergroup#userreference",children:"NifiUserGroup.UsersRef"})," field."]}),"\n",(0,i.jsxs)(n.admonition,{type:"important",children:[(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.a,{href:"../../5_references/6_nifi_usergroup#userreference",children:"NifiUserGroup.UsersRef"})," requires to declare the name and namespace of a ",(0,i.jsx)(n.code,{children:"NifiUser"})," resource, so it is previously required to declare the resource."]}),(0,i.jsx)(n.p,{children:"It's required to create the resource even if the user is already declared in NiFi Cluster (In that case the operator will just sync the kubernetes resource)."})]}),"\n",(0,i.jsxs)(n.p,{children:["Like for ",(0,i.jsx)(n.code,{children:"NifiUser"})," you can declare a list of ",(0,i.jsx)(n.a,{href:"../../5_references/2_nifi_user#accesspolicy",children:"AccessPolicies"})," to give a list of access to your user."]}),"\n",(0,i.jsxs)(n.p,{children:["In the example above we are giving to users ",(0,i.jsx)(n.code,{children:"nc-0-node.nc-headless.nifikop.svc.cluster.local"})," and ",(0,i.jsx)(n.code,{children:"nc-controller.nifikop.mgt.cluster.local"})," the right to view the counters information."]})]})}function p(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},71670:(e,n,s)=>{s.d(n,{Z:()=>r,a:()=>o});var i=s(27378);const t={},a=i.createContext(t);function o(e){const n=i.useContext(a);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),i.createElement(a.Provider,{value:n},e.children)}}}]);