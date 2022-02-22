<script>
const tableSubject = ["預覽", "品名", "單價", "數量", "編輯"];
const productsData = [];
export default {
  props: ["openCart"],
  data() {
    return {
      tableSubject: tableSubject,
    };
  },
};
</script>

<template>
<article id="tool" class="page">
  <Headings>
    <h1 class="flex text-3xl font-bold text-slate-900">
      <dashicons-heart class="w-10 h-10 text-amber-700" /> 購物車
    </h1>
  </Headings>
  <div class="container">
    <div class="w-[800px] mx-auto">
    <table class="w-full">
      <thead>
        <tr class="border-b-2">
          <td
            class="font-bold py-2 px-4"
            v-for="th in tableSubject"
            :key="th + 1"
          >
            {{ th }}
          </td>
        </tr>
      </thead>
      <tbody>
        <tr class="border-b" v-for="item in productsData" :key="item.id">
          <td class="py-4 px-6">{{ item.category }}</td>
          <td>{{ item.title }}</td>
          <td>{{ item.origin_price }}</td>
          <td>{{ item.price }}</td>
          <td>{{ item.is_enabled }}</td>
          <td>
            <button @click.prevent="editPD((this.removeID = item.id))">
              <heroicons-outline-trash class="w-6 h-6 text-cyan-700 mx-auto" />
            </button>
          </td>
        </tr>
        <tr>
          <td></td>
          <td>名稱名稱名稱</td>
          <td>3000</td>
          <td>3000</td>
          <td></td>
          <td>X</td>
        </tr>
      </tbody>
      <tfoot>
        <tr>
          <td class="py-4">總金額 NT$</td>
        </tr>
      </tfoot>
    </table>
    <div class="flex justify-between">
      <Button>繼續購物</Button>
      <Button>確認訂單前往結賬</Button>
    </div>
    </div>
  </div>
</article>
</template>
