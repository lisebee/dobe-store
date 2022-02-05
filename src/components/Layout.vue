<template>
  <!--HEADER-->
  <header id="header" class="flex justify-between bg-black">
    <div>
      <nav class="py-2 px-4 flex justify-center text-slate-500 font-bold">
        <RouterLink to="Home" class="mx-2 hover:text-slate-300"
          >Home</RouterLink
        >
        <RouterLink to="About" class="mx-2 hover:text-slate-300"
          >關於</RouterLink
        >
        <RouterLink to="Product" class="mx-2 hover:text-slate-300"
          >商店</RouterLink
        >
        <RouterLink to="Story" class="mx-2 hover:text-slate-300"
          >案例</RouterLink
        >
        <RouterLink to="Pick" class="mx-2 hover:text-slate-300"
          >抽牌</RouterLink
        >
        <RouterLink to="Contact" class="mx-2 hover:text-slate-300"
          >與老闆娘有約</RouterLink
        >
        <RouterLink to="Faq" class="mx-2 hover:text-slate-300">FAQ</RouterLink>
      </nav>
    </div>

    <div>
      <nav class="py-2 px-4 flex justify-center text-slate-500 font-bold">
        <RouterLink to="" class="mx-2 hover:text-slate-300"
          ><heroicons-outline-heart class="w-6 h-6"
        /></RouterLink>
        <RouterLink to="" class="mx-2 hover:text-slate-300"
          ><heroicons-outline-shopping-cart class="w-6 h-6" />
        </RouterLink>
      </nav>
    </div>
  </header>

  <!--內容-->
  <div class="w-[1000px] mx-auto">
    <RouterView></RouterView>
  </div>

  <!--FOOTER-->
  <footer id="footer" class="bg-black">
    <div class="copyright text-center text-white text-xs">
      雷諾曼餐酒館 © 2020. All Rights Reserved.
    </div>
    <RouterLink to="Login" class="mx-2 hover:text-red-300 text-white"
      >後台管理</RouterLink
    >
    <RouterLink to="Dashboard" class="mx-2 hover:text-red-300 text-white"
      >後台</RouterLink
    >
  </footer>
</template>
