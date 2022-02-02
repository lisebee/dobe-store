<template>
<!--HEADER-->
<header id="header" class="fixed z-40 bg-slate-900 w-full py-4 px-6">
    <div class="max-w-2xl mx-auto sm:px-6 lg:max-w-7xl lg:px-8 flex justify-between">
        <div class="flex items-center">
            <nav class="flex justify-center items-center text-slate-500 font-bold">
                <RouterLink to="/" class="mx-2 hover:text-slate-300 flex items-center text-slate-300 font-bold text-2xl">
                    <heroicons-outline-color-swatch class="w-6 h-6" />雷諾曼解憂餐酒館</RouterLink>
                <RouterLink to="About" class="mx-2 hover:text-slate-300">關於占卜</RouterLink>
                <RouterLink to="Product" class="mx-2 hover:text-slate-300">好運商店</RouterLink>
                <RouterLink to="Story" class="mx-2 hover:text-slate-300">案例分享</RouterLink>
                <RouterLink to="Tool" class="mx-2 hover:text-slate-300">抽牌程式</RouterLink>
                <RouterLink to="" class="mx-2 hover:text-slate-300">與老闆娘有約</RouterLink>
                <RouterLink to="Faq" class="mx-2 hover:text-slate-300">FAQ</RouterLink>
            </nav>
        </div>

        <div>
            <nav class="flex justify-center text-slate-500 font-bold">
                <RouterLink to="" class="mx-2 hover:text-slate-300"><heroicons-outline-heart class="w-6 h-6" /></RouterLink>
                <RouterLink to="" class="mx-2 hover:text-slate-300"><heroicons-outline-shopping-cart class="w-6 h-6" /> </RouterLink>
            </nav>
        </div>
    </div>
</header>
</template>

<script>
export default ({
    props: ["imgsIndex"],
    data() {
        return {
            imagesUrl: [],
        }
    },
})
</script>

