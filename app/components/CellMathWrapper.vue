<template>
  <div>
    <h1>100マスけいさん</h1>
    <div class="setting">
      <dl>
        <dt>よこマス</dt>
        <dd>
          <input v-model="widthSize" type="number" min="1" max="100">
        </dd>
        <dt>たてマス</dt>
        <dd>
          <input v-model="heightSize" type="number" min="1" max="100">
        </dd>
        <dt>ちいさいすうじ</dt>
        <dd>
          <input v-model="minMath" type="number" min="1" max="100">
        </dd>
        <dt>おおきいすうじ</dt>
        <dd>
          <input v-model="maxMath" type="number" min="1" max="100">
        </dd>
        <dt> つかう けいさん </dt>
        <dd>
          <label for="">
            たしざん
            <input v-model="inputAdd" type="checkbox">
          </label>
          <label for="">
            ひきざん
            <input v-model="inputSub" type="checkbox">
          </label>
          <label for="">
            かけざん
            <input v-model="inputMulti" type="checkbox">
          </label>
          <label for="">
            わりざん
            <input v-model="inputDiv" type="checkbox">
          </label>
        </dd>
      </dl>
      <button v-show="!isStarted" @click="onStart">
        はじめる
      </button>
      <button v-show="isStarted" @click="onReset">
        ぜんぶからにする
      </button>
      <button v-show="isStarted" @click="onFinish">
        おわる
      </button>
      <hr>
      <div class="hudWrapper">
        <ul>
          <li>じかん: {{ countTimeText }}</li>
          <li>せいかい： {{ correctCount }} / {{ totalSectionCount }}</li>
        </ul>
      </div>
      <div class="cellMathContent">
        <cell-math
          v-if="isStarted"
          :column-data="mathData.x"
          :row-data="mathData.y"
          :calc-type="mathData.calcType"
          @done="onDone"
          @change="onChange"
        />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      widthSize: 10,
      heightSize: 10,
      minMath: 1,
      maxMath: 9,
      correctCount: 0,
      coutnTimer: null,
      countTime: 0,
      inputAdd: true,
      inputSub: false,
      inputMulti: false,
      inputDiv: false,
      isStarted: false,
      startDatetime: null,
      mathData: [],
    };
  },
  computed: {
    totalSectionCount () {
      return this.widthSize * this.heightSize;
    },
    countTimeText () {
      return Math.floor(this.countTime * 100) / 100;
    },
  },
  methods: {
    onStart () {
      this.generateMathData();
      this.isStarted = true;
      this.startDatetime = new Date();
      this.coutnTimer = setInterval(() => {
        this.countTime = (Date.now() - this.startDatetime) * 0.001;
      }, 10);
    },
    onFinish () {
      this.isStarted = false;
      clearInterval(this.coutnTimer);
      this.countTimer = null;
      this.startDatetime = null;
      this.countTime = 0;
    },
    onReset () {
      this.isStarted = false;
      this.$nextTick(() => (this.isStarted = true));
    },
    onChange (values) {
      this.correctCount = values.filter(v => v).length;
    },
    onDone () {
      this.isStarted = false;
      clearInterval(this.coutnTimer);
      // TODO
    },
    generateMathData () {
      const calcTypes = [
        this.inputAdd ? 'add' : null,
        this.inputSub ? 'sub' : null,
        this.inputMulti ? 'multi' : null,
        this.inputDiv ? 'div' : null,
      ].filter(Boolean);

      const minMath = Math.ceil(Number(this.minMath));
      const maxMath = Math.floor(Number(this.maxMath));
      const widthSize = Number(this.widthSize);
      const heightSize = Number(this.heightSize);
      const calcType = calcTypes[Math.floor(Math.random() * calcTypes.length)];

      this.mathData = {
        x: [...Array(widthSize)].map((_, index) => {
          const value = Math.floor(Math.random() * (maxMath - minMath) + minMath);
          return {
            id: index,
            value,
          };
        }),
        y: [...Array(heightSize)].map((_, index) => {
          const value = Math.floor(Math.random() * (maxMath - minMath) + minMath);
          return {
            id: index,
            value,
          };
        }),
        calcType,
      };
    },
  },
}
</script>
<style>
.nuxt-logo {
  height: 180px;
}
</style>
