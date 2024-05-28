import{_ as n,o as i,c as d,a as e,g as a,E as _,F as h,h as m,t as l,i as f}from"./index-BCD3GlBd.js";const p={data(){return{id:"",selectedStore:null,filteredStores:[]}},props:["stores"],methods:{filterStores(){const c=this.stores.find(t=>t.id===parseInt(this.id));if(c){const t=c.area;this.selectedStore=c,this.filteredStores=this.stores.filter(r=>r.area===t)}}},created(){this.id=this.$route.params.storeId,this.filterStores()},watch:{id(){this.filterStores()}}},u={class:"container py-7 py-md-11"},b={class:"row mb-4 mb-md-7"},S=e("div",{class:"col-auto"},[e("div",{class:"fs-4"},"選擇地區")],-1),y={class:"col"},g=e("label",{class:"visually-hidden",for:"inlineFormSelectPref"},"Preference",-1),v=["value"],x=e("div",{class:"col-md-5 col-lg-8"},null,-1),w={class:"row gy-4 gy-lg-9"},k={key:0,class:"col-lg-5","data-aos":"fade-left"},z={class:"card h-100 border-0"},F={class:"row flex-column flex-md-row flex-lg-column"},B={class:"col"},P=["src"],V={class:"col"},D={class:"card-header fs-4 border"},E={class:"card-body fs-5 border"},I={class:"my-n1"},L={class:"mb-0 py-1 fs-md-5 d-flex align-items-center text-black"},N=e("span",{class:"material-symbols-outlined d-none d-md-inline-block me-2",style:{"font-size":"24px"}},"call",-1),C=["href"],M={class:"mb-0 py-1 fs-md-5 d-flex align-items-center text-black"},U=e("span",{class:"material-symbols-outlined d-none d-md-inline-block me-2",style:{"font-size":"24px"}},"schedule",-1),j={href:"",class:"text-black w-100"},q={class:"mb-0 py-1 fs-md-5 d-flex align-items-top text-black"},A=e("span",{class:"material-symbols-outlined d-none d-md-inline-block mt-1 me-2",style:{"font-size":"24px"}},"location_on",-1),G=["href"],H={class:"col-lg","data-aos":"fade-right"},J=["src"];function K(c,t,r,O,s,Q){return i(),d("div",u,[e("form",b,[S,e("div",y,[g,a(e("select",{class:"form-select",id:"inlineFormSelectPref","onUpdate:modelValue":t[0]||(t[0]=o=>s.id=o)},[(i(!0),d(h,null,m(s.filteredStores,o=>(i(),d("option",{value:o.id,key:o.id},l(o.name),9,v))),128))],512),[[_,s.id]])]),x]),e("div",w,[s.selectedStore?(i(),d("div",k,[e("div",z,[e("div",F,[e("div",B,[e("img",{src:s.selectedStore.image,alt:"",class:"card-img-top h-100"},null,8,P)]),e("div",V,[e("p",D,l(s.selectedStore.name),1),e("div",E,[e("div",I,[e("p",L,[N,e("a",{href:"tel:"+s.selectedStore.phone,class:"text-black w-100"},"電話："+l(s.selectedStore.phone),9,C)]),e("p",M,[U,e("a",j,"營業時間："+l(s.selectedStore.time),1)]),e("p",q,[A,e("a",{href:s.selectedStore.web,class:"text-black w-100"},"地址："+l(s.selectedStore.address),9,G)])])])])])])])):f("",!0),e("div",H,[e("iframe",{src:s.selectedStore.map,allowfullscreen:"",loading:"lazy",referrerpolicy:"no-referrer-when-downgrade",class:"w-100 h-sm-208 h-md-414 h-lg-100"},null,8,J)])])])}const T=n(p,[["render",K]]);export{T as default};
