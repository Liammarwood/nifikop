(window.webpackJsonp=window.webpackJsonp||[]).push([[479],{546:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return b})),r.d(t,"metadata",(function(){return c})),r.d(t,"rightToc",(function(){return p})),r.d(t,"default",(function(){return o}));var n=r(2),a=r(6),l=(r(0),r(563)),i=["components"],b={id:"6_nifi_usergroup",title:"NiFi UserGroup",sidebar_label:"NiFi UserGroup"},c={unversionedId:"5_references/6_nifi_usergroup",id:"version-v0.6.1/5_references/6_nifi_usergroup",isDocsHomePage:!1,title:"NiFi UserGroup",description:"NifiUserGroup is the Schema for the nifi user groups API.",source:"@site/versioned_docs/version-v0.6.1/5_references/6_nifi_usergroup.md",slug:"/5_references/6_nifi_usergroup",permalink:"/nifikop/docs/v0.6.1/5_references/6_nifi_usergroup",editUrl:"https://github.com/konpyutaika/nifikop/edit/master/site/website/versioned_docs/version-v0.6.1/5_references/6_nifi_usergroup.md",version:"v0.6.1",lastUpdatedBy:"Alexandre Guitton",lastUpdatedAt:1621194888,sidebar_label:"NiFi UserGroup",sidebar:"version-v0.6.1/docs",previous:{title:"NiFi Dataflow",permalink:"/nifikop/docs/v0.6.1/5_references/5_nifi_dataflow"},next:{title:"Developer guide",permalink:"/nifikop/docs/v0.6.1/6_contributing/1_developer_guide"}},p=[{value:"NifiUser",id:"nifiuser",children:[]},{value:"NifiUserGroupSpec",id:"nifiusergroupspec",children:[]},{value:"NifiUserGroupStatus",id:"nifiusergroupstatus",children:[]},{value:"UserReference",id:"userreference",children:[]}],u={rightToc:p};function o(e){var t=e.components,r=Object(a.a)(e,i);return Object(l.b)("wrapper",Object(n.a)({},u,r,{components:t,mdxType:"MDXLayout"}),Object(l.b)("p",null,Object(l.b)("inlineCode",{parentName:"p"},"NifiUserGroup")," is the Schema for the nifi user groups API."),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: nifi.orange.com/v1alpha1\nkind: NifiUserGroup\nmetadata:\n  name: group-test\nspec:\n  clusterRef:\n    name: nc\n    namespace: nifikop\n  usersRef:\n    - name: nc-0-node.nc-headless.nifikop.svc.cluster.local\n    - name: nc-controller.nifikop.mgt.cluster.local\n  accessPolicies:\n    - type: global\n      action: read\n      resource: /counters\n")),Object(l.b)("h2",{id:"nifiuser"},"NifiUser"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Field"),Object(l.b)("th",{parentName:"tr",align:null},"Type"),Object(l.b)("th",{parentName:"tr",align:null},"Description"),Object(l.b)("th",{parentName:"tr",align:null},"Required"),Object(l.b)("th",{parentName:"tr",align:null},"Default"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"metadata"),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("a",{parentName:"td",href:"https://godoc.org/k8s.io/apimachinery/pkg/apis/meta/v1#ObjectMeta"},"ObjectMetadata")),Object(l.b)("td",{parentName:"tr",align:null},"is metadata that all persisted resources must have, which includes all objects usergroups must create."),Object(l.b)("td",{parentName:"tr",align:null},"No"),Object(l.b)("td",{parentName:"tr",align:null},"nil")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"spec"),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("a",{parentName:"td",href:"#nifiusergroupspec"},"NifiUserGroupSpec")),Object(l.b)("td",{parentName:"tr",align:null},"defines the desired state of NifiUserGroup."),Object(l.b)("td",{parentName:"tr",align:null},"No"),Object(l.b)("td",{parentName:"tr",align:null},"nil")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"status"),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("a",{parentName:"td",href:"#nifiusergroupstatus"},"NifiUserGroupStatus")),Object(l.b)("td",{parentName:"tr",align:null},"defines the observed state of NifiUserGroup."),Object(l.b)("td",{parentName:"tr",align:null},"No"),Object(l.b)("td",{parentName:"tr",align:null},"nil")))),Object(l.b)("h2",{id:"nifiusergroupspec"},"NifiUserGroupSpec"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Field"),Object(l.b)("th",{parentName:"tr",align:null},"Type"),Object(l.b)("th",{parentName:"tr",align:null},"Description"),Object(l.b)("th",{parentName:"tr",align:null},"Required"),Object(l.b)("th",{parentName:"tr",align:null},"Default"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"clusterRef"),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("a",{parentName:"td",href:"/nifikop/docs/v0.6.1/5_references/2_nifi_user#clusterreference"},"ClusterReference")),Object(l.b)("td",{parentName:"tr",align:null},"contains the reference to the NifiCluster with the one the user is linked."),Object(l.b)("td",{parentName:"tr",align:null},"Yes"),Object(l.b)("td",{parentName:"tr",align:null},"-")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"usersRef"),Object(l.b)("td",{parentName:"tr",align:null},"["," ","]",Object(l.b)("a",{parentName:"td",href:"#userref"},"UserReference")),Object(l.b)("td",{parentName:"tr",align:null},"contains the list of reference to NifiUsers that are part to the group."),Object(l.b)("td",{parentName:"tr",align:null},"No"),Object(l.b)("td",{parentName:"tr",align:null},"[]")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"accessPolicies"),Object(l.b)("td",{parentName:"tr",align:null},"["," ","]",Object(l.b)("a",{parentName:"td",href:"/nifikop/docs/v0.6.1/5_references/2_nifi_user#accesspolicy"},"AccessPolicy")),Object(l.b)("td",{parentName:"tr",align:null},"defines the list of access policies that will be granted to the group."),Object(l.b)("td",{parentName:"tr",align:null},"No"),Object(l.b)("td",{parentName:"tr",align:null},"[]")))),Object(l.b)("h2",{id:"nifiusergroupstatus"},"NifiUserGroupStatus"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Field"),Object(l.b)("th",{parentName:"tr",align:null},"Type"),Object(l.b)("th",{parentName:"tr",align:null},"Description"),Object(l.b)("th",{parentName:"tr",align:null},"Required"),Object(l.b)("th",{parentName:"tr",align:null},"Default"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"id"),Object(l.b)("td",{parentName:"tr",align:null},"string"),Object(l.b)("td",{parentName:"tr",align:null},"the nifi usergroup's node id."),Object(l.b)("td",{parentName:"tr",align:null},"Yes"),Object(l.b)("td",{parentName:"tr",align:null},"-")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"version"),Object(l.b)("td",{parentName:"tr",align:null},"string"),Object(l.b)("td",{parentName:"tr",align:null},"the last nifi usergroup's node revision version catched."),Object(l.b)("td",{parentName:"tr",align:null},"Yes"),Object(l.b)("td",{parentName:"tr",align:null},"-")))),Object(l.b)("h2",{id:"userreference"},"UserReference"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Field"),Object(l.b)("th",{parentName:"tr",align:null},"Type"),Object(l.b)("th",{parentName:"tr",align:null},"Description"),Object(l.b)("th",{parentName:"tr",align:null},"Required"),Object(l.b)("th",{parentName:"tr",align:null},"Default"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"name"),Object(l.b)("td",{parentName:"tr",align:null},"string"),Object(l.b)("td",{parentName:"tr",align:null},"name of the NifiUser."),Object(l.b)("td",{parentName:"tr",align:null},"Yes"),Object(l.b)("td",{parentName:"tr",align:null},"-")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"namespace"),Object(l.b)("td",{parentName:"tr",align:null},"string"),Object(l.b)("td",{parentName:"tr",align:null},"the NifiUser namespace location."),Object(l.b)("td",{parentName:"tr",align:null},"Yes"),Object(l.b)("td",{parentName:"tr",align:null},"-")))))}o.isMDXComponent=!0},563:function(e,t,r){"use strict";r.d(t,"a",(function(){return o})),r.d(t,"b",(function(){return m}));var n=r(0),a=r.n(n);function l(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function b(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){l(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=a.a.createContext({}),u=function(e){var t=a.a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):b(b({},t),e)),r},o=function(e){var t=u(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,l=e.originalType,i=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),o=u(r),d=n,m=o["".concat(i,".").concat(d)]||o[d]||s[d]||l;return r?a.a.createElement(m,b(b({ref:t},p),{},{components:r})):a.a.createElement(m,b({ref:t},p))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=r.length,i=new Array(l);i[0]=d;var b={};for(var c in t)hasOwnProperty.call(t,c)&&(b[c]=t[c]);b.originalType=e,b.mdxType="string"==typeof e?e:n,i[1]=b;for(var p=2;p<l;p++)i[p]=r[p];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"}}]);