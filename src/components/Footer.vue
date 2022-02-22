<template>
  <!--FOOTER-->
  <footer id="footer" class="bg-rosy-900 text-white">
    <div
      class="max-w-2xl mx-auto sm:px-6 lg:max-w-7xl lg:px-8 flex justify-between py-10 px-6"
    >
      <div>
        <h2 class="text-2xl font-bold">與老闆娘有約</h2>
        <p>留言給老闆娘，聊聊想解開的謎團、煩惱</p>
        <p>E-mail：lisebee212@gmail.com.tw</p>
      </div>
    </div>
    <div class="bg-black text-xs py-2">
      <div
        class="container flex flex-col items-center md:flex-row md:justify-between"
      >
        <div>
          <div class="copyright text-center">
            解憂餐酒館 © 2022. All Rights Reserved. 個人練習無商用
          </div>
        </div>
        <div class="flex items-center">
          <RouterLink to="" class="mx-2 hover:text-slate-300"
            >使用條款</RouterLink
          >
          <RouterLink to="" class="mx-2 hover:text-slate-300"
            >隱私政策</RouterLink
          >
          <RouterLink to="Login" class="mx-2 hover:text-slate-300"
            ><heroicons-solid-user-circle class="w-5 h-5 mx-1" /></RouterLink>
          <RouterLink to="/admin/products" class="mx-2 hover:text-slate-300"
            >後台</RouterLink
          >
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>
