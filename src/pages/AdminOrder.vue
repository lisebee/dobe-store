<script>
import axios from "axios";
import Modal from "../components/Modal.vue";
export default {
  components: { Modal },
  name: "dashboard-product",
  data() {
    return {
      url: "https://vue3-course-api.hexschool.io/v2",
      path: "dobe",
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
  watch: {
    // productDetail(nval,oval) {
    //     this.readPD();
    // }
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
  <div class="max-w-2xl mx-auto lg:max-w-7xl px-4">
    <div class="flex justify-between py-4 mb-8">
      <h2 class="flex font-black text-2xl tracking-wide">
        <span>訂單管理</span>
      </h2>
      <button
        class="bg-cyan-900 text-cyan-200 rounded py-2 px-4 hover:bg-cyan-700"
        type="submit"
        @click="controlModal"
        :openModal="openModal"
      >
        建立新產品
      </button>
    </div>

    <div class="flex flex-row">
      <div class="basis-1/4">
        <div class="bg-slate-200 drop-shadow-2xl rounded p-4">
          <h2 class="font-bold text-xl mb-4">產品細節</h2>
          <div>
            <div class="flex justify-center">
              <img :src="productDetail.imageUrl" class="h-40 w-auto" />
            </div>
            <div class="text-left">
              <h3 class="font-bold text-l">{{ productDetail.title }}</h3>
              <span
                class="inline-block text-xs bg-slate-700 text-white py-1 px-4"
                >{{ productDetail.category }}</span
              >
              <p class="my-2">{{ productDetail.description }}</p>
              <p class="my-2">{{ productDetail.content }}</p>
              <p class="my-2">
                <span class="font-bold mr-2">{{ productDetail.price }}</span
                ><span class="line-through mr-2">{{
                  productDetail.origin_price
                }}</span
                >個/元
              </p>
            </div>
            <div class="flex flex-wrap">
              <img
                :src="img"
                class="h-9 border border-slate-50"
                v-for="img in productDetail.imagesUrl"
                :key="img"
              />
            </div>
          </div>
        </div>
      </div>

      <div class="basis-3/4 pl-4">
        <table class="w-full">
          <thead>
            <tr class="border-b-2">
              <td
                class="font-bold py-2 px-4"
                v-for="th in tableSubject"
                :key="th + 1"
              >
                {{ th }}
              </td>
            </tr>
          </thead>
          <tbody>
            <tr class="border-b" v-for="item in productsData" :key="item.id">
              <td class="py-4 px-6">{{ item.category }}</td>
              <td>{{ item.title }}</td>
              <td>{{ item.origin_price }}</td>
              <td>{{ item.price }}</td>
              <td>{{ item.is_enabled }}</td>
              <td>
                <button @click.prevent="editPD((this.removeID = item.id))">
                  <heroicons-outline-pencil
                    class="w-6 h-6 text-cyan-700 mx-auto"
                  />
                </button>
              </td>
              <td>
                <button @click.prevent="readPD(item.id)">
                  <heroicons-outline-document-text
                    class="w-6 h-6 text-cyan-700 mx-auto"
                  />
                </button>
              </td>
              <td>
                <button @click.prevent="removePD((this.removeID = item.id))">
                  <heroicons-outline-trash
                    class="w-6 h-6 text-cyan-700 mx-auto"
                  />
                </button>
              </td>
            </tr>
          </tbody>
          <tfoot>
            <tr>
              <td class="py-4">目前有 {{ productsData.length }} 項產品</td>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  </div>

  <Modal
    v-if="openModal"
    @close="openModal = false"
    :openModal="openModal"
  ></Modal>
</template>

<style scoped></style>
