"use strict";(self.webpackChunkreact_native_website=self.webpackChunkreact_native_website||[]).push([[41627],{4737:(e,t,d)=>{d.r(t),d.d(t,{assets:()=>h,contentTitle:()=>l,default:()=>o,frontMatter:()=>n,metadata:()=>s,toc:()=>c});const s=JSON.parse('{"id":"5_references/5_nifi_dataflow","title":"NiFi Dataflow","description":"NifiDataflow is the Schema for the NiFi dataflow API.","source":"@site/versioned_docs/version-v1.7.0/5_references/5_nifi_dataflow.md","sourceDirName":"5_references","slug":"/5_references/5_nifi_dataflow","permalink":"/nifikop/docs/v1.7.0/5_references/5_nifi_dataflow","draft":false,"unlisted":false,"editUrl":"https://github.com/konpyutaika/nifikop/edit/master/site/website/versioned_docs/version-v1.7.0/5_references/5_nifi_dataflow.md","tags":[],"version":"v1.7.0","lastUpdatedBy":"Juldrixx","lastUpdatedAt":1707144987000,"frontMatter":{"id":"5_nifi_dataflow","title":"NiFi Dataflow","sidebar_label":"NiFi Dataflow"},"sidebar":"docs","previous":{"title":"NiFi Parameter Context","permalink":"/nifikop/docs/v1.7.0/5_references/4_nifi_parameter_context"},"next":{"title":"NiFi UserGroup","permalink":"/nifikop/docs/v1.7.0/5_references/6_nifi_usergroup"}}');var r=d(62540),i=d(43023);const n={id:"5_nifi_dataflow",title:"NiFi Dataflow",sidebar_label:"NiFi Dataflow"},l=void 0,h={},c=[{value:"NifiDataflow",id:"nifidataflow",level:2},{value:"NifiDataflowsSpec",id:"nifidataflowsspec",level:2},{value:"NifiDataflowStatus",id:"nifidataflowstatus",level:2},{value:"ComponentUpdateStrategy",id:"componentupdatestrategy",level:2},{value:"DataflowState",id:"dataflowstate",level:2},{value:"UpdateRequest",id:"updaterequest",level:2},{value:"DropRequest",id:"droprequest",level:2},{value:"DataflowUpdateRequestType",id:"dataflowupdaterequesttype",level:2},{value:"FlowPosition",id:"flowposition",level:2}];function a(e){const t={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.code,{children:"NifiDataflow"})," is the Schema for the NiFi dataflow API."]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-yaml",children:'apiVersion: nifi.konpyutaika.com/v1\nkind: NifiDataflow\nmetadata:\n  name: dataflow-lifecycle\nspec:\n  parentProcessGroupID: "16cfd2ec-0174-1000-0000-00004b9b35cc"\n  bucketId: "01ced6cc-0378-4893-9403-f6c70d080d4f"\n  flowId: "9b2fb465-fb45-49e7-94fe-45b16b642ac9"\n  flowVersion: 2\n  flowPosition:\n    posX: 0\n    posY: 0\n  syncMode: always\n  skipInvalidControllerService: true\n  skipInvalidComponent: true\n  clusterRef:\n    name: nc\n    namespace: nifikop\n  registryClientRef:\n    name: squidflow\n    namespace: nifikop\n  parameterContextRef:\n    name: dataflow-lifecycle\n    namespace: nifikop\n  updateStrategy: drain\n'})}),"\n",(0,r.jsx)(t.h2,{id:"nifidataflow",children:"NifiDataflow"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Field"}),(0,r.jsx)(t.th,{children:"Type"}),(0,r.jsx)(t.th,{children:"Description"}),(0,r.jsx)(t.th,{children:"Required"}),(0,r.jsx)(t.th,{children:"Default"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"metadata"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.a,{href:"https://godoc.org/k8s.io/apimachinery/pkg/apis/meta/v1#ObjectMeta",children:"ObjectMetadata"})}),(0,r.jsx)(t.td,{children:"is metadata that all persisted resources must have, which includes all objects dataflows must create."}),(0,r.jsx)(t.td,{children:"No"}),(0,r.jsx)(t.td,{children:"nil"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"spec"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.a,{href:"#nifidataflowspec",children:"NifiDataflowSpec"})}),(0,r.jsx)(t.td,{children:"defines the desired state of NifiDataflow."}),(0,r.jsx)(t.td,{children:"No"}),(0,r.jsx)(t.td,{children:"nil"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"status"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.a,{href:"#nifidataflowstatus",children:"NifiDataflowStatus"})}),(0,r.jsx)(t.td,{children:"defines the observed state of NifiDataflow."}),(0,r.jsx)(t.td,{children:"No"}),(0,r.jsx)(t.td,{children:"nil"})]})]})]}),"\n",(0,r.jsx)(t.h2,{id:"nifidataflowsspec",children:"NifiDataflowsSpec"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Field"}),(0,r.jsx)(t.th,{children:"Type"}),(0,r.jsx)(t.th,{children:"Description"}),(0,r.jsx)(t.th,{children:"Required"}),(0,r.jsx)(t.th,{children:"Default"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"parentProcessGroupID"}),(0,r.jsx)(t.td,{children:"string"}),(0,r.jsx)(t.td,{children:"the UUID of the parent process group where you want to deploy your dataflow, if not set deploy at root level."}),(0,r.jsx)(t.td,{children:"No"}),(0,r.jsx)(t.td,{children:"-"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"bucketId"}),(0,r.jsx)(t.td,{children:"string"}),(0,r.jsx)(t.td,{children:"the UUID of the Bucket containing the flow."}),(0,r.jsx)(t.td,{children:"Yes"}),(0,r.jsx)(t.td,{children:"-"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"flowId"}),(0,r.jsx)(t.td,{children:"string"}),(0,r.jsx)(t.td,{children:"the UUID of the flow to run."}),(0,r.jsx)(t.td,{children:"Yes"}),(0,r.jsx)(t.td,{children:"-"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"flowVersion"}),(0,r.jsx)(t.td,{children:"*int32"}),(0,r.jsx)(t.td,{children:"the version of the flow to run."}),(0,r.jsx)(t.td,{children:"Yes"}),(0,r.jsx)(t.td,{children:"-"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"flowPosition"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.a,{href:"#flowposition",children:"FlowPosition"})}),(0,r.jsx)(t.td,{children:"the position of your dataflow in the canvas."}),(0,r.jsx)(t.td,{children:"No"}),(0,r.jsx)(t.td,{children:"-"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"syncMode"}),(0,r.jsxs)(t.td,{children:["Enum=","once"]}),(0,r.jsx)(t.td,{children:"if the flow will be synchronized once, continuously or never."}),(0,r.jsx)(t.td,{children:"No"}),(0,r.jsx)(t.td,{children:"always"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"skipInvalidControllerService"}),(0,r.jsx)(t.td,{children:"bool"}),(0,r.jsx)(t.td,{children:"whether the flow is considered as ran if some controller services are still invalid or not."}),(0,r.jsx)(t.td,{children:"Yes"}),(0,r.jsx)(t.td,{children:"false"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"skipInvalidComponent"}),(0,r.jsx)(t.td,{children:"bool"}),(0,r.jsx)(t.td,{children:"whether the flow is considered as ran if some components are still invalid or not."}),(0,r.jsx)(t.td,{children:"Yes"}),(0,r.jsx)(t.td,{children:"false"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"updateStrategy"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.a,{href:"#componentupdatestrategy",children:"ComponentUpdateStrategy"})}),(0,r.jsx)(t.td,{children:"describes the way the operator will deal with data when a dataflow will be updated: Drop or Drain"}),(0,r.jsx)(t.td,{children:"Yes"}),(0,r.jsx)(t.td,{children:"drain"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"clusterRef"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.a,{href:"./2_nifi_user#clusterreference",children:"ClusterReference"})}),(0,r.jsx)(t.td,{children:"contains the reference to the NifiCluster with the one the user is linked."}),(0,r.jsx)(t.td,{children:"Yes"}),(0,r.jsx)(t.td,{children:"-"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"parameterContextRef"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.a,{href:"./4_nifi_parameter_context#parametercontextreference",children:"ParameterContextReference"})}),(0,r.jsx)(t.td,{children:"contains the reference to the ParameterContext with the one the dataflow is linked."}),(0,r.jsx)(t.td,{children:"No"}),(0,r.jsx)(t.td,{children:"-"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"registryClientRef"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.a,{href:"./3_nifi_registry_client#registryclientreference",children:"RegistryClientReference"})}),(0,r.jsx)(t.td,{children:"contains the reference to the NifiRegistry with the one the dataflow is linked."}),(0,r.jsx)(t.td,{children:"Yes"}),(0,r.jsx)(t.td,{children:"-"})]})]})]}),"\n",(0,r.jsx)(t.h2,{id:"nifidataflowstatus",children:"NifiDataflowStatus"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Field"}),(0,r.jsx)(t.th,{children:"Type"}),(0,r.jsx)(t.th,{children:"Description"}),(0,r.jsx)(t.th,{children:"Required"}),(0,r.jsx)(t.th,{children:"Default"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"processGroupID"}),(0,r.jsx)(t.td,{children:"string"}),(0,r.jsx)(t.td,{children:"process Group ID."}),(0,r.jsx)(t.td,{children:"Yes"}),(0,r.jsx)(t.td,{children:"-"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"state"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.a,{href:"#dataflowstate",children:"DataflowState"})}),(0,r.jsx)(t.td,{children:"the dataflow current state."}),(0,r.jsx)(t.td,{children:"Yes"}),(0,r.jsx)(t.td,{children:"-"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"latestUpdateRequest"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.a,{href:"#updaterequest",children:"UpdateRequest"})}),(0,r.jsx)(t.td,{children:"the latest update request sent."}),(0,r.jsx)(t.td,{children:"Yes"}),(0,r.jsx)(t.td,{children:"-"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"latestDropRequest"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.a,{href:"#droprequest",children:"DropRequest"})}),(0,r.jsx)(t.td,{children:"the latest queue drop request sent."}),(0,r.jsx)(t.td,{children:"Yes"}),(0,r.jsx)(t.td,{children:"-"})]})]})]}),"\n",(0,r.jsx)(t.h2,{id:"componentupdatestrategy",children:"ComponentUpdateStrategy"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Name"}),(0,r.jsx)(t.th,{children:"Value"}),(0,r.jsx)(t.th,{children:"Description"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"DrainStrategy"}),(0,r.jsx)(t.td,{children:"drain"}),(0,r.jsx)(t.td,{children:"leads to shutting down only input components (Input processors, remote input process group) and waiting the dataflow to be drained."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"DropStrategy"}),(0,r.jsx)(t.td,{children:"drop"}),(0,r.jsx)(t.td,{children:"leads to shutting down all components and dropping all flowfiles from the flow."})]})]})]}),"\n",(0,r.jsx)(t.h2,{id:"dataflowstate",children:"DataflowState"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Name"}),(0,r.jsx)(t.th,{children:"Value"}),(0,r.jsx)(t.th,{children:"Description"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"DataflowStateCreated"}),(0,r.jsx)(t.td,{children:"Created"}),(0,r.jsx)(t.td,{children:"describes the status of a NifiDataflow as created."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"DataflowStateStarting"}),(0,r.jsx)(t.td,{children:"Starting"}),(0,r.jsx)(t.td,{children:"describes the status of a NifiDataflow as starting."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"DataflowStateRan"}),(0,r.jsx)(t.td,{children:"Ran"}),(0,r.jsx)(t.td,{children:"describes the status of a NifiDataflow as running."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"DataflowStateOutOfSync"}),(0,r.jsx)(t.td,{children:"OutOfSync"}),(0,r.jsx)(t.td,{children:"describes the status of a NifiDataflow as out of sync."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"DataflowStateInSync"}),(0,r.jsx)(t.td,{children:"InSync"}),(0,r.jsx)(t.td,{children:"describes the status of a NifiDataflow as in sync."})]})]})]}),"\n",(0,r.jsx)(t.h2,{id:"updaterequest",children:"UpdateRequest"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Field"}),(0,r.jsx)(t.th,{children:"Type"}),(0,r.jsx)(t.th,{children:"Description"}),(0,r.jsx)(t.th,{children:"Required"}),(0,r.jsx)(t.th,{children:"Default"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"type"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.a,{href:"#dataflowupdaterequesttype",children:"DataflowUpdateRequestType"})}),(0,r.jsx)(t.td,{children:"defines the type of versioned flow update request."}),(0,r.jsx)(t.td,{children:"Yes"}),(0,r.jsx)(t.td,{children:"-"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"id"}),(0,r.jsx)(t.td,{children:"string"}),(0,r.jsx)(t.td,{children:"the id of the update request."}),(0,r.jsx)(t.td,{children:"Yes"}),(0,r.jsx)(t.td,{children:"-"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"uri"}),(0,r.jsx)(t.td,{children:"string"}),(0,r.jsx)(t.td,{children:"the uri for this request."}),(0,r.jsx)(t.td,{children:"Yes"}),(0,r.jsx)(t.td,{children:"-"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"lastUpdated"}),(0,r.jsx)(t.td,{children:"string"}),(0,r.jsx)(t.td,{children:"the last time this request was updated."}),(0,r.jsx)(t.td,{children:"Yes"}),(0,r.jsx)(t.td,{children:"-"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"complete"}),(0,r.jsx)(t.td,{children:"bool"}),(0,r.jsx)(t.td,{children:"whether or not this request has completed."}),(0,r.jsx)(t.td,{children:"Yes"}),(0,r.jsx)(t.td,{children:"false"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"failureReason"}),(0,r.jsx)(t.td,{children:"string"}),(0,r.jsx)(t.td,{children:"an explication of why the request failed, or null if this request has not failed."}),(0,r.jsx)(t.td,{children:"Yes"}),(0,r.jsx)(t.td,{children:"-"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"percentCompleted"}),(0,r.jsx)(t.td,{children:"int32"}),(0,r.jsx)(t.td,{children:"the percentage complete of the request, between 0 and 100."}),(0,r.jsx)(t.td,{children:"Yes"}),(0,r.jsx)(t.td,{children:"0"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"state"}),(0,r.jsx)(t.td,{children:"string"}),(0,r.jsx)(t.td,{children:"the state of the request."}),(0,r.jsx)(t.td,{children:"Yes"}),(0,r.jsx)(t.td,{children:"-"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"notFound"}),(0,r.jsx)(t.td,{children:"bool"}),(0,r.jsx)(t.td,{children:"whether or not this request was found."}),(0,r.jsx)(t.td,{children:"Yes"}),(0,r.jsx)(t.td,{children:"false"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"notFoundRetryCount"}),(0,r.jsx)(t.td,{children:"int32"}),(0,r.jsx)(t.td,{children:"the number of consecutive retries made in case of a NotFound error (limit: 3)."}),(0,r.jsx)(t.td,{children:"Yes"}),(0,r.jsx)(t.td,{children:"0"})]})]})]}),"\n",(0,r.jsx)(t.h2,{id:"droprequest",children:"DropRequest"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Field"}),(0,r.jsx)(t.th,{children:"Type"}),(0,r.jsx)(t.th,{children:"Description"}),(0,r.jsx)(t.th,{children:"Required"}),(0,r.jsx)(t.th,{children:"Default"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"connectionId"}),(0,r.jsx)(t.td,{children:"string"}),(0,r.jsx)(t.td,{children:"the connection id."}),(0,r.jsx)(t.td,{children:"Yes"}),(0,r.jsx)(t.td,{children:"-"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"id"}),(0,r.jsx)(t.td,{children:"string"}),(0,r.jsx)(t.td,{children:"the id for this drop request."}),(0,r.jsx)(t.td,{children:"Yes"}),(0,r.jsx)(t.td,{children:"-"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"uri"}),(0,r.jsx)(t.td,{children:"string"}),(0,r.jsx)(t.td,{children:"the uri for this request."}),(0,r.jsx)(t.td,{children:"Yes"}),(0,r.jsx)(t.td,{children:"-"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"lastUpdated"}),(0,r.jsx)(t.td,{children:"string"}),(0,r.jsx)(t.td,{children:"the last time this request was updated."}),(0,r.jsx)(t.td,{children:"Yes"}),(0,r.jsx)(t.td,{children:"-"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"finished"}),(0,r.jsx)(t.td,{children:"bool"}),(0,r.jsx)(t.td,{children:"whether the request has finished."}),(0,r.jsx)(t.td,{children:"Yes"}),(0,r.jsx)(t.td,{children:"false"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"failureReason"}),(0,r.jsx)(t.td,{children:"string"}),(0,r.jsx)(t.td,{children:"an explication of why the request failed, or null if this request has not failed."}),(0,r.jsx)(t.td,{children:"Yes"}),(0,r.jsx)(t.td,{children:"-"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"percentCompleted"}),(0,r.jsx)(t.td,{children:"int32"}),(0,r.jsx)(t.td,{children:"the percentage complete of the request, between 0 and 100."}),(0,r.jsx)(t.td,{children:"Yes"}),(0,r.jsx)(t.td,{children:"0"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"currentCount"}),(0,r.jsx)(t.td,{children:"int32"}),(0,r.jsx)(t.td,{children:"the number of flow files currently queued."}),(0,r.jsx)(t.td,{children:"Yes"}),(0,r.jsx)(t.td,{children:"0"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"currentSize"}),(0,r.jsx)(t.td,{children:"int64"}),(0,r.jsx)(t.td,{children:"the size of flow files currently queued in bytes."}),(0,r.jsx)(t.td,{children:"Yes"}),(0,r.jsx)(t.td,{children:"0"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"current"}),(0,r.jsx)(t.td,{children:"string"}),(0,r.jsx)(t.td,{children:"the count and size of flow files currently queued."}),(0,r.jsx)(t.td,{children:"Yes"}),(0,r.jsx)(t.td,{children:"-"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"originalCount"}),(0,r.jsx)(t.td,{children:"int32"}),(0,r.jsx)(t.td,{children:"the number of flow files to be dropped as a result of this request."}),(0,r.jsx)(t.td,{children:"Yes"}),(0,r.jsx)(t.td,{children:"0"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"originalSize"}),(0,r.jsx)(t.td,{children:"int64"}),(0,r.jsx)(t.td,{children:"the size of flow files to be dropped as a result of this request in bytes."}),(0,r.jsx)(t.td,{children:"Yes"}),(0,r.jsx)(t.td,{children:"0"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"original"}),(0,r.jsx)(t.td,{children:"string"}),(0,r.jsx)(t.td,{children:"the count and size of flow files to be dropped as a result of this request."}),(0,r.jsx)(t.td,{children:"Yes"}),(0,r.jsx)(t.td,{children:"-"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"droppedCount"}),(0,r.jsx)(t.td,{children:"int32"}),(0,r.jsx)(t.td,{children:"the number of flow files that have been dropped thus far."}),(0,r.jsx)(t.td,{children:"Yes"}),(0,r.jsx)(t.td,{children:"0"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"droppedSize"}),(0,r.jsx)(t.td,{children:"int64"}),(0,r.jsx)(t.td,{children:"the size of flow files currently queued in bytes."}),(0,r.jsx)(t.td,{children:"Yes"}),(0,r.jsx)(t.td,{children:"0"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Dropped"}),(0,r.jsx)(t.td,{children:"string"}),(0,r.jsx)(t.td,{children:"the count and size of flow files that have been dropped thus far."}),(0,r.jsx)(t.td,{children:"Yes"}),(0,r.jsx)(t.td,{children:"-"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"state"}),(0,r.jsx)(t.td,{children:"string"}),(0,r.jsx)(t.td,{children:"the state of the request."}),(0,r.jsx)(t.td,{children:"Yes"}),(0,r.jsx)(t.td,{children:"-"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"notFound"}),(0,r.jsx)(t.td,{children:"bool"}),(0,r.jsx)(t.td,{children:"whether or not this request was found."}),(0,r.jsx)(t.td,{children:"Yes"}),(0,r.jsx)(t.td,{children:"false"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"notFoundRetryCount"}),(0,r.jsx)(t.td,{children:"int32"}),(0,r.jsx)(t.td,{children:"the number of consecutive retries made in case of a NotFound error (limit: 3)."}),(0,r.jsx)(t.td,{children:"Yes"}),(0,r.jsx)(t.td,{children:"0"})]})]})]}),"\n",(0,r.jsx)(t.h2,{id:"dataflowupdaterequesttype",children:"DataflowUpdateRequestType"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Name"}),(0,r.jsx)(t.th,{children:"Value"}),(0,r.jsx)(t.th,{children:"Description"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"RevertRequestType"}),(0,r.jsx)(t.td,{children:"Revert"}),(0,r.jsx)(t.td,{children:"defines a revert changes request."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"UpdateRequestType"}),(0,r.jsx)(t.td,{children:"Update"}),(0,r.jsx)(t.td,{children:"defines an update version request."})]})]})]}),"\n",(0,r.jsx)(t.h2,{id:"flowposition",children:"FlowPosition"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Field"}),(0,r.jsx)(t.th,{children:"Type"}),(0,r.jsx)(t.th,{children:"Description"}),(0,r.jsx)(t.th,{children:"Required"}),(0,r.jsx)(t.th,{children:"Default"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"posX"}),(0,r.jsx)(t.td,{children:"int64"}),(0,r.jsx)(t.td,{children:"the x coordinate."}),(0,r.jsx)(t.td,{children:"No"}),(0,r.jsx)(t.td,{children:"-"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"posY"}),(0,r.jsx)(t.td,{children:"int64"}),(0,r.jsx)(t.td,{children:"the y coordinate."}),(0,r.jsx)(t.td,{children:"No"}),(0,r.jsx)(t.td,{children:"-"})]})]})]})]})}function o(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},43023:(e,t,d)=>{d.d(t,{R:()=>n,x:()=>l});var s=d(63696);const r={},i=s.createContext(r);function n(e){const t=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:n(e.components),s.createElement(i.Provider,{value:t},e.children)}}}]);