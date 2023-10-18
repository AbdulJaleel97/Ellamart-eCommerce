import{_ as z}from"./nuxt-link.16622a7f.js";import{c as w}from"./cart.babba2ea.js";import{_ as P,m as H,f as V,r as p,c as n,b as l,w as a,o as i,d as h,n as $,a as t,t as r,g as u,h as g,F as v,i as f,j as A,v as T,p as M,e as O}from"./entry.914fb501.js";const q=""+new URL("cart-page-cards.aa024714.webp",import.meta.url).href;const E={data:()=>({countries:["Egypt","Saudi Arabia","Qatar","Syria","UAE","Bahrin"],cities:["Elzawya-City","Cairo","Ryiadh","Giza","Abyss"]}),computed:{...H(w,["cartItems"]),totalPrice(){return`${this.cartItems.reduce((o,c)=>o+Math.floor(c.price-c.price*c.discountPercentage/100)*c.quantity,0)}`}},methods:{...V(w,["deleteItem","setToLocalStorage"]),checkOut(){this.setToLocalStorage(),this.$route.push({name:"checkout"})}},mounted(){document.title="Shopping Cart - Ella"}},s=o=>(M("data-v-7875469e"),o=o(),O(),o),R={class:"cart"},L={key:0,class:"position-relative mb-7"},U=s(()=>t("path",{fill:"currentColor",d:"M624 352h-16V243.9c0-12.7-5.1-24.9-14.1-33.9L494 110.1c-9-9-21.2-14.1-33.9-14.1H416V48c0-26.5-21.5-48-48-48H112C85.5 0 64 21.5 64 48v48H8c-4.4 0-8 3.6-8 8v16c0 4.4 3.6 8 8 8h272c4.4 0 8 3.6 8 8v16c0 4.4-3.6 8-8 8H40c-4.4 0-8 3.6-8 8v16c0 4.4 3.6 8 8 8h208c4.4 0 8 3.6 8 8v16c0 4.4-3.6 8-8 8H8c-4.4 0-8 3.6-8 8v16c0 4.4 3.6 8 8 8h208c4.4 0 8 3.6 8 8v16c0 4.4-3.6 8-8 8H64v128c0 53 43 96 96 96s96-43 96-96h128c0 53 43 96 96 96s96-43 96-96h48c8.8 0 16-7.2 16-16v-32c0-8.8-7.2-16-16-16zM160 464c-26.5 0-48-21.5-48-48s21.5-48 48-48 48 21.5 48 48-21.5 48-48 48zm320 0c-26.5 0-48-21.5-48-48s21.5-48 48-48 48 21.5 48 48-21.5 48-48 48zm80-208H416V144h44.1l99.9 99.9V256z",class:""},null,-1)),B=[U],N={class:"mb-0 mt-3"},Y={style:{"font-weight":"bold"}},j=s(()=>t("span",{style:{"font-weight":"bold"}}," Free shipping! ",-1)),D={key:1,class:"position-relative mb-7"},F={"aria-hidden":"true",focusable:"false","data-prefix":"fas","data-icon":"shipping-fast",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 640 512",class:"svg-inline--fa fa-shipping-fast fa-w-20 fa-3x",width:"20",color:"rgb(105, 198, 156)",style:{position:"relative",bottom:"-7px","z-index":"3",left:"calc(100% - 20px)"}},G=s(()=>t("path",{fill:"currentColor",d:"M624 352h-16V243.9c0-12.7-5.1-24.9-14.1-33.9L494 110.1c-9-9-21.2-14.1-33.9-14.1H416V48c0-26.5-21.5-48-48-48H112C85.5 0 64 21.5 64 48v48H8c-4.4 0-8 3.6-8 8v16c0 4.4 3.6 8 8 8h272c4.4 0 8 3.6 8 8v16c0 4.4-3.6 8-8 8H40c-4.4 0-8 3.6-8 8v16c0 4.4 3.6 8 8 8h208c4.4 0 8 3.6 8 8v16c0 4.4-3.6 8-8 8H8c-4.4 0-8 3.6-8 8v16c0 4.4 3.6 8 8 8h208c4.4 0 8 3.6 8 8v16c0 4.4-3.6 8-8 8H64v128c0 53 43 96 96 96s96-43 96-96h128c0 53 43 96 96 96s96-43 96-96h48c8.8 0 16-7.2 16-16v-32c0-8.8-7.2-16-16-16zM160 464c-26.5 0-48-21.5-48-48s21.5-48 48-48 48 21.5 48 48-21.5 48-48 48zm320 0c-26.5 0-48-21.5-48-48s21.5-48 48-48 48 21.5 48 48-21.5 48-48 48zm80-208H416V144h44.1l99.9 99.9V256z",class:""},null,-1)),Q=[G],W=s(()=>t("p",{class:"mb-0 mt-3 font-weight-bold"}," Your order includes free shipping now! ",-1)),J=s(()=>t("div",{class:"titles"},[t("div",{class:"first"},"PRODUCT"),t("div",{class:"second"},"PRICE"),t("div",{class:"third"},"QUANTITY"),t("div",{class:"fourth"},"TOTAL")],-1)),K={class:"products"},X={class:"one"},Z={class:"img d-flex align-center"},tt=["src","alt"],et={class:"text"},st={style:{"font-weight":"bold"}},ot={class:"two"},it={class:"after-discount"},nt={class:"three"},lt={class:"quantity"},at=s(()=>t("label",null,"Quantity",-1)),ct={class:"quantity-btns",style:{border:"1px solid rgb(202, 202, 202)","border-radius":"30px",padding:"5px"}},rt=["onClick"],dt=s(()=>t("i",{class:"fa-solid fa-minus"},null,-1)),pt=[dt],ht=["onUpdate:modelValue"],_t=["onClick"],ut=s(()=>t("i",{class:"fa-solid fa-plus"},null,-1)),mt=[ut],gt={class:"four text-end"},vt=s(()=>t("div",{class:"four-total"},"Total",-1)),ft={class:"mb-1"},bt=["onClick"],yt=s(()=>t("i",{class:"fa-regular fa-trash-can"},null,-1)),xt=[yt],wt={key:0},kt=s(()=>t("div",{class:"gift mb-8"},[t("i",{class:"fa-solid fa-gift"}),h(" DO YOU WANT A GIFT WRAP? "),t("span",{style:{"font-weight":"bold"}},"ONLY FOR $10.00 "),t("button",{style:{padding:"3px 13px","border-radius":"30px",border:"1px solid rgb(231, 230, 230)","font-size":"12px","font-weight":"bold","margin-left":"5px"}}," Add ")],-1)),Ct=s(()=>t("div",{class:"comment"},[t("p",{class:"mb-2 font-weight-bold"},"Additional Comments"),t("textarea",{placeholder:"Special instruction for seller",style:{width:"60%",height:"110px",border:"1px solid rgb(231, 230, 230)","border-radius":"30px",resize:"none",padding:"15px","margin-bottom":"15px"}}),t("div",null,[t("i",{class:"fa-solid fa-shield mr-3"}),t("span",{style:{color:"rgb(120 120 120)"}},"Secure shopping guarantee")]),t("div",{class:"mt-4"},[t("img",{style:{"max-width":"270px"},src:q,alt:""})])],-1)),St=[kt,Ct],It=s(()=>t("p",{style:{"padding-bottom":"25px","font-size":"15px","margin-top":"0","font-weight":"500","border-bottom":"1px solid rgb(231, 230, 230)"}}," ORDER SUMMARY ",-1)),zt={class:"d-flex justify-space-between",style:{"font-weight":"500",margin:"35px 0 20px 0","padding-bottom":"20px","border-bottom":"1px solid rgb(231, 230, 230)"}},Pt=s(()=>t("p",null,"Subtotal:",-1)),Ht={class:"shipping"},Vt=s(()=>t("p",null,"Get Shipping Estimate",-1)),$t={class:"w-100 mt-2",style:{border:"1px solid rgb(231, 230, 230)",outline:"none",padding:"10px",color:"grey"}},At=["value"],Tt={class:"mt-3",style:{border:"1px solid rgb(231, 230, 230)",outline:"none",padding:"10px",width:"60%","margin-right":"1%",color:"grey"}},Mt=["value"],Ot=s(()=>t("input",{type:"number",placeholder:"Postal Code",style:{width:"38%","margin-left":"1%",border:"1px solid rgb(231, 230, 230)",padding:"10px",outline:"none"}},null,-1)),qt=s(()=>t("div",{class:"my-5"},[t("button",{class:"calc-shipping",style:{border:"1px solid black","text-align":"center",padding:"10px","border-radius":"30px",transition:"0.3s",width:"100%"}}," Calculate Shipping ")],-1)),Et=s(()=>t("div",null,[t("p",{class:"mb-2"},"Coupon Code:"),t("input",{type:"number",placeholder:"Enter Coupon Code",style:{width:"100%",border:"1px solid rgb(231, 230, 230)",padding:"10px",outline:"none"}}),t("p",{class:"mt-2",style:{"font-size":"14px",color:"grey"}}," Coupon code will be applied on the checkout page ")],-1)),Rt={class:"total d-flex justify-space-between align-center"},Lt=s(()=>t("p",null,"Total",-1)),Ut={style:{"font-weight":"800"}},Bt=s(()=>t("p",{class:"mt-10",style:{color:"black"}}," Your cart is currently empty. ",-1)),Nt={key:0,class:"my-5"},Yt=s(()=>t("span",{style:{"font-weight":"bold"}},"$10000",-1)),jt=s(()=>t("span",{style:{"font-weight":"bold"}}," free shipping! ",-1));function Dt(o,c,Ft,Gt,Qt,d){const k=p("v-icon"),C=p("v-breadcrumbs"),_=p("v-col"),b=p("v-progress-linear"),y=p("v-divider"),x=z,S=p("v-row"),I=p("v-container");return i(),n("div",R,[l(I,{fluid:"",class:"pb-15"},{default:a(()=>[l(S,null,{default:a(()=>[l(_,{cols:"12",class:"py-0 mt-15"},{default:a(()=>[l(C,{items:["Home","Shopping Cart"],style:{"font-size":"13px",padding:"0"}},{divider:a(()=>[l(k,null,{default:a(()=>[h("mdi-chevron-right")]),_:1})]),_:1})]),_:1}),l(_,{cols:"12"},{default:a(()=>[o.cartItems.length>0&&1e4-d.totalPrice>0?(i(),n("div",L,[(i(),n("svg",{"aria-hidden":"true",focusable:"false","data-prefix":"fas","data-icon":"shipping-fast",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 640 512",class:"svg-inline--fa fa-shipping-fast fa-w-20 fa-3x",width:"20",color:"rgba(255, 0, 0, 0.68)",style:$(`position: relative;
              bottom: -7px;
              transition: 0.20s;
              left: calc(${parseInt(d.totalPrice/1e4*100)}% - 20px);`)},B,4)),l(b,{height:"6",color:"rgba(255, 0, 0, 0.68)","model-value":parseInt(d.totalPrice/1e4*100),striped:""},null,8,["model-value"]),t("p",N,[h(" Only "),t("span",Y,"$"+r(`${1e4-d.totalPrice}`),1),h(" Away from "),j])])):u("",!0),o.cartItems.length>0&&1e4-d.totalPrice<=0?(i(),n("div",D,[(i(),n("svg",F,Q)),l(b,{height:"6",color:"rgb(105, 198, 156)","model-value":"100",striped:""}),W])):u("",!0)]),_:1}),o.cartItems.length>0?(i(),g(_,{key:0,cols:"12",md:"9"},{default:a(()=>[J,t("div",K,[(i(!0),n(v,null,f(o.cartItems,(e,Wt)=>(i(),n("div",{class:"item",key:e.id},[t("div",X,[t("div",Z,[t("img",{src:e.thumbnail,alt:e.title},null,8,tt)]),t("div",et,[t("span",st,r(e.title),1),t("p",null,r(e.description),1)])]),t("div",ot,[t("span",it,r(`$${Math.floor(e.price-e.price*e.discountPercentage/100)}.00 `),1)]),t("div",nt,[t("div",lt,[at,t("div",ct,[t("button",{style:{color:"rgb(202, 202, 202)"},onClick:m=>{e.quantity>1&&e.quantity--}},pt,8,rt),A(t("input",{type:"number","onUpdate:modelValue":m=>e.quantity=m},null,8,ht),[[T,e.quantity]]),t("button",{style:{color:"rgb(202, 202, 202)"},onClick:m=>{e.quantity++}},mt,8,_t)])])]),t("div",gt,[vt,t("div",ft,r(`$${Math.floor(e.price-e.price*e.discountPercentage/100)*e.quantity}`),1),t("button",{class:"delete",onClick:m=>o.deleteItem(e.id)},xt,8,bt)])]))),128))]),o.cartItems.length>0?(i(),n("div",wt,St)):u("",!0)]),_:1})):u("",!0),o.cartItems.length>0?(i(),g(_,{key:1,cols:"12",md:"3"},{default:a(()=>[It,t("div",zt,[Pt,t("span",null,"$"+r(d.totalPrice),1)]),t("div",Ht,[Vt,t("select",$t,[(i(!0),n(v,null,f(o.countries,e=>(i(),n("option",{value:e,key:e},r(e),9,At))),128))]),t("select",Tt,[(i(!0),n(v,null,f(o.cities,e=>(i(),n("option",{value:e,key:e},r(e),9,Mt))),128))]),Ot]),qt,l(y,{class:"mt-6 mb-4 w-100"}),Et,l(y,{class:"my-6 w-100"}),t("div",Rt,[Lt,t("span",Ut,"$"+r(d.totalPrice),1)]),t("div",null,[t("div",null,[l(x,{to:"/checkout",elevation:"0",style:{width:"100%","border-radius":"30px",height:"50px",transition:"0 !important",display:"flex","justify-content":"center","align-items":"center","text-decoration":"none"},class:"checkout my-5",onClick:c[0]||(c[0]=e=>d.checkOut())},{default:a(()=>[h(" Proceed to Checkout ")]),_:1})]),t("div",null,[l(x,{to:"/",elevation:"0",style:{width:"100%","border-radius":"30px",height:"50px",transition:"0s !important",color:"white",border:"1px solid black","background-color":"#252525",display:"flex","justify-content":"center","align-items":"center","text-decoration":"none"},class:"continue-shopping mt-0 mb-2"},{default:a(()=>[h(" Continue Shopping ")]),_:1})])])]),_:1})):(i(),g(_,{key:2,cols:"12",style:{margin:"20px 0"}},{default:a(()=>[Bt,o.cartItems.length<=0?(i(),n("p",Nt,[Yt,h(" purchases guarantee a "),jt])):u("",!0),t("button",{class:"continue-shopping text-center",style:{border:"none","border-radius":"30px",color:"white","max-width":"fit-content",display:"block",margin:"auto",padding:"8px 60px","background-color":"#0069d9"},onClick:c[1]||(c[1]=e=>this.drawer=!1)}," Continue Shopping ")]),_:1}))]),_:1})]),_:1})])}const Zt=P(E,[["render",Dt],["__scopeId","data-v-7875469e"]]);export{Zt as default};