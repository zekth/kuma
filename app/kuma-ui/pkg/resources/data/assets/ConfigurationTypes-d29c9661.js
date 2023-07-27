import{d as y,j as V,k as h,c as i,o as d,a as p,w as e,h as o,b as r,g as a,q as m,i as x,W as l}from"./index-065c0e80.js";import{O as C,a as G,b as k}from"./OnboardingPage-1392bf50.js";import{k as M,l as P,m as T,e as w,g as N,A as O,_ as B,f as K}from"./RouteView.vue_vue_type_script_setup_true_lang-1d679e8a.js";import{_ as S}from"./RouteTitle.vue_vue_type_script_setup_true_lang-44fde05c.js";const U={class:"graph-list mb-6"},A={class:"radio-button-group"},I=y({__name:"ConfigurationTypes",setup(W){const c=M(),g=P(),_={postgres:T(),memory:g,kubernetes:c},u=w(),{t:f}=N(),t=V("kubernetes");h(function(){t.value=u.getters["config/getConfigurationType"]});const v=i(()=>u.getters["config/getMulticlusterStatus"]?"onboarding-multi-zone":"onboarding-create-mesh"),b=i(()=>_[t.value]);return(j,n)=>(d(),p(B,null,{default:e(()=>[o(S,{title:r(f)("onboarding.routes.configuration-types.title")},null,8,["title"]),a(),o(O,null,{default:e(()=>[o(C,{"with-image":""},{header:e(()=>[o(G,null,{title:e(()=>[a(`
              Learn about configuration storage
            `)]),_:1})]),content:e(()=>[m("div",U,[(d(),p(x(b.value)))]),a(),m("div",A,[o(r(l),{modelValue:t.value,"onUpdate:modelValue":n[0]||(n[0]=s=>t.value=s),name:"deployment","selected-value":"kubernetes"},{default:e(()=>[a(`
              Kubernetes
            `)]),_:1},8,["modelValue"]),a(),o(r(l),{modelValue:t.value,"onUpdate:modelValue":n[1]||(n[1]=s=>t.value=s),name:"deployment","selected-value":"postgres"},{default:e(()=>[a(`
              Postgres
            `)]),_:1},8,["modelValue"]),a(),o(r(l),{modelValue:t.value,"onUpdate:modelValue":n[2]||(n[2]=s=>t.value=s),name:"deployment","selected-value":"memory"},{default:e(()=>[a(`
              Memory
            `)]),_:1},8,["modelValue"])])]),navigation:e(()=>[o(k,{"next-step":v.value,"previous-step":"onboarding-deployment-types"},null,8,["next-step"])]),_:1})]),_:1})]),_:1}))}});const L=K(I,[["__scopeId","data-v-ec87faf1"]]);export{L as default};
