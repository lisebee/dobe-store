<script>
import axios from "axios";
import Button from "@/components/Button.vue";

export default {
  components: { Button },
  data() {
    return {
      user: {
        username: "",
        password: "",
      },
    };
  },
  methods: {
    login() {
      const url = "https://vue3-course-api.hexschool.io/v2";
      const path = "dobe";

      axios
        .post(`${url}/admin/signin`, this.user)
        .then((res) => {
          const { token, expired } = res.data;
          console.log("token, expired====>", token, expired);
          //參考 https://developer.mozilla.org/zh-CN/docs/Web/API/Document/cookie
          //document.cookie = "someCookieName=true; expires=Fri, 31 Dec 9999 23:59:59 GMT; path=/";
          //儲存 token
          document.cookie = `myToken=${token}; expires=${new Date(expired)};`;

          //$router(方法);$route(取得參數)
          this.$router.push("/admin/product");
          
          //往前一頁
          //this.$router.go(-1);

        })
        .catch(function (error) {
          console.log("axios error message ====>", error.message);
        });
    },
  },
};
</script>

<template>
  <div
    class="flex flex-col justify-center items-center h-screen bg-slate-900"
  >
    <h1 class="text-2xl font-bold text-slate-300 mb-10">管理者登入</h1>
    <form class="py-8 px-16 rounded bg-slate-100/10 drop-shadow-lg">
      <div class="mb-2">
        <label for="emailInput" class="text-white mb-2 pr-4">帳號</label>
        <input
          id="emailInput"
          type="email"
          placeholder="name@example.com"
          v-model="user.username"
        />
      </div>
      <div class="mb-2">
        <label for="pwInput" class="text-white mb-2 pr-4">密碼</label>
        <input id="pwInput" type="text" v-model="user.password" />
      </div>

      <div class="flex justify-center">
        <Button @click.prevent="login">登入</Button>
      </div>
    </form>
  </div>
</template>

<style scoped></style>
