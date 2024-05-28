import{m as M,D as w}from"./DelModal-CobeuYJ8.js";import{_ as y,o as l,c as n,a as t,t as o,i as b,F as p,h as g,k as f,r as _,b as m,l as x,n as P,g as L,j as D}from"./index-BCD3GlBd.js";import{P as V}from"./PaginationView-DTxqVU8a.js";import"./component-functions-CDKwVM-O.js";const j={name:"orderModal",props:{order:{type:Object,default(){return{}}}},data(){return{status:{},modal:"",tempOrder:{},isPaid:!1}},emits:["update-product"],mixins:[M],inject:["emitter"],watch:{order(){this.tempOrder=this.order,this.isPaid=this.tempOrder.is_paid}}},E={class:"modal fade",id:"productModal",tabindex:"-1",role:"dialog","aria-labelledby":"exampleModalLabel","aria-hidden":"true",ref:"modal"},N={class:"modal-dialog modal-xl",role:"document"},q={class:"modal-content border-0"},S=t("div",{class:"modal-header bg-dark text-white"},[t("h5",{class:"modal-title",id:"exampleModalLabel"},[t("span",null,"訂單細節")]),t("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})],-1),U={class:"modal-body"},B={class:"row"},A={class:"col-md-4"},F=t("h3",null,"用戶資料",-1),I={class:"table"},z={key:0},T=t("th",{style:{width:"100px"}},"姓名",-1),G=t("th",null,"Email",-1),H=t("th",null,"電話",-1),J=t("th",null,"地址",-1),K={class:"col-md-8"},Q=t("h3",null,"訂單細節",-1),R={class:"table"},W=t("th",{style:{width:"100px"}},"訂單編號",-1),X=t("th",null,"下單時間",-1),Y=t("th",null,"付款時間",-1),Z={key:0},tt={key:1},et=t("th",null,"付款狀態",-1),st={key:0,class:"text-success"},ot={key:1,class:"text-muted"},lt=t("th",null,"總金額",-1),nt=t("h3",null,"選購商品",-1),dt={class:"table"},rt=t("thead",null,[t("tr")],-1),it={class:"text-end"},at={class:"modal-footer"},ct=t("button",{type:"button",class:"btn btn-outline-secondary","data-bs-dismiss":"modal"},"取消 ",-1);function ut(e,d,a,u,s,i){return l(),n("div",E,[t("div",N,[t("div",q,[S,t("div",U,[t("div",B,[t("div",A,[F,t("table",I,[s.tempOrder.user?(l(),n("tbody",z,[t("tr",null,[T,t("td",null,o(s.tempOrder.user.name),1)]),t("tr",null,[G,t("td",null,o(s.tempOrder.user.email),1)]),t("tr",null,[H,t("td",null,o(s.tempOrder.user.tel),1)]),t("tr",null,[J,t("td",null,o(s.tempOrder.user.address),1)])])):b("",!0)])]),t("div",K,[Q,t("table",R,[t("tbody",null,[t("tr",null,[W,t("td",null,o(s.tempOrder.id),1)]),t("tr",null,[X,t("td",null,o(e.$filters.date(s.tempOrder.create_at)),1)]),t("tr",null,[Y,t("td",null,[s.tempOrder.paid_date?(l(),n("span",Z,o(e.$filters.date(s.tempOrder.paid_date)),1)):(l(),n("span",tt,"時間不正確"))])]),t("tr",null,[et,t("td",null,[s.tempOrder.is_paid?(l(),n("strong",st,"已付款")):(l(),n("span",ot,"尚未付款"))])]),t("tr",null,[lt,t("td",null,o(e.$filters.currency(s.tempOrder.total)),1)])])]),nt,t("table",dt,[rt,t("tbody",null,[(l(!0),n(p,null,g(s.tempOrder.products,h=>(l(),n("tr",{key:h.id},[t("th",null,o(h.product.title),1),t("td",null,o(h.qty)+" / "+o(h.product.unit),1),t("td",it,o(e.$filters.currency(h.final_total)),1)]))),128))])])])])]),t("div",at,[ct,t("button",{type:"button",class:"btn btn-primary",onClick:d[0]||(d[0]=h=>e.$emit("update-order",s.tempOrder))},"確認")])])])],512)}const ht=y(j,[["render",ut]]),pt={data(){return{orders:{},isNew:!1,pagination:{},isLoading:!1,tempOrder:{},currentPage:1}},components:{Pagination:V,DelModal:w,OrderModal:ht},methods:{getOrders(e=1){this.currentPage=e;const d=`https://ec-course-api.hexschool.io/api/kk0414/admin/orders?page=${e}`;this.isLoading=!0,this.$http.get(d,this.tempProduct).then(a=>{this.orders=a.data.orders,this.pagination=a.data.pagination,this.isLoading=!1,console.log(a),this.renderCharts()})},openModal(e,d){this.tempOrder={...d},this.isNew=!1,this.$refs.orderModal.showModal()},openDelOrderModal(e){this.tempOrder={...e},this.$refs.delModal.showModal()},updatePaid(e){this.isLoading=!0;const d=`https://ec-course-api.hexschool.io/api/kk0414/admin/order/${e.id}`,a={is_paid:e.is_paid};this.$http.put(d,{data:a}).then(u=>{this.isLoading=!1,this.getOrders(this.currentPage),this.$httpMessageState(u,"更新付款狀態")})},delOrder(){const e=`https://ec-course-api.hexschool.io/api/kk0414/admin/order/${this.tempOrder.id}`;this.isLoading=!0,this.$http.delete(e).then(d=>{console.log(d),this.$refs.delModal.hideModal(),this.getOrders(this.currentPage)})},renderCharts(){const e={},d={};Object.values(this.orders).forEach(u=>{u&&typeof u.products=="object"?Object.values(u.products).forEach(s=>{const i=s.product.title;e[i]||(e[i]=0,d[i]=0),e[i]+=s.qty,d[i]+=s.product.price*s.qty}):console.log("Order has no products or products is not an object:",u)}),f.generate({bindto:"#quantityChart",data:{columns:Object.entries(e),type:"donut"},donut:{title:"銷售數量"}}),f.generate({bindto:"#totalChart",data:{columns:Object.entries(d),type:"donut"},donut:{title:"銷售金額比"}})}},created(){this.getOrders(),console.log("https://ec-course-api.hexschool.io/")}},_t=x('<div class="row py-3"><div class="col-lg-6"><div id="quantityChart"></div></div><div class="col-lg-6"><div id="totalChart"></div></div></div>',1),mt={class:"table mt-4"},bt=t("thead",null,[t("tr",null,[t("th",null,"購買時間"),t("th",null,"Email"),t("th",null,"購買款項"),t("th",null,"應付金額"),t("th",null,"是否付款"),t("th",null,"編輯")])],-1),gt=["textContent"],ft={class:"list-unstyled"},yt={class:"text-right"},Ot={class:"form-check form-switch"},vt=["for"],kt=["id","onUpdate:modelValue","onChange"],$t={key:0},Ct={key:1},Mt={class:"btn-group"},wt=["onClick"],xt=["onClick"];function Pt(e,d,a,u,s,i){const h=_("LoadingView"),O=_("OrderModal"),v=_("DelModal"),k=_("Pagination");return l(),n(p,null,[m(h,{active:s.isLoading},null,8,["active"]),_t,t("table",mt,[bt,t("tbody",null,[(l(!0),n(p,null,g(s.orders,(r,$)=>(l(),n(p,{key:$},[s.orders.length?(l(),n("tr",{key:0,class:P({"text-success":!r.is_paid})},[t("td",null,o(e.$filters.date(r.create_at)),1),t("td",null,[r.user?(l(),n("span",{key:0,textContent:o(r.user.email)},null,8,gt)):b("",!0)]),t("td",null,[t("ul",ft,[(l(!0),n(p,null,g(r.products,(c,C)=>(l(),n("li",{key:C},o(c.product.title)+" 數量："+o(c.qty)+" "+o(c.product.unit)+" 售價： "+o(e.$filters.currency(c.product.price)),1))),128))])]),t("td",yt,o(e.$filters.currency(r.total)),1),t("td",null,[t("div",Ot,[t("label",{class:"form-check-label",for:`paidSwitch${r.id}`},[L(t("input",{class:"form-check-input",type:"checkbox",id:`paidSwitch${r.id}`,"onUpdate:modelValue":c=>r.is_paid=c,onChange:c=>i.updatePaid(r)},null,40,kt),[[D,r.is_paid]]),r.is_paid?(l(),n("span",$t,"已付款")):(l(),n("span",Ct,"未付款"))],8,vt)])]),t("td",null,[t("div",Mt,[t("button",{class:"btn btn-outline-primary btn-sm",onClick:c=>i.openModal(!1,r)},"檢視",8,wt),t("button",{class:"btn btn-outline-danger btn-sm",onClick:c=>i.openDelOrderModal(r)},"刪除",8,xt)])])],2)):b("",!0)],64))),128))])]),m(O,{order:s.tempOrder,ref:"orderModal",onUpdatePaid:i.updatePaid},null,8,["order","onUpdatePaid"]),m(v,{item:s.tempOrder,ref:"delModal",onDelItem:i.delOrder},null,8,["item","onDelItem"]),m(k,{pages:s.pagination,onEmitPages:i.getOrders},null,8,["pages","onEmitPages"])],64)}const Et=y(pt,[["render",Pt]]);export{Et as default};
