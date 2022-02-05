<script setup>
import { ref } from "vue";

defineProps({
  msg: String,
});

const count = ref(0);
</script>

<template>
  <h1 class="text-red-500 text-4xl font-bold">{{ msg }}</h1>
  <h2 class="font-black">我的練習</h2>
  <p>
    Recommended IDE setup:
    <a class="link" href="https://code.visualstudio.com/" target="_blank"
      >VSCode</a
    >
    +
    <a href="https://github.com/johnsoncodehk/volar" target="_blank">Volar</a>
  </p>

  <div class="card">
    <a class="link" href="https://code.visualstudio.com/" target="_blank"
      >VSCode</a
    >
  </div>

  <p>
    <a href="https://vitejs.dev/guide/features.html" target="_blank">
      Vite Documentation
    </a>
    |
    <a href="https://v3.vuejs.org/" target="_blank">Vue 3 Documentation</a>
  </p>

  <button type="button" @click="count++">count is: {{ count }}</button>
  <p>
    Edit
    <code>components/HelloWorld.vue</code> to test hot module replacement.
  </p>
</template>

<style scoped></style>
