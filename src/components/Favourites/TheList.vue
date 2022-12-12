<template>
  <ul class="favourites__list">
    <li
      v-for="favourite in list"
      :key="favourite.id"
      @mouseenter="selectedFavourite = favourite"
      @mouseleave="selectedFavourite = null"
      @dblclick="onSearch(favourite)"
      class="favourites__item"
    >
      {{ favourite.name }}

      <div class="favourites__actions" v-show="selectedFavourite === favourite">
        <base-button
          classes="favourites__btn blue"
          @click="$emit('modal-open', selectedFavourite)"
          >Изменить</base-button
        >
        <base-button classes="favourites__btn red" @click="deleteFavourite()"
          >Удалить</base-button
        >
      </div>
    </li>
  </ul>
</template>

<script>
// Был вариант еще с visible: hidden и opacity, но решил не менять ничего.
import {mapState} from "vuex";
import BaseButton from "@/components/UI/BaseButton.vue";

export default {
  components: {
    BaseButton,
  },
  props: {
    list: {
      type: Array,
      required: true,
    },
  },
  computed: {
    ...mapState({ user: (state) => state.userModule.user }),
  },
  data() {
    return {
      selectedFavourite: null,
    };
  },
  methods: {
    deleteFavourite() {
      this.$store.commit("deleteFavourite", {id: this.selectedFavourite.id, storageId: this.user.login});
    },
    onSearch(favourite) {
      const model = {
        maxResults: favourite.maxResult,
        searchValue: favourite.request,
        sorting: favourite.sorting,
      };

      this.$store.dispatch("getSearchList", model).then((r) => {
        if (r === true) {
          this.$router.push({
            path: "/",
            query: { searchTitle: model.searchValue },
          });
        }
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.favourites__list {
  background: #ffffff;
  overflow: hidden;
  border-radius: 10px;

  .favourites__item {
    padding: 0 20px;
    height: 47px;
    font-weight: 500;
    font-size: 16px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-radius: 10px;
    background-blend-mode: multiply;
    transition: 0.5s all;

    &:hover {
      background: #f1f1f1;
    }

    .favourites__actions {
      display: flex;
      gap: 30px;
    }

    &:not(:last-child) {
      border-bottom: 1px solid #f1f1f1;
    }
  }
}
</style>
