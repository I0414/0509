import{k as M,l as O,_ as b,o as c,c as d,a as m,n as V,t as T,i as k,r as F,F as U,h as q,x as K}from"./index-z3LvzIsY.js";import{e as B,r as H,f as W,b as j}from"./component-functions-CMWcccoY.js";var y={exports:{}};/*!
  * Bootstrap toast.js v5.3.3 (https://getbootstrap.com/)
  * Copyright 2011-2024 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */(function(i,a){(function(o,e){i.exports=e(B(),H(),W(),j())})(M,function(o,e,l,h){const f="toast",n=".bs.toast",S=`mouseover${n}`,N=`mouseout${n}`,$=`focusin${n}`,w=`focusout${n}`,C=`hide${n}`,I=`hidden${n}`,L=`show${n}`,A=`shown${n}`,v="fade",E="hide",u="show",_="showing",x={animation:"boolean",autohide:"boolean",delay:"number"},D={animation:!0,autohide:!0,delay:5e3};class r extends o{constructor(t,s){super(t,s),this._timeout=null,this._hasMouseInteraction=!1,this._hasKeyboardInteraction=!1,this._setListeners()}static get Default(){return D}static get DefaultType(){return x}static get NAME(){return f}show(){if(e.trigger(this._element,L).defaultPrevented)return;this._clearTimeout(),this._config.animation&&this._element.classList.add(v);const s=()=>{this._element.classList.remove(_),e.trigger(this._element,A),this._maybeScheduleHide()};this._element.classList.remove(E),h.reflow(this._element),this._element.classList.add(u,_),this._queueCallback(s,this._element,this._config.animation)}hide(){if(!this.isShown()||e.trigger(this._element,C).defaultPrevented)return;const s=()=>{this._element.classList.add(E),this._element.classList.remove(_,u),e.trigger(this._element,I)};this._element.classList.add(_),this._queueCallback(s,this._element,this._config.animation)}dispose(){this._clearTimeout(),this.isShown()&&this._element.classList.remove(u),super.dispose()}isShown(){return this._element.classList.contains(u)}_maybeScheduleHide(){this._config.autohide&&(this._hasMouseInteraction||this._hasKeyboardInteraction||(this._timeout=setTimeout(()=>{this.hide()},this._config.delay)))}_onInteraction(t,s){switch(t.type){case"mouseover":case"mouseout":{this._hasMouseInteraction=s;break}case"focusin":case"focusout":{this._hasKeyboardInteraction=s;break}}if(s){this._clearTimeout();return}const g=t.relatedTarget;this._element===g||this._element.contains(g)||this._maybeScheduleHide()}_setListeners(){e.on(this._element,S,t=>this._onInteraction(t,!0)),e.on(this._element,N,t=>this._onInteraction(t,!1)),e.on(this._element,$,t=>this._onInteraction(t,!0)),e.on(this._element,w,t=>this._onInteraction(t,!1))}_clearTimeout(){clearTimeout(this._timeout),this._timeout=null}static jQueryInterface(t){return this.each(function(){const s=r.getOrCreateInstance(this,t);if(typeof t=="string"){if(typeof s[t]>"u")throw new TypeError(`No method named "${t}"`);s[t](this)}})}}return l.enableDismissTrigger(r),h.defineJQueryPlugin(r),r})})(y);var P=y.exports;const Y=O(P),z={name:"ToastMessage",props:["msg"],mounted(){const i=this.$refs.toast;new Y(i,{delay:6e3}).show()}},G={class:"toast",role:"alert","aria-live":"assertive","aria-atomic":"true",ref:"toast"},Q={class:"toast-header"},J={class:"me-auto"},R=m("button",{type:"button",class:"btn-close","data-bs-dismiss":"toast","aria-label":"Close"},null,-1),X={key:0,class:"toast-body"};function Z(i,a,o,e,l,h){return c(),d("div",G,[m("div",Q,[m("span",{class:V([`bg-${o.msg.style}`,"p-2 rounded me-2 d-inline-block"])},null,2),m("strong",J,T(o.msg.title),1),R]),o.msg.content?(c(),d("div",X,T(o.msg.content),1)):k("",!0)],512)}const tt=b(z,[["render",Z]]),et={components:{Toast:tt},data(){return{messages:[]}},inject:["emitter"],mounted(){this.emitter.on("push-message",i=>{const{style:a,title:o,content:e}=i;this.messages.push({style:a,title:o,content:e})})}},st={class:"toast-container position-fixed pe-3 top-25 end-0",style:{"z-index":"1050"}};function ot(i,a,o,e,l,h){const f=F("Toast");return c(),d("div",st,[(c(!0),d(U,null,q(l.messages,(p,n)=>(c(),K(f,{key:n,msg:p},null,8,["msg"]))),128))])}const at=b(et,[["render",ot]]);export{at as T};
