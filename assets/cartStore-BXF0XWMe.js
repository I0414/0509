import{y as i,z as c}from"./index-z3LvzIsY.js";import{s as n}from"./productStore-DLtdnTK4.js";const t=n(),u=i("cartStore",{state:()=>({cart:{},coupon_code:"",form:{user:{name:"",email:"",tel:"",address:""},message:""}}),actions:{addToCart(a,o=1){const e="https://ec-course-api.hexschool.io/api/kk0414/cart",s={product_id:a,qty:o};t.loadingItem=a,c.post(e,{data:s}).then(r=>{console.log(r),this.getCart(),t.addMessage(r,"加入購物車"),t.loadingItem=""})},getCart(){const a="https://ec-course-api.hexschool.io/api/kk0414/cart";t.isLoading=!0,c.get(a).then(o=>{this.cart=o.data.data,t.isLoading=!1})},updateCart(a){const o=`https://ec-course-api.hexschool.io/api/kk0414/cart/${a.id}`,e={product_id:a.product_id,qty:a.qty};t.isLoading=!0,t.loadingItem=a.id,c.put(o,{data:e}).then(s=>{t.addMessage(s,"更新購物車資訊","",this.getCart()),t.loadingItem="",t.isLoading=!1})},removeCartItem(a){const o=`https://ec-course-api.hexschool.io/api/kk0414/cart/${a}`;t.isLoading=!0,t.loadingItem=a,c.delete(o).then(e=>{this.getCart(),t.addMessage(e,"移除購物車品項",e.data.message),t.loadingItem="",t.isLoading=!1})},addCouponCode(){const a="https://ec-course-api.hexschool.io/api/kk0414/coupon",o={code:this.coupon_code};t.isLoading=!0,c.post(a,{data:o}).then(e=>{t.addMessage(e,"加入優惠券",e.data.message),this.getCart(),t.isLoading=!1})},createOrder(a){const o="https://ec-course-api.hexschool.io/api/kk0414/order",e=this.form;c.post(o,{data:e}).then(s=>{console.log(s);const{orderId:r}=s.data,d={name:"checkout",params:{orderId:r}};a.push(d)})}}});export{u as c};