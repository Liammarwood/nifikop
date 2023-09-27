"use strict";(self.webpackChunkreact_native_website=self.webpackChunkreact_native_website||[]).push([[59641],{35318:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>m});var n=a(27378);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),s=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=s(a),m=r,u=d["".concat(p,".").concat(m)]||d[m]||f[m]||i;return a?n.createElement(u,o(o({ref:t},c),{},{components:a})):n.createElement(u,o({ref:t},c))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var s=2;s<i;s++)o[s]=a[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},73747:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>p,default:()=>m,frontMatter:()=>l,metadata:()=>s,toc:()=>f});var n=a(25773),r=a(30808),i=(a(27378),a(35318)),o=["components"],l={id:"1_deploy_dataflow",title:"Deploy dataflow",sidebar_label:"Deploy dataflow"},p=void 0,s={unversionedId:"3_manage_nifi/3_manage_dataflows/1_deploy_dataflow",id:"version-v1.4.0/3_manage_nifi/3_manage_dataflows/1_deploy_dataflow",title:"Deploy dataflow",description:"You can create NiFi dataflows either :",source:"@site/versioned_docs/version-v1.4.0/3_manage_nifi/3_manage_dataflows/1_deploy_dataflow.md",sourceDirName:"3_manage_nifi/3_manage_dataflows",slug:"/3_manage_nifi/3_manage_dataflows/1_deploy_dataflow",permalink:"/nifikop/docs/v1.4.0/3_manage_nifi/3_manage_dataflows/1_deploy_dataflow",draft:!1,editUrl:"https://github.com/konpyutaika/nifikop/edit/master/site/website/versioned_docs/version-v1.4.0/3_manage_nifi/3_manage_dataflows/1_deploy_dataflow.md",tags:[],version:"v1.4.0",lastUpdatedBy:"Juldrixx",lastUpdatedAt:1695033526,formattedLastUpdatedAt:"Sep 18, 2023",frontMatter:{id:"1_deploy_dataflow",title:"Deploy dataflow",sidebar_label:"Deploy dataflow"},sidebar:"docs",previous:{title:"Design Principles",permalink:"/nifikop/docs/v1.4.0/3_manage_nifi/3_manage_dataflows/0_design_principles"},next:{title:"Deploy connection",permalink:"/nifikop/docs/v1.4.0/3_manage_nifi/4_manage_connections/1_deploy_connection"}},c={},f=[],d={toc:f};function m(e){var t=e.components,a=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"You can create NiFi dataflows either :"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"directly against the cluster through its REST API (using UI or some home made scripts), or"),(0,i.kt)("li",{parentName:"ul"},"via the ",(0,i.kt)("inlineCode",{parentName:"li"},"NifiDataflow")," CRD.")),(0,i.kt)("p",null,"If you want more details about the design, just have a look on the ",(0,i.kt)("a",{parentName:"p",href:"./0_design_principles#dataflow-lifecycle-management"},"design page")),(0,i.kt)("p",null,"To deploy a ",(0,i.kt)("a",{parentName:"p",href:"../../5_references/5_nifi_dataflow"},"NifiDataflow")," you have to start by deploying a ",(0,i.kt)("a",{parentName:"p",href:"../../5_references/3_nifi_registry_client"},"NifiRegistryClient")," because ",(0,i.kt)("strong",{parentName:"p"},"NiFiKop")," manages dataflow using the ",(0,i.kt)("a",{parentName:"p",href:"https://nifi.apache.org/registry"},"NiFi Registry feature"),"."),(0,i.kt)("p",null,"Below is an example of ",(0,i.kt)("a",{parentName:"p",href:"../../5_references/3_nifi_registry_client"},"NifiRegistryClient")," :"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: nifi.konpyutaika.com/v1\nkind: NifiRegistryClient\nmetadata:\n  name: registry-client-example\n  namespace: nifikop\nspec:\n  clusterRef:\n    name: nc\n    namespace: nifikop\n  description: "Registry client managed by NiFiKop"\n  uri: "http://nifi.hostname.com:18080"\n')),(0,i.kt)("p",null,"Once you have deployed your ",(0,i.kt)("a",{parentName:"p",href:"../../5_references/3_nifi_registry_client"},"NifiRegistryClient"),", you have the possibility of defining a configuration that you will apply to your ",(0,i.kt)("a",{parentName:"p",href:"../../5_references/5_nifi_dataflow"},"NifiDataflow"),"."),(0,i.kt)("p",null,"This configuration is defined using the ",(0,i.kt)("a",{parentName:"p",href:"../../5_references/4_nifi_parameter_context"},"NifiParameterContext")," CRD, which NiFiKop will convert into a ",(0,i.kt)("a",{parentName:"p",href:"https://nifi.apache.org/docs/nifi-docs/html/user-guide.html#parameter-contexts"},"Parameter context"),"."),(0,i.kt)("p",null,"Below is an example of ",(0,i.kt)("a",{parentName:"p",href:"../../5_references/4_nifi_parameter_context"},"NifiParameterContext"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: nifi.konpyutaika.com/v1\nkind: NifiParameterContext\nmetadata:\n  name: dataflow-lifecycle\n  namespace: demo\nspec:\n  description: "It is a test"\n  clusterRef:\n    name: nc\n    namespace: nifikop\n  secretRefs:\n    - name: secret-params\n      namespace: nifikop\n  parameters:\n    - name: test\n      value: toto\n      description: tutu\n    - name: test2\n      value: toto\n      description: toto\n')),(0,i.kt)("p",null,"As you can see, in the ",(0,i.kt)("a",{parentName:"p",href:"../../5_references/4_nifi_parameter_context"},"NifiParameterContext")," you can refer to some secrets that will be converted into ",(0,i.kt)("a",{parentName:"p",href:"https://nifi.apache.org/docs/nifi-docs/html/user-guide.html#using-parameters-with-sensitive-properties"},"sensitive parameter"),"."),(0,i.kt)("p",null,"Here is an example of secret that you can create that will be used by the configuration above :"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-console"},"kubectl create secret generic secret-params \\\n    --from-literal=secret1=yop \\\n    --from-literal=secret2=yep \\\n    -n nifikop\n")),(0,i.kt)("admonition",{type:"warning"},(0,i.kt)("p",{parentName:"admonition"},"As a sensitive value cannot be retrieved through the Rest API, to update the value of a sensitive parameter, you have to :"),(0,i.kt)("ul",{parentName:"admonition"},(0,i.kt)("li",{parentName:"ul"},"remove it from the secret"),(0,i.kt)("li",{parentName:"ul"},"wait for the next loop"),(0,i.kt)("li",{parentName:"ul"},"insert the parameter with the new value inside the secret")),(0,i.kt)("p",{parentName:"admonition"},"or you can simply create a new ",(0,i.kt)("a",{parentName:"p",href:"../../5_references/4_nifi_parameter_context"},"NifiParameterContext")," and refer it into your ",(0,i.kt)("a",{parentName:"p",href:"../../5_references/5_nifi_dataflow"},"NifiDataflow"),".")),(0,i.kt)("p",null,"You can now deploy your ",(0,i.kt)("a",{parentName:"p",href:"../../5_references/5_nifi_dataflow"},"NifiDataflow")," by referencing the previous objects :"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: nifi.konpyutaika.com/v1\nkind: NifiDataflow\nmetadata:\n  name: dataflow-lifecycle\nspec:\n  parentProcessGroupID: "16cfd2ec-0174-1000-0000-00004b9b35cc"\n  bucketId: "01ced6cc-0378-4893-9403-f6c70d080d4f"\n  flowId: "9b2fb465-fb45-49e7-94fe-45b16b642ac9"\n  flowVersion: 2\n  syncMode: always\n  skipInvalidControllerService: true\n  skipInvalidComponent: true\n  clusterRef:\n    name: nc\n    namespace: nifikop\n  registryClientRef:\n    name: registry-client-example\n    namespace: nifikop\n  parameterContextRef:\n    name: dataflow-lifecycle\n    namespace: demo\n  updateStrategy: drain\n')),(0,i.kt)("p",null,"To find details about the versioned flow information required check the ",(0,i.kt)("a",{parentName:"p",href:"https://nifi.apache.org/docs/nifi-registry-docs/index.html"},"official documentation")),(0,i.kt)("p",null,"You have two modes of control from your dataflow by the operator :"),(0,i.kt)("p",null,"1 - ",(0,i.kt)("inlineCode",{parentName:"p"},"Spec.SyncMode == never")," : The operator will deploy the dataflow as described in the resource, and never control it (unless you change the field to ",(0,i.kt)("inlineCode",{parentName:"p"},"always"),"). It is useful when you want to deploy your dataflow without starting it."),(0,i.kt)("p",null,"2 - ",(0,i.kt)("inlineCode",{parentName:"p"},"Spec.SyncMode == once")," : The operator will deploy the dataflow as described in the resource, run it once, and never control it again (unless you change the field to ",(0,i.kt)("inlineCode",{parentName:"p"},"always"),"). It is useful when you want to deploy your dataflow in a dev environment, and you want to update the dataflow."),(0,i.kt)("p",null,"3 - ",(0,i.kt)("inlineCode",{parentName:"p"},"Spec.SyncMode == always")," : The operator will deploy and ensure the dataflow lifecycle, it will avoid all manual modification directly from the Cluster (e.g remove the process group, remove the versioning, update the parent process group, make some local changes ...). If you want to perform update, rollback or stuff like this, you have to simply update the ",(0,i.kt)("a",{parentName:"p",href:"../../5_references/5_nifi_dataflow"},"NifiDataflow")," resource."),(0,i.kt)("admonition",{type:"important"},(0,i.kt)("p",{parentName:"admonition"},"More information about ",(0,i.kt)("inlineCode",{parentName:"p"},"Spec.UpdateStrategy")," ",(0,i.kt)("a",{parentName:"p",href:"../../5_references/5_nifi_dataflow#componentupdatestrategy"},"here"))))}m.isMDXComponent=!0}}]);