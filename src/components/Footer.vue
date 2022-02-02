<template>
<!--FOOTER-->
<footer id="footer" class="bg-slate-800 text-white">
    <div class="max-w-2xl mx-auto sm:px-6 lg:max-w-7xl lg:px-8 flex justify-between py-10 px-6">
        <div>
            <h2 class="text-2xl font-bold">與老闆娘有約</h2>
            <p>留言給老闆娘，聊聊想解開的謎團、煩惱</p>
            <p>E-mail：lisebee212@gmail.com.tw</p>
        </div>

    </div>
    <div class="bg-slate-900">
        <div class="max-w-2xl mx-auto sm:px-6 lg:max-w-7xl lg:px-8 flex justify-between text-xs py-2">
            <div>
                <div class="copyright text-center">雷諾曼餐酒館 © 2020. All Rights Reserved.</div>
            </div>
            <div class="flex">
                <RouterLink to="" class="mx-2 hover:text-slate-300">使用條款</RouterLink>
                <RouterLink to="" class="mx-2 hover:text-slate-300">隱私政策</RouterLink>
                <RouterLink to="Login" class="mx-2 hover:text-slate-300"><heroicons-outline-user-circle class="w-4 h-4" /></RouterLink>
                <RouterLink to="Dashboard" class="mx-2 hover:text-slate-300">後台</RouterLink>
            </div>
        </div>
    </div>
</footer>
</template>

<script>
export default ({
    data() {
        return {
        }
    },
})
</script>

