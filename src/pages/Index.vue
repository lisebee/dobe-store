<script>
const userFeedback = [
  {
    name: "台中.陳小姐",
    msg: "對我有很大的幫助。老闆娘中肯的分析了我的問題，給我具體的方向與做法，原本迷茫的我，從灰心轉而有力量面對接下來的挑戰，很感謝！",
    img: "https://cdn.pixabay.com/photo/2018/04/21/03/06/vietnam-3337578_1280.jpg",
  },
  {
    name: "永和.張小姐",
    msg: "對我有很大的幫助。老闆娘中肯的分析了我的問題，給我具體的方向與做法，原本迷茫的我，從灰心轉而有力量面對接下來的挑戰，很感謝！",
    img: "https://cdn.pixabay.com/photo/2017/10/11/12/03/dalat-2840836_1280.jpg",
  },
  {
    name: "嘉義.洪小姐",
    msg: "對我有很大的幫助。老闆娘中肯的分析了我的問題，給我具體的方向與做法，原本迷茫的我，從灰心轉而有力量面對接下來的挑戰，很感謝！",
    img: "https://cdn.pixabay.com/photo/2016/11/08/05/23/adult-1807529_1280.jpg",
  },
  {
    name: "高雄.林小姐",
    msg: "對我有很大的幫助。老闆娘中肯的分析了我的問題，給我具體的方向與做法，原本迷茫的我，從灰心轉而有力量面對接下來的挑戰，很感謝！",
    img: "https://cdn.pixabay.com/photo/2016/11/07/06/25/portrait-1804963_1280.jpg",
  },
];

const goods = [
  {
    name: "特色牌卡",
    link: "",
    img: "https://cdn.pixabay.com/photo/2015/10/16/11/40/tarot-991041_1280.jpg",
  },
  {
    name: "進口聖木",
    link: "",
    img: "https://images.unsplash.com/photo-1612088486201-2cb53360306c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1931&q=80",
  },
  {
    name: "擺件掛畫",
    link: "",
    img: "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
  },
  {
    name: "推薦書籍",
    link: "",
    img: "https://images.unsplash.com/photo-1612198526331-66fcc90d67da?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
  },
];

export default {
  data() {
    return {
      userFeedback: userFeedback,
      goods: goods,
    };
  },
};
</script>

