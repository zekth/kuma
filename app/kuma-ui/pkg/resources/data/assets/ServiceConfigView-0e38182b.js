import{_ as v}from"./EmptyBlock.vue_vue_type_script_setup_true_lang-ae8a9f10.js";import{d as g,u as y,a as o,o as r,b as t,w as e,e as c,p as i,f as k,H as w,I as C,t as V,q as $}from"./index-d50afca2.js";import{_ as b}from"./ResourceCodeBlock.vue_vue_type_style_index_0_lang-6505800e.js";import"./CodeBlock.vue_vue_type_style_index_0_lang-2e43d83c.js";import"./toYaml-4e00099e.js";const S=g({__name:"ServiceConfigView",setup(A){const _=y();return(B,R)=>{const u=o("RouteTitle"),p=o("DataSource"),d=o("KCard"),f=o("AppView"),h=o("RouteView");return r(),t(h,{name:"service-config-view",params:{mesh:"",service:"",codeSearch:""}},{default:e(({route:a,t:m})=>[c(f,null,{title:e(()=>[i("h2",null,[c(u,{title:m("services.routes.item.navigation.service-config-view")},null,8,["title"])])]),default:e(()=>[k(),c(d,null,{body:e(()=>[i("div",null,[c(p,{src:`/meshes/${a.params.mesh}/external-services/for/${a.params.service}`},{default:e(({data:s,error:l})=>[l?(r(),t(w,{key:0,error:l},null,8,["error"])):s===void 0?(r(),t(C,{key:1})):s===null?(r(),t(v,{key:2,"data-testid":"no-matching-external-service"},{title:e(()=>[i("p",null,V(m("services.detail.no_matching_external_service",{name:a.params.service})),1)]),_:2},1024)):(r(),t(b,{key:3,id:"code-block-service",resource:s,"resource-fetcher":n=>$(_).getExternalService({mesh:s.mesh,name:s.name},n),"is-searchable":"",query:a.params.codeSearch,onQueryChange:n=>a.update({codeSearch:n})},null,8,["resource","resource-fetcher","query","onQueryChange"]))]),_:2},1032,["src"])])]),_:2},1024)]),_:2},1024)]),_:1})}}});export{S as default};
