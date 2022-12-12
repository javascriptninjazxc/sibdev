<template>
  <div class="modal">
    <DefaultTemplate>
      <template #title> Сохранить запрос </template>
      <template #inputs>
        <label class="modal__label">
          <span class="modal__span">
            <span class="modal__span-red">*</span>
            Запрос</span
          >
          <BaseInput placeholder="Укажите запрос" v-model="favourite.request" />
        </label>
        <label class="modal__label">
          <span class="modal__span">Название</span>
          <BaseInput placeholder="Укажите запрос" v-model="favourite.name" />
        </label>
        <label class="modal__label">
          <span class="modal__span">Сортировать по</span>
          <BaseSelect @selected="favourite.sorting = $event" :list="sortingList" />
        </label>

        <label class="modal__label modal__label-range">
          <BaseInputRange v-model="favourite.maxResult" :max="50" :min="1" />
          <span class="slider__value">{{ favourite.maxResult }}</span>
        </label>
      </template>

      <template #actions>
        <base-button classes="default__secondary b-10" @click="$emit('modal-close')"
          >Не изменять</base-button
        >
        <base-button @click="onSave">Изменить</base-button>
      </template>
    </DefaultTemplate>
  </div>
</template>

<script>
import DefaultTemplate from "@/components/Modals/Template/DefaultTemplate.vue";
import BaseButton from "@/components/UI/BaseButton.vue";
import BaseInput from "@/components/UI/BaseInput.vue";
import BaseInputRange from "@/components/UI/BaseInputRange.vue";
import BaseSelect from "@/components/UI/BaseSelect.vue";

export default {
  components: {
    DefaultTemplate,
    BaseInputRange,
    BaseButton,
    BaseSelect,
    BaseInput,
  },
  props: {
    model: {
      type: Object,
    },
  },
  data() {
    return {
      sortingList: [
        {
          name: "Без сортировки",
          isDisabled: true,
          isSelected: true,
          value: "rating",
        },
        {
          name: "По дате создания",
          value: "rating",
        },
        {
          name: "По рейтингу",
          value: "rating",
        },
        {
          name: "По релевантности поисковика",
          value: "relevance",
        },
        {
          name: "В алфавитном порядке",
          value: "title",
        },
        {
          name: "По убыванию количества загруженных",
          value: "videoCount",
        },
        {
          name: "От наибольшего к наименьшим просмотрам",
          value: "viewCount",
        },
      ],
      favourite: null,
    };
  },
  created() {
    this.favourite = JSON.parse(JSON.stringify(this.model)); // Глубокое копирование чтобы изменения которые вносят в модалку, сразу не показывались в DOM API
  },
  methods: {
    onSave() {
      this.$store.commit("editFavourite", this.favourite);
      this.$emit('modal-close');
    },
  },
};
</script>

<style lang="scss" scoped></style>
