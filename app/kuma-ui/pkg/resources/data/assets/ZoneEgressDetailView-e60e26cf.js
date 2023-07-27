import{d as D,c as f,r as $,o as t,a as n,w as e,q as A,g as p,h as s,t as k,e as _,F as h,s as b,b as w,u as B,j as y}from"./index-065c0e80.js";import{a as C,A as S,_ as T,S as V}from"./SubscriptionHeader.vue_vue_type_script_setup_true_lang-f4e46f45.js";import{D as Z,a as q}from"./DefinitionListItem-adce3dd6.js";import{E as z}from"./EnvoyData-ba55494f.js";import{T as I}from"./TabsWidget-470706f1.js";import{T as x}from"./TextWithCopyButton-3f72ac03.js";import{g as O,n as L,A as N,h as R,_ as j}from"./RouteView.vue_vue_type_script_setup_true_lang-1d679e8a.js";import{_ as F}from"./RouteTitle.vue_vue_type_script_setup_true_lang-44fde05c.js";import{_ as W}from"./EmptyBlock.vue_vue_type_script_setup_true_lang-cc00a44f.js";import{E as H}from"./ErrorBlock-9add341a.js";import"./CodeBlock.vue_vue_type_style_index_0_lang-eb21505c.js";import"./StatusInfo.vue_vue_type_script_setup_true_lang-d1fde56e.js";const K={class:"entity-heading"},X=D({__name:"ZoneEgressDetails",props:{zoneEgressOverview:{type:Object,required:!0}},setup(E){const m=E,{t:g}=O(),d=[{hash:"#overview",title:"Overview"},{hash:"#insights",title:"Zone Egress Insights"},{hash:"#xds-configuration",title:"XDS Configuration"},{hash:"#envoy-stats",title:"Stats"},{hash:"#envoy-clusters",title:"Clusters"}],l=f(()=>({name:"zone-egress-detail-view",params:{zoneEgress:m.zoneEgressOverview.name}})),a=f(()=>{const{type:c,name:o}=m.zoneEgressOverview;return{type:c,name:o}}),u=f(()=>{var o;const c=((o=m.zoneEgressOverview.zoneEgressInsight)==null?void 0:o.subscriptions)??[];return Array.from(c).reverse()});return(c,o)=>{const v=$("router-link");return t(),n(I,{tabs:d},{tabHeader:e(()=>[A("h1",K,[p(`
        Zone Egress:

        `),s(x,{text:a.value.name},{default:e(()=>[s(v,{to:l.value},{default:e(()=>[p(k(a.value.name),1)]),_:1},8,["to"])]),_:1},8,["text"])])]),overview:e(()=>[s(Z,null,{default:e(()=>[(t(!0),_(h,null,b(a.value,(r,i)=>(t(),n(q,{key:i,term:w(g)(`http.api.property.${i}`)},{default:e(()=>[i==="name"?(t(),n(x,{key:0,text:r},null,8,["text"])):(t(),_(h,{key:1},[p(k(r),1)],64))]),_:2},1032,["term"]))),128))]),_:1})]),insights:e(()=>[s(C,{"initially-open":0},{default:e(()=>[(t(!0),_(h,null,b(u.value,(r,i)=>(t(),n(S,{key:i},{"accordion-header":e(()=>[s(T,{details:r},null,8,["details"])]),"accordion-content":e(()=>[s(V,{details:r,"is-discovery-subscription":""},null,8,["details"])]),_:2},1024))),128))]),_:1})]),"xds-configuration":e(()=>[s(z,{"data-path":"xds","zone-egress-name":a.value.name,"query-key":"envoy-data-zone-egress"},null,8,["zone-egress-name"])]),"envoy-stats":e(()=>[s(z,{"data-path":"stats","zone-egress-name":a.value.name,"query-key":"envoy-data-zone-egress"},null,8,["zone-egress-name"])]),"envoy-clusters":e(()=>[s(z,{"data-path":"clusters","zone-egress-name":a.value.name,"query-key":"envoy-data-zone-egress"},null,8,["zone-egress-name"])]),_:1})}}}),G={class:"zone-details"},J={key:3,class:"kcard-border","data-testid":"detail-view-details"},ie=D({__name:"ZoneEgressDetailView",setup(E){const m=L(),g=B(),{t:d}=O(),l=y(null),a=y(!0),u=y(null);c();function c(){o()}async function o(){a.value=!0,u.value=null;const v=g.params.zoneEgress;try{l.value=await m.getZoneEgressOverview({name:v})}catch(r){l.value=null,r instanceof Error?u.value=r:console.error(r)}finally{a.value=!1}}return(v,r)=>(t(),n(j,null,{default:e(({route:i})=>[s(F,{title:w(d)("zone-egresses.routes.item.title",{name:i.params.zoneEgress})},null,8,["title"]),p(),s(N,{breadcrumbs:[{to:{name:"zone-egress-list-view"},text:w(d)("zone-egresses.routes.item.breadcrumbs")}]},{default:e(()=>[A("div",G,[a.value?(t(),n(R,{key:0})):u.value!==null?(t(),n(H,{key:1,error:u.value},null,8,["error"])):l.value===null?(t(),n(W,{key:2})):(t(),_("div",J,[s(X,{"zone-egress-overview":l.value},null,8,["zone-egress-overview"])]))])]),_:1},8,["breadcrumbs"])]),_:1}))}});export{ie as default};
