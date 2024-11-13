"use strict";(self.webpackChunkreact_native_website=self.webpackChunkreact_native_website||[]).push([[37045],{74032:(i,e,n)=>{n.r(e),n.d(e,{assets:()=>a,contentTitle:()=>c,default:()=>p,frontMatter:()=>s,metadata:()=>t,toc:()=>d});const t=JSON.parse('{"id":"3_tasks/2_security/2_authentication/1_oidc","title":"OpenId Connect","description":"To enable authentication via OpenId Connect refering to NiFi Administration guide required some configuration into nifi.properties.","source":"@site/versioned_docs/version-v0.14.0/3_tasks/2_security/2_authentication/1_oidc.md","sourceDirName":"3_tasks/2_security/2_authentication","slug":"/3_tasks/2_security/2_authentication/1_oidc","permalink":"/nifikop/docs/v0.14.0/3_tasks/2_security/2_authentication/1_oidc","draft":false,"unlisted":false,"editUrl":"https://github.com/konpyutaika/nifikop/edit/master/site/website/versioned_docs/version-v0.14.0/3_tasks/2_security/2_authentication/1_oidc.md","tags":[],"version":"v0.14.0","lastUpdatedBy":"Juldrixx","lastUpdatedAt":1707144987000,"frontMatter":{"id":"1_oidc","title":"OpenId Connect","sidebar_label":"OpenId Connect"},"sidebar":"docs","previous":{"title":"SSL","permalink":"/nifikop/docs/v0.14.0/3_tasks/2_security/1_ssl"},"next":{"title":"Custom Authorizers","permalink":"/nifikop/docs/v0.14.0/3_tasks/2_security/2_authorization/1_authorizer"}}');var o=n(62540),r=n(43023);const s={id:"1_oidc",title:"OpenId Connect",sidebar_label:"OpenId Connect"},c=void 0,a={},d=[];function u(i){const e={a:"a",code:"code",p:"p",pre:"pre",...(0,r.R)(),...i.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(e.p,{children:["To enable authentication via OpenId Connect refering to ",(0,o.jsx)(e.a,{href:"https://nifi.apache.org/docs/nifi-docs/html/administration-guide.html",children:"NiFi Administration guide"})," required some configuration into ",(0,o.jsx)(e.code,{children:"nifi.properties"}),"."]}),"\n",(0,o.jsxs)(e.p,{children:["In addition and to ensure multiple identity provider support, we recommended to add the following configuration to your ",(0,o.jsx)(e.code,{children:"nifi.properties"}),":"]}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-sh",children:"nifi.security.identity.mapping.pattern.dn=CN=([^,]*)(?:, (?:O|OU)=.*)?\nnifi.security.identity.mapping.value.dn=$1\nnifi.security.identity.mapping.transform.dn=NONE\n"})}),"\n",(0,o.jsxs)(e.p,{children:["To perform this with ",(0,o.jsx)(e.code,{children:"NiFiKop"})," you just have to configure the ",(0,o.jsx)(e.code,{children:"Spec.NifiProperties.OverrideConfigs"})," field with your OIDC configuration, for example:"]}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-yaml",children:"apiVersion: nifi.konpyutaika.com/v1alpha1\nkind: NifiCluster\n...\nspec:\n  ...\n  readOnlyConfig:\n    # NifiProperties configuration that will be applied to the node.\n    nifiProperties:\n      webProxyHosts:\n        - nifistandard2.trycatchlearn.fr:8443\n      # Additionnal nifi.properties configuration that will override the one produced based\n      # on template and configurations.\n      overrideConfigs: |\n        nifi.security.user.oidc.discovery.url=<oidc server discovery url>\n        nifi.security.user.oidc.client.id=<oidc client's id>\n        nifi.security.user.oidc.client.secret=<oidc client's secret>\n        nifi.security.identity.mapping.pattern.dn=CN=([^,]*)(?:, (?:O|OU)=.*)?\n        nifi.security.identity.mapping.value.dn=$1\n        nifi.security.identity.mapping.transform.dn=NONE\n      ...\n   ...\n...\n"})})]})}function p(i={}){const{wrapper:e}={...(0,r.R)(),...i.components};return e?(0,o.jsx)(e,{...i,children:(0,o.jsx)(u,{...i})}):u(i)}},43023:(i,e,n)=>{n.d(e,{R:()=>s,x:()=>c});var t=n(63696);const o={},r=t.createContext(o);function s(i){const e=t.useContext(r);return t.useMemo((function(){return"function"==typeof i?i(e):{...e,...i}}),[e,i])}function c(i){let e;return e=i.disableParentContext?"function"==typeof i.components?i.components(o):i.components||o:s(i.components),t.createElement(r.Provider,{value:e},i.children)}}}]);