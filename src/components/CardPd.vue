<template>
  <router-link
    v-for="product in products"
    :key="product.id"
    :to="`/Product/${product.id}`"
    class="group"
  >
    <div
      class="w-full aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8"
    >
      <img
        :src="product.imageUrl"
        :alt="product.imageAlt"
        class="w-full h-full object-center object-cover group-hover:opacity-75"
      />
    </div>
    <h3 class="mt-4 text-sm text-fuchsia-900 font-medium">
      {{ product.title }}
    </h3>
    <p class="mt-1 text-lg font-medium text-gray-900">
      NT$ {{ product.price }}
      <span class="line-through text-sm text-gray-500">NT$ {{ product.origin_price }}</span>
    </p>
  </router-link>
</template>

<script>
export default {
  props: ["products"],
};
</script>
