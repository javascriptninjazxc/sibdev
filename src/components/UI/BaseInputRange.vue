<template>
  <input
    type="range"
    :class="classes"
    @input="$emit('input', $event.target.value)"
    :style="{
      background: `linear-gradient(to right, #1390e5cc ${onSliderPercent}%, #d5d5d5 ${onSliderPercent}%), #FFFFFF`,
    }"
    :max="max"
    :min="min"
  />
</template>

<script>
export default {
  props: {
    min: {
      type: Number,
    },
    max: {
      type: Number,
    },
    classes: {
      type: String,
      default: "default-range",
    },
  },
  computed: {
    onSliderPercent() {
      return (this.$attrs.value / this.max) * 100;
    },
  },
};
</script>

<style lang="scss" scoped>
input {
  &.default-range {
    position: relative;
    -webkit-appearance: none;
    -moz-appearance: none;
    display: block;
    color: #1390e5cc;
    background: rgba(23, 23, 25, 0.3);
    border-radius: 3px;
    outline: none;
    width: 100%;
    height: 6px;

    &::-webkit-slider-runnable-track {
      -webkit-appearance: none;
      height: 8px;
    }

    &::-moz-track {
      -moz-appearance: none;
      height: 8px;
    }

    &::-ms-track {
      appearance: none;
      height: 8px;
    }

    &::-webkit-slider-thumb {
      -webkit-appearance: none;
      height: 20px;
      width: 20px;
      border: 2px solid #1390e5;
      border-radius: 50%;
      cursor: pointer;
      margin-top: -6px;
      background: white;
    }

    &::-moz-range-thumb {
      -moz-appearance: none;
      height: 20px;
      width: 20px;
      border: 2px solid #1390e5;
      border-radius: 50%;
      cursor: pointer;
      margin-top: -6px;
      background: white;
    }
    &::-ms-thumb {
      appearance: none;
      height: 20px;
      width: 20px;
      border: 2px solid #1390e5;
      border-radius: 50%;
      cursor: pointer;
      margin-top: -6px;
      background: white;
    }

    &:active::-webkit-slider-thumb {
      background-color: white;
      border: 2px solid #1390e5;
    }
  }
}
</style>
