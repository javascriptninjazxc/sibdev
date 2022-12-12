<template>
  <div
    class="search__item"
    :class="{ 'search__item-list': contentType === 'list' }"
  >
    <div
      class="search__preview"
      :style="{
        'background-image': `url(${item.snippet.thumbnails.medium.url})`,
      }"
    />

    <div class="search__text">
      <h2 class="search__title">
        {{ item.snippet.title }}
      </h2>
      <p class="search__description">
        {{ item.snippet.description }}
      </p>

      <small class="search__description"
        >{{ item.counts }} тысяч просмотров</small
      >
    </div>
  </div>
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
      required: true,
    },
    contentType: {
      type: String,
      default: "grid",
    },
  },
};
</script>

<style lang="scss" scoped>
.search__item {
  max-width: 245px;
  width: 100%;

  @media screen and (max-width: 768px) {
    max-width: 216px;
  }
  @media screen and (max-width: 500px) {
    max-width: 100%;
  }
  .search__preview {
    height: 138px;
    border-radius: 10px;
    background: black;
    width: 100%;
  }

  .search__text {
    max-width: 510px;
    width: 90%;
    .search__title {
      font-weight: 500;
      font-size: 14px;
      color: #272727;
      line-height: 114%;
      margin: 8px 0;

      white-space: nowrap; /* Запрещаем перенос строк */
      overflow: hidden; /* Обрезаем все, что не помещается в область */
      text-overflow: ellipsis; /* Добавляем многоточие */
    }

    .search__description {
      font-weight: 400;
      font-size: 14px;
      line-height: 114%;
      color: rgba(23, 23, 25, 0.3);

      white-space: nowrap; /* Запрещаем перенос строк */
      overflow: hidden; /* Обрезаем все, что не помещается в область */
      text-overflow: ellipsis; /* Добавляем многоточие */
    }
  }

  &-list {
    display: flex;
    gap: 20px;
    max-width: 100%;
    @media screen and (max-width: 500px) {
      gap: 15px;
      .search__preview {
        width: 120px;
        height: 87px;
      }

      .search__text {
        width: 144px;
      }
    }

    .search__preview {
      width: 157px;
      height: 87px;
    }
  }
}
</style>
