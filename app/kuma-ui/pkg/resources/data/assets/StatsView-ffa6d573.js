import{E as l}from"./EnvoyData-64b1b1ce.js";import{g as d}from"./dataplane-dcd0858b.js";import{d as _,a as e,o as g,b as h,w as t,e as s,p as f,f as w,q as V}from"./index-d50afca2.js";import"./CodeBlock.vue_vue_type_style_index_0_lang-2e43d83c.js";import"./EmptyBlock.vue_vue_type_script_setup_true_lang-ae8a9f10.js";const R=_({__name:"StatsView",props:{data:{}},setup(a){const n=a;return(z,C)=>{const r=e("RouteTitle"),c=e("KCard"),p=e("AppView"),i=e("RouteView");return g(),h(i,{name:"zone-egress-stats-view",params:{zoneEgress:"",codeSearch:""}},{default:t(({route:o,t:u})=>[s(p,null,{title:t(()=>[f("h2",null,[s(r,{title:u("zone-egresses.routes.item.navigation.zone-egress-stats-view")},null,8,["title"])])]),default:t(()=>[w(),s(c,null,{body:t(()=>[s(l,{status:V(d)(n.data.zoneEgressInsight),resource:"Zone",src:`/zone-egresses/${o.params.zoneEgress}/data-path/stats`,query:o.params.codeSearch,onQueryChange:m=>o.update({codeSearch:m})},null,8,["status","src","query","onQueryChange"])]),_:2},1024)]),_:2},1024)]),_:1})}}});export{R as default};
