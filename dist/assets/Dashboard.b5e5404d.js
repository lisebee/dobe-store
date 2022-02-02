import{o as i,c as r,a as e,h as w,t as c,j as u,v as h,k as x,F as g,b as f,l as y,m as j,n as v,d as U,p as z,K as B,q as S}from"./vendor.f668e959.js";import{_ as k,a as L}from"./index.ced87007.js";import{a as p}from"./index.03bb1a20.js";const G={width:"1.2em",height:"1.2em",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 24 24"},H=e("g",{fill:"none"},[e("path",{d:"M9 12h6m-6 4h6m2 5H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5.586a1 1 0 0 1 .707.293l5.414 5.414a1 1 0 0 1 .293.707V19a2 2 0 0 1-2 2z",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"})],-1),N=[H];function R(n,t){return i(),r("svg",G,N)}var M={name:"heroicons-outline-document-text",render:R};const Y={props:["imgsIndex"],data(){return{imagesUrl:[]}}},F=["for"],K=["id"],q=["src"];function E(n,t,d,b,o,a){return i(!0),r(g,null,w(d.imgsIndex,_=>(i(),r("div",{class:"flex justify-between items-center w-full mb-2",key:_},[e("label",{for:"img"+_,class:"w-1/4 font-bold text-white"},"\u5716\u7247"+c(_),9,F),u(e("input",{id:"img"+_,class:"w-3/4 bg-sky-100/75 rounded",type:"text",placeholder:"\u8ACB\u8F38\u5165\u5716\u7247\u9023\u7D50","onUpdate:modelValue":t[0]||(t[0]=m=>o.imagesUrl=m),onChange:t[1]||(t[1]=m=>n.$emit("getImgVal"))},null,40,K),[[h,o.imagesUrl]]),o.imagesUrl.length>=1?(i(),r("img",{key:0,src:o.imagesUrl,class:"w-10 h-10"},null,8,q)):x("",!0)]))),128)}var I=k(Y,[["render",E]]);const J={width:"1.2em",height:"1.2em",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 24 24"},O=e("g",{fill:"none"},[e("path",{d:"M6 18L18 6M6 6l12 12",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"})],-1),Q=[O];function W(n,t){return i(),r("svg",J,Q)}var C={name:"heroicons-outline-x",render:W};const X={props:["openModal"],data(){return{url:"https://vue3-course-api.hexschool.io/v2",path:"dobe",imgsIndex:0,pd:{title:"",category:"",unit:"",origin_price:"",price:"",description:"",content:"",is_enabled:!1,imageUrl:"",imagesUrl:[]}}},methods:{appendInput(){console.log("count===========> ok"),this.imgsIndex+=1,console.log("this.imgsIndex===========>",this.imgsIndex)},addPD(){const n=document.cookie.replace(/(?:(?:^|.*;\s*)myToken\s*\=\s*([^;]*).*$)|^.*$/,"$1");p.defaults.headers.common.Authorization=n;const t={data:{title:this.pd.title,category:this.pd.category,unit:this.pd.unit,origin_price:this.pd.origin_price,price:this.pd.price,description:this.pd.description,content:this.pd.content,is_enabled:this.pd.is_enabled,imageUrl:this.pd.imageUrl,imagesUrl:this.pd.imagesUrl}};p.post(`${this.url}/api/${this.path}/admin/product`,t).then(d=>{console.log("res.data====>",d.data)}).catch(d=>console.log(d))}}},Z={key:0,class:"fixed top-0 left-0 w-full h-full bg-black bg-opacity-75"},ee={class:"relative w-[1000px] mx-auto bg-slate-700 border border-slate-500 rounded p-10 mt-4"},te={class:"grid grid-cols-2"},oe={class:"py-4 px-8"},se={class:"flex justify-between items-center w-full mb-2"},ne=e("label",{for:"title",class:"w-1/4 font-bold text-white"},"\u7522\u54C1\u540D\u7A31",-1),le={class:"flex justify-between items-center w-full mb-2"},ie=e("label",{for:"category",class:"w-1/4 font-bold text-white"},"\u5206\u985E",-1),de={class:"flex justify-between items-center w-full mb-2"},re=e("label",{for:"unit",class:"w-1/4 font-bold text-white"},"\u55AE\u4F4D",-1),ce={class:"flex justify-between items-center w-full mb-2"},ae=e("label",{for:"origin_price",class:"w-1/4 font-bold text-white"},"\u539F\u50F9",-1),pe={class:"flex justify-between items-center w-full mb-2"},ue=e("label",{for:"price",class:"w-1/4 font-bold text-white"},"\u552E\u50F9",-1),he={class:"flex justify-between items-center w-full mb-2"},_e=e("label",{for:"description",class:"w-1/4 font-bold text-white"},"\u7522\u54C1\u63CF\u8FF0",-1),me={class:"flex justify-between items-center w-full mb-2"},be=e("label",{for:"content",class:"w-1/4 font-bold text-white"},"\u8AAA\u660E\u5167\u5BB9",-1),ge={class:"flex justify-start items-center w-full mb-2"},fe=e("label",{for:"is_enabled",class:"w-1/4 font-bold text-white"},"\u662F\u5426\u555F\u7528",-1),xe={class:"py-4 px-8"},we={class:"flex justify-between items-center w-full mb-2"},ye=e("label",{for:"imageUrl",class:"w-1/4 font-bold text-white"},"\u5C01\u9762\u5716\u7247",-1),ve={class:"flex justify-center"},ke=["src"],$e={class:"flex justify-between items-center w-full mb-2"},De=e("label",{for:"",class:"w-1/4 font-bold text-white"},"\u9644\u52A0\u5716\u7247",-1),Ue=["disabled"],Me=e("div",{class:"flex justify-between items-center w-60 mx-auto mt-10"},[e("button",{type:"button",class:"font-bold bg-slate-400 rounded py-2 px-8 hover:bg-amber-300"}," \u53D6\u6D88 "),e("button",{type:"submit",class:"font-bold bg-slate-400 rounded py-2 px-8 hover:bg-amber-300"}," \u78BA\u8A8D ")],-1);function je(n,t,d,b,o,a){const _=C,m=I;return(d.openModal=!0)?(i(),r("div",Z,[e("div",ee,[e("button",{type:"button",class:"absolute top-3 right-3",onClick:t[0]||(t[0]=s=>n.$emit("close"))},[f(_,{class:"w-5 h-5 text-white"})]),e("form",{onSubmit:t[11]||(t[11]=y((...s)=>a.addPD&&a.addPD(...s),["prevent"]))},[e("div",te,[e("div",oe,[e("div",se,[ne,u(e("input",{id:"title",class:"w-3/4 caret-red-500 bg-sky-100/75 rounded",type:"text",placeholder:"\u8ACB\u8F38\u5165\u7522\u54C1\u540D\u7A31","onUpdate:modelValue":t[1]||(t[1]=s=>o.pd.title=s)},null,512),[[h,o.pd.title]])]),e("div",le,[ie,u(e("input",{id:"category",class:"w-3/4 caret-red-500 bg-sky-100/75 rounded",type:"text",placeholder:"\u8ACB\u8F38\u5165\u54C1\u5206\u985E","onUpdate:modelValue":t[2]||(t[2]=s=>o.pd.category=s)},null,512),[[h,o.pd.category]])]),e("div",de,[re,u(e("input",{id:"unit",class:"w-3/4 caret-red-500 bg-sky-100/75 rounded",type:"text",placeholder:"\u8ACB\u8F38\u5165\u55AE\u4F4D","onUpdate:modelValue":t[3]||(t[3]=s=>o.pd.unit=s)},null,512),[[h,o.pd.unit]])]),e("div",ce,[ae,u(e("input",{id:"origin_price",class:"w-3/4 caret-red-500 bg-sky-100/75 rounded",type:"number",placeholder:"\u8ACB\u8F38\u5165\u539F\u50F9","onUpdate:modelValue":t[4]||(t[4]=s=>o.pd.origin_price=s)},null,512),[[h,o.pd.origin_price]])]),e("div",pe,[ue,u(e("input",{id:"price",class:"w-3/4 caret-red-500 bg-sky-100/75 rounded",type:"number",placeholder:"\u8ACB\u8F38\u5165\u552E\u50F9","onUpdate:modelValue":t[5]||(t[5]=s=>o.pd.price=s)},null,512),[[h,o.pd.price]])]),e("div",he,[_e,u(e("textarea",{id:"description",name:"description",class:"w-3/4 caret-red-500 bg-sky-100/75 rounded",rows:"3",placeholder:"\u8ACB\u8F38\u5165\u7522\u54C1\u63CF\u8FF0","onUpdate:modelValue":t[6]||(t[6]=s=>o.pd.description=s)},`
                        `,512),[[h,o.pd.description]])]),e("div",me,[be,u(e("textarea",{id:"content",name:"content",class:"w-3/4 caret-red-500 bg-sky-100/75 rounded",rows:"3",placeholder:"\u8ACB\u8F38\u5165\u8AAA\u660E\u5167\u5BB9","onUpdate:modelValue":t[7]||(t[7]=s=>o.pd.content=s)},`
                        `,512),[[h,o.pd.content]])]),e("div",ge,[fe,u(e("input",{id:"is_enabled",type:"checkbox",class:"bg-sky-100/75 rounded","onUpdate:modelValue":t[8]||(t[8]=s=>o.pd.is_enabled=s)},null,512),[[j,o.pd.is_enabled]])])]),e("div",xe,[e("div",we,[ye,u(e("input",{id:"imageUrl",class:"w-3/4 bg-sky-100/75 rounded",type:"text",placeholder:"\u8ACB\u8F38\u5165\u5716\u7247\u9023\u7D50","onUpdate:modelValue":t[9]||(t[9]=s=>o.pd.imageUrl=s)},null,512),[[h,o.pd.imageUrl]])]),e("div",ve,[o.pd.imageUrl?(i(),r("img",{key:0,src:o.pd.imageUrl,class:"h-32"},null,8,ke)):x("",!0)]),e("div",$e,[De,e("button",{class:"w-3/4 text-white py-2 border-2 hover:bg-slate-800",onClick:t[10]||(t[10]=(...s)=>a.appendInput&&a.appendInput(...s)),disabled:o.imgsIndex==5},"\u65B0\u589E\u5716\u7247",8,Ue)]),o.imgsIndex>=1?(i(),v(m,{key:0,imgsIndex:o.imgsIndex,onGetImgVal:o.pd.imagesUrl},null,8,["imgsIndex","onGetImgVal"])):x("",!0)])]),Me],32)])])):x("",!0)}var V=k(X,[["render",je]]);const Ie={width:"1.2em",height:"1.2em",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 24 24"},Ce=e("g",{fill:"none"},[e("path",{d:"M19 7l-.867 12.142A2 2 0 0 1 16.138 21H7.862a2 2 0 0 1-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v3M4 7h16",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"})],-1),Ve=[Ce];function Pe(n,t){return i(),r("svg",Ie,Ve)}var P={name:"heroicons-outline-trash",render:Pe};const Te={width:"1.2em",height:"1.2em",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 24 24"},Ae=e("g",{fill:"none"},[e("path",{d:"M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 1 1 3.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"})],-1),ze=[Ae];function Be(n,t){return i(),r("svg",Te,ze)}var T={name:"heroicons-outline-pencil",render:Be};const Se={props:["openModal"],data(){return{url:"https://vue3-course-api.hexschool.io/v2",path:"dobe",imgsIndex:0,pd:{title:"",category:"",unit:"",origin_price:"",price:"",description:"",content:"",is_enabled:!1,imageUrl:"",imagesUrl:[]}}},methods:{appendInput(){console.log("count===========> ok"),this.imgsIndex+=1,console.log("this.imgsIndex===========>",this.imgsIndex)},addPD(){const n=document.cookie.replace(/(?:(?:^|.*;\s*)myToken\s*\=\s*([^;]*).*$)|^.*$/,"$1");p.defaults.headers.common.Authorization=n;const t={data:{title:this.pd.title,category:this.pd.category,unit:this.pd.unit,origin_price:this.pd.origin_price,price:this.pd.price,description:this.pd.description,content:this.pd.content,is_enabled:this.pd.is_enabled,imageUrl:this.pd.imageUrl,imagesUrl:this.pd.imagesUrl}};p.post(`${this.url}/api/${this.path}/admin/product`,t).then(d=>{console.log("res.data====>",d.data)}).catch(d=>console.log(d))}}},Le={key:0,class:"fixed top-0 left-0 w-full h-full bg-black bg-opacity-75"},Ge={class:"relative w-[1000px] mx-auto bg-slate-700 border border-slate-500 rounded p-10 mt-4"},He={class:"grid grid-cols-2"},Ne={class:"py-4 px-8"},Re={class:"flex justify-between items-center w-full mb-2"},Ye=e("label",{for:"title",class:"w-1/4 font-bold text-white"},"\u7522\u54C1\u540D\u7A31",-1),Fe={class:"flex justify-between items-center w-full mb-2"},Ke=e("label",{for:"category",class:"w-1/4 font-bold text-white"},"\u5206\u985E",-1),qe={class:"flex justify-between items-center w-full mb-2"},Ee=e("label",{for:"unit",class:"w-1/4 font-bold text-white"},"\u55AE\u4F4D",-1),Je={class:"flex justify-between items-center w-full mb-2"},Oe=e("label",{for:"origin_price",class:"w-1/4 font-bold text-white"},"\u539F\u50F9",-1),Qe={class:"flex justify-between items-center w-full mb-2"},We=e("label",{for:"price",class:"w-1/4 font-bold text-white"},"\u552E\u50F9",-1),Xe={class:"flex justify-between items-center w-full mb-2"},Ze=e("label",{for:"description",class:"w-1/4 font-bold text-white"},"\u7522\u54C1\u63CF\u8FF0",-1),et={class:"flex justify-between items-center w-full mb-2"},tt=e("label",{for:"content",class:"w-1/4 font-bold text-white"},"\u8AAA\u660E\u5167\u5BB9",-1),ot={class:"flex justify-start items-center w-full mb-2"},st=e("label",{for:"is_enabled",class:"w-1/4 font-bold text-white"},"\u662F\u5426\u555F\u7528",-1),nt={class:"py-4 px-8"},lt={class:"flex justify-between items-center w-full mb-2"},it=e("label",{for:"imageUrl",class:"w-1/4 font-bold text-white"},"\u5C01\u9762\u5716\u7247",-1),dt={class:"flex justify-center"},rt=["src"],ct={class:"flex justify-between items-center w-full mb-2"},at=e("label",{for:"",class:"w-1/4 font-bold text-white"},"\u9644\u52A0\u5716\u7247",-1),pt=["disabled"],ut=e("div",{class:"flex justify-between items-center w-60 mx-auto mt-10"},[e("button",{type:"button",class:"font-bold bg-slate-400 rounded py-2 px-8 hover:bg-amber-300"}," \u53D6\u6D88 "),e("button",{type:"submit",class:"font-bold bg-slate-400 rounded py-2 px-8 hover:bg-amber-300"}," \u78BA\u8A8D ")],-1);function ht(n,t,d,b,o,a){const _=C,m=I;return(d.openModal=!0)?(i(),r("div",Le,[e("div",Ge,[e("button",{type:"button",class:"absolute top-3 right-3",onClick:t[0]||(t[0]=s=>n.$emit("close"))},[f(_,{class:"w-5 h-5 text-white"})]),e("form",{onSubmit:t[11]||(t[11]=y((...s)=>a.addPD&&a.addPD(...s),["prevent"]))},[e("div",He,[e("div",Ne,[e("div",Re,[Ye,u(e("input",{id:"title",class:"w-3/4 caret-red-500 bg-sky-100/75 rounded",type:"text",placeholder:"\u8ACB\u8F38\u5165\u7522\u54C1\u540D\u7A31","onUpdate:modelValue":t[1]||(t[1]=s=>o.pd.title=s)},null,512),[[h,o.pd.title]])]),e("div",Fe,[Ke,u(e("input",{id:"category",class:"w-3/4 caret-red-500 bg-sky-100/75 rounded",type:"text",placeholder:"\u8ACB\u8F38\u5165\u54C1\u5206\u985E","onUpdate:modelValue":t[2]||(t[2]=s=>o.pd.category=s)},null,512),[[h,o.pd.category]])]),e("div",qe,[Ee,u(e("input",{id:"unit",class:"w-3/4 caret-red-500 bg-sky-100/75 rounded",type:"text",placeholder:"\u8ACB\u8F38\u5165\u55AE\u4F4D","onUpdate:modelValue":t[3]||(t[3]=s=>o.pd.unit=s)},null,512),[[h,o.pd.unit]])]),e("div",Je,[Oe,u(e("input",{id:"origin_price",class:"w-3/4 caret-red-500 bg-sky-100/75 rounded",type:"number",placeholder:"\u8ACB\u8F38\u5165\u539F\u50F9","onUpdate:modelValue":t[4]||(t[4]=s=>o.pd.origin_price=s)},null,512),[[h,o.pd.origin_price]])]),e("div",Qe,[We,u(e("input",{id:"price",class:"w-3/4 caret-red-500 bg-sky-100/75 rounded",type:"number",placeholder:"\u8ACB\u8F38\u5165\u552E\u50F9","onUpdate:modelValue":t[5]||(t[5]=s=>o.pd.price=s)},null,512),[[h,o.pd.price]])]),e("div",Xe,[Ze,u(e("textarea",{id:"description",name:"description",class:"w-3/4 caret-red-500 bg-sky-100/75 rounded",rows:"3",placeholder:"\u8ACB\u8F38\u5165\u7522\u54C1\u63CF\u8FF0","onUpdate:modelValue":t[6]||(t[6]=s=>o.pd.description=s)},`
                        `,512),[[h,o.pd.description]])]),e("div",et,[tt,u(e("textarea",{id:"content",name:"content",class:"w-3/4 caret-red-500 bg-sky-100/75 rounded",rows:"3",placeholder:"\u8ACB\u8F38\u5165\u8AAA\u660E\u5167\u5BB9","onUpdate:modelValue":t[7]||(t[7]=s=>o.pd.content=s)},`
                        `,512),[[h,o.pd.content]])]),e("div",ot,[st,u(e("input",{id:"is_enabled",type:"checkbox",class:"bg-sky-100/75 rounded","onUpdate:modelValue":t[8]||(t[8]=s=>o.pd.is_enabled=s)},null,512),[[j,o.pd.is_enabled]])])]),e("div",nt,[e("div",lt,[it,u(e("input",{id:"imageUrl",class:"w-3/4 bg-sky-100/75 rounded",type:"text",placeholder:"\u8ACB\u8F38\u5165\u5716\u7247\u9023\u7D50","onUpdate:modelValue":t[9]||(t[9]=s=>o.pd.imageUrl=s)},null,512),[[h,o.pd.imageUrl]])]),e("div",dt,[o.pd.imageUrl?(i(),r("img",{key:0,src:o.pd.imageUrl,class:"h-32"},null,8,rt)):x("",!0)]),e("div",ct,[at,e("button",{class:"w-3/4 text-white py-2 border-2 hover:bg-slate-800",onClick:t[10]||(t[10]=(...s)=>a.appendInput&&a.appendInput(...s)),disabled:o.imgsIndex==5},"\u65B0\u589E\u5716\u7247",8,pt)]),o.imgsIndex>=1?(i(),v(m,{key:0,imgsIndex:o.imgsIndex,onGetImgVal:o.pd.imagesUrl},null,8,["imgsIndex","onGetImgVal"])):x("",!0)])]),ut],32)])])):x("",!0)}var A=k(Se,[["render",ht]]);const _t={components:{Modal:A},name:"dashboard-product",data(){return{url:"https://vue3-course-api.hexschool.io/v2",path:"dobe",openModal:!1,tableSubject:["\u5206\u985E","\u7522\u54C1\u540D\u7A31","\u539F\u50F9","\u552E\u50F9","\u555F\u7528","\u7DE8\u8F2F","\u7D30\u7BC0","\u522A\u9664"],productsData:[],productDetail:[]}},mounted(){const n=document.cookie.replace(/(?:(?:^|.*;\s*)myToken\s*\=\s*([^;]*).*$)|^.*$/,"$1");console.log("token====>",n),p.defaults.headers.common.Authorization=n,p.get(`${this.url}/api/${this.path}/admin/products`).then(t=>{console.log("read res.data.products====>",t.data.products),this.productsData=t.data.products,this.productDetail=t.data.products[0],console.log("read res.data.products[0]====>",t.data.products[0]),console.log("read this.productDetail====>",this.productDetail),console.log("read this.productDetail.category====>",this.productDetail.category)})},watch:{},methods:{controlModal(){this.openModal=!0},readPD(n){console.log("read id====>",n);const t=document.cookie.replace(/(?:(?:^|.*;\s*)myToken\s*\=\s*([^;]*).*$)|^.*$/,"$1");p.defaults.headers.common.Authorization=t,p.get(`${this.url}/api/${this.path}/admin/products`).then(d=>{console.log("read res.data====>",d.data),this.productDetail=d.data.products.filter(b=>b.id==n)})},removePD(n){const t=document.cookie.replace(/(?:(?:^|.*;\s*)myToken\s*\=\s*([^;]*).*$)|^.*$/,"$1");p.defaults.headers.common.Authorization=t,p.delete(`${this.url}/api/${this.path}/admin/product/${n}`).then(d=>{console.log("res.data====>",d.data),window.location.href="/#/dashboard"})}}},mt={class:"max-w-2xl mx-auto lg:max-w-7xl px-4"},bt={class:"flex justify-between py-4 mb-8"},gt=e("h2",{class:"flex font-black text-2xl tracking-wide"},[e("span",null,"\u5546\u54C1\u7BA1\u7406")],-1),ft=["openModal"],xt={class:"flex flex-row"},wt={class:"basis-1/4"},yt={class:"bg-slate-200 drop-shadow-2xl rounded p-4"},vt=e("h2",{class:"font-bold text-xl mb-4"},"\u7522\u54C1\u7D30\u7BC0",-1),kt={class:"flex justify-center"},$t=["src"],Dt={class:"text-left"},Ut={class:"font-bold text-l"},Mt={class:"inline-block text-xs bg-slate-700 text-white py-1 px-4"},jt={class:"my-2"},It={class:"my-2"},Ct={class:"my-2"},Vt={class:"font-bold mr-2"},Pt={class:"line-through mr-2"},Tt=U("\u500B/\u5143"),At={class:"flex flex-wrap"},zt=["src"],Bt={class:"basis-3/4 pl-4"},St={class:"w-full"},Lt={class:"border-b-2"},Gt={class:"py-4 px-6"},Ht=["onClick"],Nt=["onClick"],Rt=["onClick"],Yt={class:"py-4"};function Ft(n,t,d,b,o,a){const _=T,m=M,s=P,D=V;return i(),r(g,null,[e("div",mt,[e("div",bt,[gt,e("button",{class:"bg-cyan-900 text-cyan-200 rounded py-2 px-4 hover:bg-cyan-700",type:"submit",onClick:t[0]||(t[0]=(...l)=>a.controlModal&&a.controlModal(...l)),openModal:o.openModal},"\u5EFA\u7ACB\u65B0\u7522\u54C1",8,ft)]),e("div",xt,[e("div",wt,[e("div",yt,[vt,e("div",null,[e("div",kt,[e("img",{src:o.productDetail.imageUrl,class:"h-40 w-auto"},null,8,$t)]),e("div",Dt,[e("h3",Ut,c(o.productDetail.title),1),e("span",Mt,c(o.productDetail.category),1),e("p",jt,c(o.productDetail.description),1),e("p",It,c(o.productDetail.content),1),e("p",Ct,[e("span",Vt,c(o.productDetail.price),1),e("span",Pt,c(o.productDetail.origin_price),1),Tt])]),e("div",At,[(i(!0),r(g,null,w(o.productDetail.imagesUrl,l=>(i(),r("img",{src:l,class:"h-9 border border-slate-50",key:l},null,8,zt))),128))])])])]),e("div",Bt,[e("table",St,[e("thead",null,[e("tr",Lt,[(i(!0),r(g,null,w(o.tableSubject,l=>(i(),r("td",{class:"font-bold py-2 px-4",key:l+1},c(l),1))),128))])]),e("tbody",null,[(i(!0),r(g,null,w(o.productsData,l=>(i(),r("tr",{class:"border-b",key:l.id},[e("td",Gt,c(l.category),1),e("td",null,c(l.title),1),e("td",null,c(l.origin_price),1),e("td",null,c(l.price),1),e("td",null,c(l.is_enabled),1),e("td",null,[e("button",{onClick:y($=>n.editPD(this.removeID=l.id),["prevent"])},[f(_,{class:"w-6 h-6 text-cyan-700 mx-auto"})],8,Ht)]),e("td",null,[e("button",{onClick:y($=>a.readPD(l.id),["prevent"])},[f(m,{class:"w-6 h-6 text-cyan-700 mx-auto"})],8,Nt)]),e("td",null,[e("button",{onClick:y($=>a.removePD(this.removeID=l.id),["prevent"])},[f(s,{class:"w-6 h-6 text-cyan-700 mx-auto"})],8,Rt)])]))),128))]),e("tfoot",null,[e("tr",null,[e("td",Yt,"\u76EE\u524D\u6709 "+c(o.productsData.length)+" \u9805\u7522\u54C1",1)])])])])])]),o.openModal?(i(),v(D,{key:0,onClose:t[1]||(t[1]=l=>o.openModal=!1),openModal:o.openModal},null,8,["openModal"])):x("",!0)],64)}var Kt=k(_t,[["render",Ft]]);const qt={components:{Modal:A},name:"dashboard-article",data(){return{url:"https://vue3-course-api.hexschool.io/v2",path:"dobe",openModal:!1,tableSubject:["\u5206\u985E","\u7522\u54C1\u540D\u7A31","\u539F\u50F9","\u552E\u50F9","\u555F\u7528","\u7DE8\u8F2F","\u7D30\u7BC0","\u522A\u9664"],productsData:[],productDetail:[]}},mounted(){const n=document.cookie.replace(/(?:(?:^|.*;\s*)myToken\s*\=\s*([^;]*).*$)|^.*$/,"$1");console.log("token====>",n),p.defaults.headers.common.Authorization=n,p.get(`${this.url}/api/${this.path}/admin/products`).then(t=>{console.log("read res.data.products====>",t.data.products),this.productsData=t.data.products,this.productDetail=t.data.products[0],console.log("read res.data.products[0]====>",t.data.products[0]),console.log("read this.productDetail====>",this.productDetail),console.log("read this.productDetail.category====>",this.productDetail.category)})},watch:{},methods:{controlModal(){this.openModal=!0},readPD(n){console.log("read id====>",n);const t=document.cookie.replace(/(?:(?:^|.*;\s*)myToken\s*\=\s*([^;]*).*$)|^.*$/,"$1");p.defaults.headers.common.Authorization=t,p.get(`${this.url}/api/${this.path}/admin/products`).then(d=>{console.log("read res.data====>",d.data),this.productDetail=d.data.products.filter(b=>b.id==n)})},removePD(n){const t=document.cookie.replace(/(?:(?:^|.*;\s*)myToken\s*\=\s*([^;]*).*$)|^.*$/,"$1");p.defaults.headers.common.Authorization=t,p.delete(`${this.url}/api/${this.path}/admin/product/${n}`).then(d=>{console.log("res.data====>",d.data),window.location.href="/#/dashboard"})}}},Et={class:"max-w-2xl mx-auto lg:max-w-7xl px-4"},Jt={class:"flex justify-between py-4 mb-8"},Ot=e("h2",{class:"flex font-black text-2xl tracking-wide"},[e("span",null,"\u6587\u7AE0\u7BA1\u7406")],-1),Qt=["openModal"],Wt={class:"flex flex-row"},Xt={class:"basis-1/4"},Zt={class:"bg-slate-200 drop-shadow-2xl rounded p-4"},eo=e("h2",{class:"font-bold text-xl mb-4"},"\u7522\u54C1\u7D30\u7BC0",-1),to={class:"flex justify-center"},oo=["src"],so={class:"text-left"},no={class:"font-bold text-l"},lo={class:"inline-block text-xs bg-slate-700 text-white py-1 px-4"},io={class:"my-2"},ro={class:"my-2"},co={class:"my-2"},ao={class:"font-bold mr-2"},po={class:"line-through mr-2"},uo=U("\u500B/\u5143"),ho={class:"flex flex-wrap"},_o=["src"],mo={class:"basis-3/4 pl-4"},bo={class:"w-full"},go={class:"border-b-2"},fo={class:"py-4 px-6"},xo=["onClick"],wo=["onClick"],yo=["onClick"],vo={class:"py-4"};function ko(n,t,d,b,o,a){const _=T,m=M,s=P,D=V;return i(),r(g,null,[e("div",Et,[e("div",Jt,[Ot,e("button",{class:"bg-cyan-900 text-cyan-200 rounded py-2 px-4 hover:bg-cyan-700",type:"submit",onClick:t[0]||(t[0]=(...l)=>a.controlModal&&a.controlModal(...l)),openModal:o.openModal},"\u5EFA\u7ACB\u65B0\u7522\u54C1",8,Qt)]),e("div",Wt,[e("div",Xt,[e("div",Zt,[eo,e("div",null,[e("div",to,[e("img",{src:o.productDetail.imageUrl,class:"h-40 w-auto"},null,8,oo)]),e("div",so,[e("h3",no,c(o.productDetail.title),1),e("span",lo,c(o.productDetail.category),1),e("p",io,c(o.productDetail.description),1),e("p",ro,c(o.productDetail.content),1),e("p",co,[e("span",ao,c(o.productDetail.price),1),e("span",po,c(o.productDetail.origin_price),1),uo])]),e("div",ho,[(i(!0),r(g,null,w(o.productDetail.imagesUrl,l=>(i(),r("img",{src:l,class:"h-9 border border-slate-50",key:l},null,8,_o))),128))])])])]),e("div",mo,[e("table",bo,[e("thead",null,[e("tr",go,[(i(!0),r(g,null,w(o.tableSubject,l=>(i(),r("td",{class:"font-bold py-2 px-4",key:l+1},c(l),1))),128))])]),e("tbody",null,[(i(!0),r(g,null,w(o.productsData,l=>(i(),r("tr",{class:"border-b",key:l.id},[e("td",fo,c(l.category),1),e("td",null,c(l.title),1),e("td",null,c(l.origin_price),1),e("td",null,c(l.price),1),e("td",null,c(l.is_enabled),1),e("td",null,[e("button",{onClick:y($=>n.editPD(this.removeID=l.id),["prevent"])},[f(_,{class:"w-6 h-6 text-cyan-700 mx-auto"})],8,xo)]),e("td",null,[e("button",{onClick:y($=>a.readPD(l.id),["prevent"])},[f(m,{class:"w-6 h-6 text-cyan-700 mx-auto"})],8,wo)]),e("td",null,[e("button",{onClick:y($=>a.removePD(this.removeID=l.id),["prevent"])},[f(s,{class:"w-6 h-6 text-cyan-700 mx-auto"})],8,yo)])]))),128))]),e("tfoot",null,[e("tr",null,[e("td",vo,"\u76EE\u524D\u6709 "+c(o.productsData.length)+" \u9805\u7522\u54C1",1)])])])])])]),o.openModal?(i(),v(D,{key:0,onClose:t[1]||(t[1]=l=>o.openModal=!1),openModal:o.openModal},null,8,["openModal"])):x("",!0)],64)}var $o=k(qt,[["render",ko]]);const Do={components:{DashboardProduct:Kt,DashboardArticle:$o},data(){return{url:"https://vue3-course-api.hexschool.io/v2",path:"dobe",currentTab:"dashboard-product",tabs:[{component:"dashboard-product",title:"\u5546\u54C1\u7BA1\u7406"},{component:"dashboard-article",title:"\u6587\u7AE0\u7BA1\u7406"}],openModal:!1,tableSubject:["\u5206\u985E","\u7522\u54C1\u540D\u7A31","\u539F\u50F9","\u552E\u50F9","\u555F\u7528","\u7DE8\u8F2F","\u7D30\u7BC0","\u522A\u9664"],productsData:[],productDetail:[]}},computed:{currentTabComponent(){return`${this.currentTab.toLowerCase()}`}},mounted(){const n=document.cookie.replace(/(?:(?:^|.*;\s*)myToken\s*\=\s*([^;]*).*$)|^.*$/,"$1");console.log("token====>",n),p.defaults.headers.common.Authorization=n,p.get(`${this.url}/api/${this.path}/admin/products`).then(t=>{console.log("read res.data.products====>",t.data.products),this.productsData=t.data.products,this.productDetail=t.data.products[0],console.log("read res.data.products[0]====>",t.data.products[0]),console.log("read this.productDetail====>",this.productDetail),console.log("read this.productDetail.category====>",this.productDetail.category)})},methods:{controlModal(){this.openModal=!0},readPD(n){console.log("read id====>",n);const t=document.cookie.replace(/(?:(?:^|.*;\s*)myToken\s*\=\s*([^;]*).*$)|^.*$/,"$1");p.defaults.headers.common.Authorization=t,p.get(`${this.url}/api/${this.path}/admin/products`).then(d=>{console.log("read res.data====>",d.data),this.productDetail=d.data.products.filter(b=>b.id==n)})},removePD(n){const t=document.cookie.replace(/(?:(?:^|.*;\s*)myToken\s*\=\s*([^;]*).*$)|^.*$/,"$1");p.defaults.headers.common.Authorization=t,p.delete(`${this.url}/api/${this.path}/admin/product/${n}`).then(d=>{console.log("res.data====>",d.data),window.location.href="/#/dashboard"})}}},Uo={class:"flex"},Mo={class:"h-screen bg-slate-800 text-slate-400 py-4 px-6"},jo={class:"flex items-center font-medium text-xl whitespace-nowrap tracking-wide"},Io=e("span",null,"\u96F7\u8AFE\u66FC\u89E3\u6182\u9910\u9152\u9928",-1),Co=e("div",{class:"border-y-2 border-y-slate-700 py-3 my-4"},"Hi,Dobe \u7BA1\u7406\u8005",-1),Vo=["onClick"];function Po(n,t,d,b,o,a){const _=L,m=M;return i(),r("div",Uo,[e("div",Mo,[e("h2",jo,[f(_,{class:"w-6 h-6 mr-1"}),Io]),Co,(i(!0),r(g,null,w(o.tabs,s=>(i(),r("button",{class:S(["flex items-center my-4 mx-2 hover:text-slate-300",["tab-button",{active:o.currentTab===s.component}]]),key:s.component,onClick:D=>o.currentTab=s.component},[f(m,{class:"w-6 h-6 mr-1"}),U(c(s.title),1)],10,Vo))),128))]),e("div",null,[(i(),v(B,{include:["dashboard-product","dashboard-article"],max:2},[(i(),v(z(a.currentTabComponent)))],1024))])])}var Bo=k(Do,[["render",Po]]);export{Bo as default};
