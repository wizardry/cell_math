<template>
  <div>
    <table>
      <thead>
        <tr>
          <th />
          <th v-for="column in columnData" :key="`thx:${column.id}`">
            {{ column.value }}
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(row, yIndex) in rowData" :key="`r:${yIndex}`">
          <th>{{ row.value }}</th>
          <td v-for="(column, xIndex) in columnData" :key="`y:${yIndex},x${column.id}`">
            <cell-input
              ref="input"
              :answer="answers[yIndex][xIndex]"
              :column-value="column.value"
              :row-value="row.value"
              :calc-type="calcType"
              :position="xIndex + (yIndex * columnData.length)"
              :is-first-focus="yIndex === 0 && xIndex === 0"
              @change="onChange"
              @next-row="onNextRow"
              @next-col="onNextCol"
              @prev-row="onPrevRow"
              @prev-col="onPrevCol"
            />
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
export default {
  props: {
    columnData: {
      type: Array,
      default: () => ([]),
    },
    rowData: {
      type: Array,
      default: () => ([]),
    },
    calcType: {
      type: String,
      default: 'add',
    }
  },
  data () {
    return {
      inputAnswers: [...Array(this.rowData.length * this.columnData.length)],
    };
  },
  computed: {
    answers () {
      return [...Array(this.rowData.length)].map((_, row) => {
        return [...Array(this.columnData.length)].map((__, column) => {
          return this.columnData[column].value + this.rowData[row].value;
        })
      })
    },
  },
  watch: {
    inputAnswers: {
      handler (newValue, oldValue) {
        this.$emit('change', newValue);
        if (newValue.every(v => v === true)) {
          this.$emit('done');
        }
      },
      deep: true,
    }
  },
  mounted () {
  },
  methods: {
    onChange (value) {
      this.inputAnswers.splice(value.position, 1, value.isCorrect);
    },
    onNextRow (position) {
      const index = position + this.columnData.length;
      if (index > this.$refs.input.length) {
        return;
      }
      this.$refs.input[index].$refs.input.focus();
    },
    onNextCol (position) {
      const index = position + 1;
      if (index > this.$refs.input.length) {
        return;
      }
      this.$refs.input[index].$refs.input.focus();
    },
    onPrevRow (position) {
      const index = position - this.columnData.length;
      if (index < 0) {
        return;
      }
      this.$refs.input[index].$refs.input.focus();
    },
    onPrevCol (position) {
      const index = position - 1;
      if (index < 0) {
        return;
      }
      this.$refs.input[index].$refs.input.focus();
    },
  },
}
</script>
<style>
.nuxt-logo {
  height: 180px;
}
</style>
