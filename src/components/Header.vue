<template>
  <!--HEADER-->
  <header
    id="header"
    class="fixed top-0 z-40 py-4 px-6 w-full md:h-auto"
  >
    <div id="mobil-header" class="flex text-white md:hidden">
      <button @click="openMenu = true">
        <heroicons-outline-menu class="w-8 h-8" />
      </button>
      <span class="flex-1 flex text-xl font-bold ml-6"
        ><heroicons-outline-color-swatch
          class="w-6 h-6"
        />解憂餐酒館</span
      >
      <button @click="controlCart" :openCart="openCart"><heroicons-outline-shopping-cart class="w-8 h-8" /></button>
    </div>
    <div
      class="container flex flex-col fixed top-0 left-0 w-4/5 h-screen bg-rosy-700 md:flex-row md:justify-between md:items-center md:bg-transparent md:relative md:w-auto md:h-auto"
      v-if="openMenu || screenWidth > 768"
    >
      <div class="">
        <nav
          class="flex flex-col md:flex-row justify-center items-start md:items-center text-white md:text-slate-500 font-bold"
        >
          <div class="flex justify-between w-full md:w-auto py-4">
            <RouterLink
              to="/"
              class="mx-2 hover:text-slate-300 flex items-center text-slate-300 font-bold text-xl md:text-2xl"
            >
              <heroicons-outline-color-swatch
                class="w-6 h-6"
              />解憂餐酒館</RouterLink
            >
            <button @click="openMenu = false">
              <heroicons-outline-x class="w-8 h-8 text-white md:hidden" />
            </button>
          </div>
          <RouterLink
            to="About"
            class="mx-8 my-2 text-xl md:mx-2 md:text-base hover:text-slate-300"
            >關於占卜</RouterLink
          >
          <RouterLink
            to="Products"
            class="mx-8 my-2 text-xl md:mx-2 md:text-base hover:text-slate-300"
            >好運商店</RouterLink
          >
          <RouterLink
            to="Story"
            class="mx-8 my-2 text-xl md:mx-2 md:my-0 md:text-base hover:text-slate-300"
            >案例分享</RouterLink
          >
          <RouterLink
            to="Tool"
            class="mx-8 my-2 text-xl md:mx-2 md:my-0 md:text-base hover:text-slate-300"
            >抽牌程式</RouterLink
          >
          <RouterLink
            to=""
            class="mx-8 my-2 text-xl md:mx-2 md:my-0 md:text-base hover:text-slate-300"
            >與老闆娘有約</RouterLink
          >
          <RouterLink
            to="Faq"
            class="mx-8 my-2 text-xl md:mx-2 md:my-0 md:text-base hover:text-slate-300"
            >FAQ</RouterLink
          >
        </nav>
      </div>

      <div>
        <nav
          class="flex justify-start md:justify-center text-white md:text-slate-500 font-bold"
        >
          <RouterLink to="" class="flex text-xl mx-8 my-2 md:text-base md:mx-2 md:my-0 hover:text-slate-300"
            ><heroicons-outline-heart class="w-6 h-6"
          /><span class="md:hidden">我的收藏</span></RouterLink>
          <a
            class="mx-2 hover:text-slate-300 hidden md:block"
            @click="controlCart"
            :openCart="openCart"
            ><heroicons-outline-shopping-cart class="w-6 h-6" />
          </a>
        </nav>
      </div>

    </div>
    <div class="container relative">
      <Cart
        v-if="openCart"
        @close="openCart = false"
        :openCart="openCart"
      ></Cart>
    </div>
  </header>
</template>

<script>
export default {
  data() {
    return {
      screenWidth: window.innerWidth,
      scrollTop: 0,
      isScroll: false,
      openMenu: false,
      openCart: false,
    };
  },
  mounted() {
    console.log("this.screenWidth==>", this.screenWidth);
    //獲取螢幕寬度
    window.onresize = () => {
      return (() => {
        this.screenWidth = window.innerWidth;
      })();
    };
    //獲取捲動高度
    window.addEventListener('scroll',function(){
        console.log("this.isScroll 1==>", this.isScroll);
        let scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
        let el = document.getElementById('header');
        if(scrollTop>100){
            this.isScroll = true;
            this.scrollTop = scrollTop;
            el.classList.add("bg-black")
        }else{
            el.classList.remove("bg-black")
        }
        console.log("scrollTop==>", this.scrollTop);
        console.log("this.isScroll 2==>", this.isScroll);
    });
  },
  watch: {
    screenWidth: {
      immediate: true,
      handler(newValue) {
        console.log(newValue);
      },
    },
    // scrollTop: {
    //   immediate: true,
    //   handler(newValue) {
    //     console.log(newValue);
    //   },
    // },
  },
  methods: {
    controlCart() {
      this.openCart = true;
    },
  },
};
</script>
