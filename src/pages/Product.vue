<script>
export default {
  data() {
    return {
    };
  },
  mounted() {
    console.log("env=============>",import.meta.env.VITE_APP_API,import.meta.env.VITE_APP_PATH)
    axios.get(`${import.meta.env.VITE_APP_API}/api/${import.meta.env.VITE_APP_PATH}/products`)
      .then((res) => {
          this.pp=res.data.products;
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
    <div
      class="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8"
    >
單一
    </div>
  </div>
</article>
</template>

<style scoped></style>
