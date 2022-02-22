import{o as i,c as r,a as t,f as x,t as d,m as p,v as b,h as v,F as _,b as f,g as y,n as P,i as k,d as M,p as z,K as S,q as B}from"./vendor.1e4a2f50.js";import{_ as D,a as T,b as C,c as G}from"./index.0f0cca94.js";import{a}from"./index.03bb1a20.js";const L={width:"1.2em",height:"1.2em",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 24 24"},N=t("g",{fill:"none"},[t("path",{d:"M9 12h6m-6 4h6m2 5H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5.586a1 1 0 0 1 .707.293l5.414 5.414a1 1 0 0 1 .293.707V19a2 2 0 0 1-2 2z",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"})],-1),H=[N];function F(n,e){return i(),r("svg",L,H)}var U={name:"heroicons-outline-document-text",render:F};const K={props:["imgsIndex"],data(){return{imagesUrl:[]}}},R=["for"],Y=["id"],q=["src"];function E(n,e,c,m,o,u){return i(!0),r(_,null,x(c.imgsIndex,h=>(i(),r("div",{class:"flex justify-between items-center w-full mb-2",key:h},[t("label",{for:"img"+h,class:"w-1/4 font-bold text-white"},"\u5716\u7247"+d(h),9,R),p(t("input",{id:"img"+h,class:"w-3/4 bg-sky-100/75 rounded",type:"text",placeholder:"\u8ACB\u8F38\u5165\u5716\u7247\u9023\u7D50","onUpdate:modelValue":e[0]||(e[0]=g=>o.imagesUrl=g),onChange:e[1]||(e[1]=g=>n.$emit("getImgVal"))},null,40,Y),[[b,o.imagesUrl]]),o.imagesUrl.length>=1?(i(),r("img",{key:0,src:o.imagesUrl,class:"w-10 h-10"},null,8,q)):v("",!0)]))),128)}var A=D(K,[["render",E]]);const O={props:["openModal"],data(){return{url:"https://vue3-course-api.hexschool.io/v2",path:"dobe",imgsIndex:0,pd:{title:"",category:"",unit:"",origin_price:"",price:"",description:"",content:"",is_enabled:!1,imageUrl:"",imagesUrl:[]}}},methods:{appendInput(){console.log("count===========> ok"),this.imgsIndex+=1,console.log("this.imgsIndex===========>",this.imgsIndex)},addPD(){const n=document.cookie.replace(/(?:(?:^|.*;\s*)myToken\s*\=\s*([^;]*).*$)|^.*$/,"$1");a.defaults.headers.common.Authorization=n;const e={data:{title:this.pd.title,category:this.pd.category,unit:this.pd.unit,origin_price:this.pd.origin_price,price:this.pd.price,description:this.pd.description,content:this.pd.content,is_enabled:this.pd.is_enabled,imageUrl:this.pd.imageUrl,imagesUrl:this.pd.imagesUrl}};a.post(`${this.url}/api/${this.path}/admin/product`,e).then(c=>{console.log("res.data====>",c.data)}).catch(c=>console.log(c))}}},J={key:0,class:"fixed top-0 left-0 w-full h-full bg-black bg-opacity-75"},Q={class:"relative w-[1000px] mx-auto bg-slate-700 border border-slate-500 rounded p-10 mt-4"},W={class:"grid grid-cols-2"},X={class:"py-4 px-8"},Z={class:"flex justify-between items-center w-full mb-2"},tt=t("label",{for:"title",class:"w-1/4 font-bold text-white"},"\u7522\u54C1\u540D\u7A31",-1),et={class:"flex justify-between items-center w-full mb-2"},ot=t("label",{for:"category",class:"w-1/4 font-bold text-white"},"\u5206\u985E",-1),st={class:"flex justify-between items-center w-full mb-2"},nt=t("label",{for:"unit",class:"w-1/4 font-bold text-white"},"\u55AE\u4F4D",-1),lt={class:"flex justify-between items-center w-full mb-2"},dt=t("label",{for:"origin_price",class:"w-1/4 font-bold text-white"},"\u539F\u50F9",-1),it={class:"flex justify-between items-center w-full mb-2"},ct=t("label",{for:"price",class:"w-1/4 font-bold text-white"},"\u552E\u50F9",-1),rt={class:"flex justify-between items-center w-full mb-2"},at=t("label",{for:"description",class:"w-1/4 font-bold text-white"},"\u7522\u54C1\u63CF\u8FF0",-1),ut={class:"flex justify-between items-center w-full mb-2"},pt=t("label",{for:"content",class:"w-1/4 font-bold text-white"},"\u8AAA\u660E\u5167\u5BB9",-1),ht={class:"flex justify-start items-center w-full mb-2"},_t=t("label",{for:"is_enabled",class:"w-1/4 font-bold text-white"},"\u662F\u5426\u555F\u7528",-1),mt={class:"py-4 px-8"},bt={class:"flex justify-between items-center w-full mb-2"},gt=t("label",{for:"imageUrl",class:"w-1/4 font-bold text-white"},"\u5C01\u9762\u5716\u7247",-1),ft={class:"flex justify-center"},xt=["src"],yt={class:"flex justify-between items-center w-full mb-2"},wt=t("label",{for:"",class:"w-1/4 font-bold text-white"},"\u9644\u52A0\u5716\u7247",-1),vt=["disabled"],$t=t("div",{class:"flex justify-between items-center w-60 mx-auto mt-10"},[t("button",{type:"button",class:"font-bold bg-slate-400 rounded py-2 px-8 hover:bg-amber-300"}," \u53D6\u6D88 "),t("button",{type:"submit",class:"font-bold bg-slate-400 rounded py-2 px-8 hover:bg-amber-300"}," \u78BA\u8A8D ")],-1);function kt(n,e,c,m,o,u){const h=T,g=A;return(c.openModal=!0)?(i(),r("div",J,[t("div",Q,[t("button",{type:"button",class:"absolute top-3 right-3",onClick:e[0]||(e[0]=l=>n.$emit("close"))},[f(h,{class:"w-5 h-5 text-white"})]),t("form",{onSubmit:e[11]||(e[11]=y((...l)=>u.addPD&&u.addPD(...l),["prevent"]))},[t("div",W,[t("div",X,[t("div",Z,[tt,p(t("input",{id:"title",class:"w-3/4 caret-red-500 bg-sky-100/75 rounded",type:"text",placeholder:"\u8ACB\u8F38\u5165\u7522\u54C1\u540D\u7A31","onUpdate:modelValue":e[1]||(e[1]=l=>o.pd.title=l)},null,512),[[b,o.pd.title]])]),t("div",et,[ot,p(t("input",{id:"category",class:"w-3/4 caret-red-500 bg-sky-100/75 rounded",type:"text",placeholder:"\u8ACB\u8F38\u5165\u54C1\u5206\u985E","onUpdate:modelValue":e[2]||(e[2]=l=>o.pd.category=l)},null,512),[[b,o.pd.category]])]),t("div",st,[nt,p(t("input",{id:"unit",class:"w-3/4 caret-red-500 bg-sky-100/75 rounded",type:"text",placeholder:"\u8ACB\u8F38\u5165\u55AE\u4F4D","onUpdate:modelValue":e[3]||(e[3]=l=>o.pd.unit=l)},null,512),[[b,o.pd.unit]])]),t("div",lt,[dt,p(t("input",{id:"origin_price",class:"w-3/4 caret-red-500 bg-sky-100/75 rounded",type:"number",placeholder:"\u8ACB\u8F38\u5165\u539F\u50F9","onUpdate:modelValue":e[4]||(e[4]=l=>o.pd.origin_price=l)},null,512),[[b,o.pd.origin_price]])]),t("div",it,[ct,p(t("input",{id:"price",class:"w-3/4 caret-red-500 bg-sky-100/75 rounded",type:"number",placeholder:"\u8ACB\u8F38\u5165\u552E\u50F9","onUpdate:modelValue":e[5]||(e[5]=l=>o.pd.price=l)},null,512),[[b,o.pd.price]])]),t("div",rt,[at,p(t("textarea",{id:"description",name:"description",class:"w-3/4 caret-red-500 bg-sky-100/75 rounded",rows:"3",placeholder:"\u8ACB\u8F38\u5165\u7522\u54C1\u63CF\u8FF0","onUpdate:modelValue":e[6]||(e[6]=l=>o.pd.description=l)},`
              `,512),[[b,o.pd.description]])]),t("div",ut,[pt,p(t("textarea",{id:"content",name:"content",class:"w-3/4 caret-red-500 bg-sky-100/75 rounded",rows:"3",placeholder:"\u8ACB\u8F38\u5165\u8AAA\u660E\u5167\u5BB9","onUpdate:modelValue":e[7]||(e[7]=l=>o.pd.content=l)},`
              `,512),[[b,o.pd.content]])]),t("div",ht,[_t,p(t("input",{id:"is_enabled",type:"checkbox",class:"bg-sky-100/75 rounded","onUpdate:modelValue":e[8]||(e[8]=l=>o.pd.is_enabled=l)},null,512),[[P,o.pd.is_enabled]])])]),t("div",mt,[t("div",bt,[gt,p(t("input",{id:"imageUrl",class:"w-3/4 bg-sky-100/75 rounded",type:"text",placeholder:"\u8ACB\u8F38\u5165\u5716\u7247\u9023\u7D50","onUpdate:modelValue":e[9]||(e[9]=l=>o.pd.imageUrl=l)},null,512),[[b,o.pd.imageUrl]])]),t("div",ft,[o.pd.imageUrl?(i(),r("img",{key:0,src:o.pd.imageUrl,class:"h-32"},null,8,xt)):v("",!0)]),t("div",yt,[wt,t("button",{class:"w-3/4 text-white py-2 border-2 hover:bg-slate-800",onClick:e[10]||(e[10]=(...l)=>u.appendInput&&u.appendInput(...l)),disabled:o.imgsIndex==5}," \u65B0\u589E\u5716\u7247 ",8,vt)]),o.imgsIndex>=1?(i(),k(g,{key:0,imgsIndex:o.imgsIndex,onGetImgVal:o.pd.imagesUrl},null,8,["imgsIndex","onGetImgVal"])):v("",!0)])]),$t],32)])])):v("",!0)}var j=D(O,[["render",kt]]);const Dt={width:"1.2em",height:"1.2em",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 24 24"},Mt=t("g",{fill:"none"},[t("path",{d:"M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 1 1 3.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"})],-1),Ut=[Mt];function Ct(n,e){return i(),r("svg",Dt,Ut)}var I={name:"heroicons-outline-pencil",render:Ct};const jt={props:["openModal"],data(){return{url:"https://vue3-course-api.hexschool.io/v2",path:"dobe",imgsIndex:0,pd:{title:"",category:"",unit:"",origin_price:"",price:"",description:"",content:"",is_enabled:!1,imageUrl:"",imagesUrl:[]}}},methods:{appendInput(){console.log("count===========> ok"),this.imgsIndex+=1,console.log("this.imgsIndex===========>",this.imgsIndex)},addPD(){const n=document.cookie.replace(/(?:(?:^|.*;\s*)myToken\s*\=\s*([^;]*).*$)|^.*$/,"$1");a.defaults.headers.common.Authorization=n;const e={data:{title:this.pd.title,category:this.pd.category,unit:this.pd.unit,origin_price:this.pd.origin_price,price:this.pd.price,description:this.pd.description,content:this.pd.content,is_enabled:this.pd.is_enabled,imageUrl:this.pd.imageUrl,imagesUrl:this.pd.imagesUrl}};a.post(`${this.url}/api/${this.path}/admin/product`,e).then(c=>{console.log("res.data====>",c.data)}).catch(c=>console.log(c))}}},It={key:0,class:"fixed top-0 left-0 w-full h-full bg-black bg-opacity-75"},Vt={class:"relative w-[1000px] mx-auto bg-slate-700 border border-slate-500 rounded p-10 mt-4"},Pt={class:"grid grid-cols-2"},Tt={class:"py-4 px-8"},At={class:"flex justify-between items-center w-full mb-2"},zt=t("label",{for:"title",class:"w-1/4 font-bold text-white"},"\u7522\u54C1\u540D\u7A31",-1),St={class:"flex justify-between items-center w-full mb-2"},Bt=t("label",{for:"category",class:"w-1/4 font-bold text-white"},"\u5206\u985E",-1),Gt={class:"flex justify-between items-center w-full mb-2"},Lt=t("label",{for:"unit",class:"w-1/4 font-bold text-white"},"\u55AE\u4F4D",-1),Nt={class:"flex justify-between items-center w-full mb-2"},Ht=t("label",{for:"origin_price",class:"w-1/4 font-bold text-white"},"\u539F\u50F9",-1),Ft={class:"flex justify-between items-center w-full mb-2"},Kt=t("label",{for:"price",class:"w-1/4 font-bold text-white"},"\u552E\u50F9",-1),Rt={class:"flex justify-between items-center w-full mb-2"},Yt=t("label",{for:"description",class:"w-1/4 font-bold text-white"},"\u7522\u54C1\u63CF\u8FF0",-1),qt={class:"flex justify-between items-center w-full mb-2"},Et=t("label",{for:"content",class:"w-1/4 font-bold text-white"},"\u8AAA\u660E\u5167\u5BB9",-1),Ot={class:"flex justify-start items-center w-full mb-2"},Jt=t("label",{for:"is_enabled",class:"w-1/4 font-bold text-white"},"\u662F\u5426\u555F\u7528",-1),Qt={class:"py-4 px-8"},Wt={class:"flex justify-between items-center w-full mb-2"},Xt=t("label",{for:"imageUrl",class:"w-1/4 font-bold text-white"},"\u5C01\u9762\u5716\u7247",-1),Zt={class:"flex justify-center"},te=["src"],ee={class:"flex justify-between items-center w-full mb-2"},oe=t("label",{for:"",class:"w-1/4 font-bold text-white"},"\u9644\u52A0\u5716\u7247",-1),se=["disabled"],ne=t("div",{class:"flex justify-between items-center w-60 mx-auto mt-10"},[t("button",{type:"button",class:"font-bold bg-slate-400 rounded py-2 px-8 hover:bg-amber-300"}," \u53D6\u6D88 "),t("button",{type:"submit",class:"font-bold bg-slate-400 rounded py-2 px-8 hover:bg-amber-300"}," \u78BA\u8A8D ")],-1);function le(n,e,c,m,o,u){const h=T,g=A;return(c.openModal=!0)?(i(),r("div",It,[t("div",Vt,[t("button",{type:"button",class:"absolute top-3 right-3",onClick:e[0]||(e[0]=l=>n.$emit("close"))},[f(h,{class:"w-5 h-5 text-white"})]),t("form",{onSubmit:e[11]||(e[11]=y((...l)=>u.addPD&&u.addPD(...l),["prevent"]))},[t("div",Pt,[t("div",Tt,[t("div",At,[zt,p(t("input",{id:"title",class:"w-3/4 caret-red-500 bg-sky-100/75 rounded",type:"text",placeholder:"\u8ACB\u8F38\u5165\u7522\u54C1\u540D\u7A31","onUpdate:modelValue":e[1]||(e[1]=l=>o.pd.title=l)},null,512),[[b,o.pd.title]])]),t("div",St,[Bt,p(t("input",{id:"category",class:"w-3/4 caret-red-500 bg-sky-100/75 rounded",type:"text",placeholder:"\u8ACB\u8F38\u5165\u54C1\u5206\u985E","onUpdate:modelValue":e[2]||(e[2]=l=>o.pd.category=l)},null,512),[[b,o.pd.category]])]),t("div",Gt,[Lt,p(t("input",{id:"unit",class:"w-3/4 caret-red-500 bg-sky-100/75 rounded",type:"text",placeholder:"\u8ACB\u8F38\u5165\u55AE\u4F4D","onUpdate:modelValue":e[3]||(e[3]=l=>o.pd.unit=l)},null,512),[[b,o.pd.unit]])]),t("div",Nt,[Ht,p(t("input",{id:"origin_price",class:"w-3/4 caret-red-500 bg-sky-100/75 rounded",type:"number",placeholder:"\u8ACB\u8F38\u5165\u539F\u50F9","onUpdate:modelValue":e[4]||(e[4]=l=>o.pd.origin_price=l)},null,512),[[b,o.pd.origin_price]])]),t("div",Ft,[Kt,p(t("input",{id:"price",class:"w-3/4 caret-red-500 bg-sky-100/75 rounded",type:"number",placeholder:"\u8ACB\u8F38\u5165\u552E\u50F9","onUpdate:modelValue":e[5]||(e[5]=l=>o.pd.price=l)},null,512),[[b,o.pd.price]])]),t("div",Rt,[Yt,p(t("textarea",{id:"description",name:"description",class:"w-3/4 caret-red-500 bg-sky-100/75 rounded",rows:"3",placeholder:"\u8ACB\u8F38\u5165\u7522\u54C1\u63CF\u8FF0","onUpdate:modelValue":e[6]||(e[6]=l=>o.pd.description=l)},`
              `,512),[[b,o.pd.description]])]),t("div",qt,[Et,p(t("textarea",{id:"content",name:"content",class:"w-3/4 caret-red-500 bg-sky-100/75 rounded",rows:"3",placeholder:"\u8ACB\u8F38\u5165\u8AAA\u660E\u5167\u5BB9","onUpdate:modelValue":e[7]||(e[7]=l=>o.pd.content=l)},`
              `,512),[[b,o.pd.content]])]),t("div",Ot,[Jt,p(t("input",{id:"is_enabled",type:"checkbox",class:"bg-sky-100/75 rounded","onUpdate:modelValue":e[8]||(e[8]=l=>o.pd.is_enabled=l)},null,512),[[P,o.pd.is_enabled]])])]),t("div",Qt,[t("div",Wt,[Xt,p(t("input",{id:"imageUrl",class:"w-3/4 bg-sky-100/75 rounded",type:"text",placeholder:"\u8ACB\u8F38\u5165\u5716\u7247\u9023\u7D50","onUpdate:modelValue":e[9]||(e[9]=l=>o.pd.imageUrl=l)},null,512),[[b,o.pd.imageUrl]])]),t("div",Zt,[o.pd.imageUrl?(i(),r("img",{key:0,src:o.pd.imageUrl,class:"h-32"},null,8,te)):v("",!0)]),t("div",ee,[oe,t("button",{class:"w-3/4 text-white py-2 border-2 hover:bg-slate-800",onClick:e[10]||(e[10]=(...l)=>u.appendInput&&u.appendInput(...l)),disabled:o.imgsIndex==5}," \u65B0\u589E\u5716\u7247 ",8,se)]),o.imgsIndex>=1?(i(),k(g,{key:0,imgsIndex:o.imgsIndex,onGetImgVal:o.pd.imagesUrl},null,8,["imgsIndex","onGetImgVal"])):v("",!0)])]),ne],32)])])):v("",!0)}var V=D(jt,[["render",le]]);const de={components:{Modal:V},name:"dashboard-product",data(){return{url:"https://vue3-course-api.hexschool.io/v2",path:"dobe",openModal:!1,tableSubject:["\u5206\u985E","\u7522\u54C1\u540D\u7A31","\u539F\u50F9","\u552E\u50F9","\u555F\u7528","\u7DE8\u8F2F","\u7D30\u7BC0","\u522A\u9664"],productsData:[],productDetail:[]}},mounted(){const n=document.cookie.replace(/(?:(?:^|.*;\s*)myToken\s*\=\s*([^;]*).*$)|^.*$/,"$1");console.log("token====>",n),a.defaults.headers.common.Authorization=n,a.get(`${this.url}/api/${this.path}/admin/products`).then(e=>{console.log("read res.data.products====>",e.data.products),this.productsData=e.data.products,this.productDetail=e.data.products[0],console.log("read res.data.products[0]====>",e.data.products[0]),console.log("read this.productDetail====>",this.productDetail),console.log("read this.productDetail.category====>",this.productDetail.category)})},watch:{},methods:{controlModal(){this.openModal=!0},readPD(n){console.log("read id====>",n);const e=document.cookie.replace(/(?:(?:^|.*;\s*)myToken\s*\=\s*([^;]*).*$)|^.*$/,"$1");a.defaults.headers.common.Authorization=e,a.get(`${this.url}/api/${this.path}/admin/products`).then(c=>{console.log("read res.data====>",c.data),this.productDetail=c.data.products.filter(m=>m.id==n)})},removePD(n){const e=document.cookie.replace(/(?:(?:^|.*;\s*)myToken\s*\=\s*([^;]*).*$)|^.*$/,"$1");a.defaults.headers.common.Authorization=e,a.delete(`${this.url}/api/${this.path}/admin/product/${n}`).then(c=>{console.log("res.data====>",c.data),window.location.href="/#/dashboard"})}}},ie={class:"max-w-2xl mx-auto lg:max-w-7xl px-4"},ce={class:"flex justify-between py-4 mb-8"},re=t("h2",{class:"flex font-black text-2xl tracking-wide"},[t("span",null,"\u5546\u54C1\u7BA1\u7406")],-1),ae=["openModal"],ue={class:"flex flex-row"},pe={class:"basis-1/4"},he={class:"bg-slate-200 drop-shadow-2xl rounded p-4"},_e=t("h2",{class:"font-bold text-xl mb-4"},"\u7522\u54C1\u7D30\u7BC0",-1),me={class:"flex justify-center"},be=["src"],ge={class:"text-left"},fe={class:"font-bold text-l"},xe={class:"inline-block text-xs bg-slate-700 text-white py-1 px-4"},ye={class:"my-2"},we={class:"my-2"},ve={class:"my-2"},$e={class:"font-bold mr-2"},ke={class:"line-through mr-2"},De=M("\u500B/\u5143 "),Me={class:"flex flex-wrap"},Ue=["src"],Ce={class:"basis-3/4 pl-4"},je={class:"w-full"},Ie={class:"border-b-2"},Ve={class:"py-4 px-6"},Pe=["onClick"],Te=["onClick"],Ae=["onClick"],ze={class:"py-4"};function Se(n,e,c,m,o,u){const h=I,g=U,l=C,$=j;return i(),r(_,null,[t("div",ie,[t("div",ce,[re,t("button",{class:"bg-cyan-900 text-cyan-200 rounded py-2 px-4 hover:bg-cyan-700",type:"submit",onClick:e[0]||(e[0]=(...s)=>u.controlModal&&u.controlModal(...s)),openModal:o.openModal}," \u5EFA\u7ACB\u65B0\u7522\u54C1 ",8,ae)]),t("div",ue,[t("div",pe,[t("div",he,[_e,t("div",null,[t("div",me,[t("img",{src:o.productDetail.imageUrl,class:"h-40 w-auto"},null,8,be)]),t("div",ge,[t("h3",fe,d(o.productDetail.title),1),t("span",xe,d(o.productDetail.category),1),t("p",ye,d(o.productDetail.description),1),t("p",we,d(o.productDetail.content),1),t("p",ve,[t("span",$e,d(o.productDetail.price),1),t("span",ke,d(o.productDetail.origin_price),1),De])]),t("div",Me,[(i(!0),r(_,null,x(o.productDetail.imagesUrl,s=>(i(),r("img",{src:s,class:"h-9 border border-slate-50",key:s},null,8,Ue))),128))])])])]),t("div",Ce,[t("table",je,[t("thead",null,[t("tr",Ie,[(i(!0),r(_,null,x(o.tableSubject,s=>(i(),r("td",{class:"font-bold py-2 px-4",key:s+1},d(s),1))),128))])]),t("tbody",null,[(i(!0),r(_,null,x(o.productsData,s=>(i(),r("tr",{class:"border-b",key:s.id},[t("td",Ve,d(s.category),1),t("td",null,d(s.title),1),t("td",null,d(s.origin_price),1),t("td",null,d(s.price),1),t("td",null,d(s.is_enabled),1),t("td",null,[t("button",{onClick:y(w=>n.editPD(this.removeID=s.id),["prevent"])},[f(h,{class:"w-6 h-6 text-cyan-700 mx-auto"})],8,Pe)]),t("td",null,[t("button",{onClick:y(w=>u.readPD(s.id),["prevent"])},[f(g,{class:"w-6 h-6 text-cyan-700 mx-auto"})],8,Te)]),t("td",null,[t("button",{onClick:y(w=>u.removePD(this.removeID=s.id),["prevent"])},[f(l,{class:"w-6 h-6 text-cyan-700 mx-auto"})],8,Ae)])]))),128))]),t("tfoot",null,[t("tr",null,[t("td",ze,"\u76EE\u524D\u6709 "+d(o.productsData.length)+" \u9805\u7522\u54C1",1)])])])])])]),o.openModal?(i(),k($,{key:0,onClose:e[1]||(e[1]=s=>o.openModal=!1),openModal:o.openModal},null,8,["openModal"])):v("",!0)],64)}var Be=D(de,[["render",Se]]);const Ge={components:{Modal:V},name:"dashboard-article",data(){return{url:"https://vue3-course-api.hexschool.io/v2",path:"dobe",openModal:!1,tableSubject:["\u5206\u985E","\u7522\u54C1\u540D\u7A31","\u539F\u50F9","\u552E\u50F9","\u555F\u7528","\u7DE8\u8F2F","\u7D30\u7BC0","\u522A\u9664"],productsData:[],productDetail:[]}},mounted(){const n=document.cookie.replace(/(?:(?:^|.*;\s*)myToken\s*\=\s*([^;]*).*$)|^.*$/,"$1");console.log("token====>",n),a.defaults.headers.common.Authorization=n,a.get(`${this.url}/api/${this.path}/admin/products`).then(e=>{console.log("read res.data.products====>",e.data.products),this.productsData=e.data.products,this.productDetail=e.data.products[0],console.log("read res.data.products[0]====>",e.data.products[0]),console.log("read this.productDetail====>",this.productDetail),console.log("read this.productDetail.category====>",this.productDetail.category)})},watch:{},methods:{controlModal(){this.openModal=!0},readPD(n){console.log("read id====>",n);const e=document.cookie.replace(/(?:(?:^|.*;\s*)myToken\s*\=\s*([^;]*).*$)|^.*$/,"$1");a.defaults.headers.common.Authorization=e,a.get(`${this.url}/api/${this.path}/admin/products`).then(c=>{console.log("read res.data====>",c.data),this.productDetail=c.data.products.filter(m=>m.id==n)})},removePD(n){const e=document.cookie.replace(/(?:(?:^|.*;\s*)myToken\s*\=\s*([^;]*).*$)|^.*$/,"$1");a.defaults.headers.common.Authorization=e,a.delete(`${this.url}/api/${this.path}/admin/product/${n}`).then(c=>{console.log("res.data====>",c.data),window.location.href="/#/dashboard"})}}},Le={class:"max-w-2xl mx-auto lg:max-w-7xl px-4"},Ne={class:"flex justify-between py-4 mb-8"},He=t("h2",{class:"flex font-black text-2xl tracking-wide"},[t("span",null,"\u6587\u7AE0\u7BA1\u7406")],-1),Fe=["openModal"],Ke={class:"flex flex-row"},Re={class:"basis-1/4"},Ye={class:"bg-slate-200 drop-shadow-2xl rounded p-4"},qe=t("h2",{class:"font-bold text-xl mb-4"},"\u7522\u54C1\u7D30\u7BC0",-1),Ee={class:"flex justify-center"},Oe=["src"],Je={class:"text-left"},Qe={class:"font-bold text-l"},We={class:"inline-block text-xs bg-slate-700 text-white py-1 px-4"},Xe={class:"my-2"},Ze={class:"my-2"},to={class:"my-2"},eo={class:"font-bold mr-2"},oo={class:"line-through mr-2"},so=M("\u500B/\u5143 "),no={class:"flex flex-wrap"},lo=["src"],io={class:"basis-3/4 pl-4"},co={class:"w-full"},ro={class:"border-b-2"},ao={class:"py-4 px-6"},uo=["onClick"],po=["onClick"],ho=["onClick"],_o={class:"py-4"};function mo(n,e,c,m,o,u){const h=I,g=U,l=C,$=j;return i(),r(_,null,[t("div",Le,[t("div",Ne,[He,t("button",{class:"bg-cyan-900 text-cyan-200 rounded py-2 px-4 hover:bg-cyan-700",type:"submit",onClick:e[0]||(e[0]=(...s)=>u.controlModal&&u.controlModal(...s)),openModal:o.openModal}," \u5EFA\u7ACB\u65B0\u7522\u54C1 ",8,Fe)]),t("div",Ke,[t("div",Re,[t("div",Ye,[qe,t("div",null,[t("div",Ee,[t("img",{src:o.productDetail.imageUrl,class:"h-40 w-auto"},null,8,Oe)]),t("div",Je,[t("h3",Qe,d(o.productDetail.title),1),t("span",We,d(o.productDetail.category),1),t("p",Xe,d(o.productDetail.description),1),t("p",Ze,d(o.productDetail.content),1),t("p",to,[t("span",eo,d(o.productDetail.price),1),t("span",oo,d(o.productDetail.origin_price),1),so])]),t("div",no,[(i(!0),r(_,null,x(o.productDetail.imagesUrl,s=>(i(),r("img",{src:s,class:"h-9 border border-slate-50",key:s},null,8,lo))),128))])])])]),t("div",io,[t("table",co,[t("thead",null,[t("tr",ro,[(i(!0),r(_,null,x(o.tableSubject,s=>(i(),r("td",{class:"font-bold py-2 px-4",key:s+1},d(s),1))),128))])]),t("tbody",null,[(i(!0),r(_,null,x(o.productsData,s=>(i(),r("tr",{class:"border-b",key:s.id},[t("td",ao,d(s.category),1),t("td",null,d(s.title),1),t("td",null,d(s.origin_price),1),t("td",null,d(s.price),1),t("td",null,d(s.is_enabled),1),t("td",null,[t("button",{onClick:y(w=>n.editPD(this.removeID=s.id),["prevent"])},[f(h,{class:"w-6 h-6 text-cyan-700 mx-auto"})],8,uo)]),t("td",null,[t("button",{onClick:y(w=>u.readPD(s.id),["prevent"])},[f(g,{class:"w-6 h-6 text-cyan-700 mx-auto"})],8,po)]),t("td",null,[t("button",{onClick:y(w=>u.removePD(this.removeID=s.id),["prevent"])},[f(l,{class:"w-6 h-6 text-cyan-700 mx-auto"})],8,ho)])]))),128))]),t("tfoot",null,[t("tr",null,[t("td",_o,"\u76EE\u524D\u6709 "+d(o.productsData.length)+" \u9805\u7522\u54C1",1)])])])])])]),o.openModal?(i(),k($,{key:0,onClose:e[1]||(e[1]=s=>o.openModal=!1),openModal:o.openModal},null,8,["openModal"])):v("",!0)],64)}var bo=D(Ge,[["render",mo]]);const go={components:{Modal:V},name:"dashboard-product",data(){return{url:"https://vue3-course-api.hexschool.io/v2",path:"dobe",openModal:!1,tableSubject:["\u5206\u985E","\u7522\u54C1\u540D\u7A31","\u539F\u50F9","\u552E\u50F9","\u555F\u7528","\u7DE8\u8F2F","\u7D30\u7BC0","\u522A\u9664"],productsData:[],productDetail:[]}},mounted(){const n=document.cookie.replace(/(?:(?:^|.*;\s*)myToken\s*\=\s*([^;]*).*$)|^.*$/,"$1");console.log("token====>",n),a.defaults.headers.common.Authorization=n,a.get(`${this.url}/api/${this.path}/admin/products`).then(e=>{console.log("read res.data.products====>",e.data.products),this.productsData=e.data.products,this.productDetail=e.data.products[0],console.log("read res.data.products[0]====>",e.data.products[0]),console.log("read this.productDetail====>",this.productDetail),console.log("read this.productDetail.category====>",this.productDetail.category)})},watch:{},methods:{controlModal(){this.openModal=!0},readPD(n){console.log("read id====>",n);const e=document.cookie.replace(/(?:(?:^|.*;\s*)myToken\s*\=\s*([^;]*).*$)|^.*$/,"$1");a.defaults.headers.common.Authorization=e,a.get(`${this.url}/api/${this.path}/admin/products`).then(c=>{console.log("read res.data====>",c.data),this.productDetail=c.data.products.filter(m=>m.id==n)})},removePD(n){const e=document.cookie.replace(/(?:(?:^|.*;\s*)myToken\s*\=\s*([^;]*).*$)|^.*$/,"$1");a.defaults.headers.common.Authorization=e,a.delete(`${this.url}/api/${this.path}/admin/product/${n}`).then(c=>{console.log("res.data====>",c.data),window.location.href="/#/dashboard"})}}},fo={class:"max-w-2xl mx-auto lg:max-w-7xl px-4"},xo={class:"flex justify-between py-4 mb-8"},yo=t("h2",{class:"flex font-black text-2xl tracking-wide"},[t("span",null,"\u8A02\u55AE\u7BA1\u7406")],-1),wo=["openModal"],vo={class:"flex flex-row"},$o={class:"basis-1/4"},ko={class:"bg-slate-200 drop-shadow-2xl rounded p-4"},Do=t("h2",{class:"font-bold text-xl mb-4"},"\u7522\u54C1\u7D30\u7BC0",-1),Mo={class:"flex justify-center"},Uo=["src"],Co={class:"text-left"},jo={class:"font-bold text-l"},Io={class:"inline-block text-xs bg-slate-700 text-white py-1 px-4"},Vo={class:"my-2"},Po={class:"my-2"},To={class:"my-2"},Ao={class:"font-bold mr-2"},zo={class:"line-through mr-2"},So=M("\u500B/\u5143 "),Bo={class:"flex flex-wrap"},Go=["src"],Lo={class:"basis-3/4 pl-4"},No={class:"w-full"},Ho={class:"border-b-2"},Fo={class:"py-4 px-6"},Ko=["onClick"],Ro=["onClick"],Yo=["onClick"],qo={class:"py-4"};function Eo(n,e,c,m,o,u){const h=I,g=U,l=C,$=j;return i(),r(_,null,[t("div",fo,[t("div",xo,[yo,t("button",{class:"bg-cyan-900 text-cyan-200 rounded py-2 px-4 hover:bg-cyan-700",type:"submit",onClick:e[0]||(e[0]=(...s)=>u.controlModal&&u.controlModal(...s)),openModal:o.openModal}," \u5EFA\u7ACB\u65B0\u7522\u54C1 ",8,wo)]),t("div",vo,[t("div",$o,[t("div",ko,[Do,t("div",null,[t("div",Mo,[t("img",{src:o.productDetail.imageUrl,class:"h-40 w-auto"},null,8,Uo)]),t("div",Co,[t("h3",jo,d(o.productDetail.title),1),t("span",Io,d(o.productDetail.category),1),t("p",Vo,d(o.productDetail.description),1),t("p",Po,d(o.productDetail.content),1),t("p",To,[t("span",Ao,d(o.productDetail.price),1),t("span",zo,d(o.productDetail.origin_price),1),So])]),t("div",Bo,[(i(!0),r(_,null,x(o.productDetail.imagesUrl,s=>(i(),r("img",{src:s,class:"h-9 border border-slate-50",key:s},null,8,Go))),128))])])])]),t("div",Lo,[t("table",No,[t("thead",null,[t("tr",Ho,[(i(!0),r(_,null,x(o.tableSubject,s=>(i(),r("td",{class:"font-bold py-2 px-4",key:s+1},d(s),1))),128))])]),t("tbody",null,[(i(!0),r(_,null,x(o.productsData,s=>(i(),r("tr",{class:"border-b",key:s.id},[t("td",Fo,d(s.category),1),t("td",null,d(s.title),1),t("td",null,d(s.origin_price),1),t("td",null,d(s.price),1),t("td",null,d(s.is_enabled),1),t("td",null,[t("button",{onClick:y(w=>n.editPD(this.removeID=s.id),["prevent"])},[f(h,{class:"w-6 h-6 text-cyan-700 mx-auto"})],8,Ko)]),t("td",null,[t("button",{onClick:y(w=>u.readPD(s.id),["prevent"])},[f(g,{class:"w-6 h-6 text-cyan-700 mx-auto"})],8,Ro)]),t("td",null,[t("button",{onClick:y(w=>u.removePD(this.removeID=s.id),["prevent"])},[f(l,{class:"w-6 h-6 text-cyan-700 mx-auto"})],8,Yo)])]))),128))]),t("tfoot",null,[t("tr",null,[t("td",qo,"\u76EE\u524D\u6709 "+d(o.productsData.length)+" \u9805\u7522\u54C1",1)])])])])])]),o.openModal?(i(),k($,{key:0,onClose:e[1]||(e[1]=s=>o.openModal=!1),openModal:o.openModal},null,8,["openModal"])):v("",!0)],64)}var Oo=D(go,[["render",Eo]]);const Jo={components:{Modal:V},name:"dashboard-product",data(){return{url:"https://vue3-course-api.hexschool.io/v2",path:"dobe",openModal:!1,tableSubject:["\u5206\u985E","\u7522\u54C1\u540D\u7A31","\u539F\u50F9","\u552E\u50F9","\u555F\u7528","\u7DE8\u8F2F","\u7D30\u7BC0","\u522A\u9664"],productsData:[],productDetail:[]}},mounted(){const n=document.cookie.replace(/(?:(?:^|.*;\s*)myToken\s*\=\s*([^;]*).*$)|^.*$/,"$1");console.log("token====>",n),a.defaults.headers.common.Authorization=n,a.get(`${this.url}/api/${this.path}/admin/products`).then(e=>{console.log("read res.data.products====>",e.data.products),this.productsData=e.data.products,this.productDetail=e.data.products[0],console.log("read res.data.products[0]====>",e.data.products[0]),console.log("read this.productDetail====>",this.productDetail),console.log("read this.productDetail.category====>",this.productDetail.category)})},watch:{},methods:{controlModal(){this.openModal=!0},readPD(n){console.log("read id====>",n);const e=document.cookie.replace(/(?:(?:^|.*;\s*)myToken\s*\=\s*([^;]*).*$)|^.*$/,"$1");a.defaults.headers.common.Authorization=e,a.get(`${this.url}/api/${this.path}/admin/products`).then(c=>{console.log("read res.data====>",c.data),this.productDetail=c.data.products.filter(m=>m.id==n)})},removePD(n){const e=document.cookie.replace(/(?:(?:^|.*;\s*)myToken\s*\=\s*([^;]*).*$)|^.*$/,"$1");a.defaults.headers.common.Authorization=e,a.delete(`${this.url}/api/${this.path}/admin/product/${n}`).then(c=>{console.log("res.data====>",c.data),window.location.href="/#/dashboard"})}}},Qo={class:"max-w-2xl mx-auto lg:max-w-7xl px-4"},Wo={class:"flex justify-between py-4 mb-8"},Xo=t("h2",{class:"flex font-black text-2xl tracking-wide"},[t("span",null,"\u512A\u60E0\u5238\u7BA1\u7406")],-1),Zo=["openModal"],ts={class:"flex flex-row"},es={class:"basis-1/4"},os={class:"bg-slate-200 drop-shadow-2xl rounded p-4"},ss=t("h2",{class:"font-bold text-xl mb-4"},"\u7522\u54C1\u7D30\u7BC0",-1),ns={class:"flex justify-center"},ls=["src"],ds={class:"text-left"},is={class:"font-bold text-l"},cs={class:"inline-block text-xs bg-slate-700 text-white py-1 px-4"},rs={class:"my-2"},as={class:"my-2"},us={class:"my-2"},ps={class:"font-bold mr-2"},hs={class:"line-through mr-2"},_s=M("\u500B/\u5143 "),ms={class:"flex flex-wrap"},bs=["src"],gs={class:"basis-3/4 pl-4"},fs={class:"w-full"},xs={class:"border-b-2"},ys={class:"py-4 px-6"},ws=["onClick"],vs=["onClick"],$s=["onClick"],ks={class:"py-4"};function Ds(n,e,c,m,o,u){const h=I,g=U,l=C,$=j;return i(),r(_,null,[t("div",Qo,[t("div",Wo,[Xo,t("button",{class:"bg-cyan-900 text-cyan-200 rounded py-2 px-4 hover:bg-cyan-700",type:"submit",onClick:e[0]||(e[0]=(...s)=>u.controlModal&&u.controlModal(...s)),openModal:o.openModal}," \u5EFA\u7ACB\u65B0\u7522\u54C1 ",8,Zo)]),t("div",ts,[t("div",es,[t("div",os,[ss,t("div",null,[t("div",ns,[t("img",{src:o.productDetail.imageUrl,class:"h-40 w-auto"},null,8,ls)]),t("div",ds,[t("h3",is,d(o.productDetail.title),1),t("span",cs,d(o.productDetail.category),1),t("p",rs,d(o.productDetail.description),1),t("p",as,d(o.productDetail.content),1),t("p",us,[t("span",ps,d(o.productDetail.price),1),t("span",hs,d(o.productDetail.origin_price),1),_s])]),t("div",ms,[(i(!0),r(_,null,x(o.productDetail.imagesUrl,s=>(i(),r("img",{src:s,class:"h-9 border border-slate-50",key:s},null,8,bs))),128))])])])]),t("div",gs,[t("table",fs,[t("thead",null,[t("tr",xs,[(i(!0),r(_,null,x(o.tableSubject,s=>(i(),r("td",{class:"font-bold py-2 px-4",key:s+1},d(s),1))),128))])]),t("tbody",null,[(i(!0),r(_,null,x(o.productsData,s=>(i(),r("tr",{class:"border-b",key:s.id},[t("td",ys,d(s.category),1),t("td",null,d(s.title),1),t("td",null,d(s.origin_price),1),t("td",null,d(s.price),1),t("td",null,d(s.is_enabled),1),t("td",null,[t("button",{onClick:y(w=>n.editPD(this.removeID=s.id),["prevent"])},[f(h,{class:"w-6 h-6 text-cyan-700 mx-auto"})],8,ws)]),t("td",null,[t("button",{onClick:y(w=>u.readPD(s.id),["prevent"])},[f(g,{class:"w-6 h-6 text-cyan-700 mx-auto"})],8,vs)]),t("td",null,[t("button",{onClick:y(w=>u.removePD(this.removeID=s.id),["prevent"])},[f(l,{class:"w-6 h-6 text-cyan-700 mx-auto"})],8,$s)])]))),128))]),t("tfoot",null,[t("tr",null,[t("td",ks,"\u76EE\u524D\u6709 "+d(o.productsData.length)+" \u9805\u7522\u54C1",1)])])])])])]),o.openModal?(i(),k($,{key:0,onClose:e[1]||(e[1]=s=>o.openModal=!1),openModal:o.openModal},null,8,["openModal"])):v("",!0)],64)}var Ms=D(Jo,[["render",Ds]]);const Us={components:{DashboardProduct:Be,DashboardArticle:bo,DashboardOrder:Oo,DashboardCoupon:Ms},data(){return{url:"https://vue3-course-api.hexschool.io/v2",path:"dobe",currentTab:"dashboard-product",tabs:[{component:"dashboard-product",title:"\u5546\u54C1\u7BA1\u7406"},{component:"dashboard-article",title:"\u6587\u7AE0\u7BA1\u7406"},{component:"dashboard-order",title:"\u8A02\u55AE\u7BA1\u7406"},{component:"dashboard-coupon",title:"\u512A\u60E0\u5238\u7BA1\u7406"}],openModal:!1,tableSubject:["\u5206\u985E","\u7522\u54C1\u540D\u7A31","\u539F\u50F9","\u552E\u50F9","\u555F\u7528","\u7DE8\u8F2F","\u7D30\u7BC0","\u522A\u9664"],productsData:[],productDetail:[]}},computed:{currentTabComponent(){return`${this.currentTab.toLowerCase()}`}},mounted(){const n=document.cookie.replace(/(?:(?:^|.*;\s*)myToken\s*\=\s*([^;]*).*$)|^.*$/,"$1");console.log("token====>",n),a.defaults.headers.common.Authorization=n,a.get(`${this.url}/api/${this.path}/admin/products`).then(e=>{console.log("read res.data.products====>",e.data.products),this.productsData=e.data.products,this.productDetail=e.data.products[0],console.log("read res.data.products[0]====>",e.data.products[0]),console.log("read this.productDetail====>",this.productDetail),console.log("read this.productDetail.category====>",this.productDetail.category)})},methods:{controlModal(){this.openModal=!0},readPD(n){console.log("read id====>",n);const e=document.cookie.replace(/(?:(?:^|.*;\s*)myToken\s*\=\s*([^;]*).*$)|^.*$/,"$1");a.defaults.headers.common.Authorization=e,a.get(`${this.url}/api/${this.path}/admin/products`).then(c=>{console.log("read res.data====>",c.data),this.productDetail=c.data.products.filter(m=>m.id==n)})},removePD(n){const e=document.cookie.replace(/(?:(?:^|.*;\s*)myToken\s*\=\s*([^;]*).*$)|^.*$/,"$1");a.defaults.headers.common.Authorization=e,a.delete(`${this.url}/api/${this.path}/admin/product/${n}`).then(c=>{console.log("res.data====>",c.data),window.location.href="/#/dashboard"})}}},Cs={class:"flex"},js={class:"h-screen bg-rosy-900 text-slate-400 py-4 px-6"},Is={class:"flex items-center font-medium text-xl whitespace-nowrap tracking-wide"},Vs=t("span",null,"\u96F7\u8AFE\u66FC\u89E3\u6182\u9910\u9152\u9928",-1),Ps=t("div",{class:"border-y-2 border-y-slate-700 py-3 my-4"},"Hi,Dobe \u7BA1\u7406\u8005",-1),Ts=["onClick"];function As(n,e,c,m,o,u){const h=G,g=U;return i(),r("div",Cs,[t("div",js,[t("h2",Is,[f(h,{class:"w-6 h-6 mr-1"}),Vs]),Ps,(i(!0),r(_,null,x(o.tabs,l=>(i(),r("button",{class:B(["flex items-center my-4 mx-2 hover:text-slate-300",["tab-button",{active:o.currentTab===l.component}]]),key:l.component,onClick:$=>o.currentTab=l.component},[f(g,{class:"w-6 h-6 mr-1"}),M(d(l.title),1)],10,Ts))),128))]),t("div",null,[(i(),k(S,{include:["dashboard-product","dashboard-article"],max:2},[(i(),k(z(u.currentTabComponent)))],1024))])])}var Gs=D(Us,[["render",As]]);export{Gs as default};