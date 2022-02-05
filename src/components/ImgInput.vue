<template>
  <div
    class="flex justify-between items-center w-full mb-2"
    v-for="index in imgsIndex"
    :key="index"
  >
    <label :for="'img' + index" class="w-1/4 font-bold text-white"
      >圖片{{ index }}</label
    >
    <input
      :id="'img' + index"
      class="w-3/4 bg-sky-100/75 rounded"
      type="text"
      placeholder="請輸入圖片連結"
      v-model="imagesUrl"
      @change="$emit('getImgVal')"
    />
    <img :src="imagesUrl" class="w-10 h-10" v-if="imagesUrl.length >= 1" />
  </div>
</template>

<script>
export default {
  props: ["imgsIndex"],
  data() {
    return {
      imagesUrl: [],
    };
  },
};
</script>
