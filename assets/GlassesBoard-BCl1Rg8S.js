import{_,q as u,f as m,r as l,o as f,c as h,a as s,n as a,b as i,F as v,s as g,u as C}from"./index-z3LvzIsY.js";import{p as k}from"./productStore-DLtdnTK4.js";import{T as y}from"./ToastMessages-DGlaopXz.js";import"./component-functions-CMWcccoY.js";const b={data(){return{currentCategory:"optical"}},components:{ToastMessages:y},methods:{...u(k,["setCategory"]),showProducts(t){this.currentCategory!==t&&(this.setCategory(t),this.currentCategory=t)}},provide(){return{emitter:m}}},c=t=>(g("data-v-30b0c43e"),t=t(),C(),t),w={class:"container"},x={class:"row g-0 text-center text-black"},S={class:"col"},I=c(()=>s("small",null,"Optical",-1)),N=[I],T={class:"col"},B=c(()=>s("small",null,"SUNGLASSES",-1)),P=[B],A={class:"col"},F=c(()=>s("small",null,"FUNCTIONAL",-1)),M=[F];function E(t,e,G,L,o,r){const d=l("ToastMessages"),p=l("router-view");return f(),h(v,null,[s("header",null,[s("div",w,[s("div",x,[s("div",S,[s("a",{class:a(["nav-link text-black fs-6 fs-md-4 fs-lg-3 py-3 py-lg-4 border h-100",{active:o.currentCategory==="optical"}]),onClick:e[0]||(e[0]=n=>r.showProducts("optical"))},N,2)]),s("div",T,[s("a",{class:a(["nav-link text-black fs-6 fs-md-4 fs-lg-3 py-3 py-lg-4 border h-100",{active:o.currentCategory==="sun"}]),onClick:e[1]||(e[1]=n=>r.showProducts("sun"))},P,2)]),s("div",A,[s("a",{class:a(["nav-link text-black fs-6 fs-md-4 fs-lg-3 py-3 py-lg-4 border h-100",{active:o.currentCategory==="func"}]),onClick:e[2]||(e[2]=n=>r.showProducts("func"))},M,2)])])])]),i(d),i(p)],64)}const z=_(b,[["render",E],["__scopeId","data-v-30b0c43e"]]);export{z as default};
