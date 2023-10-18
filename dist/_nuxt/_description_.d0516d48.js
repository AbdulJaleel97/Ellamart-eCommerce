import{V as $,p as y}from"./products.d30bc944.js";import{c as L}from"./cart.babba2ea.js";import{_ as C,m as q,f as b,r as n,c as p,b as s,w as e,o as c,h as _,a as o,F as P,i as B,g as I,d as a,t as r}from"./entry.914fb501.js";const U={data:()=>({color:"Black",size:"XS",quantity:1,tab:"",isLoading:!1,dialog:!1,btnLoading:!1}),computed:{...q(y,["productDetails"])},components:{VSkeletonLoader:$},methods:{...b(y,["singleProduct"]),...b(L,["addItem"]),addToCart(t){t.quantity=this.quantity,t.size=this.size,t.color=this.color,this.btnLoading=!0,setTimeout(()=>{this.btnLoading=!1,this.addItem(t),this.$bus.$emit("openCart"),this.$bus.$emit("openMsg",t.title),this.dialog=!1},1e3)}},watch:{async $route(){this.$route.name=="product-id-description"&&(this.tab="",await this.singleProduct(this.$route.params.id))}},async mounted(){this.isLoading=!0,await this.singleProduct(this.$route.params.id),this.isLoading=!1,this.tab=""}},j={class:"product-details mt-10"},T={key:1,class:"d-flex justify-center align-center",style:{height:"500px"}},X=["src"],M=["src"],N={class:"rating-parent d-flex alig-start"},A={style:{"margin-right":"15px"}},E=o("span",{class:"text-red text-end",style:{flex:"1"}},"9 Sold in the last 10 hours",-1),F={class:"text-black"},K=o("span",{class:"text-black"},"Ella - Customer",-1),O=o("span",{class:"text-black"},"KJSU-58636",-1),G={key:0,style:{color:"#3ed660"}},J={key:1,class:"text-black"},Q={style:{"text-decoration":"line-through"}},Z={style:{"font-size":"18px",color:"black","font-weight":"bold"}},H={class:"mb-4 d-flex justify-space-between"},R={class:"text-black font-weight-bold",style:{"font-size":"18px"}},W=o("div",{style:{color:"#808080","font-size":"16px",cursor:"pointer"}},[o("i",{class:"fa-solid fa-ruler"}),a(" Size Guide ")],-1),Y={class:"mb-5"},tt={class:"d-flex"},et=o("div",{class:"black"},null,-1),st=o("div",{class:"purple"},null,-1),ot=o("div",{class:"pink"},null,-1),at=o("div",{class:"burlywood"},null,-1),lt=o("span",null,"Quantity:",-1),it={class:"counter mt-2",style:{border:"1px solid rgb(201 201 201 / 50%)",width:"fit-content","border-radius":"30px",padding:"5px"}},nt=["value"],dt=o("span",{style:{color:"grey"}}," Subtotal:",-1),rt={class:"text-black font-weight-bold",style:{"font-size":"18px"}};function ct(t,l,ut,pt,_t,v){const m=n("v-skeleton-loader"),k=n("v-tab"),x=n("v-tabs"),f=n("v-col"),d=n("v-card-text"),w=n("v-rating"),u=n("v-btn"),g=n("v-btn-toggle"),h=n("v-icon"),z=n("v-card"),D=n("v-row"),S=n("v-container");return c(),p("div",j,[s(S,{fluid:""},{default:e(()=>[s(D,{class:"justify-center mb-10"},{default:e(()=>[s(f,{cols:"12",md:"5",class:"text-center d-flex justify-space-between flex-column"},{default:e(()=>[t.isLoading?(c(),_(m,{key:0,type:"image, image, image, image"})):(c(),p("div",T,[o("img",{style:{"max-width":"100%","max-height":"500px"},src:t.tab?t.tab:t.productDetails.thumbnail,alt:"Product Image"},null,8,X)])),t.isLoading?I("",!0):(c(),_(x,{key:2,"center-active":"",height:"100",class:"d-flex justify-center mt-6",modelValue:t.tab,"onUpdate:modelValue":l[0]||(l[0]=i=>t.tab=i)},{default:e(()=>[(c(!0),p(P,null,B(t.productDetails.images,(i,V)=>(c(),_(k,{width:"120px",key:V,value:i},{default:e(()=>[o("img",{class:"w-100",src:i,alt:"Images"},null,8,M)]),_:2},1032,["value"]))),128))]),_:1},8,["modelValue"]))]),_:1}),s(f,{cols:"12",md:"5"},{default:e(()=>[t.isLoading?(c(),_(m,{key:0,type:"article, article, article,article"})):(c(),_(z,{key:1,elevation:"0"},{default:e(()=>[s(d,{class:"px-0 pt-0",style:{"font-size":"22px","font-weight":"500","line-height":"1.5"}},{default:e(()=>[a(" ("+r(t.productDetails.title)+") Sample - "+r(t.productDetails.category)+" For Sale",1)]),_:1}),o("div",N,[s(w,{modelValue:t.productDetails.rating,"onUpdate:modelValue":l[1]||(l[1]=i=>t.productDetails.rating=i),"half-increments":"",readonly:"",color:"#ffd700",density:"compact",size:"x-small",style:{gap:"4px","font-size":"15px","margin-right":"15px"}},null,8,["modelValue"]),o("span",A,"Stock: "+r(t.productDetails.stock),1),E]),s(d,{class:"px-0",style:{"font-size":"14px",color:"grey"}},{default:e(()=>[a(r(t.productDetails.description),1)]),_:1}),s(d,{class:"px-0 pt-0",style:{"font-size":"14px",color:"grey"}},{default:e(()=>[a(" Brand: "),o("span",F,r(t.productDetails.brand),1)]),_:1}),s(d,{class:"px-0 pt-0",style:{"font-size":"14px",color:"grey"}},{default:e(()=>[a(" Vendor: "),K]),_:1}),s(d,{class:"px-0 pt-0",style:{"font-size":"14px",color:"grey"}},{default:e(()=>[a(" SKU: "),O]),_:1}),s(d,{class:"px-0 pt-0",style:{"font-size":"14px",color:"grey"}},{default:e(()=>[a(" Availability: "),t.productDetails.stock>0?(c(),p("span",G,r(t.productDetails.stock+" In stock"),1)):(c(),p("span",J,"Out Of Stock"))]),_:1}),s(d,{class:"pl-0 pt-0"},{default:e(()=>[a(" Price: "),o("span",Q,r(` $${t.productDetails.price}`),1),a(" To "),o("span",Z,r(`$${Math.floor(t.productDetails.price-t.productDetails.price*t.productDetails.discountPercentage/100)}.00`),1)]),_:1}),s(d,{class:"pl-0 pt-0"},{default:e(()=>[o("div",H,[o("div",null,[a(" SIZE: "),o("span",R,r(t.size),1)]),W]),s(g,{class:"btn-toggle",style:{"border-radius":"0",height:"fit-content"},modelValue:t.size,"onUpdate:modelValue":l[2]||(l[2]=i=>t.size=i),mandatory:""},{default:e(()=>[s(u,{class:"pa-3 mr-3",style:{width:"50px",height:"97%","border-radius":"6px","background-color":"#eaeaea"},value:"XS"},{default:e(()=>[a(" XS ")]),_:1}),s(u,{class:"pa-3 mr-3",style:{width:"50px",height:"97%","border-radius":"6px","background-color":"#eaeaea"},value:"S"},{default:e(()=>[a(" S ")]),_:1}),s(u,{class:"pa-3 mr-3",style:{width:"50px",height:"97%","border-radius":"6px","background-color":"#eaeaea"},value:"L"},{default:e(()=>[a(" L ")]),_:1}),s(u,{class:"pa-3 mr-3",style:{width:"50px",height:"97%","border-radius":"6px","background-color":"#eaeaea"},value:"XL"},{default:e(()=>[a(" XL ")]),_:1})]),_:1},8,["modelValue"])]),_:1}),s(d,{class:"pl-0 pt-0"},{default:e(()=>[o("div",Y,"Colors: "+r(t.color),1),o("div",tt,[s(g,{class:"color-toggle",modelValue:t.color,"onUpdate:modelValue":l[3]||(l[3]=i=>t.color=i),mandatory:""},{default:e(()=>[s(u,{size:"x-small",value:"Black"},{default:e(()=>[et]),_:1}),s(u,{size:"x-small",value:"Purple"},{default:e(()=>[st]),_:1}),s(u,{size:"x-small",value:"Pink"},{default:e(()=>[ot]),_:1}),s(u,{size:"x-small",value:"Burlywood"},{default:e(()=>[at]),_:1})]),_:1},8,["modelValue"])])]),_:1}),s(d,{class:"pl-0 pt-0"},{default:e(()=>[lt,o("div",it,[s(h,{onClick:l[4]||(l[4]=i=>t.quantity>1?t.quantity--:t.quantity),style:{color:"rgb(155, 155, 155)"}},{default:e(()=>[a("mdi-minus")]),_:1}),o("input",{type:"number",style:{border:"none",outline:"none","text-align":"center",width:"80px"},value:t.quantity},null,8,nt),s(h,{onClick:l[5]||(l[5]=i=>t.quantity++),style:{color:"rgb(155, 155, 155)"}},{default:e(()=>[a("mdi-plus")]),_:1})])]),_:1}),s(d,{class:"pl-0 pt-0 mt-5"},{default:e(()=>[dt,o("span",rt," $"+r(t.quantity*Math.floor(t.productDetails.price-t.productDetails.price*t.productDetails.discountPercentage/100)),1)]),_:1}),s(u,{class:"add-to-cart",style:{"background-color":"rgb(37, 37, 37)",color:"white","border-radius":"30px",width:"50%","text-transform":"none",height:"50px","font-size":"16px"},onClick:l[6]||(l[6]=i=>v.addToCart(t.productDetails)),loading:t.btnLoading},{default:e(()=>[a("Add to Cart")]),_:1},8,["loading"])]),_:1}))]),_:1})]),_:1})]),_:1})])}const ht=C(U,[["render",ct]]);export{ht as default};