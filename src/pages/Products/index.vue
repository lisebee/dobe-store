<script>
const products = [
  {
    id: 1,
    name: "【招桃花】開運裝飾畫",
    href: "#",
    price: "NT$ 1348",
    imageSrc:
      "https://cdn.pixabay.com/photo/2019/07/24/02/30/klimt-4359075_1280.jpg",
    imageAlt:
      "Tall slender porcelain bottle with natural clay textured body and cork stopper.",
  },
  {
    id: 2,
    name: "【招貴人】開運裝飾畫",
    href: "#",
    price: "NT$ 1735",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-02.jpg",
    imageAlt:
      "Olive drab green insulated bottle with flared screw lid and flat top.",
  },
  {
    id: 3,
    name: "【招財】開運裝飾畫",
    href: "#",
    price: "NT$ 1289",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-03.jpg",
    imageAlt:
      "Person using a pen to cross a task off a productivity paper car$",
  },
  {
    id: 4,
    name: "【招好運】開運裝飾畫",
    href: "#",
    price: "NT$ 1435",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-04.jpg",
    imageAlt:
      "Hand holding black machined steel mechanical pencil with brass tip and top.",
  },
  {
    id: 4,
    name: "【招財】開運裝飾畫",
    href: "#",
    price: "NT$ 1289",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-03.jpg",
    imageAlt:
      "Person using a pen to cross a task off a productivity paper car$",
  },
  {
    id: 5,
    name: "【招好運】開運裝飾畫",
    href: "#",
    price: "NT$ 1635",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-04.jpg",
    imageAlt:
      "Hand holding black machined steel mechanical pencil with brass tip and top.",
  },
];

import axios from "axios";

export default {
  data() {
    return {
      products: null,
    };
  },
  mounted() {
    console.log("this.$route.params=============>",this.$route.params)
    axios.get(`${import.meta.env.VITE_APP_API}/api/${import.meta.env.VITE_APP_PATH}/products`)
      .then((res) => {
          this.products=res.data.products;
          console.log("res.data.products=============>",res.data.products)
        });
  }
};
</script>

<template>
<article id="product" class="page">
  <Headings>
    <h1 class="flex text-3xl font-bold text-slate-900">
      <dashicons-heart class="w-10 h-10 text-amber-700" /> 好運商店
    </h1>
  </Headings>

  <div class="container">
    <input id="search" type="search" placeholder="搜尋" class="" />
    <div class="flex">
      <div class="mr-4">全部</div>
      <div class="mr-4">招貴人</div>
      <div class="mr-4">招財運</div>
      <div class="mr-4">招桃花</div>
    </div>
  </div>

  <div class="container">
    <div
      class="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8"
    >
      <CardPd :products="products"></CardPd>
    </div>
    <div class="flex justify-center py-20">
      <Pagination></Pagination>
    </div>
  </div>
</article>
</template>

<style scoped></style>
