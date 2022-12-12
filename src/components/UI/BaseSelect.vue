<template>
  <div class="select-custom">
    <select :class="classes" @change="$emit('selected', $event.target.value)">
      <option
        v-for="item in list"
        :key="item.id"
        :value="item.value"
        :disabled="item?.isDisabled"
        :selected="item?.isSelected"
      >
        {{ item.name }}
      </option>
    </select>
  </div>
</template>

<script>
export default {
  props: {
    list: {
      type: Array,
      required: true,
    },
    classes: {
      type: String,
      default: "default",
    },
  }
};
</script>

<style lang="scss" scoped>
.select-custom {
  position: relative;
  &::before {
    content: "";
    background: url("@/assets/img/General/select__arrow.png");
    width: 10px;
    height: 5px;
    top: 50%;
    right: 15px;
    transform: translateY(-50%);
    display: block;
    position: absolute;
  }

  select {
    width: 100%;
    outline: none;

    &.default {
      appearance: none;
      -webkit-appearance: none;
      -moz-appearance: none;
      padding: 12px 15px;
      border: 1px solid rgba(23, 23, 25, 0.2);
      border-radius: 10px;
      font-weight: 400;
      font-size: 20px;
      color: rgb(39, 39, 39, 0.3);

      @media screen and (max-width: 500px) {
        font-size: 16px;
      }
    }
  }
}
</style>
