import{K as I}from"./index-FZCiQto1.js";import{d as V,l as E,I as L,a as _,o,c as P,e as m,w as i,F as w,n as N,t as r,f as s,m as d,E as x,q as n,b as y,p as v,Q as K,_ as A,X as M,C as q}from"./index-CqXGLTiP.js";import{D as F,A as G}from"./AppCollection-kQgAZcfN.js";import{E as $}from"./ErrorBlock-226oEngl.js";import{P as D}from"./PolicyTypeTag-KeKFXAA7.js";import{_ as O}from"./LoadingBlock.vue_vue_type_script_setup_true_lang-CfFDkdxQ.js";import{S as Z}from"./SummaryView-DgqOrci4.js";import"./TextWithCopyButton-3lrZWnHN.js";import"./CopyButton-MfTze-YE.js";import"./WarningIcon.vue_vue_type_script_setup_true_lang-2iMUP-XH.js";const Q={class:"policy-list-content"},U={class:"policy-count"},X={class:"policy-list"},j={class:"stack"},H={class:"description"},J={class:"description-content"},W={class:"description-actions"},Y={class:"visually-hidden"},ee={key:0},te=V({__name:"PolicyList",props:{pageNumber:{},pageSize:{},mesh:{},policyTypes:{},currentPolicyType:{},policyCollection:{},policyError:{},meshInsight:{},isSelectedRow:{type:[Function,null],default:null}},emits:["change"],setup(S,{emit:B}){const{t:c}=E(),e=S,C=B,k=L(()=>{var h;if(((h=e.meshInsight)==null?void 0:h.policies)===void 0)return e.policyTypes;const b=e.policyTypes.filter(p=>!p.isTargetRefBased&&p.name!=="MeshGateway").some(p=>{var a,u,l;return(((l=(u=(a=e.meshInsight)==null?void 0:a.policies)==null?void 0:u[p.name])==null?void 0:l.total)??0)>0});return e.policyTypes.filter(p=>p.isTargetRefBased||p.name==="MeshGateway"?!0:b)});return(b,h)=>{const p=_("RouterLink"),a=_("KCard"),u=_("KBadge");return o(),P("div",Q,[m(a,{class:"policy-type-list","data-testid":"policy-type-list"},{default:i(()=>[(o(!0),P(w,null,x(k.value,(l,f)=>{var t,g,T;return o(),P("div",{key:f,class:N(["policy-type-link-wrapper",{"policy-type-link-wrapper--is-active":l.path===e.currentPolicyType.path}])},[m(p,{class:"policy-type-link",to:{name:"policy-list-view",params:{mesh:e.mesh,policyPath:l.path}},"data-testid":`policy-type-link-${l.name}`},{default:i(()=>[s(r(l.name),1)]),_:2},1032,["to","data-testid"]),s(),d("div",U,r(((T=(g=(t=e.meshInsight)==null?void 0:t.policies)==null?void 0:g[l.name])==null?void 0:T.total)??0),1)],2)}),128))]),_:1}),s(),d("div",X,[d("div",j,[m(a,null,{default:i(()=>[d("div",H,[d("div",J,[d("h3",null,[m(D,{"policy-type":e.currentPolicyType.name},{default:i(()=>[s(r(n(c)("policies.collection.title",{name:e.currentPolicyType.name})),1)]),_:1},8,["policy-type"])]),s(),d("p",null,r(n(c)(`policies.type.${e.currentPolicyType.name}.description`,void 0,{defaultMessage:n(c)("policies.collection.description")})),1)]),s(),d("div",W,[e.currentPolicyType.isExperimental?(o(),y(u,{key:0,appearance:"warning"},{default:i(()=>[s(r(n(c)("policies.collection.beta")),1)]),_:1})):v("",!0),s(),e.currentPolicyType.isInbound?(o(),y(u,{key:1,appearance:"neutral"},{default:i(()=>[s(r(n(c)("policies.collection.inbound")),1)]),_:1})):v("",!0),s(),e.currentPolicyType.isOutbound?(o(),y(u,{key:2,appearance:"neutral"},{default:i(()=>[s(r(n(c)("policies.collection.outbound")),1)]),_:1})):v("",!0),s(),m(F,{href:n(c)("policies.href.docs",{name:e.currentPolicyType.name}),"data-testid":"policy-documentation-link"},{default:i(()=>[d("span",Y,r(n(c)("common.documentation")),1)]),_:1},8,["href"])])])]),_:1}),s(),m(a,null,{default:i(()=>{var l,f;return[e.policyError!==void 0?(o(),y($,{key:0,error:e.policyError},null,8,["error"])):(o(),y(G,{key:b.currentPolicyType.path,class:"policy-collection","data-testid":"policy-collection","empty-state-message":n(c)("common.emptyState.message",{type:`${e.currentPolicyType.name} policies`}),"empty-state-cta-to":n(c)("policies.href.docs",{name:e.currentPolicyType.name}),"empty-state-cta-text":n(c)("common.documentation"),headers:[{label:"Name",key:"name"},...e.currentPolicyType.isTargetRefBased||e.currentPolicyType.name==="MeshGateway"?[{label:"Zone",key:"zone"}]:[],...e.currentPolicyType.isTargetRefBased?[{label:"Target ref",key:"targetRef"}]:[],{label:"Details",key:"details",hideLabel:!0}],"page-number":e.pageNumber,"page-size":e.pageSize,total:(l=e.policyCollection)==null?void 0:l.total,items:(f=e.policyCollection)==null?void 0:f.items,error:e.policyError,"is-selected-row":e.isSelectedRow,onChange:h[0]||(h[0]=t=>C("change",t))},{name:i(({row:t})=>[m(p,{to:{name:"policy-summary-view",params:{mesh:t.mesh,policyPath:e.currentPolicyType.path,policy:t.name},query:{page:e.pageNumber,size:e.pageSize}}},{default:i(()=>[s(r(t.name),1)]),_:2},1032,["to"])]),targetRef:i(({row:t})=>{var g;return[e.currentPolicyType.isTargetRefBased&&typeof((g=t.spec)==null?void 0:g.targetRef)<"u"?(o(),y(u,{key:0,appearance:"neutral"},{default:i(()=>[s(r(t.spec.targetRef.kind),1),t.spec.targetRef.name?(o(),P("span",ee,[s(":"),d("b",null,r(t.spec.targetRef.name),1)])):v("",!0)]),_:2},1024)):(o(),P(w,{key:1},[s(r(n(c)("common.detail.none")),1)],64))]}),zone:i(({row:t})=>[t.labels&&t.labels["kuma.io/origin"]==="zone"&&t.labels["kuma.io/zone"]?(o(),y(p,{key:0,to:{name:"zone-cp-detail-view",params:{zone:t.labels["kuma.io/zone"]}}},{default:i(()=>[s(r(t.labels["kuma.io/zone"]),1)]),_:2},1032,["to"])):(o(),P(w,{key:1},[s(r(n(c)("common.detail.none")),1)],64))]),details:i(({row:t})=>[m(p,{class:"details-link","data-testid":"details-link",to:{name:"policy-detail-view",params:{mesh:t.mesh,policyPath:e.currentPolicyType.path,policy:t.name}}},{default:i(()=>[s(r(n(c)("common.collection.details_link"))+" ",1),m(n(K),{display:"inline-block",decorative:"",size:n(I)},null,8,["size"])]),_:2},1032,["to"])]),_:1},8,["empty-state-message","empty-state-cta-to","empty-state-cta-text","headers","page-number","page-size","total","items","error","is-selected-row"]))]}),_:1})])])])}}}),ae=A(te,[["__scopeId","data-v-3fdee342"]]),de=V({__name:"PolicyListView",setup(S){return(B,c)=>{const e=_("RouteTitle"),C=_("RouterView"),k=_("DataSource"),b=_("AppView"),h=_("RouteView");return o(),y(k,{src:"/me"},{default:i(({data:p})=>[p?(o(),y(h,{key:0,name:"policy-list-view",params:{page:1,size:p.pageSize,mesh:"",policyPath:"",policy:""}},{default:i(({route:a,t:u})=>[m(b,null,{title:i(()=>[d("h2",null,[m(e,{title:u("policies.routes.items.title")},null,8,["title"])])]),default:i(()=>[s(),m(k,{src:"/*/policy-types"},{default:i(({data:l,error:f})=>[f?(o(),y($,{key:0,error:f},null,8,["error"])):l===void 0?(o(),y(O,{key:1})):l.policies.length===0?(o(),y(M,{key:2})):(o(),y(k,{key:3,src:`/meshes/${a.params.mesh}/policy-path/${a.params.policyPath}?page=${a.params.page}&size=${a.params.size}`},{default:i(({data:t,error:g})=>[m(k,{src:`/mesh-insights/${a.params.mesh}`},{default:i(({data:T})=>[m(ae,{"page-number":a.params.page,"page-size":a.params.size,mesh:a.params.mesh,"current-policy-type":l.policies.find(z=>z.path===a.params.policyPath)??l.policies[0],"policy-types":l.policies,"mesh-insight":T,"policy-collection":t,"policy-error":g,"is-selected-row":z=>z.name===a.params.policy,onChange:a.update},null,8,["page-number","page-size","mesh","current-policy-type","policy-types","mesh-insight","policy-collection","policy-error","is-selected-row","onChange"]),s(),a.params.policy?(o(),y(C,{key:0},{default:i(z=>[m(Z,{onClose:R=>a.replace({name:"policy-list-view",params:{mesh:a.params.mesh,policyPath:a.params.policyPath},query:{page:a.params.page,size:a.params.size}})},{default:i(()=>[(o(),y(q(z.Component),{policy:t==null?void 0:t.items.find(R=>R.name===a.params.policy),"policy-type":l.policies.find(R=>R.path===a.params.policyPath)},null,8,["policy","policy-type"]))]),_:2},1032,["onClose"])]),_:2},1024)):v("",!0)]),_:2},1032,["src"])]),_:2},1032,["src"]))]),_:2},1024)]),_:2},1024)]),_:2},1032,["params"])):v("",!0)]),_:1})}}});export{de as default};
