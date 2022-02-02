<script>
const tableSubject = ["預覽","品名","單價","數量","編輯"]
const productsData = []
export default ({
    data() {
        return {
            tableSubject: tableSubject,
        }
    },
})
</script>

<template>
    <table class="w-full">
        <thead>
            <tr class=" border-b-2">
                <td class=" font-bold py-2 px-4" v-for="th in tableSubject" :key="th+1">{{th}}</td>
            </tr>
        </thead>
        <tbody>
            <tr class=" border-b" v-for="item in productsData" :key="item.id">
                <td class=" py-4 px-6">{{item.category}}</td>
                <td>{{item.title}}</td>
                <td>{{item.origin_price}}</td>
                <td>{{item.price}}</td>
                <td>{{item.is_enabled}}</td>
                <td><button @click.prevent="editPD(this.removeID=item.id)"><heroicons-outline-trash class=" w-6 h-6 text-cyan-700 mx-auto" /></button></td>
            </tr>
        </tbody>
        <tfoot>
            <tr>
                <td class="py-4">總金額 NT$</td>
            </tr>
        </tfoot>
    </table>
    <Button>訂單結帳</Button>
</template>

