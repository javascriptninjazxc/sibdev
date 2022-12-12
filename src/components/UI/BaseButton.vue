<template>
  <button
    :class="getWrappedClasses"
    :disabled="disabled"
    @click="$emit('click')"
  >
    <slot />
  </button>
</template>

<script>
export default {
  props: {
    classes: {
      type: String,
      default: "default",
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    getWrappedClasses() {
      return this.classes.split(",").join(" ");
    },
  },
};
</script>

<style lang="scss" scoped>
button {
  border: 0;
  background: transparent;
  cursor: pointer;
  &.default {
    background: #1390e5;
    border-radius: 5px;
    padding: 14px 60px;
    font-weight: 400;
    font-size: 20px;
    color: white;

    @media screen and (max-width: 768px) {
      padding: 14px 46px;
    }

    @media screen and (max-width: 500px) {
      padding: 14px 23px;
      font-size: 16px;
    }
  }

  &.default__secondary {
    border: 1px solid #1390e5;
    border-radius: 10px;
    padding: 14px 30px;
    font-weight: 400;
    font-size: 20px;
    text-align: center;
    color: #1390e5;

    @media screen and (max-width: 500px) {
      padding: 14px 10px;
      font-size: 16px;
    }
  }

  &.b-10 {
    border-radius: 10px;
  }

  &:disabled {
    opacity: 0.7;
  }

  &.b-right {
    border-radius: 0px 10px 10px 0px;
  }

  &.header__logout {
    font-weight: 400;
    font-size: 18px;
    color: #1390e5;

    @media screen and (max-width: 500px) {
      font-size: 14px;
    }
  }

  &.favourites__btn {
    font-weight: 400;
    font-size: 14px;

    &.blue {
      color: #1390e5;
    }

    &.red {
      color: #ff0000;
    }
  }
}
</style>
