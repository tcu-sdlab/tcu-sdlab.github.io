import{_ as h}from"./nuxt-link.6616a4db.js";import{a7 as b,a8 as w,B as k,a9 as g,a as p,o as m,l as f,U as e,R as t,w as s,a1 as d,u,V as o,aa as x,a4 as M,C,r as $}from"./entry.6f132c30.js";const y=b({siteName:"SDLab"}),N={},L=w(y,N);function v(){const i=k();return i._appConfig||(i._appConfig=g(L)),i._appConfig}const R={class:"bg-shark-500 text-white body-font"},z={class:"container mx-auto flex flex-wrap p-5 flex-row items-center"},B=e("svg",{viewBox:"0 0 20 20",fill:"currentColor",class:"academic-cap w-6 h-6"},[e("path",{d:"M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z"})],-1),A={class:"ml-2 text-xl"},j={class:"header-links ml-auto flex flex-wrap items-center text-xl justify-center"},V=e("svg",{fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",class:"menu w-6 h-6"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M4 6h16M4 12h16M4 18h16"})],-1),D=[V],F=p({__name:"Header",emits:["openResponsiveMenu"],setup(i,{emit:n}){const c=v();function r(){n("openResponsiveMenu")}return(_,a)=>{const l=h;return m(),f("header",R,[e("div",z,[t(l,{to:"/",class:"flex title-font font-medium items-center"},{default:s(()=>[B,e("span",A,d(u(c).siteName),1)]),_:1}),e("nav",j,[t(l,{to:"/",class:"mr-5 hidden md:block",exact:""},{default:s(()=>[o(" Home ")]),_:1}),t(l,{to:"/members",class:"mr-5 hidden md:block",exact:""},{default:s(()=>[o(" Members ")]),_:1}),t(l,{to:"/publications",class:"mr-5 hidden md:block",exact:""},{default:s(()=>[o(" Publications ")]),_:1}),t(l,{to:"/news",class:"mr-5 hidden md:block",exact:""},{default:s(()=>[o(" News ")]),_:1}),t(l,{to:"/articles/access",class:"mr-5 hidden md:block",exact:""},{default:s(()=>[o(" Access ")]),_:1}),e("a",{href:"#",type:"button","aria-label":"Open Navigation",title:"Open Navigation",class:"block md:hidden mr-5 focus:outline-none",onClick:a[0]||(a[0]=x(te=>r(),["prevent"]))},D)])])])}}}),H={class:"text-white body-font"},O={class:"bg-shark-500"},S={class:"container px-5 py-6 mx-auto flex items-center md:flex-row flex-col"},Y=e("svg",{viewBox:"0 0 20 20",fill:"currentColor",class:"academic-cap w-6 h-6"},[e("path",{d:"M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z"})],-1),P={class:"ml-2 text-xl"},E={class:"text-sm md:ml-6 md:mt-0 mt-4"},T={class:"footer-links inline-flex md:ml-auto md:mt-0 mt-4 justify-center md:justify-start"},U=p({__name:"Footer",setup(i){const n=v(),c=new Date().getFullYear(),r=2021;return(_,a)=>{const l=h;return m(),f("footer",H,[e("div",O,[e("div",S,[t(l,{to:"/",class:"flex title-font font-medium items-center md:justify-start justify-center"},{default:s(()=>[Y,e("span",P,d(u(n).siteName),1)]),_:1}),e("div",E," © "+d(r)+" - "+d(u(c))+" "+d(u(n).siteName),1),e("div",T,[t(l,{to:"/credits"},{default:s(()=>[o(" Credits ")]),_:1})])])])])}}}),q={key:0,class:"fixed top-0 left-0 bg-shark-600 opacity-90 w-full h-screen z-1000 overflow-hidden pt-20"},G={class:"absolute top-0 right-0 text-right text-right mr-6 mt-6 text-white"},I=["onClick"],J=e("svg",{viewBox:"0 0 20 20",fill:"currentColor",class:"x w-6 h-6"},[e("path",{"fill-rule":"evenodd",d:"M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z","clip-rule":"evenodd"})],-1),K=[J],Q={class:"container mx-auto text-2xl text-white"},W={class:"text-center list-none justify-center"},X=p({__name:"ResponsiveMenu",props:{showResponsiveMenu:{type:Boolean}},emits:["closeResponsiveMenu"],setup(i,{emit:n}){function c(){n("closeResponsiveMenu")}return(r,_)=>{const a=h;return i.showResponsiveMenu?(m(),f("div",q,[e("div",G,[e("a",{href:"#",type:"button",class:"block rounded-full border border-white p-4 hover:bg-white hover:text-black transition-colors duration-150",onClick:x(c,["prevent"])},K,8,I)]),e("div",Q,[e("ul",W,[e("li",null,[t(a,{to:"/",class:"inline-block mb-5",exact:""},{default:s(()=>[o(" Home ")]),_:1})]),e("li",null,[t(a,{to:"/members",class:"inline-block mb-5",exact:""},{default:s(()=>[o(" Members ")]),_:1})]),e("li",null,[t(a,{to:"/publications",class:"inline-block mb-5",exact:""},{default:s(()=>[o(" Publications ")]),_:1})]),e("li",null,[t(a,{to:"/news",class:"inline-block mb-5",exact:""},{default:s(()=>[o(" News ")]),_:1})]),e("li",null,[t(a,{to:"/articles/access",class:"inline-block mb-5",exact:""},{default:s(()=>[o(" Access ")]),_:1})])])])])):M("",!0)}}}),Z={class:"layout"},ee={class:"min-h-screen"},ne=p({__name:"default",setup(i){const n=C(!1);function c(){console.log("hogehoge"),n.value=!0}function r(){n.value=!1}return(_,a)=>(m(),f("div",Z,[t(X,{"show-responsive-menu":u(n),onCloseResponsiveMenu:r},null,8,["show-responsive-menu"]),t(F,{onOpenResponsiveMenu:c}),e("div",ee,[$(_.$slots,"default")]),t(U)]))}});export{ne as default};
