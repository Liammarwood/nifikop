"use strict";(self.webpackChunkreact_native_website=self.webpackChunkreact_native_website||[]).push([[5226],{35318:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>m});var n=r(27378);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=p(r),m=o,f=d["".concat(l,".").concat(m)]||d[m]||u[m]||a;return r?n.createElement(f,i(i({ref:t},c),{},{components:r})):n.createElement(f,i({ref:t},c))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var p=2;p<a;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},21555:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>m,frontMatter:()=>s,metadata:()=>p,toc:()=>u});var n=r(25773),o=r(30808),a=(r(27378),r(35318)),i=["components"],s={id:"1_gke",title:"Google Kubernetes Engine",sidebar_label:"Google Kubernetes Engine"},l=void 0,p={unversionedId:"2_setup/2_platform_setup/1_gke",id:"version-v0.6.3/2_setup/2_platform_setup/1_gke",title:"Google Kubernetes Engine",description:"Follow these instructions to prepare a GKE cluster for NiFiKop",source:"@site/versioned_docs/version-v0.6.3/2_setup/2_platform_setup/1_gke.md",sourceDirName:"2_setup/2_platform_setup",slug:"/2_setup/2_platform_setup/1_gke",permalink:"/nifikop/docs/v0.6.3/2_setup/2_platform_setup/1_gke",draft:!1,editUrl:"https://github.com/konpyutaika/nifikop/edit/master/site/website/versioned_docs/version-v0.6.3/2_setup/2_platform_setup/1_gke.md",tags:[],version:"v0.6.3",lastUpdatedBy:"Alexandre Guitton",lastUpdatedAt:1625866397,formattedLastUpdatedAt:"Jul 9, 2021",frontMatter:{id:"1_gke",title:"Google Kubernetes Engine",sidebar_label:"Google Kubernetes Engine"},sidebar:"version-v0.6.3/docs",previous:{title:"Getting Started",permalink:"/nifikop/docs/v0.6.3/2_setup/1_getting_started"},next:{title:"MiniKube",permalink:"/nifikop/docs/v0.6.3/2_setup/2_platform_setup/2_minikube"}},c={},u=[],d={toc:u};function m(e){var t=e.components,r=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Follow these instructions to prepare a GKE cluster for NiFiKop"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Setup environment variables.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"export GCP_PROJECT=<project_id>\nexport GCP_ZONE=<zone>\nexport CLUSTER_NAME=<cluster-name>\n")),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},"Create a new cluster.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"gcloud container clusters create $CLUSTER_NAME \\\n  --cluster-version latest \\\n  --machine-type=n1-standard-1 \\\n  --num-nodes 4 \\\n  --zone $GCP_ZONE \\\n  --project $GCP_PROJECT\n")),(0,a.kt)("ol",{start:3},(0,a.kt)("li",{parentName:"ol"},"Retrieve your credentials for ",(0,a.kt)("inlineCode",{parentName:"li"},"kubectl"),".")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"cloud container clusters get-credentials $CLUSTER_NAME \\\n    --zone $GCP_ZONE \\\n    --project $GCP_PROJECT\n")),(0,a.kt)("ol",{start:4},(0,a.kt)("li",{parentName:"ol"},"Grant cluster administrator (admin) permissions to the current user. To create the necessary RBAC rules for NiFiKop, the current user requires admin permissions.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"kubectl create clusterrolebinding cluster-admin-binding \\\n    --clusterrole=cluster-admin \\\n    --user=$(gcloud config get-value core/account)\n")))}m.isMDXComponent=!0}}]);