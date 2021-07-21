<template>
  <div>
    <h1 class="header">
      100マスけいさん
    </h1>
    <div class="setting">
      <dl v-show="!isStarted" class="inputs-contain">
        <div class="input-wrap">
          <dt>よこマス</dt>
          <dd>
            <input v-model="widthSize" type="number" min="1" max="100">
          </dd>
        </div>
        <div class="input-wrap">
          <dt>たてマス</dt>
          <dd>
            <input v-model="heightSize" type="number" min="1" max="100">
          </dd>
        </div>
        <div class="input-wrap">
          <dt>ちいさいすうじ</dt>
          <dd>
            <input v-model="minMath" type="number" min="1" max="100">
          </dd>
        </div>
        <div class="input-wrap">
          <dt>おおきいすうじ</dt>
          <dd>
            <input v-model="maxMath" type="number" min="1" max="100">
          </dd>
        </div>
        <div class="input-wrap">
          <dt> つかう けいさん </dt>
          <dd class="radio-form">
            <label>
              <input v-model="inputCalcType" value="add" type="radio" name="calc-type">
              たしざん
            </label>
            <!-- <label>
              <input v-model="inputCalcType" value="sub" type="radio" name="calc-type">
              ひきざん
            </label> -->
            <label>
              <input v-model="inputCalcType" value="multi" type="radio" name="calc-type">
              かけざん
            </label>
            <!-- <label>
              <input v-model="inputCalcType" value="div" type="radio" name="calc-type">
              わりざん
            </label> -->
          </dd>
        </div>
      </dl>
      <ul class="buttons">
        <li v-show="!isStarted" class="button-item">
          <button
            class="button"
            @click="onStart"
          >
            はじめる
          </button>
        </li>
        <li v-show="isStarted" class="button-item">
          <button
            class="button"
            @click="onReset"
          >
            ぜんぶからにする
          </button>
        </li>
        <li v-show="isStarted" class="button-item">
          <button
            class="button"
            @click="onFinish"
          >
            おわる
          </button>
        </li>
      </ul>
      <hr>
      <div class="hudWrapper">
        <ul>
          <li>
            <span class="hud-title">じかん</span>
            <span class="hud-value" :class="countStyle">{{ countTimeText }}</span>
          </li>
          <li>
            <span class="hud-title">せいかい</span>
            <span class="hud-value">{{ correctCount }} / {{ totalSectionCount }}</span>
          </li>
        </ul>
      </div>
      <div v-if="isStarted" class="cellMathContent">
        <cell-math
          :column-data="mathData.x"
          :row-data="mathData.y"
          :calc-type="mathData.calcType"
          @done="onDone"
          @change="onChange"
        />
      </div>
      <div v-if="isFinished" class="result-content">
        <p class="finish-text">
          クリアにかかった じかん は {{ countTimeText }} びょう でした!
        </p>

        <p class="history-head">
          りれき
          <button class="button" @click="resetHistory">
            りれき を けす
          </button>
        </p>
        <ul class="history">
          <li v-for="(item, index) in history" :key="`history:${index}`">
            <span>よこ: {{ item.widthSize }}マス</span>
            <span>たて: {{ item.heightSize }}マス</span>
            <span>すうじ: {{ item.minMath }} ～ {{ item.maxMath }} まで</span>
            <span>けいさん: {{ item.calcTypeText }}</span>
            <span>じかん: {{ item.countTimeText }} びょう</span>
          </li>
        </ul>
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
      inputCalcType: 'add',
      isStarted: false,
      startDatetime: null,
      mathData: [],
      isFinished: false,
      history: [],
      errors: [],
    };
  },
  computed: {
    totalSectionCount () {
      return this.widthSize * this.heightSize;
    },
    countTimeText () {
      return (Math.floor(this.countTime * 100) / 100).toFixed(2).toString();
    },
    countStyle () {
      return {
        accent: this.countTimeText.slice(-4, -1) === '1.1'
      }
    }
  },
  mounted () {
    const history = localStorage.getItem('history');
    if (history) {
      this.history = JSON.parse(history);
    }

    const setting = localStorage.getItem('setting');
    if (setting) {
      const parsedSetting = JSON.parse(setting);
      this.widthSize = parsedSetting.widthSize;
      this.heightSize = parsedSetting.heightSize;
      this.minMath = parsedSetting.minMath;
      this.maxMath = parsedSetting.maxMath;
      this.inputCalcTyp = parsedSetting.inputCalcType;
    }
  },
  methods: {
    saveHistory () {
      const calcTypeTextMap = {
        add: 'たしざん',
        sub: 'ひきざん',
        multi: 'かけざん',
        div: 'わりざん',
      };
      this.history.unshift({
        countTimeText: this.countTimeText,
        widthSize: this.widthSize,
        heightSize: this.heightSize,
        minMath: this.minMath,
        maxMath: this.maxMath,
        calcTypeText: calcTypeTextMap[this.inputCalcType],
      });
      localStorage.setItem('history', JSON.stringify(this.history));
    },
    saveSetting () {
      const setting = {
        widthSize: this.widthSize,
        heightSize: this.heightSize,
        minMath: this.minMath,
        maxMath: this.maxMath,
        inputCalcType: this.inputCalcType
      };
      localStorage.setItem('setting', JSON.stringify(setting));
    },
    onStart () {
      if (!this.valid()) {
        alert(this.errors.join('\n'));
        return;
      }
      this.saveSetting();
      this.generateMathData();
      this.correctCount = 0;
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
      this.correctCount = 0;
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
      this.countTimer = null;

      this.saveHistory();
      this.isFinished = true;
    },
    resetHistory () {
      this.history = [];
      localStorage.removeItem('history');
    },
    valid () {
      this.errors = [];

      if (Number(this.minMath) > Number(this.maxMath)) {
        this.errors.push('ちいさいすうじ は おおきいすうじ より ちいさいすうじ を いれてください');
        return false;
      }

      return true;
    },
    generateMathData () {
      const minMath = Math.ceil(Number(this.minMath));
      const maxMath = Math.floor(Number(this.maxMath));
      const widthSize = Number(this.widthSize);
      const heightSize = Number(this.heightSize);

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
        calcType: this.inputCalcType,
      };
    },
  },
}
</script>
<style lang="scss">
.header {
  margin: 0;
  padding: 4px 12px;
  background: #509bb7;
  border-bottom: 1px solid #eee;
  color: #fff;
  font-size: 16px;
  font-weight: bold;
}

