"use strict";(self.webpackChunkreact_native_website=self.webpackChunkreact_native_website||[]).push([[71696],{82064:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>u,frontMatter:()=>r,metadata:()=>s,toc:()=>l});const s=JSON.parse('{"id":"3_manage_nifi/2_manage_users_and_accesses/1_users_management","title":"Users management","description":"The NifiUser resource was already introduced for the SSL credentials concerns.","source":"@site/versioned_docs/version-v0.14.1/3_manage_nifi/2_manage_users_and_accesses/1_users_management.md","sourceDirName":"3_manage_nifi/2_manage_users_and_accesses","slug":"/3_manage_nifi/2_manage_users_and_accesses/1_users_management","permalink":"/nifikop/docs/v0.14.1/3_manage_nifi/2_manage_users_and_accesses/1_users_management","draft":false,"unlisted":false,"editUrl":"https://github.com/konpyutaika/nifikop/edit/master/site/website/versioned_docs/version-v0.14.1/3_manage_nifi/2_manage_users_and_accesses/1_users_management.md","tags":[],"version":"v0.14.1","lastUpdatedBy":"Juldrixx","lastUpdatedAt":1707144987000,"frontMatter":{"id":"1_users_management","title":"Users management","sidebar_label":"Users management"},"sidebar":"docs","previous":{"title":"External cluster","permalink":"/nifikop/docs/v0.14.1/3_manage_nifi/1_manage_clusters/3_external_cluster"},"next":{"title":"Groups management","permalink":"/nifikop/docs/v0.14.1/3_manage_nifi/2_manage_users_and_accesses/2_groups_management"}}');var i=t(62540),a=t(43023);const r={id:"1_users_management",title:"Users management",sidebar_label:"Users management"},o=void 0,c={},l=[];function d(e){const n={a:"a",code:"code",li:"li",ol:"ol",p:"p",pre:"pre",...(0,a.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:"NifiUser"})," resource was already introduced for the ",(0,i.jsx)(n.a,{href:"../1_manage_clusters/1_deploy_cluster/4_ssl_configuration#create-ssl-credentials",children:"SSL credentials"})," concerns.\nWhat we are covering here is the NiFi user management part introduced in this resource."]}),"\n",(0,i.jsxs)(n.p,{children:["When you create a ",(0,i.jsx)(n.code,{children:"NifiUser"})," resource the operator will:"]}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["Try to check if a user already exists with the same name on the NiFi cluster, if it does, the operator will set ",(0,i.jsx)(n.a,{href:"../1_manage_clusters/1_deploy_cluster/4_ssl_configuration#create-ssl-credentials",children:"NifiUser.Status.Id"})," to bind it with the kubernetes resource."]}),"\n",(0,i.jsx)(n.li,{children:"If no user is found, the operator will create and manage it (i.e it will ensure the synchronisation with the NiFi Cluster)."}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-yaml",children:'apiVersion: nifi.konpyutaika.com/v1alpha1\nkind: NifiUser\nmetadata:\n  name: aguitton\nspec:\n  # identity field is use to define the user identity on NiFi cluster side,\n  #\tit use full when the user\'s name doesn\'t suite with Kubernetes resource name.\n  identity: alexandre.guitton@konpyutaika.com\n  # Contains the reference to the NifiCluster with the one the registry client is linked.\n  clusterRef:\n    name: nc\n    namespace: nifikop\n  # Whether or not the the operator also include a Java keystore format (JKS) with you secret\n  includeJKS: false\n  # Whether or not a certificate will be created for this user.\n  createCert: false\n  # defines the list of access policies that will be granted to the group.\n  accessPolicies:\n      # defines the kind of access policy, could be "global" or "component".\n    - type: component\n      # defines the kind of action that will be granted, could be "read" or "write"\n      action: read\n      # resource defines the kind of resource targeted by this access policies, please refer to the following page:\n      #\thttps://nifi.apache.org/docs/nifi-docs/html/administration-guide.html#access-policies\n      resource: /data\n      # componentType is used if the type is "component", it\'s allow to define the kind of component on which is the\n      # access policy\n      componentType: "process-groups"\n      # componentId is used if the type is "component", it\'s allow to define the id of the component on which is the\n      # access policy\n      componentId: ""\n'})}),"\n",(0,i.jsx)(n.p,{children:"By default the user name that will be used is the name of the resource."}),"\n",(0,i.jsxs)(n.p,{children:["But as there are some constraints on this name (e.g ",(0,i.jsx)(n.a,{href:"https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#dns-subdomain-names",children:"RFC 1123"}),") that doesn't match with those applied on NiFi, you can override it with the ",(0,i.jsx)(n.code,{children:"NifiUser.Spec.Identity"})," field which is more permissive.\nIn the example above the kubernetes resource name will be ",(0,i.jsx)(n.code,{children:"aguitton"})," but the NiFi use created on the cluster will be ",(0,i.jsx)(n.code,{children:"alexandre.guitton@konpyutaika.com"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["In the case the user will not authenticate himself using TLS authentication, the operator doesn't have to create a certificate, so just set ",(0,i.jsx)(n.code,{children:"NifiUser.Spec.CreateCert"})," to false."]}),"\n",(0,i.jsxs)(n.p,{children:["For each user, you have the ability to define a list of ",(0,i.jsx)(n.a,{href:"../../5_references/2_nifi_user#accesspolicy",children:"AccessPolicies"})," to give a list of access to your user.\nIn the example above we are giving to user ",(0,i.jsx)(n.code,{children:"alexandre.guitton@konpyutaika.com"})," the right to view metadata et content for the root process group in flowfile queues in outbound connections and through provenance events."]})]})}function u(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},43023:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>o});var s=t(63696);const i={},a=s.createContext(i);function r(e){const n=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),s.createElement(a.Provider,{value:n},e.children)}}}]);