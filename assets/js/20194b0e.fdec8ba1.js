"use strict";(self.webpackChunkreact_native_website=self.webpackChunkreact_native_website||[]).push([[25928],{36663:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>o,default:()=>p,frontMatter:()=>c,metadata:()=>r,toc:()=>u});const r=JSON.parse('{"id":"2_setup/3_install/1_customizable_install_with_helm","title":"Customizable install with Helm","description":"Prerequisites","source":"@site/versioned_docs/version-v0.11.0/2_setup/3_install/1_customizable_install_with_helm.md","sourceDirName":"2_setup/3_install","slug":"/2_setup/3_install/1_customizable_install_with_helm","permalink":"/nifikop/docs/v0.11.0/2_setup/3_install/1_customizable_install_with_helm","draft":false,"unlisted":false,"editUrl":"https://github.com/konpyutaika/nifikop/edit/master/site/website/versioned_docs/version-v0.11.0/2_setup/3_install/1_customizable_install_with_helm.md","tags":[],"version":"v0.11.0","lastUpdatedBy":"Juldrixx","lastUpdatedAt":1707144987000,"frontMatter":{"id":"1_customizable_install_with_helm","title":"Customizable install with Helm","sidebar_label":"Customizable install with Helm"},"sidebar":"docs","previous":{"title":"K3D","permalink":"/nifikop/docs/v0.11.0/2_setup/2_platform_setup/2_k3d"},"next":{"title":"Cluster Scaling","permalink":"/nifikop/docs/v0.11.0/3_tasks/1_nifi_cluster/2_cluster_scaling"}}');var i=t(62540),l=t(43023),s=t(78296),a=t(22491);const c={id:"1_customizable_install_with_helm",title:"Customizable install with Helm",sidebar_label:"Customizable install with Helm"},o=void 0,d={},u=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Introduction",id:"introduction",level:2},{value:"Configuration",id:"configuration",level:3},{value:"Installing the Chart",id:"installing-the-chart",level:3},{value:"Listing deployed charts",id:"listing-deployed-charts",level:3},{value:"Get Status for the helm deployment",id:"get-status-for-the-helm-deployment",level:3},{value:"Uninstaling the Charts",id:"uninstaling-the-charts",level:2},{value:"Troubleshooting",id:"troubleshooting",level:2},{value:"Install of the CRD",id:"install-of-the-crd",level:3}];function h(e){const n={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,l.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Perform any necessary ",(0,i.jsx)(n.a,{href:"/nifikop/docs/v0.11.0/2_setup/2_platform_setup/1_gke",children:"plateform-specific setup"})]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"https://github.com/helm/helm#install",children:"Install a Helm client"})," with a version higher than 3"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"introduction",children:"Introduction"}),"\n",(0,i.jsx)(n.p,{children:"This Helm chart install NiFiKop the Nifi Kubernetes operator to create/configure/manage NiFi\nclusters in a Kubernetes Namespace."}),"\n",(0,i.jsx)(n.p,{children:"It will use Custom Ressources Definition CRDs:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"nificlusters.nifi.konpyutaika.com"}),","]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"nifiusers.nifi.konpyutaika.com"}),","]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"nifiusergroups.nifi.konpyutaika.com"}),","]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"nifiregistryclients.nifi.konpyutaika.com"}),","]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"nifiparametercontexts.nifi.konpyutaika.com"}),","]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"nifidataflows.nifi.konpyutaika.com"}),","]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"configuration",children:"Configuration"}),"\n",(0,i.jsx)(n.p,{children:"The following tables lists the configurable parameters of the NiFi Operator Helm chart and their default values."}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Parameter"}),(0,i.jsx)(n.th,{children:"Description"}),(0,i.jsx)(n.th,{children:"Default"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"image.repository"})}),(0,i.jsx)(n.td,{children:"Image"}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"ghcr.io/konpyutaika/docker-images/nifikop"})})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"image.tag"})}),(0,i.jsx)(n.td,{children:"Image tag"}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"v0.11.0-release"})})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"image.pullPolicy"})}),(0,i.jsx)(n.td,{children:"Image pull policy"}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"Always"})})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"image.imagePullSecrets.enabled"})}),(0,i.jsx)(n.td,{children:"Enable tue use of secret for docker image"}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"false"})})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"image.imagePullSecrets.name"})}),(0,i.jsx)(n.td,{children:"Name of the secret to connect to docker registry"}),(0,i.jsx)(n.td,{children:"-"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"certManager.enabled"})}),(0,i.jsx)(n.td,{children:"Enable cert-manager integration"}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"true"})})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"rbacEnable"})}),(0,i.jsx)(n.td,{children:"If true, create & use RBAC resources"}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"true"})})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"resources"})}),(0,i.jsx)(n.td,{children:"Pod resource requests & limits"}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"{}"})})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"metrics.enabled"})}),(0,i.jsx)(n.td,{children:"deploy service for metrics"}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"false"})})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"metrics.port"})}),(0,i.jsx)(n.td,{children:"Set port for operator metrics"}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"8081"})})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"logLevel"})}),(0,i.jsx)(n.td,{children:"Log level to output"}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"Info"})})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"certManager.clusterScoped"})}),(0,i.jsx)(n.td,{children:"If true setup cluster scoped resources"}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"false"})})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"namespaces"})}),(0,i.jsxs)(n.td,{children:["List of namespaces where Operator watches for custom resources. Make sure the operator ServiceAccount is granted ",(0,i.jsx)(n.code,{children:"get"})," permissions on this ",(0,i.jsx)(n.code,{children:"Node"})," resource when using limited RBACs."]}),(0,i.jsxs)(n.td,{children:[(0,i.jsx)(n.code,{children:'""'})," i.e. all namespaces"]})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"nodeSelector"})}),(0,i.jsx)(n.td,{children:"Node selector configuration for operator pod"}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"{}"})})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"affinity"})}),(0,i.jsx)(n.td,{children:"Node affinity configuration for operator pod"}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"{}"})})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"tolerations"})}),(0,i.jsx)(n.td,{children:"Toleration configuration for operator pod"}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"{}"})})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"serviceAccount.create"})}),(0,i.jsx)(n.td,{children:"Whether the SA creation is delegated to the chart or not"}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"true"})})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"serviceAccount.name"})}),(0,i.jsx)(n.td,{children:"Name of the SA used for NiFiKop deployment"}),(0,i.jsx)(n.td,{children:"release name"})]})]})]}),"\n",(0,i.jsxs)(n.p,{children:["Specify each parameter using the ",(0,i.jsx)(n.code,{children:"--set key=value[,key=value]"})," argument to ",(0,i.jsx)(n.code,{children:"helm install"}),". For example,"]}),"\n",(0,i.jsx)(n.p,{children:"Alternatively, a YAML file that specifies the values for the above parameters can be provided while installing the chart. For example,"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-console",children:"$ helm install nifikop \\\n      konpyutaika/nifikop \\\n      -f values.yaml\n"})}),"\n",(0,i.jsx)(n.h3,{id:"installing-the-chart",children:"Installing the Chart"}),"\n",(0,i.jsxs)(n.admonition,{title:"Skip CRDs",type:"important",children:[(0,i.jsxs)(n.p,{children:["In the case where you don't want to deploy the crds using helm (",(0,i.jsx)(n.code,{children:"--skip-crds"}),") you need to deploy manually the crds beforehand:"]}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"kubectl apply -f https://raw.githubusercontent.com/konpyutaika/nifikop/master/config/crd/bases/nifi.konpyutaika.com_nificlusters.yaml\nkubectl apply -f https://raw.githubusercontent.com/konpyutaika/nifikop/master/config/crd/bases/nifi.konpyutaika.com_nifiusers.yaml\nkubectl apply -f https://raw.githubusercontent.com/konpyutaika/nifikop/master/config/crd/bases/nifi.konpyutaika.com_nifiusergroups.yaml\nkubectl apply -f https://raw.githubusercontent.com/konpyutaika/nifikop/master/config/crd/bases/nifi.konpyutaika.com_nifidataflows.yaml\nkubectl apply -f https://raw.githubusercontent.com/konpyutaika/nifikop/master/config/crd/bases/nifi.konpyutaika.com_nifiparametercontexts.yaml\nkubectl apply -f https://raw.githubusercontent.com/konpyutaika/nifikop/master/config/crd/bases/nifi.konpyutaika.com_nifiregistryclients.yaml\n"})})]}),"\n",(0,i.jsxs)(s.A,{defaultValue:"dryrun",values:[{label:"dry run",value:"dryrun"},{label:"release name",value:"rn"},{label:"set parameters",value:"set-params"}],children:[(0,i.jsx)(a.A,{value:"dryrun",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:'helm install nifikop konpyutaika/nifikop \\\n    --dry-run \\\n    --set logLevel=Debug \\\n    --set namespaces={"nifikop"}\n'})})}),(0,i.jsx)(a.A,{value:"rn",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"helm install <release name> konpyutaika/nifikop\n"})})}),(0,i.jsx)(a.A,{value:"set-params",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:'helm install nifikop konpyutaika/nifikop --set namespaces={"nifikop"}\n'})})})]}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:["the ",(0,i.jsx)(n.code,{children:"--replace"})," flag allow you to reuses a charts release name"]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"listing-deployed-charts",children:"Listing deployed charts"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"helm list\n"})}),"\n",(0,i.jsx)(n.h3,{id:"get-status-for-the-helm-deployment",children:"Get Status for the helm deployment"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"helm status nifikop\n"})}),"\n",(0,i.jsx)(n.h2,{id:"uninstaling-the-charts",children:"Uninstaling the Charts"}),"\n",(0,i.jsx)(n.p,{children:"If you want to delete the operator from your Kubernetes cluster, the operator deployment\nshould be deleted."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"helm del nifikop\n"})}),"\n",(0,i.jsx)(n.p,{children:"The command removes all the Kubernetes components associated with the chart and deletes the helm release."}),"\n",(0,i.jsx)(n.admonition,{type:"tip",children:(0,i.jsx)(n.p,{children:"The CRD created by the chart are not removed by default and should be manually cleaned up (if required)"})}),"\n",(0,i.jsx)(n.p,{children:"Manually delete the CRD:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"kubectl delete crd nificlusters.nifi.konpyutaika.com\nkubectl delete crd nifiusers.nifi.konpyutaika.com\nkubectl delete crd nifiusergroups.nifi.konpyutaika.com\nkubectl delete crd nifiregistryclients.nifi.konpyutaika.com\nkubectl delete crd nifiparametercontexts.nifi.konpyutaika.com\nkubectl delete crd nifidataflows.nifi.konpyutaika.com\n"})}),"\n",(0,i.jsx)(n.admonition,{type:"warning",children:(0,i.jsxs)(n.p,{children:["If you delete the CRD then\nIt will delete ",(0,i.jsx)(n.strong,{children:"ALL"})," Clusters that has been created using this CRD!!!\nPlease never delete a CRD without very good care"]})}),"\n",(0,i.jsx)(n.p,{children:"Helm always keeps records of what releases happened. Need to see the deleted releases ?"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"helm list --deleted\n"})}),"\n",(0,i.jsx)(n.p,{children:"Need to see all of the releases (deleted and currently deployed, as well as releases that\nfailed) ?"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"helm list --all\n"})}),"\n",(0,i.jsxs)(n.p,{children:["Because Helm keeps records of deleted releases, a release name cannot be re-used. (If you really need to re-use a\nrelease name, you can use the ",(0,i.jsx)(n.code,{children:"--replace"})," flag, but it will simply re-use the existing release and replace its\nresources.)"]}),"\n",(0,i.jsx)(n.p,{children:"Note that because releases are preserved in this way, you can rollback a deleted resource, and have it re-activate."}),"\n",(0,i.jsx)(n.p,{children:"To purge a release"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"helm delete --purge nifikop\n"})}),"\n",(0,i.jsx)(n.h2,{id:"troubleshooting",children:"Troubleshooting"}),"\n",(0,i.jsx)(n.h3,{id:"install-of-the-crd",children:"Install of the CRD"}),"\n",(0,i.jsx)(n.p,{children:"By default, the chart will install the CRDs, but this installation is global for the whole\ncluster, and you may want to not modify the already deployed CRDs."}),"\n",(0,i.jsx)(n.p,{children:"In this case there is a parameter to say to not install the CRDs:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:'$ helm install --name nifikop ./helm/nifikop --set namespaces={"nifikop"} --skip-crds\n'})})]})}function p(e={}){const{wrapper:n}={...(0,l.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},22491:(e,n,t)=>{t.d(n,{A:()=>s});t(63696);var r=t(11750);const i={tabItem:"tabItem_wHwb"};var l=t(62540);function s(e){var n=e.children,t=e.hidden,s=e.className;return(0,l.jsx)("div",{role:"tabpanel",className:(0,r.A)(i.tabItem,s),hidden:t,children:n})}},78296:(e,n,t)=>{t.d(n,{A:()=>k});var r=t(63696),i=t(11750),l=t(90766),s=t(49519),a=t(14395),c=t(35043),o=t(44544),d=t(94243);function u(e){var n,t;return null!=(n=null==(t=r.Children.toArray(e).filter((function(e){return"\n"!==e})).map((function(e){if(!e||(0,r.isValidElement)(e)&&((n=e.props)&&"object"==typeof n&&"value"in n))return e;var n;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:t.filter(Boolean))?n:[]}function h(e){var n=e.values,t=e.children;return(0,r.useMemo)((function(){var e=null!=n?n:function(e){return u(e).map((function(e){var n=e.props;return{value:n.value,label:n.label,attributes:n.attributes,default:n.default}}))}(t);return function(e){var n=(0,o.XI)(e,(function(e,n){return e.value===n.value}));if(n.length>0)throw new Error('Docusaurus error: Duplicate values "'+n.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[n,t])}function p(e){var n=e.value;return e.tabValues.some((function(e){return e.value===n}))}function m(e){var n=e.queryString,t=void 0!==n&&n,i=e.groupId,l=(0,s.W6)(),a=function(e){var n=e.queryString,t=void 0!==n&&n,r=e.groupId;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=r?r:null}({queryString:t,groupId:i});return[(0,c.aZ)(a),(0,r.useCallback)((function(e){if(a){var n=new URLSearchParams(l.location.search);n.set(a,e),l.replace(Object.assign({},l.location,{search:n.toString()}))}}),[a,l])]}function f(e){var n,t,i,l,s=e.defaultValue,c=e.queryString,o=void 0!==c&&c,u=e.groupId,f=h(e),x=(0,r.useState)((function(){return function(e){var n,t=e.defaultValue,r=e.tabValues;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:r}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+t+'" but none of its children has the corresponding value. Available values are: '+r.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return t}var i=null!=(n=r.find((function(e){return e.default})))?n:r[0];if(!i)throw new Error("Unexpected error: 0 tabValues");return i.value}({defaultValue:s,tabValues:f})})),j=x[0],b=x[1],g=m({queryString:o,groupId:u}),v=g[0],y=g[1],k=(n=function(e){return e?"docusaurus.tab."+e:null}({groupId:u}.groupId),t=(0,d.Dv)(n),i=t[0],l=t[1],[i,(0,r.useCallback)((function(e){n&&l.set(e)}),[n,l])]),_=k[0],w=k[1],I=function(){var e=null!=v?v:_;return p({value:e,tabValues:f})?e:null}();return(0,a.A)((function(){I&&b(I)}),[I]),{selectedValue:j,selectValue:(0,r.useCallback)((function(e){if(!p({value:e,tabValues:f}))throw new Error("Can't select invalid tab value="+e);b(e),y(e),w(e)}),[y,w,f]),tabValues:f}}var x=t(86681);const j={tabList:"tabList_J5MA",tabItem:"tabItem_l0OV"};var b=t(62540);function g(e){var n=e.className,t=e.block,r=e.selectedValue,s=e.selectValue,a=e.tabValues,c=[],o=(0,l.a_)().blockElementScrollPositionUntilNextRender,d=function(e){var n=e.currentTarget,t=c.indexOf(n),i=a[t].value;i!==r&&(o(n),s(i))},u=function(e){var n,t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":var r,i=c.indexOf(e.currentTarget)+1;t=null!=(r=c[i])?r:c[0];break;case"ArrowLeft":var l,s=c.indexOf(e.currentTarget)-1;t=null!=(l=c[s])?l:c[c.length-1]}null==(n=t)||n.focus()};return(0,b.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.A)("tabs",{"tabs--block":t},n),children:a.map((function(e){var n=e.value,t=e.label,l=e.attributes;return(0,b.jsx)("li",Object.assign({role:"tab",tabIndex:r===n?0:-1,"aria-selected":r===n,ref:function(e){return c.push(e)},onKeyDown:u,onClick:d},l,{className:(0,i.A)("tabs__item",j.tabItem,null==l?void 0:l.className,{"tabs__item--active":r===n}),children:null!=t?t:n}),n)}))})}function v(e){var n=e.lazy,t=e.children,l=e.selectedValue,s=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){var a=s.find((function(e){return e.props.value===l}));return a?(0,r.cloneElement)(a,{className:(0,i.A)("margin-top--md",a.props.className)}):null}return(0,b.jsx)("div",{className:"margin-top--md",children:s.map((function(e,n){return(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==l})}))})}function y(e){var n=f(e);return(0,b.jsxs)("div",{className:(0,i.A)("tabs-container",j.tabList),children:[(0,b.jsx)(g,Object.assign({},n,e)),(0,b.jsx)(v,Object.assign({},n,e))]})}function k(e){var n=(0,x.A)();return(0,b.jsx)(y,Object.assign({},e,{children:u(e.children)}),String(n))}},43023:(e,n,t)=>{t.d(n,{R:()=>s,x:()=>a});var r=t(63696);const i={},l=r.createContext(i);function s(e){const n=r.useContext(l);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),r.createElement(l.Provider,{value:n},e.children)}}}]);