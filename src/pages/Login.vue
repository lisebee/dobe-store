<script>
import axios from "axios";

export default {
    data() {
        return {
            user: {
                username: "",
                password: "",
            }
        }
    },
    methods: {
        login(){
            const url = 'https://vue3-course-api.hexschool.io/v2';
            const path = 'dobe';

            axios.post(`${url}/admin/signin`,this.user)
                .then((res) => {
                    const { token, expired } = res.data;
                    console.log('token, expired====>',token, expired);
                    //參考 https://developer.mozilla.org/zh-CN/docs/Web/API/Document/cookie
                    //document.cookie = "someCookieName=true; expires=Fri, 31 Dec 9999 23:59:59 GMT; path=/";
                    //儲存 token
                    document.cookie = `myToken=${token}; expires=${new Date(expired)};`;

                    window.location.href="/#/dashboard"
                })
                .catch(function (error) {
                    console.log("axios error message ====>",error.message);
                });
        }
    },
}
</script>

<template>
<div class="flex justify-center items-center h-screen bg-cyan-900">
    <form class="py-8 px-16 rounded bg-cyan-700 drop-shadow-lg">
        <div class="mb-2">
            <label for="emailInput" class="text-white mb-2 pr-4">帳號</label>
            <input id="emailInput" type="email" placeholder="name@example.com" v-model="user.username" />
        </div>
        <div class="mb-2">
            <label for="pwInput" class="text-white mb-2 pr-4">密碼</label>
            <input id="pwInput" type="text" v-model="user.password" />
        </div>

        <button class="bg-red-500 hover:bg-red-400 text-white font-bold py-2 px-10 rounded" type="submit" @click.prevent="login">登入</button>
    </form>
</div>
</template>

<style scoped>

</style>