import{_ as p,r as n,o as u,c as _,a,b as t,w as l,d,e as f,f as g}from"./index-BCD3GlBd.js";import{T as $}from"./ToastMessages-C-fOhOok.js";import"./component-functions-CDKwVM-O.js";const m={methods:{logout(){this.$http.post("https://ec-course-api.hexschool.io/logout",this.user).then(s=>{s.data.success&&this.$router.push("/login")})}}},k={class:"navbar navbar-expand-lg navbar-dark bg-dark"},x={class:"container"},M=a("a",{class:"navbar-brand",href:"#"},"DEMO",-1),N=a("button",{class:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarNavAltMarkup","aria-controls":"navbarNavAltMarkup","aria-expanded":"false","aria-label":"Toggle navigation"},[a("span",{class:"navbar-toggler-icon"})],-1),T={class:"collapse navbar-collapse",id:"navbarNavAltMarkup"},B={class:"navbar-nav"};function w(e,s,r,h,v,c){const o=n("router-link");return u(),_("nav",k,[a("div",x,[M,N,a("div",T,[a("div",B,[t(o,{to:"/dashboard/products",class:"nav-link"},{default:l(()=>[d("產品")]),_:1}),t(o,{to:"/dashboard/orders",class:"nav-link"},{default:l(()=>[d("訂單")]),_:1}),t(o,{to:"/dashboard/coupons",class:"nav-link"},{default:l(()=>[d("優惠券")]),_:1}),a("a",{href:"#",onClick:s[0]||(s[0]=f((...i)=>c.logout&&c.logout(...i),["prevent"])),class:"nav-link"},"登出")])])])])}const A=p(m,[["render",w]]),C={components:{NavBar:A,ToastMessage:$},provide(){return{emitter:g}},created(){const e=document.cookie.replace(/(?:(?:^|.*;\s*)hexToken\s*=\s*([^;]*).*$)|^.*$/,"$1");this.$http.defaults.headers.common.Authorization=e,this.$http.post("https://ec-course-api.hexschool.io/api/user/check",this.user).then(r=>{r.data.success||this.$router.push("/login")})}},V={class:"container-fluid"},D={class:"container"};function E(e,s,r,h,v,c){const o=n("NavBar"),i=n("ToastMessage"),b=n("router-view");return u(),_("div",null,[t(o),a("div",V,[t(i),a("div",D,[t(b)])])])}const j=p(C,[["render",E]]);export{j as default};