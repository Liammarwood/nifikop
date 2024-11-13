"use strict";(self.webpackChunkreact_native_website=self.webpackChunkreact_native_website||[]).push([[50522],{46497:(e,s,t)=>{t.r(s),t.d(s,{assets:()=>a,contentTitle:()=>l,default:()=>h,frontMatter:()=>d,metadata:()=>i,toc:()=>c});const i=JSON.parse('{"id":"1_concepts/4_roadmap","title":"Roadmap","description":"Available","source":"@site/versioned_docs/version-v1.1.1/1_concepts/4_roadmap.md","sourceDirName":"1_concepts","slug":"/1_concepts/4_roadmap","permalink":"/nifikop/docs/v1.1.1/1_concepts/4_roadmap","draft":false,"unlisted":false,"editUrl":"https://github.com/konpyutaika/nifikop/edit/master/site/website/versioned_docs/version-v1.1.1/1_concepts/4_roadmap.md","tags":[],"version":"v1.1.1","lastUpdatedBy":"Juldrixx","lastUpdatedAt":1707144987000,"frontMatter":{"id":"4_roadmap","title":"Roadmap","sidebar_label":"Roadmap"},"sidebar":"docs","previous":{"title":"Features","permalink":"/nifikop/docs/v1.1.1/1_concepts/3_features"},"next":{"title":"Quick start","permalink":"/nifikop/docs/v1.1.1/2_deploy_nifikop/1_quick_start"}}');var r=t(62540),n=t(43023);const d={id:"4_roadmap",title:"Roadmap",sidebar_label:"Roadmap"},l=void 0,a={},c=[{value:"Available",id:"available",level:2},{value:"NiFi cluster installation",id:"nifi-cluster-installation",level:3},{value:"Graceful NiFi Cluster Scaling",id:"graceful-nifi-cluster-scaling",level:3},{value:"Communication via SSL",id:"communication-via-ssl",level:3},{value:"Dataflow lifecycle management via CRD",id:"dataflow-lifecycle-management-via-crd",level:3},{value:"Users &amp; access policies management",id:"users--access-policies-management",level:3},{value:"Backlog",id:"backlog",level:2},{value:"Monitoring via Prometheus",id:"monitoring-via-prometheus",level:3},{value:"Auto scaling",id:"auto-scaling",level:3},{value:"Seamless Istio mesh support",id:"seamless-istio-mesh-support",level:3}];function o(e){const s={a:"a",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,n.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(s.h2,{id:"available",children:"Available"}),"\n",(0,r.jsx)(s.h3,{id:"nifi-cluster-installation",children:"NiFi cluster installation"}),"\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{}),(0,r.jsx)(s.th,{})]})}),(0,r.jsxs)(s.tbody,{children:[(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"Status"}),(0,r.jsx)(s.td,{children:"Done"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"Priority"}),(0,r.jsx)(s.td,{children:"High"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"Targeted Start date"}),(0,r.jsx)(s.td,{children:"Jan 2020"})]})]})]}),"\n",(0,r.jsx)(s.h3,{id:"graceful-nifi-cluster-scaling",children:"Graceful NiFi Cluster Scaling"}),"\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{}),(0,r.jsx)(s.th,{})]})}),(0,r.jsxs)(s.tbody,{children:[(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"Status"}),(0,r.jsx)(s.td,{children:"Done"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"Priority"}),(0,r.jsx)(s.td,{children:"High"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"Targeted Start date"}),(0,r.jsx)(s.td,{children:"Jan 2020"})]})]})]}),"\n",(0,r.jsxs)(s.p,{children:["Apache NiFi is a good candidate to create an operator, because everything is made to orchestrate it through REST Api calls. With this comes automation of actions such as scaling, following all required steps: ",(0,r.jsx)(s.a,{href:"https://nifi.apache.org/docs/nifi-docs/html/administration-guide.html#decommission-nodes",children:"https://nifi.apache.org/docs/nifi-docs/html/administration-guide.html#decommission-nodes"}),"."]}),"\n",(0,r.jsx)(s.h3,{id:"communication-via-ssl",children:"Communication via SSL"}),"\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{}),(0,r.jsx)(s.th,{})]})}),(0,r.jsxs)(s.tbody,{children:[(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"Status"}),(0,r.jsx)(s.td,{children:"Done"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"Priority"}),(0,r.jsx)(s.td,{children:"High"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"Targeted Start date"}),(0,r.jsx)(s.td,{children:"May 2020"})]})]})]}),"\n",(0,r.jsx)(s.p,{children:"The operator fully automates NiFi's SSL support.\nThe operator can provision the required secrets and certificates for you, or you can provide your own."}),"\n",(0,r.jsx)(s.h3,{id:"dataflow-lifecycle-management-via-crd",children:"Dataflow lifecycle management via CRD"}),"\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{}),(0,r.jsx)(s.th,{})]})}),(0,r.jsxs)(s.tbody,{children:[(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"Status"}),(0,r.jsx)(s.td,{children:"Done"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"Priority"}),(0,r.jsx)(s.td,{children:"High"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"Targeted Start date"}),(0,r.jsx)(s.td,{children:"Aug 2020"})]})]})]}),"\n",(0,r.jsx)(s.h3,{id:"users--access-policies-management",children:"Users & access policies management"}),"\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{}),(0,r.jsx)(s.th,{})]})}),(0,r.jsxs)(s.tbody,{children:[(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"Status"}),(0,r.jsx)(s.td,{children:"Done"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"Priority"}),(0,r.jsx)(s.td,{children:"High"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"Targeted Start date"}),(0,r.jsx)(s.td,{children:"November 2020"})]})]})]}),"\n",(0,r.jsx)(s.p,{children:"The operator fully automates NiFi's user and access policies management."}),"\n",(0,r.jsx)(s.h2,{id:"backlog",children:"Backlog"}),"\n",(0,r.jsx)(s.h3,{id:"monitoring-via-prometheus",children:"Monitoring via Prometheus"}),"\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{}),(0,r.jsx)(s.th,{})]})}),(0,r.jsxs)(s.tbody,{children:[(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"Status"}),(0,r.jsx)(s.td,{children:"To Do"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"Priority"}),(0,r.jsx)(s.td,{children:"High"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"Targeted Start date"}),(0,r.jsx)(s.td,{children:"Oct 2020"})]})]})]}),"\n",(0,r.jsx)(s.p,{children:"The NiFi operator exposes NiFi JMX metrics to Prometheus."}),"\n",(0,r.jsx)(s.h3,{id:"auto-scaling",children:"Auto scaling"}),"\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{}),(0,r.jsx)(s.th,{})]})}),(0,r.jsxs)(s.tbody,{children:[(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"Status"}),(0,r.jsx)(s.td,{children:"To Do"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"Priority"}),(0,r.jsx)(s.td,{children:"High"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"Targeted Start date"}),(0,r.jsx)(s.td,{children:"Sept 2022"})]})]})]}),"\n",(0,r.jsx)(s.p,{children:"Enable the NiFi cluster to be scaled by HPA kubernetes feature:"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsx)(s.li,{children:"upscale cluster (add a new Node)"}),"\n",(0,r.jsx)(s.li,{children:"downscale cluster (remove a Node)"}),"\n"]}),"\n",(0,r.jsx)(s.h3,{id:"seamless-istio-mesh-support",children:"Seamless Istio mesh support"}),"\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{}),(0,r.jsx)(s.th,{})]})}),(0,r.jsxs)(s.tbody,{children:[(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"Status"}),(0,r.jsx)(s.td,{children:"To Do"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"Priority"}),(0,r.jsx)(s.td,{children:"Low"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"Targeted Start date"}),(0,r.jsx)(s.td,{children:"-"})]})]})]}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsx)(s.li,{children:"Operator allows to use ClusterIP services instead of Headless, which still works better in case of Service meshes."}),"\n",(0,r.jsxs)(s.li,{children:["To avoid too early nifi initialization, which might lead to unready sidecar container. The operator will use a small script to\nmitigate this behaviour. All NiFi image can be used the only one requirement is an available ",(0,r.jsx)(s.strong,{children:"wget"})," command."]}),"\n",(0,r.jsx)(s.li,{children:"To access a NiFi cluster which runs inside the mesh. Operator will supports creating Istio ingress gateways."}),"\n"]})]})}function h(e={}){const{wrapper:s}={...(0,n.R)(),...e.components};return s?(0,r.jsx)(s,{...e,children:(0,r.jsx)(o,{...e})}):o(e)}},43023:(e,s,t)=>{t.d(s,{R:()=>d,x:()=>l});var i=t(63696);const r={},n=i.createContext(r);function d(e){const s=i.useContext(n);return i.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function l(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:d(e.components),i.createElement(n.Provider,{value:s},e.children)}}}]);