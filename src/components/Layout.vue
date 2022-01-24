<template>

<!--主選單-->
<nav class="bg-red-500 py-2 px-4 flex justify-center text-white font-bold">
    <RouterLink to="Home" class="mx-2 hover:text-red-300">Home</RouterLink>
    <RouterLink to="About" class="mx-2 hover:text-red-300">About</RouterLink>
    <RouterLink to="Login" class="mx-2 hover:text-red-300">Login</RouterLink>
    <RouterLink to="Dashboard" class="mx-2 hover:text-red-300">Dashboard</RouterLink>
</nav>

<!--內容-->
<RouterView></RouterView>

</template>