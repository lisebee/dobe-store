<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
</script>

<template>
  <Header></Header>
    <main>
      <RouterView></RouterView>
    </main>
  <Footer></Footer>
</template>

<style>
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
main {
  min-height: calc(100vh - 184px);
  padding-top: 60px;
}
</style>
