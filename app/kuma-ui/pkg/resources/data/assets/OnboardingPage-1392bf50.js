import{d as g,B as S,o as s,e as p,q as a,y as i,g as o,b as c,f as u,a as f,w as l,C as _,h as y,t as k,n as x,p as $,m as O}from"./index-065c0e80.js";import{f as v,e as w}from"./RouteView.vue_vue_type_script_setup_true_lang-1d679e8a.js";const B={class:"onboarding-heading"},N={class:"onboarding-title"},q={key:0,class:"onboarding-description"},C=g({__name:"OnboardingHeading",setup(n){const e=S();return(t,d)=>(s(),p("div",B,[a("h1",N,[i(t.$slots,"title",{},void 0,!0)]),o(),c(e).description?(s(),p("div",q,[i(t.$slots,"description",{},void 0,!0)])):u("",!0)]))}});const J=v(C,[["__scopeId","data-v-166d4213"]]),I={class:"onboarding-actions"},T={class:"button-list"},V=g({__name:"OnboardingNavigation",props:{shouldAllowNext:{type:Boolean,required:!1,default:!0},showSkip:{type:Boolean,required:!1,default:!0},nextStep:{type:String,required:!0},previousStep:{type:String,required:!1,default:""},nextStepTitle:{type:String,required:!1,default:"Next"},lastStep:{type:Boolean,required:!1,default:!1}},setup(n){const e=n,t=w();function d(){t.dispatch("onboarding/completeOnboarding")}function b(h){t.dispatch("onboarding/changeStep",h)}return(h,r)=>(s(),p("div",I,[e.previousStep?(s(),f(c(_),{key:0,appearance:"secondary",to:{name:e.previousStep},"data-testid":"onboarding-previous-button",onClick:r[0]||(r[0]=m=>b(e.previousStep))},{default:l(()=>[o(`
      Back
    `)]),_:1},8,["to"])):u("",!0),o(),a("div",T,[e.showSkip?(s(),f(c(_),{key:0,appearance:"outline","data-testid":"onboarding-skip-button",to:{name:"home"},onClick:d},{default:l(()=>[o(`
        Skip setup
      `)]),_:1})):u("",!0),o(),y(c(_),{disabled:!e.shouldAllowNext,appearance:e.lastStep?"creation":"primary",to:{name:e.lastStep?"home":e.nextStep},"data-testid":"onboarding-next-button",onClick:r[1]||(r[1]=m=>e.lastStep?d():b(e.nextStep))},{default:l(()=>[o(k(e.nextStepTitle),1)]),_:1},8,["disabled","appearance","to"])])]))}});const K=v(V,[["__scopeId","data-v-da07ae4c"]]),H=n=>($("data-v-18dc3352"),n=n(),O(),n),P={class:"onboarding-container"},A={class:"onboarding-container__header"},z={class:"onboarding-container__inner-content"},D={class:"mt-4"},E=H(()=>a("div",{class:"background-image"},null,-1)),j=g({__name:"OnboardingPage",props:{withImage:{type:Boolean,required:!1,default:!1}},setup(n){const e=n;return(t,d)=>(s(),p("div",null,[a("div",P,[a("div",A,[i(t.$slots,"header",{},void 0,!0)]),o(),a("div",{class:x(["onboarding-container__content",{"onboarding-container__content--with-image":e.withImage}])},[a("div",z,[i(t.$slots,"content",{},void 0,!0)])],2),o(),a("div",D,[i(t.$slots,"navigation",{},void 0,!0)])]),o(),E]))}});const L=v(j,[["__scopeId","data-v-18dc3352"]]);export{L as O,J as a,K as b};
