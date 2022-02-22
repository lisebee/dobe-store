<template>
  <div class="flex">
    <div class="h-screen bg-rosy-900 text-slate-400 py-4 px-6">
      <RouterLink to="/" class="mx-2 hover:text-slate-300">
        <h2 class="flex items-center font-medium text-xl whitespace-nowrap tracking-wide">
          <heroicons-outline-color-swatch class="w-6 h-6 mr-1" /><span>解憂餐酒館</span>
        </h2>
      </RouterLink>

      <div class="border-y-2 border-y-slate-700 py-3 my-4">Hi,Dobe 管理者</div>

      <nav>
          <RouterLink to="/admin/products" class="mx-2 hover:text-slate-300">商品管理</RouterLink>
          <RouterLink to="/admin/article" class="mx-2 hover:text-slate-300">文章管理</RouterLink>
      </nav>

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

  <!--內容-->
  <div class="w-[1000px] mx-auto">
    <RouterView></RouterView>
  </div>


  </div>
</template>