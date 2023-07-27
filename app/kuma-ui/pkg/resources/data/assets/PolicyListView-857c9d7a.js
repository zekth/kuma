import{d as w,o as n,a as c,w as e,h as a,b as o,v as $,g as i,C as x,r as P,e as V,F as S,s as A,q as m,n as g,J as I,M as N,f as B,O as D,t as f,E,G as T,p as q,m as F}from"./index-065c0e80.js";import{_ as h,A as J}from"./DataSource.vue_vue_type_script_setup_true_lang-eb79cd93.js";import{g as M,h as R,A as j,_ as G,f as O}from"./RouteView.vue_vue_type_script_setup_true_lang-1d679e8a.js";import{_ as W}from"./RouteTitle.vue_vue_type_script_setup_true_lang-44fde05c.js";import{_ as H}from"./EmptyBlock.vue_vue_type_script_setup_true_lang-cc00a44f.js";import{E as K}from"./ErrorBlock-9add341a.js";const Q=w({__name:"DocumentationLink",props:{href:{type:String,required:!0}},setup(r){const _=r;return(d,C)=>(n(),c(o(x),{class:"docs-link",appearance:"outline",target:"_blank",to:_.href},{default:e(()=>[a(o($),{icon:"externalLink",color:"currentColor",size:"16","hide-title":""}),i(`

    Documentation
  `)]),_:1},8,["to"]))}}),U=r=>(q("data-v-948cb913"),r=r(),F(),r),X={class:"stack"},Y=U(()=>m("p",null,[m("strong",null,"Warning"),i(` This policy is experimental. If you encountered any problem please open an
                            `),m("a",{href:"https://github.com/kumahq/kuma/issues/new/choose",target:"_blank",rel:"noopener noreferrer"},"issue")],-1)),Z=w({__name:"PolicyListView",props:{page:{},size:{}},setup(r){const _=r,{t:d}=M();return(C,ee)=>{const z=P("RouterLink");return n(),c(G,{name:"policies-list-view"},{default:e(({route:p})=>[a(h,{src:"/*/policy-types"},{default:e(({data:y,error:b})=>[b?(n(),c(K,{key:0,error:b},null,8,["error"])):y===void 0?(n(),c(R,{key:1})):y.policies.length===0?(n(),c(H,{key:2})):(n(!0),V(S,{key:3},A([y.policies.find(s=>s.path===p.params.policyPath)??y.policies[0]],s=>(n(),c(h,{key:s.path,src:`/${p.params.mesh}/policy-type/${s.path}?page=${_.page}&size=${_.size}`},{default:e(({data:u,error:L})=>[a(j,null,{title:e(()=>[m("h2",null,[i(`
                  Policies: `),a(W,{title:o(d)("policies.routes.items.title",{name:s.name}),render:!0},null,8,["title"])])]),default:e(()=>[i(),m("div",{class:g(["relative",s.path])},[a(o(I),null,{body:e(()=>[m("div",X,[s.isExperimental?(n(),c(o(N),{key:0,appearance:"warning"},{alertMessage:e(()=>[Y]),_:1})):B("",!0),i(),a(J,{class:"policy-collection","data-testid":"policy-collection","empty-state-title":"No Data","empty-state-message":`There are no ${s.name} policies present.`,headers:[{label:"Name",key:"name"},{label:"Type",key:"type"},{label:"Actions",key:"actions",hideLabel:!0}],"page-number":_.page,"page-size":_.size,total:u==null?void 0:u.total,items:u==null?void 0:u.items,error:L,onChange:p.update},{toolbar:e(()=>[a(h,{src:`/${p.params.mesh}/insights`},{default:e(({data:t})=>[a(o(D),{label:"Policies",items:y.policies.map(l=>({label:l.name,value:l.path,selected:l.path===p.params.policyPath})),"label-attributes":{class:"visually-hidden"},appearance:"select","enable-filtering":!0,onSelected:l=>p.replace({name:"policies-list-view",params:{...p.params,policyPath:l.value}})},{"item-template":e(({item:l})=>{var k,v;return[m("span",{class:g({"policy-type-empty":!((k=t==null?void 0:t.policies[l.label])!=null&&k.total)})},f(l.label)+" ("+f(((v=t==null?void 0:t.policies[l.label])==null?void 0:v.total)||"0")+`)
                                `,3)]}),_:2},1032,["items","onSelected"])]),_:2},1032,["src"]),i(),a(Q,{href:o(d)("policies.href.docs",{name:s.name}),"data-testid":"policy-documentation-link"},null,8,["href"])]),name:e(({row:t})=>[a(z,{to:{name:"policy-detail-view",params:{policy:t.name}}},{default:e(()=>[i(f(t.name),1)]),_:2},1032,["to"])]),type:e(({row:t})=>[i(f(t.type),1)]),actions:e(({row:t})=>[a(o(E),{class:"actions-dropdown","kpop-attributes":{placement:"bottomEnd",popoverClasses:"mt-5 more-actions-popover"},width:"150"},{default:e(()=>[a(o(x),{class:"non-visual-button",appearance:"secondary",size:"small"},{icon:e(()=>[a(o($),{color:"var(--black-400)",icon:"more",size:"16"})]),_:1})]),items:e(()=>[a(o(T),{item:{to:{name:"policy-detail-view",params:{policy:t.name}},label:o(d)("common.collection.actions.view")}},null,8,["item"])]),_:2},1024)]),_:2},1032,["empty-state-message","page-number","page-size","total","items","error","onChange"])])]),_:2},1024)],2)]),_:2},1024)]),_:2},1032,["src"]))),128))]),_:2},1024)]),_:1})}}});const ie=O(Z,[["__scopeId","data-v-948cb913"]]);export{ie as default};
