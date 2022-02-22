<script>
import axios from "axios";
import Button from '@/components/Button.vue';

export default {
  components: { Button },
  data() {
    return {
      pd: "",
    };
  },
  mounted() {
    console.log("this.$route.params=============>",this.$route.params)
    //老師寫法 const {id} = this.$route.params
    axios.get(`${import.meta.env.VITE_APP_API}/api/${import.meta.env.VITE_APP_PATH}/product/${this.$route.params.id}`)
      .then((res) => {
          this.pd=res.data.product;
          console.log("res.data=============>",res.data)
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
    <div class="grid grid-cols-2 gap-y-10">
      <div class="py-14 px-8">
        <img :src="pd.imageUrl" />
        <div class="flex"><img :src="img" v-for="img in pd.imagesUrl" :key="img" class="w-28" /></div>
      </div>
      <div class="py-14 px-8">
        <span>{{pd.category}}</span>
        <h1 class="text-3xl font-bold">{{pd.title}}</h1>
        <p>{{pd.description}}</p>
        {{pd.price}}
        {{pd.origin_price}}
        {{pd.unit}}
        <p class="flex items-center"><Counter/><Button>加入購物車</Button></p>

        <hr>
        <div>
          <h2>商品介紹</h2>
          <p>{{pd.content}}</p>
        </div>

      </div>
    </div>

  </div>
</article>
</template>

<style scoped></style>