<template>
<article id="home">
  <div
    id="kingBanner"
    class="bg-cover bg-center relative h-0 pt-[500px] md:pt-[54%] lg:pt-[46%]"
    style="
      background: url(https://cdn.pixabay.com/photo/2018/02/06/00/29/candle-3133631_1280.jpg);
    "
  >
    <div class="absolute top-0 left-0 bottom-0 right-0">
      <div class="container h-full flex items-center">
        <div class="w-full md:2/3 lg:w-1/2 p-10">
          <h1 class="text-white font-bold text-4xl sm:text-5xl lg:text-6xl">
            雷諾曼牌卡占卜
          </h1>
          <h2 class="text-white font-medium text-xl bg-fuchsia-900 mt-5 px-4">
            個人占卜諮詢｜神秘學課程｜身心靈好物精選
          </h2>
        </div>
      </div>
    </div>
  </div>

  <!-- <div
    id="kingBanner"
    style="
      background: url(https://images.unsplash.com/photo-1567113463224-37cf03ba4577?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1451&q=80);
    "
  >
    <div class="caption absolute top-40 left-40">
      <h1 class="text-white font-bold text-6xl">雷諾曼牌卡占卜</h1>
      <h2 class="text-white font-medium text-xl bg-fuchsia-900 mt-5 px-4">
        個人占卜諮詢｜神秘學課程｜身心靈好物推薦
      </h2>
    </div>
  </div> -->

  <div class="container">
    <NewsBar></NewsBar>
  </div>

  <div
    class="py-20 md:py-8 bg-center bg-cover bg-fixed"
    style="
      background-image: url(https://lise566.files.wordpress.com/2020/11/img_8774.jpg?w=960&h=1280&crop=1);
    "
  >
    <div class="container">
      <div class="bg-brown-600/90 px-8 py-4 md:p-24 w-full md:w-1/2">
        <h2 class="font-semibold text-white text-4xl my-7">個人占卜諮詢</h2>
        <p class="font-normal text-white my-7">
          首有北現夫師用象，又你兩子那風打裡因外不查天西產題色條？當病選資推世一那上子上之有；夜市人以於有此把當房學的著現平前
        </p>
        <Button>現在就預約</Button>
      </div>
    </div>
  </div>

  <div class="container py-14">
    <div class="flex flex-col lg:flex-row">
      <div class="flex-1 order-2 md:order-1">
        <div
          class="grid grid-rows-4 grid-cols-1 sm:grid-rows-2 sm:grid-cols-2 gap-2"
        >
          <div
            class="bg-cover w-full sm:w-[360px] sm:h-[340px] flex justify-center items-center"
            :style="'background-image: url(' + good.img + ');'"
            v-for="good in goods"
            :key="good.name"
          >
            <div class="text-white bg-neutral-900/30 my-5 py-6 px-12 md:p-16">
              <h3 class="text-3xl md:text-4xl font-bold">{{ good.name }}</h3>
              <small class="block text-center font-semibold mt-4"
                >[ more ]</small
              >
            </div>
          </div>
        </div>
      </div>
      <div class="max-w-[500px] order-1 md:order-2">
        <div class="bg-brown-400 text-brown-800 h-full p-8 md:py-16 md:px-24">
          <h2 class="font-semibold text-4xl my-7">身心靈好物精選</h2>
          <p class="font-normal my-7">
            首有北現夫師用象，又你兩子那風打裡因外不查天西產題色條？當病選資推世一那上子上之有；夜市人以於有此把當房學的著現平前
          </p>
          <Button>來去逛逛</Button>
        </div>
      </div>
    </div>
  </div>
  <div
    class="bg-cover bg-center bg-fixed h-96"
    style="
      background-image: url(https://cdn.pixabay.com/photo/2021/10/14/17/02/cards-6709817_1280.jpg);
    "
  >
    <div class="container py-14">
      <div class="flex">
        <div class="w-1/2"></div>
        <div>
          <h2 class="font-semibold text-4xl my-7">神秘學課程</h2>
        </div>
      </div>
    </div>
  </div>
  <div class="bg-rosy-500 py-14">
    <div class="container">
      <div class="flex justify-center mb-10">
        <heroicons-solid-star class="w-14 h-14 text-rosy-100" />
        <heroicons-solid-star class="w-14 h-14 text-rosy-100" />
        <heroicons-solid-star class="w-14 h-14 text-rosy-100" />
        <heroicons-solid-star class="w-14 h-14 text-rosy-100" />
        <heroicons-solid-star class="w-14 h-14 text-rosy-100" />
      </div>
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        <div
          class="flex flex-col items-center"
          v-for="feedback in userFeedback"
          :key="feedback.name"
        >
          <div class="rounded-full overflow-hidden w-32 h-32">
            <img :src="feedback.img" class="object-cover w-full h-full" />
          </div>
          <p class="text-white px-8 py-6">{{ feedback.msg }}</p>
          <small class="text-rosy-100 mb-10">- {{ feedback.name }} -</small>
        </div>
      </div>
    </div>
  </div>

  <div
    class="flex justify-center bg-fixed bg-center bg-cover py-28"
    style="
      background-image: url(https://images.unsplash.com/photo-1516339901601-2e1b62dc0c45?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=671&q=80);
    "
  >
    <div class="container">
      <div class="grid grid-cols-1 md:grid-cols-2">
        <div>
          <p class="font-semibold text-white text-2xl sm:text-4xl leading-10">
            立即訂閱<span class="text-amber-500">獲得首次占卜優惠</span>
          </p>
          <p class="text-white text-lg sm:text-xl mt-3">
            占卜體驗優惠碼將透過Email寄給您
          </p>
        </div>
        <div class="flex items-center pl-10">
          <input type="email" placeholder="請輸入您的電子信箱" class="h-8" />
          <Button>訂閱</Button>
        </div>
      </div>
    </div>
  </div>
</article>
</template>

<style scoped>
#kingBanner::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.25);
}
</style>
