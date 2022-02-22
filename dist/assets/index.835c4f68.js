import{r as p,o as l,c as f,a as h,b as E,d as A}from"./vendor.51a50092.js";const L=function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&r(n)}).observe(document,{childList:!0,subtree:!0});function c(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function r(e){if(e.ep)return;e.ep=!0;const t=c(e);fetch(e.href,t)}};L();const v={setup(s){return(i,c)=>{const r=p("RouterView");return l(),f(r)}}},y="modulepreload",a={},P="/dobe-store/",o=function(i,c){return!c||c.length===0?i():Promise.all(c.map(r=>{if(r=`${P}${r}`,r in a)return;a[r]=!0;const e=r.endsWith(".css"),t=e?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${r}"]${t}`))return;const n=document.createElement("link");if(n.rel=e?"stylesheet":y,e||(n.as="script",n.crossOrigin=""),n.href=r,document.head.appendChild(n),e)return new Promise((u,d)=>{n.addEventListener("load",u),n.addEventListener("error",d)})})).then(()=>i())},O=[{path:"/",name:"FrontendLayout",component:()=>o(()=>import("./FrontendLayout.bf490748.js"),["assets/FrontendLayout.bf490748.js","assets/vendor.51a50092.js","assets/plugin-vue_export-helper.21dcd24c.js","assets/Button.fc18cfc3.js","assets/trash.b1add08b.js","assets/x.cd8c69b2.js","assets/color-swatch.b1983f5a.js"]),children:[{path:"",name:"Home",component:()=>o(()=>import("./Home.46a4c8f1.js"),["assets/Home.46a4c8f1.js","assets/Home.ef534610.css","assets/vendor.51a50092.js","assets/Button.fc18cfc3.js","assets/plugin-vue_export-helper.21dcd24c.js"])},{path:"about",name:"About",component:()=>o(()=>import("./About.9ffe2251.js"),["assets/About.9ffe2251.js","assets/CardPd.eecba9e9.js","assets/plugin-vue_export-helper.21dcd24c.js","assets/vendor.51a50092.js","assets/heart.fc81aaa1.js"])},{path:"products",name:"Products",component:()=>o(()=>import("./index.b25f07e8.js"),["assets/index.b25f07e8.js","assets/vendor.51a50092.js","assets/plugin-vue_export-helper.21dcd24c.js","assets/CardPd.eecba9e9.js","assets/heart.fc81aaa1.js","assets/index.03bb1a20.js"])},{path:"product/:id",name:"Product",component:()=>o(()=>import("./_id.25285e91.js"),["assets/_id.25285e91.js","assets/Button.fc18cfc3.js","assets/plugin-vue_export-helper.21dcd24c.js","assets/vendor.51a50092.js","assets/heart.fc81aaa1.js","assets/index.03bb1a20.js"])},{path:"story",name:"Story",component:()=>o(()=>import("./Story.e8b80803.js"),["assets/Story.e8b80803.js","assets/Button.fc18cfc3.js","assets/plugin-vue_export-helper.21dcd24c.js","assets/vendor.51a50092.js","assets/heart.fc81aaa1.js"])},{path:"tool",name:"Tool",component:()=>o(()=>import("./Tool.78d55ef2.js"),["assets/Tool.78d55ef2.js","assets/Tool.d71116df.css","assets/plugin-vue_export-helper.21dcd24c.js","assets/vendor.51a50092.js","assets/heart.fc81aaa1.js"])},{path:"faq",name:"Faq",component:()=>o(()=>import("./Faq.a25f0612.js"),["assets/Faq.a25f0612.js","assets/heart.fc81aaa1.js","assets/plugin-vue_export-helper.21dcd24c.js","assets/vendor.51a50092.js"])},{path:"cart",name:"Cart",component:()=>o(()=>import("./Cart.0f7c6f15.js"),["assets/Cart.0f7c6f15.js","assets/Button.fc18cfc3.js","assets/plugin-vue_export-helper.21dcd24c.js","assets/vendor.51a50092.js","assets/trash.b1add08b.js","assets/heart.fc81aaa1.js"])}]},{path:"/Login",name:"Login",component:()=>o(()=>import("./Login.2a054e1a.js"),["assets/Login.2a054e1a.js","assets/Button.fc18cfc3.js","assets/plugin-vue_export-helper.21dcd24c.js","assets/vendor.51a50092.js","assets/index.03bb1a20.js"])},{path:"/admin",name:"Admin",component:()=>o(()=>import("./DashboardLayout.cb3209a5.js"),["assets/DashboardLayout.cb3209a5.js","assets/document-text.96657561.js","assets/vendor.51a50092.js","assets/color-swatch.b1983f5a.js","assets/plugin-vue_export-helper.21dcd24c.js"]),children:[{path:"products",name:"AdminProducts",component:()=>o(()=>import("./AdminProduct.cec61f02.js"),["assets/AdminProduct.cec61f02.js","assets/pencil.d1805650.js","assets/vendor.51a50092.js","assets/plugin-vue_export-helper.21dcd24c.js","assets/x.cd8c69b2.js","assets/index.03bb1a20.js","assets/trash.b1add08b.js","assets/document-text.96657561.js"])},{path:"article",name:"AdminArticle",component:()=>o(()=>import("./AdminArticle.4cbf60fa.js"),["assets/AdminArticle.4cbf60fa.js","assets/pencil.d1805650.js","assets/vendor.51a50092.js","assets/plugin-vue_export-helper.21dcd24c.js","assets/x.cd8c69b2.js","assets/index.03bb1a20.js","assets/trash.b1add08b.js","assets/document-text.96657561.js"])},{path:"coupon",name:"AdminCoupon",component:()=>o(()=>import("./AdminCoupon.f010f870.js"),["assets/AdminCoupon.f010f870.js","assets/pencil.d1805650.js","assets/vendor.51a50092.js","assets/plugin-vue_export-helper.21dcd24c.js","assets/x.cd8c69b2.js","assets/index.03bb1a20.js","assets/trash.b1add08b.js","assets/document-text.96657561.js"])},{path:"order",name:"AdminOrder",component:()=>o(()=>import("./AdminOrder.21c9041b.js"),["assets/AdminOrder.21c9041b.js","assets/pencil.d1805650.js","assets/vendor.51a50092.js","assets/plugin-vue_export-helper.21dcd24c.js","assets/x.cd8c69b2.js","assets/index.03bb1a20.js","assets/trash.b1add08b.js","assets/document-text.96657561.js"])}]}],_=h({history:E(),routes:O});_.beforeEach(()=>{document.body.scrollTop=0,document.documentElement.scrollTop=0,window.pageYOffset=0});const m=A(v);m.use(_);m.mount("#app");