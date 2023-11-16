import{d as T,l as A,u as D,a as v,o as t,b as l,w as e,e as r,p as m,f as s,q as a,t as i,c as _,H as x,I as S,a6 as y,a3 as V,v as C,F as N,a0 as P,B as q,C as E,a9 as F,_ as L}from"./index-d50afca2.js";import{_ as f}from"./EmptyBlock.vue_vue_type_script_setup_true_lang-ae8a9f10.js";import{_ as Q}from"./ResourceCodeBlock.vue_vue_type_style_index_0_lang-6505800e.js";import{S as H}from"./StatusBadge-d16fac8b.js";import{_ as K}from"./TagList.vue_vue_type_script_setup_true_lang-24ba3937.js";import"./CodeBlock.vue_vue_type_style_index_0_lang-2e43d83c.js";import"./toYaml-4e00099e.js";const W=p=>(q("data-v-07406fdd"),p=p(),E(),p),j={class:"summary-title-wrapper"},z=W(()=>m("img",{"aria-hidden":"true",src:F},null,-1)),G={class:"summary-title"},J={key:1,class:"stack"},M={class:"mt-4"},O={key:0},U={key:3,class:"stack"},X={key:1,class:"stack"},Y={key:0},Z={class:"mt-4"},ee=T({__name:"ServiceSummaryView",props:{service:{default:void 0}},setup(p){const{t:o}=A(),b=D(),c=p;return(te,se)=>{const B=v("RouteTitle"),$=v("RouterLink"),k=v("DataSource"),R=v("AppView"),I=v("RouteView");return t(),l(I,{name:"service-summary-view",params:{mesh:"",service:"",codeSearch:""}},{default:e(({route:d})=>[r(R,null,{title:e(()=>[m("div",j,[z,s(),m("h2",G,[r($,{to:{name:"service-detail-view",params:{service:d.params.service}}},{default:e(()=>[r(B,{title:a(o)("services.routes.item.title",{name:d.params.service})},null,8,["title"])]),_:2},1032,["to"])])])]),default:e(()=>{var g,w;return[s(),c.service===void 0?(t(),l(f,{key:0},{message:e(()=>[m("p",null,i(a(o)("common.collection.summary.empty_message",{type:"Service"})),1)]),default:e(()=>[s(i(a(o)("common.collection.summary.empty_title",{type:"Service"}))+" ",1)]),_:1})):(t(),_("div",J,[m("div",null,[m("h3",null,i(a(o)("services.routes.item.overview")),1),s(),m("div",M,[c.service.serviceType==="external"?(t(),_("div",O,[r(k,{src:`/meshes/${c.service.mesh}/external-services/for/${c.service.name}`},{default:e(({data:n,error:u})=>[u?(t(),l(x,{key:0,error:u},null,8,["error"])):n===void 0?(t(),l(S,{key:1})):n===null?(t(),l(f,{key:2,"data-testid":"no-matching-external-service"},{title:e(()=>[m("p",null,i(a(o)("services.detail.no_matching_external_service",{name:c.service.name})),1)]),_:1})):(t(),_("div",U,[r(y,null,{title:e(()=>[s(i(a(o)("http.api.property.address")),1)]),body:e(()=>[r(V,{text:n.networking.address},null,8,["text"])]),_:2},1024),s(),n.tags!==null?(t(),l(y,{key:0},{title:e(()=>[s(i(a(o)("http.api.property.tags")),1)]),body:e(()=>[r(K,{tags:n.tags},null,8,["tags"])]),_:2},1024)):C("",!0)]))]),_:1},8,["src"])])):(t(),_("div",X,[r(y,null,{title:e(()=>[s(i(a(o)("http.api.property.status")),1)]),body:e(()=>[r(H,{status:c.service.status??"not_available"},null,8,["status"])]),_:1}),s(),r(y,null,{title:e(()=>[s(i(a(o)("http.api.property.address")),1)]),body:e(()=>[c.service.addressPort?(t(),l(V,{key:0,text:c.service.addressPort},null,8,["text"])):(t(),_(N,{key:1},[s(i(a(o)("common.detail.none")),1)],64))]),_:1}),s(),r(P,{online:((g=c.service.dataplanes)==null?void 0:g.online)??0,total:((w=c.service.dataplanes)==null?void 0:w.total)??0},{title:e(()=>[s(i(a(o)("http.api.property.dataPlaneProxies")),1)]),_:1},8,["online","total"])]))])]),s(),c.service.serviceType==="external"?(t(),_("div",Y,[m("h3",null,i(a(o)("services.routes.item.config")),1),s(),m("div",Z,[r(k,{src:`/meshes/${d.params.mesh}/external-services/for/${d.params.service}`},{default:e(({data:n,error:u})=>[u?(t(),l(x,{key:0,error:u},null,8,["error"])):n===void 0?(t(),l(S,{key:1})):n===null?(t(),l(f,{key:2,"data-testid":"no-matching-external-service"},{title:e(()=>[m("p",null,i(a(o)("services.detail.no_matching_external_service",{name:d.params.service})),1)]),_:2},1024)):(t(),l(Q,{key:3,id:"code-block-service",resource:n,"resource-fetcher":h=>a(b).getExternalService({mesh:n.mesh,name:n.name},h),"is-searchable":"",query:d.params.codeSearch,onQueryChange:h=>d.update({codeSearch:h})},null,8,["resource","resource-fetcher","query","onQueryChange"]))]),_:2},1032,["src"])])])):C("",!0)]))]}),_:2},1024)]),_:1})}}});const me=L(ee,[["__scopeId","data-v-07406fdd"]]);export{me as default};
