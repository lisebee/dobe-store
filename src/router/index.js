import { createRouter, createWebHashHistory } from "vue-router";
import routes from "virtual:generated-pages";
//import routes from "../router"

// const routes = [
//     {
//         path: "/",
//         name: "Layout",
//         component: () =>
//         import ("../components/Layout.vue"),
//         children: [
//             {
//                 path: "/home",
//                 name: "Home",
//                 component: () =>
//                 import ("../pages/Home.vue"),
//             },
//             {
//                 path: "/about",
//                 name: "About",
//                 component: () =>
//                 import ("../pages/About.vue"),
//             }
//         ]
//     }
// {
//     path: "/home",
//     name: "Home",
//     component: () =>
//     import ("../pages/Home.vue"),
// },
// {
//     path: "/about",
//     name: "About",
//     component: () =>
//     import ("../pages/About.vue"),
// },
// {
//     path: "/login",
//     name: "Login",
//     component: () =>
//     import ("../pages/Login.vue"),
// },
// {
//     path: "/dashboard",
//     name: "Dashboard",
//     component: () =>
//     import ("../pages/Dashboard.vue"),
// },
//];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

//路由跳轉後的頁面一率回頂端
router.beforeEach(() => {
  //chrome
  document.body.scrollTop = 0;
  //firefox
  document.documentElement.scrollTop = 0;
  //safari
  window.pageYOffset = 0;
});

export default router;
