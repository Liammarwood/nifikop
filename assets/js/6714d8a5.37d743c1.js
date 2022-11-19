"use strict";(self.webpackChunkreact_native_website=self.webpackChunkreact_native_website||[]).push([[3522],{35318:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>v});var r=n(27378);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=s(n),v=a,d=m["".concat(p,".").concat(v)]||m[v]||u[v]||o;return n?r.createElement(d,i(i({ref:t},c),{},{components:n})):r.createElement(d,i({ref:t},c))}));function v(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},47945:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>p,default:()=>v,frontMatter:()=>l,metadata:()=>s,toc:()=>u});var r=n(25773),a=n(30808),o=(n(27378),n(35318)),i=["components"],l={id:"2_v0.15.0_to_v1.0.0",title:"v0.15.0 to v1.0.0",sidebar_label:"v0.15.0 to v1.0.0"},p="Getting started",s={unversionedId:"7_upgrade_guides/2_v0.15.0_to_v1.0.0",id:"version-v1.0.0/7_upgrade_guides/2_v0.15.0_to_v1.0.0",title:"v0.15.0 to v1.0.0",description:"Moving from v0.15.0 to v1.0.0 version implies the migration of some CRD versions from v1alpha1 to v1:",source:"@site/versioned_docs/version-v1.0.0/7_upgrade_guides/3_v0.15.0_to_v1.0.0.md",sourceDirName:"7_upgrade_guides",slug:"/7_upgrade_guides/2_v0.15.0_to_v1.0.0",permalink:"/nifikop/docs/7_upgrade_guides/2_v0.15.0_to_v1.0.0",draft:!1,editUrl:"https://github.com/konpyutaika/nifikop/edit/master/site/website/versioned_docs/version-v1.0.0/7_upgrade_guides/3_v0.15.0_to_v1.0.0.md",tags:[],version:"v1.0.0",lastUpdatedBy:"Alexandre Guitton",lastUpdatedAt:1668875267,formattedLastUpdatedAt:"Nov 19, 2022",frontMatter:{id:"2_v0.15.0_to_v1.0.0",title:"v0.15.0 to v1.0.0",sidebar_label:"v0.15.0 to v1.0.0"}},c={},u=[],m={toc:u};function v(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"getting-started"},"Getting started"),(0,o.kt)("p",null,"Moving from ",(0,o.kt)("inlineCode",{parentName:"p"},"v0.15.0")," to ",(0,o.kt)("inlineCode",{parentName:"p"},"v1.0.0")," version implies the migration of some CRD versions from ",(0,o.kt)("inlineCode",{parentName:"p"},"v1alpha1")," to ",(0,o.kt)("inlineCode",{parentName:"p"},"v1"),":"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"NifiCluster"),(0,o.kt)("li",{parentName:"ul"},"NifiDataflow"),(0,o.kt)("li",{parentName:"ul"},"NifiParameterContext"),(0,o.kt)("li",{parentName:"ul"},"NifiRegistryClient"),(0,o.kt)("li",{parentName:"ul"},"NifiUser"),(0,o.kt)("li",{parentName:"ul"},"NifiUserGroup")),(0,o.kt)("p",null,"To manage this resource version migration, you have to: "),(0,o.kt)("p",null,"1 - Upgrade your NifiKop helm chart release, that will enable conversion webhook in the operator pod (as the ",(0,o.kt)("inlineCode",{parentName:"p"},"webhook.enabled")," values is set to ",(0,o.kt)("inlineCode",{parentName:"p"},"true")," by default).\n2 - Patch the CRDs associated to the resources with : "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"...\nannotations:\n    cert-manager.io/inject-ca-from: ${namespace}/${certificate_name}\n...\nspec:\n  ...\n  conversion:\n    strategy: Webhook\n    webhook:\n      clientConfig:\n        service:\n          namespace: ${namespace}\n          name: ${webhook_service_name}\n          path: /convert\n      conversionReviewVersions:\n        - v1\n        - v1alpha1\n  ...\n")),(0,o.kt)("p",null,"Where :"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"namespace"),": is the namespace in which you will deploy your helm chart."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"certificate_name"),": is ",(0,o.kt)("inlineCode",{parentName:"li"},"${helm release name}-webhook-cert")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"webhook_service_name"),": is ",(0,o.kt)("inlineCode",{parentName:"li"},"${helm release name}-webhook-cert"))))}v.isMDXComponent=!0}}]);