"use strict";(self.webpackChunkreact_native_website=self.webpackChunkreact_native_website||[]).push([[93461],{29126:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>s,default:()=>h,frontMatter:()=>r,metadata:()=>c,toc:()=>d});var i=n(62540),o=n(43023);const r={id:"4_v1.3.1_to_v1.4.0",title:"v1.3.1 to v1.4.0",sidebar_label:"v1.3.1 to v1.4.0"},s="Getting started",c={id:"7_upgrade_guides/4_v1.3.1_to_v1.4.0",title:"v1.3.1 to v1.4.0",description:"PR #290 changed the default NiFi sensitive algorithm from PBEWITHMD5AND256BITAES-CBC-OPENSSL to NIFIPBKDF2AESGCM256. If you have overridden the property nifi.sensitive.props.algorithm in the nifi.properties then you can ignore this guide.",source:"@site/versioned_docs/version-v1.4.0/7_upgrade_guides/4_v1.3.1_to_v1.4.0.md",sourceDirName:"7_upgrade_guides",slug:"/7_upgrade_guides/4_v1.3.1_to_v1.4.0",permalink:"/nifikop/docs/v1.4.0/7_upgrade_guides/4_v1.3.1_to_v1.4.0",draft:!1,unlisted:!1,editUrl:"https://github.com/konpyutaika/nifikop/edit/master/site/website/versioned_docs/version-v1.4.0/7_upgrade_guides/4_v1.3.1_to_v1.4.0.md",tags:[],version:"v1.4.0",lastUpdatedBy:"Juldrixx",lastUpdatedAt:1695217909e3,frontMatter:{id:"4_v1.3.1_to_v1.4.0",title:"v1.3.1 to v1.4.0",sidebar_label:"v1.3.1 to v1.4.0"},sidebar:"docs",previous:{title:"v0.16.0 to v1.0.0",permalink:"/nifikop/docs/v1.4.0/7_upgrade_guides/3_v0.16.0_to_v1.0.0"}},a={},d=[];function p(e){const t={a:"a",blockquote:"blockquote",code:"code",h1:"h1",p:"p",pre:"pre",...(0,o.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.a,{href:"https://github.com/konpyutaika/nifikop/pull/290",children:"PR #290"})," changed the default NiFi sensitive algorithm from ",(0,i.jsx)(t.code,{children:"PBEWITHMD5AND256BITAES-CBC-OPENSSL"})," to ",(0,i.jsx)(t.code,{children:"NIFI_PBKDF2_AES_GCM_256"}),". If you have overridden the property ",(0,i.jsx)(t.code,{children:"nifi.sensitive.props.algorithm"})," in the ",(0,i.jsx)(t.code,{children:"nifi.properties"})," then you can ignore this guide."]}),"\n",(0,i.jsx)(t.h1,{id:"getting-started",children:"Getting started"}),"\n",(0,i.jsxs)(t.p,{children:["If you have overridden the default ",(0,i.jsx)(t.code,{children:"nifi.sensitive.props.algorithm"}),", then there are no special upgrade instructions. If you have, you need to upadate the flow configuration to recalculate the sensitive value beforehand. To do so, you need to use the ",(0,i.jsx)(t.a,{href:"https://nifi.apache.org/docs/nifi-docs/html/toolkit-guide.html#encrypt_config_tool",children:"NiFi Encrypt-Config Tool"})," to change the algorithm."]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-sh",children:"encrypt-config.sh -n nifi.properties -f flow.xml.gz -x -s PROPERTIES_KEY -A NIFI_PBKDF2_AES_GCM_256\nencrypt-config.sh -n nifi.properties -f flow.json.gz -x -s PROPERTIES_KEY -A NIFI_PBKDF2_AES_GCM_256\n"})}),"\n",(0,i.jsxs)(t.blockquote,{children:["\n",(0,i.jsxs)(t.p,{children:["Source: ",(0,i.jsx)(t.a,{href:"https://exceptionfactory.com/posts/2021/07/29/deciphering-apache-nifi-component-property-encryption/",children:"https://exceptionfactory.com/posts/2021/07/29/deciphering-apache-nifi-component-property-encryption/"})]}),"\n"]}),"\n",(0,i.jsxs)(t.p,{children:["You can do this automatically using an ",(0,i.jsx)(t.code,{children:"initContainer"}),". To do this, you stop the operator, update the ",(0,i.jsx)(t.code,{children:"NifiCluster"})," with this new ",(0,i.jsx)(t.code,{children:"initContainer"})," and then upgrade and restart the operator. Finally, you can remove the ",(0,i.jsx)(t.code,{children:"initContainer"}),"."]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-yaml",children:'initContainers:\n  - image: "apache/nifi-toolkit:latest"\n    name: nifi-toolkit\n    imagePullPolicy: Always\n    command:\n      - "sh"\n      - "-c"\n      - "NIFI_SENSITIVE_PROPS_KEY=$(grep \'nifi.sensitive.props.key\' /opt/nifi/nifi-current/conf/nifi.properties | cut -d\'=\' -f2) && bin/encrypt-config.sh -n /opt/nifi/nifi-current/conf/nifi.properties -f /opt/nifi/data/flow.json.gz -x -A NIFI_PBKDF2_AES_GCM_256 -s $NIFI_SENSITIVE_PROPS_KEY; bin/encrypt-config.sh -n /opt/nifi/nifi-current/conf/nifi.properties -f /opt/nifi/data/flow.xml.gz -x -A NIFI_PBKDF2_AES_GCM_256 -s $NIFI_SENSITIVE_PROPS_KEY"\n    volumeMounts:\n      - name: data\n        mountPath: /opt/nifi/data\n      - name: conf\n        mountPath: /opt/nifi/nifi-current/conf\n'})}),"\n",(0,i.jsxs)(t.blockquote,{children:["\n",(0,i.jsxs)(t.p,{children:["Adapt the ",(0,i.jsx)(t.code,{children:"volumeMounts"})," and ",(0,i.jsx)(t.code,{children:"mountPath"})," to your needs."]}),"\n"]})]})}function h(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(p,{...e})}):p(e)}},43023:(e,t,n)=>{n.d(t,{R:()=>s,x:()=>c});var i=n(63696);const o={},r=i.createContext(o);function s(e){const t=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),i.createElement(r.Provider,{value:t},e.children)}}}]);