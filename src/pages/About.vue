<script>
const products = [
  {
    id: 1,
    title: "【個人主題占卜】主題擇一",
    href: "#",
    price: "600",
    origin_price: "800",
    imageUrl:
      "https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-04.jpg",
    imageAlt:
      "Hand holding black machined steel mechanical pencil with brass tip and top.",
  },
  {
    id: 2,
    title: "【專屬月運占卜】各方面預測",
    href: "#",
    price: "600",
    origin_price: "800",
    imageUrl:
      "https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-01.jpg",
    imageAlt:
      "Tall slender porcelain bottle with natural clay textured body and cork stopper.",
  },
  {
    id: 3,
    title: "【專屬週運占卜】各方面預測",
    href: "#",
    price: "300",
    origin_price: "600",
    imageUrl:
      "https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-02.jpg",
    imageAlt:
      "Olive drab green insulated bottle with flared screw lid and flat top.",
  },
  {
    id: 4,
    title: "【年度運勢占卜】雷諾曼大桌陣",
    href: "#",
    price: "1200",
    origin_price: "1500",
    imageUrl:
      "https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-03.jpg",
    imageAlt:
      "Person using a pen to cross a task off a productivity paper car$",
  },
];

export default {
  setup() {
    return {
      products,
    };
  },
};
</script>

<template>
<article id="about" class="page">
  <Headings>
    <h1 class="flex text-3xl font-bold text-slate-900">
      <dashicons-heart class="w-10 h-10 text-amber-700" /> 關於占卜
    </h1>
  </Headings>

  <div class="container">
    <p>
      一個人喝的酒是寂寞，<br />兩個人喝的是懂你懂我。<br />讓雷諾曼牌卡占卜打開話匣子，<br />帶著微醺的勇氣，<br />看一眼生活中的殘酷真實。
    </p>
  </div>

  <div class="container">
    <div
      class="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8"
    >
      <CardPd :products="products"></CardPd>
    </div>
  </div>
</article>
</template>

<style scoped></style>
