<template>
  <input
    :class="classes"
    :type="type"
    :disabled="disabled"
    :placeholder="placeholder"
    @input="$emit('input', $event.target.value)"
  />
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      default: "text",
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    placeholder: {
      type: String,
      default: "",
    },
    classes: {
      type: [String, Array],
      default: "default",
    },
  },
};
</script>

<style lang="scss" scoped>
input {
  border: 0;
  outline: none;
  &.default {
    border: 1px solid rgba(23, 23, 25, 0.2);
    border-radius: 10px;
    width: 100%;
    padding: 12px 0px;
    font-size: 20px;
    padding-left: 12px;

    @media screen and (max-width: 500px) {
      font-size: 16px;
    }

    &:focus {
      background: rgba(197, 228, 249, 0.3);

      border: 1px solid #1390e5;
    }

    &::-webkit-input-placeholder {
      opacity: 0.3;
    }

    &::-moz-placeholder {
      opacity: 0.3;
    }

    &:-ms-input-placeholder {
      opacity: 0.3;
    }

    &::-ms-input-placeholder {
      opacity: 0.3;
    }

    &::placeholder {
      opacity: 0.3;
    }
  }

  &.b-right {
    border-radius: 10px 0px 0 10px;
  }

  &.p-right-xl {
    padding-right: 45px;
  }
}
</style>