.setting {
  margin: 12px 0;
  padding: 0 12px;
}

.inputs-contain {
  margin: 0;
  padding: 0;
  border-bottom: 1px solid #eee;
}

.input-wrap {
  display: flex;
  margin-top: 4px;
  padding-top: 4px;
  border-top: 1px solid #eee;
  dt {
    font-size: 14px;
    width: 120px;
  }
  input[type=number] {
    padding: 4px;
    border: 1px solid #999;
    border-radius: 3px;
  }
}

.buttons {
  display: flex;
  list-style: none;
  margin: 12px 0 0 -8px;
  padding: 0;
}

.button-item {
  margin-left: 8px;
}

.button {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 40px;
  padding: 0 16px;
  margin: 0;
  font-weight: bold;
  line-height: 1;
  color: #fff;
  text-align: center;
  text-decoration: none;
  touch-action: manipulation;
  cursor: pointer;
  background: #2cb696;
  border: none;
  border-radius: 4px;
  appearance: none;
  transition: all .5s 0s 2s;

  &:hover {
    background: darken(#2cb696, 5%);
  }
}

.hudWrapper {
  position: fixed;
  bottom: 8px;
  right: 12px;
  z-index: 100;
  padding: 12px;
  background: rgba(0, 0, 0, .8);
  border-radius: 3px;

  ul {
    list-style: none;
    margin: 0;
    padding: 0;
    color: #fff;
  }

  li {
    display: flex;
    position: relative;
  }

  .hud-title {
    position: relative;
    width: 85px;
    text-align: justify;
    text-justify: inter-ideograph;

    &::after {
      position: absolute;
      right: 0;
      content: ':';
      margin: 0 4px
    }
  }

  .hud-value {
    margin-left: auto;
    padding-left: 8px;
    transition: all .2s 0s;
    font-size: 16px;
  }

  .accent {
    transform: scale(1.75);
    color: red;
  }
}

.result-content {
  margin: 0 auto;

  .finish-text {
    font-size: 20px;
    text-align: center;
  }

  .history {
    margin: 0;
    padding: 0 0 8px;
    list-style: none;
    border-bottom: 1px solid #eee;

    &-head {
      display: flex;
      justify-content: center;
      align-items: center;

      .button {
        margin-left: auto;
      }
    }

    li {
      display: flex;
      margin-top: 8px;
      padding-top: 8px;
      border-top: 1px solid #eee;

      span {
        padding: 0 4px;
      }
    }
  }
}
</style>
