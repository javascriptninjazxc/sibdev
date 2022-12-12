<template>
  <div
    class="search-form"
    :class="{
      'search-form__fill': searchList !== null,
    }"
  >
    <h2 class="search-form__title">Поиск видео</h2>

    <div class="search-form__input">
      <label class="search-form__label">
        <base-input
          classes="default b-right p-right-xl"
          placeholder="Что хотите посмотреть?"
          v-model="search"
        />
        <span v-if="search.length > 0" class="search-form__span">
          <HearthIcon
            @click="$emit('modal-open', search)"
            class="search-form__label-icon"
          />

          <add-favourite-tooltip v-show="isTooltipVisible" />
        </span>
      </label>
      <base-button
        classes="default b-right"
        :disabled="isLoadingSearch"
        @click="onSearch"
        >Найти</base-button
      >
    </div>

    <div v-if="searchList !== null" class="search-form__filter">
      <div class="search-form__results">
        <h3 class="search-form__text">
          Видео по запросу
          <b>«{{ lastSearch }}»</b>
        </h3>
        <h3 class="search-form__text grey">
          {{ searchList.length }}
        </h3>
      </div>

      <div class="search-form__switcher">
        <ListIcon
          class="search-form__icon"
          @click="contentType = 'list'"
          :class="{ 'search-form__switcher-active': contentType === 'list' }"
        />
        <GridIcon
          class="search-form__icon"
          @click="contentType = 'grid'"
          :class="{ 'search-form__switcher-active': contentType === 'grid' }"
        />
      </div>
    </div>

    <search-list
      v-if="searchList !== null"
      :list="searchList"
      :content-type="contentType"
    />
  </div>
</template>

<script>
import { mapState } from "vuex";
import SearchList from "@/components/Index/SearchList.vue";

import HearthIcon from "@/assets/img/General/hearth.svg";
import GridIcon from "@/assets/img/General/grid.svg";
import ListIcon from "@/assets/img/General/list.svg";

import BaseInput from "@/components/UI/BaseInput.vue";
import BaseButton from "@/components/UI/BaseButton.vue";

import AddFavouriteTooltip from "@/components/Tooltips/AddFavouriteTooltip.vue";

export default {
  components: {
    BaseInput,
    BaseButton,
    AddFavouriteTooltip,
    HearthIcon,
    ListIcon,
    SearchList,
    GridIcon,
  },
  props: {
    isTooltipVisible: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    ...mapState({ searchList: (state) => state.searchList }),
  },
  data() {
    return {
      search: "",
      isLoadingSearch: false,
      contentType: "list",
      lastSearch: "",
      isFavouritevisible: false,
    };
  },
  methods: {
    onSearch() {
      if (this.search.length > 0 && !this.isLoadingSearch) {
        this.isLoadingSearch = true;
        this.lastSearch = this.search;

        this.$store
          .dispatch("getSearchList", this.search.toString())
          .finally(() => (this.isLoadingSearch = false));
      }
    },
  },
  watch: {
    "$route.query.searchTitle": {
      handler: function (search) {
        if (typeof search == "string") {
          this.search = search;
          this.lastSearch = search;
        }
      },
      deep: true,
      immediate: true,
    },
    isTooltipVisible(value) {
      console.log(value);
      // Как только подсказка появилась, через 2 секунды убираем ее
      if (value === true) {
        setTimeout(() => {
          this.$emit('tooltip-close');
        }, 2000);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.search-form {
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  max-width: 686px;
  width: 100%;
  margin: 0 auto;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  height: 82vh;

  &__filter {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    width: 100%;
    margin-top: 40px;

    @media screen and (max-width: 500px) {
      align-items: flex-start;
    }

    .search-form__results {
      display: -webkit-box;
      display: -ms-flexbox;
      display: flex;
      gap: 15px;
      flex-wrap: wrap;
      .search-form__text {
        font-weight: 400;
        font-size: 16px;
        color: #272727;

        @media screen and (max-width: 500px) {
          
        }

        &.grey {
          color: rgba(23, 23, 25, 0.3);
        }
      }
    }

    .search-form__switcher {
      display: -webkit-box;
      display: -ms-flexbox;
      display: flex;
      gap: 15px;
      svg {
        cursor: pointer;
      }
    }
  }

  &__switcher {
    .search-form__icon {
      opacity: 0.3;
    }
    .search-form__switcher-active {
      opacity: 1;
    }
  }

  &__fill {
    -webkit-box-align: start;
    -ms-flex-align: start;
    align-items: flex-start;
    max-width: 100%;
    height: 100%;
  }

  .search-form__title {
    font-weight: 400;
    font-size: 36px;
    margin-bottom: 40px;
  }

  &__label,
  &__input {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    width: 100%;
  }

  &__label {
    position: relative;

    &-icon {
      &:hover {
        fill: #c5e4f9;
      }
    }

    span.search-form__span {
      position: absolute;
      right: 15px;
      height: 100%;
      display: -webkit-box;
      display: -ms-flexbox;
      display: flex;
      -webkit-box-align: center;
      -ms-flex-align: center;
      align-items: center;
      cursor: pointer;
    }
  }
}
</style>
