import { createRouter, createWebHashHistory } from "vue-router";
//import routes from "virtual:generated-pages";
//import routes from "../router"
//import routes from './routes'

const routes = [
  {
      path: "/",
      name: "FrontendLayout",
      component: () =>
      import ("@/pages/FrontendLayout.vue"),
      children: [
          {
            path: "",
            name: "Home",
            component: () =>
            import ("@/pages/Home.vue"),
          },
          {
            path: "about",
            name: "About",
            component: () =>
            import ("@/pages/About.vue"),
          },
          {
            path: "products",
            name: "Products",
            component: () =>
            import ("@/pages/Products/index.vue"),
          },
          {
            path: "product/:id",
            name: "Product",
            component: () =>
            import ("@/pages/Products/_id.vue"),
          },
          {
            path: "story",
            name: "Story",
            component: () =>
            import ("@/pages/Story.vue"),
          },
          {
            path: "tool",
            name: "Tool",
            component: () =>
            import ("@/pages/Tool.vue"),
          },
          {
            path: "faq",
            name: "Faq",
            component: () =>
            import ("@/pages/Faq.vue"),
          },
          {
            path: "cart",
            name: "Cart",
            component: () =>
            import ("@/pages/Cart.vue"),
          },
      ]
  },
  {
    path: "/Login",
    name: "Login",
    component: () =>
    import ("@/pages/Login.vue"),
  },
  {
    path: "/admin",
    name: "Admin",
    component: () =>
    import ("@/pages/DashboardLayout.vue"),
    children: [
      {
        path: "products",
        name: "AdminProducts",
        component: () =>
        import ("@/pages/AdminProduct.vue"),
      },
      {
        path: "article",
        name: "AdminArticle",
        component: () =>
        import ("@/pages/AdminArticle.vue"),
      },
      {
        path: "coupon",
        name: "AdminCoupon",
        component: () =>
        import ("@/pages/AdminCoupon.vue"),
      },
      {
        path: "order",
        name: "AdminOrder",
        component: () =>
        import ("@/pages/AdminOrder.vue"),
      },

    ]
  },
];

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
