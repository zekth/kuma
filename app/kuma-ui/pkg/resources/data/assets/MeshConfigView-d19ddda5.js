import{d as h,u as w,a as e,o as t,b as s,w as o,e as a,p as k,f as V,H as v,I as g,q as C}from"./index-d50afca2.js";import{_ as x}from"./ResourceCodeBlock.vue_vue_type_style_index_0_lang-6505800e.js";import"./CodeBlock.vue_vue_type_style_index_0_lang-2e43d83c.js";import"./toYaml-4e00099e.js";const T=h({__name:"MeshConfigView",setup(y){const i=w();return(A,B)=>{const m=e("RouteTitle"),u=e("DataSource"),_=e("KCard"),l=e("AppView"),p=e("RouteView");return t(),s(p,{name:"mesh-config-view","data-testid":"mesh-config-view",params:{mesh:""}},{default:o(({route:n,t:f})=>[a(l,null,{title:o(()=>[k("h2",null,[a(m,{title:f("meshes.routes.item.navigation.mesh-config-view")},null,8,["title"])])]),default:o(()=>[V(),a(_,null,{body:o(()=>[a(u,{src:`/meshes/${n.params.mesh}`},{default:o(({data:c,error:r})=>[r!==void 0?(t(),s(v,{key:0,error:r},null,8,["error"])):c===void 0?(t(),s(g,{key:1})):(t(),s(x,{key:2,id:"code-block-mesh",resource:c,"resource-fetcher":d=>C(i).getMesh({name:n.params.mesh},d)},null,8,["resource","resource-fetcher"]))]),_:2},1032,["src"])]),_:2},1024)]),_:2},1024)]),_:1})}}});export{T as default};
