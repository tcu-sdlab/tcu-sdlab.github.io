import x from"./Dropdown.378a7275.js";import{C as p,T as h,o,p as l,G as t,J as d,E as s,S as b,F as c,R as u,L as r,M as _,c as g}from"./entry.3c805ab3.js";const v={components:{FilterDropdown:x},props:{removeFilter:{type:Boolean,default:!1},types:{type:Array,default(){return[]}},tags:{type:Array,default(){return[]}}},methods:{filterUrl(m,y){return`/resources/filter/${m}/${y}#content`}}},k={class:"md:sticky md:top-0 md:pt-5"},w=t("a",{name:"content"},null,-1),F={class:"hidden md:block"},C={key:0,class:"mb-4"},B={class:"rounded-md shadow-sm"},U=r(" Clear "),D=t("h3",{class:"border-b-4 pb-3 mb-3 border-gray-200 text-xl"}," Filter by type ",-1),N={class:"pl-0"},V=t("h3",{class:"border-b-4 pb-3 mt-6 border-gray-200 text-xl"}," Filter by tag ",-1),S={class:"pl-0"},j={class:"block md:hidden text-right mb-6"},A={key:0,class:"relative inline-block text-left ml-2"},E={class:"rounded-md shadow-sm"},L=r(" Clear "),R=r(" Filter by type "),T=r(" Filter by tag ");function G(m,y,n,J,M,i){const a=h("g-link"),f=h("FilterDropdown");return o(),l("div",k,[w,t("div",F,[n.removeFilter?(o(),l("div",C,[t("span",B,[d(a,{to:"/resources",class:"inline-flex justify-center w-full rounded-md border border-gray-300 px-4 py-2 bg-white text-sm leading-5 font-medium text-black hover:text-white hover:bg-smalt-blue-500 focus:outline-none transition ease-in-out duration-150"},{default:s(()=>[U]),_:1})])])):b("",!0),t("div",null,[D,t("ul",N,[(o(!0),l(c,null,u(n.types,e=>(o(),l("li",{key:e.node.id,class:"py-1"},[d(a,{to:i.filterUrl("type",e.node.title),class:"hover:text-smalt-blue-700"},{default:s(()=>[r(_(e.node.title),1)]),_:2},1032,["to"])]))),128))])]),t("div",null,[V,t("ul",S,[(o(!0),l(c,null,u(n.tags,e=>(o(),l("li",{key:e.node.id,class:"py-1"},[d(a,{to:i.filterUrl("tag",e.node.title),class:"hover:text-smalt-blue-700"},{default:s(()=>[r(_(e.node.title),1)]),_:2},1032,["to"])]))),128))])])]),t("div",j,[n.removeFilter?(o(),l("div",A,[t("div",null,[t("span",E,[d(a,{to:"/resources",class:"inline-flex justify-center w-full rounded-md border border-gray-300 px-4 py-2 bg-white text-sm leading-5 font-medium text-black hover:text-white hover:bg-smalt-blue-500 focus:outline-none transition ease-in-out duration-150"},{default:s(()=>[L]),_:1})])])])):b("",!0),d(f,null,{title:s(()=>[R]),options:s(()=>[(o(!0),l(c,null,u(n.types,e=>(o(),g(a,{key:e.node.id,to:i.filterUrl("type",e.node.title),class:"block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:bg-gray-100 focus:text-gray-900"},{default:s(()=>[r(_(e.node.title),1)]),_:2},1032,["to"]))),128))]),_:1}),d(f,null,{title:s(()=>[T]),options:s(()=>[(o(!0),l(c,null,u(n.tags,e=>(o(),g(a,{key:e.node.id,to:i.filterUrl("tag",e.node.title),class:"block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:bg-gray-100 focus:text-gray-900"},{default:s(()=>[r(_(e.node.title),1)]),_:2},1032,["to"]))),128))]),_:1})])])}const H=p(v,[["render",G]]);export{H as default};
