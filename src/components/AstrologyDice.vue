<template>
  <div>
    <h1>占星骰子</h1>
    <h2>請深呼吸三次，<br />靜心冥想自己的問題後，<br />搖出骰子：</h2>
    <p>
      歡迎把占卜問題及搖出骰子的結果，<br />寄給占卜師為您親自解答唷<br />快樂結緣，費用隨喜，開心就好
      :D<br />E-mail: lisebee212@gmail.com
    </p>
    <div class="btn-group">
      <button @click="shake">搖骰子</button>
      <button @click="diceArr.length = 0">清除骰子</button>
    </div>

    <div v-if="diceArr.length > 0">
      <h3>投出的結果是..</h3>
      <div class="box-group">
        <div class="box" v-for="(dice, index) in diceArr" :key="index">
          <span>{{ dice.name }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
const planetArr = [
  { id: 1, name: "太陽" },
  { id: 2, name: "月亮" },
  { id: 3, name: "水星" },
  { id: 4, name: "金星" },
  { id: 5, name: "火星" },
  { id: 6, name: "北交點" },
  { id: 7, name: "木星" },
  { id: 8, name: "土星" },
  { id: 9, name: "天王星" },
  { id: 10, name: "海王星" },
  { id: 11, name: "冥王星" },
  { id: 12, name: "南交點" },
];
const constellationArr = [
  { id: 1, name: "白羊座" },
  { id: 2, name: "金牛座" },
  { id: 3, name: "雙子座" },
  { id: 4, name: "巨蟹座" },
  { id: 5, name: "獅子座" },
  { id: 6, name: "處女座" },
  { id: 7, name: "天秤座" },
  { id: 8, name: "天蠍座" },
  { id: 9, name: "射手座" },
  { id: 10, name: "摩羯座" },
  { id: 11, name: "水瓶座" },
  { id: 12, name: "雙魚座" },
];
const houseArr = [
  { id: 1, name: "1宮" },
  { id: 2, name: "2宮" },
  { id: 3, name: "3宮" },
  { id: 4, name: "4宮" },
  { id: 5, name: "5宮" },
  { id: 6, name: "6宮" },
  { id: 7, name: "7宮" },
  { id: 8, name: "8宮" },
  { id: 9, name: "9宮" },
  { id: 10, name: "10宮" },
  { id: 11, name: "11宮" },
  { id: 12, name: "12宮" },
];

export default {
  data() {
    return {
      planetArr: planetArr,
      constellationArr: constellationArr,
      houseArr: houseArr,
      planet: 0,
      constellation: 0,
      house: 0,
      diceArr: [],
    };
  },
  methods: {
    getRandom(x) {
      return Math.floor(Math.random() * x);
    },
    shake() {
      //清空
      this.diceArr = [];
      //取三個數字
      this.planet = this.planetArr[this.getRandom(this.planetArr.length)];
      this.constellation =
        this.constellationArr[this.getRandom(this.constellationArr.length)];
      this.house = this.houseArr[this.getRandom(this.houseArr.length)];
      this.diceArray = [this.planet, this.constellation, this.house];
    },
  },
};
</script>

<style scoped>
.btn-group {
  display: flex;
}

button {
  margin: 0 0.6rem;
  padding: 0.8rem 2rem;
  -webkit-appearance: none;
  background: #f4f4f4;
  cursor: pointer;
}
button:hover {
  background: #c2c2c2;
}

.box-group {
  display: grid;
  grid-template-row: 100px;
  grid-template-columns: 100px 100px 100px;
  justify-items: center;
  align-items: center;
}

.box {
  position: relative;
  width: 54px;
  height: 54px;
  box-sizing: content-box;
  border-width: 50px 18px 0;
  border-style: solid;
  border-color: #83145a transparent;
}
.box span {
  position: absolute;
  top: -90%;
  left: 50%;
  transform: translateX(-50%);
  z-index: 10;
  width: 50px;
  text-align: center;
  color: yellow;
}

.box:before {
  content: "";
  position: absolute;
  height: 0;
  width: 0;
  top: -85px;
  left: -18px;
  border-width: 0 45px 35px;
  border-style: solid;
  border-color: transparent transparent #83145a;
}

.poker-num {
  color: red;
  font-weight: bold;
}

.poker-name {
  padding-left: 0.4rem;
  padding-right: 1rem;
}
</style>
