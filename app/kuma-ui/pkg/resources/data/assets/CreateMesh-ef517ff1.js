import{d as u,j as _,c as m,o as h,a as f,w as e,h as t,b as n,g as a,q as o,t as b,K as g,p as v,m as y}from"./index-065c0e80.js";import{O as x,a as S,b as A}from"./OnboardingPage-1392bf50.js";import{e as C,g as N,A as k,_ as B,f as I}from"./RouteView.vue_vue_type_script_setup_true_lang-1d679e8a.js";import{_ as w}from"./RouteTitle.vue_vue_type_script_setup_true_lang-44fde05c.js";const i=s=>(v("data-v-94485eb5"),s=s(),y(),s),D={class:"mb-4 text-center"},M=i(()=>o("i",null,"default",-1)),O=i(()=>o("p",{class:"mt-4 text-center"},`
            This mesh is empty. Next, you add services and their data plane proxies.
          `,-1)),V=u({__name:"CreateMesh",setup(s){const c=[{label:"Name",key:"name"},{label:"Services",key:"servicesAmount"},{label:"DPPs",key:"dppsAmount"}],l=C(),{t:r}=N(),d=_({total:1,data:[{name:"default",servicesAmount:0,dppsAmount:0}]}),p=m(()=>l.getters["config/getMulticlusterStatus"]?"onboarding-multi-zone":"onboarding-configuration-types");return(E,P)=>(h(),f(B,null,{default:e(()=>[t(w,{title:n(r)("onboarding.routes.create-mesh.title")},null,8,["title"]),a(),t(k,null,{default:e(()=>[t(x,null,{header:e(()=>[t(S,null,{title:e(()=>[a(`
              Create the mesh
            `)]),_:1})]),content:e(()=>[o("p",D,[a(`
            When you install, `+b(n(r)("common.product.name"))+" creates a ",1),M,a(` mesh, but you can add as many meshes as you need.
          `)]),a(),t(n(g),{class:"table",fetcher:()=>d.value,headers:c,"disable-pagination":""},null,8,["fetcher"]),a(),O]),navigation:e(()=>[t(A,{"next-step":"onboarding-add-services","previous-step":p.value},null,8,["previous-step"])]),_:1})]),_:1})]),_:1}))}});const j=I(V,[["__scopeId","data-v-94485eb5"]]);export{j as default};
