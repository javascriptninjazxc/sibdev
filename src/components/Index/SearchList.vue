<template>
  <div
    class="search__list"
    :class="{ 'search-form__list-style': contentType === 'list'}"
  >
    <search-item v-for="item in list" :contentType="contentType" :key="item.id.videoId" :item="item" />
  </div>
</template>

<script>
import SearchItem from "@/components/Index/SearchItem.vue";
export default {
  props: {
    list: {
      type: Array,
    },
    contentType: {
      type: String,
      default: "list",
    },
  },
  components: {
    SearchItem,
  },
};
</script>

<style lang="scss" scoped>
.search__list {
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
  justify-content: space-between;
  margin-top: 20px;
  width: 100%;

  &-style {
    flex-direction: column;
  }
}
</style>
