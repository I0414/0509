import{_ as h,p as a,s as p,u as d,o as s,c as t,a as e,i as n,F as l,h as y,q as k,t as r,d as b}from"./index-C29v3M3D.js";import{p as i}from"./productStore-Cus3hvfH.js";const f="/0509/assets/product-header-sm-1-DkrcRBGs.png",_="/0509/assets/product-header-sm-2-C4L292Jz.png",w="/0509/assets/product-header-1-DjAPMbUS.png",u="/0509/assets/product-header-2-DLASxLfX.png",g="/0509/assets/product-header-sm-3-C2c-1Zom.png",C="/0509/assets/product-header-sm-4-BIP_P302.png",m="/0509/assets/product-header-3-Hp4VSYWf.png",v="/0509/assets/product-header-4-DRWOvGa6.png",N={computed:{...a(i,["sortProducts","category","filteredProducts"]),...a(p,["isLoading","loadingItem"])},methods:{...d(i,["getProducts"]),...d(k,["addToCart","getCart","updateCart","removeCartItem","addCouponCode","createOrder"])},created(){this.getProducts(),this.getCart()}},L={class:"banner"},P={key:0,class:"d-lg-none w-50",src:f,alt:""},S={key:1,class:"d-lg-none w-50",src:_,alt:""},D={key:2,class:"d-none d-lg-inline-block w-50",src:w,alt:""},I={key:3,class:"d-none d-lg-inline-block w-50",src:u,alt:""},T={key:4,class:"d-lg-none w-50",src:g,alt:""},A={key:5,class:"d-lg-none w-50",src:C,alt:""},B={key:6,class:"d-none d-lg-inline-block w-50",src:m,alt:""},O={key:7,class:"d-none d-lg-inline-block w-50",src:v,alt:""},V={key:8,class:"d-lg-none w-50",src:_,alt:""},$={key:9,class:"d-lg-none w-50",src:g,alt:""},E={key:10,class:"d-none d-lg-inline-block w-50",src:u,alt:""},W={key:11,class:"d-none d-lg-inline-block w-50",src:m,alt:""},j={class:"container py-7 py-md-11"},G={key:0,class:"text-center"},F=e("small",null,"Celluloid Combi",-1),R=[F],U={key:1,class:"text-center"},q=e("small",null,"2024 NEW COLLECTION",-1),z=[q],H={key:2,class:"text-center"},J=e("small",null,"2024 NEW VACATION",-1),M=[J],X=e("h4",{class:"text-center fw-normal mb-4 mb-md-6"},"賽璐珞鈦金屬混合鏡框",-1),Y={key:3,class:"text-center fw-normal mb-4 mb-md-6"},Z={class:"row"},K={class:"card border-0 rounded-0 mb-4 mb-md-7 mb-lg-11"},Q=["src"],x={class:"d-flex justify-content-between"},ss={class:"card-title fw-normal m-0"},ts={class:"card-price fw-normal m-0 h4"},es={class:"d-flex justify-content-between align-items-center mb-1"},os=e("div",null,[e("a",{href:"",class:"btn dark rounded"}),e("a",{href:"",class:"btn light rounded"})],-1),ns={key:0,class:"fw-normal m-0 text-primary"},cs={class:"btn-group btn-group-sm mt-auto"},rs=["disabled","onClick"],as={key:0,class:"spinner-grow text-danger spinner-grow-sm",role:"status"},ds=e("span",{class:"visually-hidden"},"Loading...",-1),ls=[ds];function is(o,_s,us,gs,ms,hs){return s(),t(l,null,[e("section",null,[e("div",L,[o.category==="optical"?(s(),t("img",P)):n("",!0),o.category==="optical"?(s(),t("img",S)):n("",!0),o.category==="optical"?(s(),t("img",D)):n("",!0),o.category==="optical"?(s(),t("img",I)):n("",!0),o.category==="sun"?(s(),t("img",T)):n("",!0),o.category==="sun"?(s(),t("img",A)):n("",!0),o.category==="sun"?(s(),t("img",B)):n("",!0),o.category==="sun"?(s(),t("img",O)):n("",!0),o.category==="func"?(s(),t("img",V)):n("",!0),o.category==="func"?(s(),t("img",$)):n("",!0),o.category==="func"?(s(),t("img",E)):n("",!0),o.category==="func"?(s(),t("img",W)):n("",!0)])]),e("section",null,[e("div",j,[o.category==="optical"?(s(),t("h2",G,R)):n("",!0),o.category==="sun"?(s(),t("h2",U,z)):n("",!0),o.category==="func"?(s(),t("h2",H,M)):n("",!0),X,o.category==="func"?(s(),t("h4",Y,"敬啟期待...")):n("",!0),e("div",Z,[(s(!0),t(l,null,y(o.filteredProducts,c=>(s(),t("div",{class:"col-md-6 col-lg-3",key:c.id},[e("div",K,[e("img",{src:c.imageUrl,alt:""},null,8,Q),e("div",x,[e("h4",ss,r(c.title),1),e("del",ts,"NTD"+r(c.origin_price),1)]),e("div",es,[os,c.price?(s(),t("h4",ns,"NTD"+r(c.price),1)):n("",!0)]),e("div",cs,[e("button",{type:"button",class:"btn btn-outline-danger",disabled:o.loadingItem===c.id,onClick:ps=>o.addToCart(c.id)},[o.loadingItem===c.id?(s(),t("div",as,ls)):n("",!0),b(" 加到購物車 ")],8,rs)])])]))),128))])])])],64)}const bs=h(N,[["render",is]]);export{bs as default};
