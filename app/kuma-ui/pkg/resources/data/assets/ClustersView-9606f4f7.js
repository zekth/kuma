import{E as m}from"./EnvoyData-64b1b1ce.js";import{g as d}from"./dataplane-dcd0858b.js";import{d as _,a as e,o as g,b as h,w as t,e as s,p as f,f as w,q as C}from"./index-d50afca2.js";import"./CodeBlock.vue_vue_type_style_index_0_lang-2e43d83c.js";import"./EmptyBlock.vue_vue_type_script_setup_true_lang-ae8a9f10.js";const S=_({__name:"ClustersView",props:{data:{}},setup(a){const n=a;return(V,z)=>{const r=e("RouteTitle"),c=e("KCard"),p=e("AppView"),u=e("RouteView");return g(),h(u,{name:"zone-egress-clusters-view",params:{zoneEgress:"",codeSearch:""}},{default:t(({route:o,t:i})=>[s(p,null,{title:t(()=>[f("h2",null,[s(r,{title:i("zone-egresses.routes.item.navigation.zone-egress-clusters-view")},null,8,["title"])])]),default:t(()=>[w(),s(c,null,{body:t(()=>[s(m,{status:C(d)(n.data.zoneEgressInsight),resource:"Zone",src:`/zone-egresses/${o.params.zoneEgress}/data-path/clusters`,query:o.params.codeSearch,onQueryChange:l=>o.update({codeSearch:l})},null,8,["status","src","query","onQueryChange"])]),_:2},1024)]),_:2},1024)]),_:1})}}});export{S as default};
