import{_ as h,r as i,o as w,c as b,b as t,w as f,a as s,n as m}from"./index-BCD3GlBd.js";const v={data(){return{user:{username:"",password:""}}},methods:{signIn(){this.$http.post("https://ec-course-api.hexschool.io/admin/signin",this.user).then(e=>{if(e.data.success){const{token:l,expired:d}=e.data;document.cookie=`hexToken=${l}; expires=${new Date(d)}`,this.$router.push("/dashboard/products")}})}}},k={class:"container py-7 py-md-11"},V={class:"col-md-6"},g=s("h1",{class:"h3 mb-3 font-weight-normal"},"請先登入",-1),x={class:"mb-2"},y=s("label",{for:"inputEmail",class:"sr-only"},"Email address",-1),P=s("div",{class:"valid-feedback"},"Looks good!",-1),E={class:"mb-2"},q=s("label",{for:"inputPassword",class:"sr-only"},"Password",-1),F=s("div",{class:"valid-feedback"},"Looks good!",-1),B=s("div",{class:"text-end mt-4"},[s("button",{class:"btn btn-lg btn-primary btn-block",type:"submit"},"登入")],-1);function C(u,e,l,d,a,p){const r=i("FieldView"),c=i("ErrorMessage"),_=i("FormView");return w(),b("div",k,[t(_,{class:"row justify-content-center needs-validation",novalidate:"",onSubmit:p.signIn},{default:f(({errors:o})=>[s("div",V,[g,s("div",x,[y,t(r,{type:"email",name:"email",id:"inputEmail",autocomplete:"current-username",class:m(["form-control",{"is-invalid":o&&o.email,"is-valid":o&&!o.email&&a.user.username}]),rules:"email|required",placeholder:"Email address",required:"",modelValue:a.user.username,"onUpdate:modelValue":e[0]||(e[0]=n=>a.user.username=n)},null,8,["class","modelValue"]),P,t(c,{name:"email",class:"invalid-feedback"})]),s("div",E,[q,t(r,{type:"password",name:"Password",id:"inputPassword",autocomplete:"current-password",class:m(["form-control",{"is-invalid":o.Password,"is-valid":o&&!o.Password&&a.user.password}]),rules:"required",placeholder:"Password",required:"",modelValue:a.user.password,"onUpdate:modelValue":e[1]||(e[1]=n=>a.user.password=n)},null,8,["class","modelValue"]),F,t(c,{name:"Password",class:"invalid-feedback"})]),B])]),_:1},8,["onSubmit"])])}const I=h(v,[["render",C]]);export{I as default};