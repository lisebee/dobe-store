const routes = [
    {
        path: "/",
        name: "FrontendLayout",
        component: () =>
        import ("@/pages/FrontendLayout.vue"),
        children: [
            {
                path: "/home",
                name: "Home",
                component: () =>
                import ("@/pages/Home.vue"),
            },
            {
                path: "/about",
                name: "About",
                component: () =>
                import ("@/pages/About.vue"),
            },
            {
                path: "/product",
                name: "Product",
                component: () =>
                import ("@/pages/Product.vue"),
            },
            {
                path: "/story",
                name: "Story",
                component: () =>
                import ("@/pages/Story.vue"),
            },
            {
                path: "/tool",
                name: "Tool",
                component: () =>
                import ("@/pages/Tool.vue"),
            },
            {
                path: "/faq",
                name: "Faq",
                component: () =>
                import ("@/pages/Faq.vue"),
            }
        ]
    },
    {
        path: "/admin",
        name: "DashboardLayout",
        component: () =>
        import ("@/pages/DashboardLayout.vue"),
        children: [
            {
                path: "home",
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
            }
        ]
    },
];

export default routes