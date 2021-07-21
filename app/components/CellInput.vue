<template>
  <div :class="cellClass">
    <span>{{ columnValue }} {{ operator }} {{ rowValue }}</span>
    <input
      ref="input"
      v-model="inputAnswer"
      type="number"
      @change="onChange"
      @keydown.prevent.enter="onNextRow"
      @keydown.prevent.down="onNextRow"
      @keydown.prevent.up="onPrevRow"
      @keydown.prevent.left="onPrevCol"
      @keydown.prevent.right="onNextCol"
    >
  </div>
</template>
<script>

const calcToOperatorMap = {
  add: '+',
  sub: '-',
  multi: '×',
  div: '÷',
};

export default {
  props: {
    answer: {
      type: Number,
      required: true,
    },
    columnValue: {
      type: Number,
      required: true,
    },
    rowValue: {
      type: Number,
      required: true,
    },
    calcType: {
      type: String,
      required: true,
    },
    position: {
      type: Number,
      required: true,
    },
    isFirstFocus: {
      type: Boolean,
      default: false,
    },
  },
  data () {
    return {
      inputAnswer: '',
      isCorrect: false,
      isChange: false,
    };
  },
  computed: {
    operator () {
      return calcToOperatorMap[this.calcType];
    },
    cellClass () {
      return {
        correct: this.isChange && this.isCorrect,
        fail: this.isChange && !this.isCorrect,
      }
    }
  },
  mounted () {
    if (this.isFirstFocus) {
      this.$refs.input.focus();
    }
  },
  methods: {
    onChange (event) {
      if (!this.isChange) {
        this.isChange = true;
      }

      this.isCorrect = Number(this.inputAnswer) === Number(this.answer);

      this.$emit('change', { isCorrect: this.isCorrect, position: this.position });
    },
    onNextRow () {
      this.$emit('next-row', this.position);
    },
    onNextCol () {
      this.$emit('next-col', this.position);
    },
    onPrevRow () {
      this.$emit('prev-row', this.position);
    },
    onPrevCol () {
      this.$emit('prev-col', this.position);
    },
  },
}
</script>
<style lang="scss">
.correct {
  input {
    background: #7fffd4
  }
}
.fail {
  input {
    background: #ffb6c1;
  }
}
</style>
