<script>
import axios from "axios";

export default {
  props: ["openModal"],
  data() {
    return {
      url: "https://vue3-course-api.hexschool.io/v2",
      path: "dobe",
      imgsIndex: 0,
      pd: {
        title: "",
        category: "",
        unit: "",
        origin_price: "",
        price: "",
        description: "",
        content: "",
        is_enabled: false,
        imageUrl: "",
        imagesUrl: [],
      },
    };
  },
  methods: {
    appendInput() {
      console.log("count===========> ok");
      this.imgsIndex += 1;
      console.log("this.imgsIndex===========>", this.imgsIndex);
    },
    addPD() {
      //取得 token
      const token = document.cookie.replace(
        /(?:(?:^|.*;\s*)myToken\s*\=\s*([^;]*).*$)|^.*$/,
        "$1"
      );
      //console.log('token====>',token);
      //headers夾帶 token 參考 https://axios-http.com/zh/docs/config_defaults
      axios.defaults.headers.common["Authorization"] = token;

      const pdData = {
        data: {
          title: this.pd.title,
          category: this.pd.category,
          unit: this.pd.unit,
          origin_price: this.pd.origin_price,
          price: this.pd.price,
          description: this.pd.description,
          content: this.pd.content,
          is_enabled: this.pd.is_enabled,
          imageUrl: this.pd.imageUrl,
          imagesUrl: this.pd.imagesUrl,
        },
      };

      axios
        .post(`${this.url}/api/${this.path}/admin/product`, pdData)
        .then((res) => {
          console.log("res.data====>", res.data);
        })
        .catch((error) => console.log(error));
    },
  },
};
</script>

<template>
  <div
    class="fixed top-0 left-0 w-full h-full bg-black bg-opacity-75"
    v-if="(openModal = true)"
  >
    <div
      class="relative w-[1000px] mx-auto bg-slate-700 border border-slate-500 rounded p-10 mt-4"
    >
      <button
        type="button"
        class="absolute top-3 right-3"
        @click="$emit('close')"
      >
        <heroicons-outline-x class="w-5 h-5 text-white" />
      </button>

      <form @submit.prevent="addPD">
        <div class="grid grid-cols-2">
          <div class="py-4 px-8">
            <div class="flex justify-between items-center w-full mb-2">
              <label for="title" class="w-1/4 font-bold text-white"
                >產品名稱</label
              >
              <input
                id="title"
                class="w-3/4 caret-red-500 bg-sky-100/75 rounded"
                type="text"
                placeholder="請輸入產品名稱"
                v-model="pd.title"
              />
            </div>
            <div class="flex justify-between items-center w-full mb-2">
              <label for="category" class="w-1/4 font-bold text-white"
                >分類</label
              >
              <input
                id="category"
                class="w-3/4 caret-red-500 bg-sky-100/75 rounded"
                type="text"
                placeholder="請輸入品分類"
                v-model="pd.category"
              />
            </div>
            <div class="flex justify-between items-center w-full mb-2">
              <label for="unit" class="w-1/4 font-bold text-white">單位</label>
              <input
                id="unit"
                class="w-3/4 caret-red-500 bg-sky-100/75 rounded"
                type="text"
                placeholder="請輸入單位"
                v-model="pd.unit"
              />
            </div>
            <div class="flex justify-between items-center w-full mb-2">
              <label for="origin_price" class="w-1/4 font-bold text-white"
                >原價</label
              >
              <input
                id="origin_price"
                class="w-3/4 caret-red-500 bg-sky-100/75 rounded"
                type="number"
                placeholder="請輸入原價"
                v-model="pd.origin_price"
              />
            </div>
            <div class="flex justify-between items-center w-full mb-2">
              <label for="price" class="w-1/4 font-bold text-white">售價</label>
              <input
                id="price"
                class="w-3/4 caret-red-500 bg-sky-100/75 rounded"
                type="number"
                placeholder="請輸入售價"
                v-model="pd.price"
              />
            </div>
            <div class="flex justify-between items-center w-full mb-2">
              <label for="description" class="w-1/4 font-bold text-white"
                >產品描述</label
              >
              <textarea
                id="description"
                name="description"
                class="w-3/4 caret-red-500 bg-sky-100/75 rounded"
                rows="3"
                placeholder="請輸入產品描述"
                v-model="pd.description"
              >
              </textarea>
            </div>
            <div class="flex justify-between items-center w-full mb-2">
              <label for="content" class="w-1/4 font-bold text-white"
                >說明內容</label
              >
              <textarea
                id="content"
                name="content"
                class="w-3/4 caret-red-500 bg-sky-100/75 rounded"
                rows="3"
                placeholder="請輸入說明內容"
                v-model="pd.content"
              >
              </textarea>
            </div>
            <div class="flex justify-start items-center w-full mb-2">
              <label for="is_enabled" class="w-1/4 font-bold text-white"
                >是否啟用</label
              >
              <input
                id="is_enabled"
                type="checkbox"
                class="bg-sky-100/75 rounded"
                v-model="pd.is_enabled"
              />
            </div>
          </div>

          <div class="py-4 px-8">
            <div class="flex justify-between items-center w-full mb-2">
              <label for="imageUrl" class="w-1/4 font-bold text-white"
                >封面圖片</label
              >
              <input
                id="imageUrl"
                class="w-3/4 bg-sky-100/75 rounded"
                type="text"
                placeholder="請輸入圖片連結"
                v-model="pd.imageUrl"
              />
            </div>
            <div class="flex justify-center">
              <img :src="pd.imageUrl" class="h-32" v-if="pd.imageUrl" />
            </div>
            <div class="flex justify-between items-center w-full mb-2">
              <label for="" class="w-1/4 font-bold text-white">附加圖片</label>
              <button
                class="w-3/4 text-white py-2 border-2 hover:bg-slate-800"
                @click="appendInput"
                :disabled="imgsIndex == 5"
              >
                新增圖片
              </button>
            </div>

            <ImgInput
              v-if="imgsIndex >= 1"
              :imgsIndex="imgsIndex"
              @getImgVal="pd.imagesUrl"
            ></ImgInput>
          </div>
        </div>

        <div class="flex justify-between items-center w-60 mx-auto mt-10">
          <button
            type="button"
            class="font-bold bg-slate-400 rounded py-2 px-8 hover:bg-amber-300"
          >
            取消
          </button>
          <button
            type="submit"
            class="font-bold bg-slate-400 rounded py-2 px-8 hover:bg-amber-300"
          >
            確認
          </button>
        </div>
      </form>
    </div>
  </div>
</template>
