import{d as v,l as f,a as m,o as _,b as p,w as e,e as c,p as s,f as t,q as n,t as l,c as w,a0 as r,B as g,C as I,a1 as V,_ as k}from"./index-d50afca2.js";import{_ as x}from"./EmptyBlock.vue_vue_type_script_setup_true_lang-ae8a9f10.js";const S=i=>(g("data-v-c87e550c"),i=i(),I(),i),B={class:"summary-title-wrapper"},R=S(()=>s("img",{"aria-hidden":"true",src:V},null,-1)),M={class:"summary-title"},T={key:1,class:"stack"},C={class:"mt-4 stack"},N=v({__name:"MeshSummaryView",props:{name:{},meshInsight:{default:void 0}},setup(i){const{t:a}=f(),o=i;return(A,L)=>{const d=m("RouteTitle"),u=m("RouterLink"),h=m("AppView"),y=m("RouteView");return _(),p(y,{name:"mesh-summary-view"},{default:e(()=>[c(h,null,{title:e(()=>[s("div",B,[R,t(),s("h2",M,[c(u,{to:{name:"mesh-detail-view",params:{mesh:o.name}}},{default:e(()=>[c(d,{title:n(a)("meshes.routes.item.title",{name:o.name})},null,8,["title"])]),_:1},8,["to"])])])]),default:e(()=>[t(),o.meshInsight===void 0?(_(),p(x,{key:0},{message:e(()=>[s("p",null,l(n(a)("common.collection.summary.empty_message",{type:"Mesh"})),1)]),default:e(()=>[t(l(n(a)("common.collection.summary.empty_title",{type:"Mesh"}))+" ",1)]),_:1})):(_(),w("div",T,[s("div",null,[s("h3",null,l(n(a)("meshes.routes.item.overview")),1),t(),s("div",C,[c(r,{total:o.meshInsight.services.total??0,"data-testid":"services-status"},{title:e(()=>[t(l(n(a)("meshes.detail.services")),1)]),_:1},8,["total"]),t(),c(r,{online:o.meshInsight.dataplanesByType.standard.online??0,total:o.meshInsight.dataplanesByType.standard.total??0,"data-testid":"data-plane-proxies-status"},{title:e(()=>[t(l(n(a)("meshes.detail.data_plane_proxies")),1)]),_:1},8,["online","total"])])])]))]),_:1})]),_:1})}}});const D=k(N,[["__scopeId","data-v-c87e550c"]]);export{D as default};
