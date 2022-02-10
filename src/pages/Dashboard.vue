<script>
import axios from "axios";
import DashboardProduct from "../components/DashboardProduct.vue";
import DashboardArticle from "../components/DashboardArticle.vue";
import DashboardOrder from "../components/DashboardOrder.vue";
import DashboardCoupon from "../components/DashboardCoupon.vue";

export default {
  components: { DashboardProduct, DashboardArticle, DashboardOrder, DashboardCoupon },
  data() {
    return {
      url: "https://vue3-course-api.hexschool.io/v2",
      path: "dobe",
      currentTab: "dashboard-product",
      tabs: [
        {
          component: "dashboard-product",
          title: "商品管理",
        },
        {
          component: "dashboard-article",
          title: "文章管理",
        },
        {
          component: "dashboard-order",
          title: "訂單管理",
        },
        {
          component: "dashboard-coupon",
          title: "優惠券管理",
        },
      ],
      openModal: false,
      tableSubject: [
        "分類",
        "產品名稱",
        "原價",
        "售價",
        "啟用",
        "編輯",
        "細節",
        "刪除",
      ],
      productsData: [],
      productDetail: [],
    };
  },
  computed: {
    currentTabComponent() {
      //return `tab-${ this.currentTab.toLowerCase() }`;
      return `${this.currentTab.toLowerCase()}`;
    },
  },
  mounted() {
    //取得 token
    const token = document.cookie.replace(
      /(?:(?:^|.*;\s*)myToken\s*\=\s*([^;]*).*$)|^.*$/,
      "$1"
    );
    console.log("token====>", token);
    //headers夾帶 token 參考 https://axios-http.com/zh/docs/config_defaults
    axios.defaults.headers.common["Authorization"] = token;

    axios.get(`${this.url}/api/${this.path}/admin/products`).then((res) => {
      console.log("read res.data.products====>", res.data.products);
      this.productsData = res.data.products;
      this.productDetail = res.data.products[0];
      console.log("read res.data.products[0]====>", res.data.products[0]);
      console.log("read this.productDetail====>", this.productDetail);
      console.log(
        "read this.productDetail.category====>",
        this.productDetail.category
      );
    });
  },
  methods: {
    controlModal() {
      this.openModal = true;
    },
    readPD(id) {
      console.log("read id====>", id);
      const token = document.cookie.replace(
        /(?:(?:^|.*;\s*)myToken\s*\=\s*([^;]*).*$)|^.*$/,
        "$1"
      );
      axios.defaults.headers.common["Authorization"] = token;

      axios.get(`${this.url}/api/${this.path}/admin/products`).then((res) => {
        console.log("read res.data====>", res.data);
        this.productDetail = res.data.products.filter((item) => item.id == id);
      });
    },
    removePD(id) {
      const token = document.cookie.replace(
        /(?:(?:^|.*;\s*)myToken\s*\=\s*([^;]*).*$)|^.*$/,
        "$1"
      );
      axios.defaults.headers.common["Authorization"] = token;

      axios
        .delete(`${this.url}/api/${this.path}/admin/product/${id}`)
        .then((res) => {
          console.log("res.data====>", res.data);
          window.location.href = "/#/dashboard";
        });
    },
  },
};
</script>

<template>
  <div class="flex">
    <div class="h-screen bg-rosy-900 text-slate-400 py-4 px-6">
      <h2
        class="flex items-center font-medium text-xl whitespace-nowrap tracking-wide"
      >
        <heroicons-outline-color-swatch class="w-6 h-6 mr-1" /><span
          >雷諾曼解憂餐酒館</span
        >
      </h2>

      <div class="border-y-2 border-y-slate-700 py-3 my-4">Hi,Dobe 管理者</div>

      <button
        class="flex items-center my-4 mx-2 hover:text-slate-300"
        v-for="tab in tabs"
        :key="tab.component"
        :class="['tab-button', { active: currentTab === tab.component }]"
        @click="currentTab = tab.component"
      >
        <heroicons-outline-document-text class="w-6 h-6 mr-1" />{{ tab.title }}
      </button>
    </div>
    <div>
      <keep-alive
        :include="['dashboard-product', 'dashboard-article']"
        :max="2"
      >
        <component :is="currentTabComponent" />
      </keep-alive>
    </div>
  </div>
</template>
