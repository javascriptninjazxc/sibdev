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
          <BaseInput
            placeholder="Укажите запрос"
            :disabled="reserveName !== undefined"
            v-model="form.request"
          />
        </label>
        <label class="modal__label">
          <span class="modal__span">Название</span>
          <BaseInput placeholder="Укажите запрос" v-model="form.name" />
        </label>
        <label class="modal__label">
          <span class="modal__span">Сортировать по</span>
          <BaseSelect
            @selected="form.selectedSort = $event"
            :list="sortingList"
          />
        </label>

        <label class="modal__label modal__label-range">
          <BaseInputRange v-model="form.maxResult" :max="50" :min="1" />
          <span class="slider__value">{{ form.maxResult }}</span>
        </label>
      </template>

      <template #actions>
        <base-button
          classes="default__secondary b-10"
          @click="$emit('close-modal')"
          >Не сохранять</base-button
        >
        <base-button @click="onSave">Сохранить</base-button>
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

import { mapState } from "vuex";

export default {
  components: {
    DefaultTemplate,
    BaseInputRange,
    BaseButton,
    BaseSelect,
    BaseInput,
  },
  props: {
    reserveName: {
      type: String,
      required: false,
    },
  },
  created() {
    this.form.request = this.reserveName;
    console.log(this.user);
  },
  computed: {
    ...mapState({ user: (state) => state.userModule.user }),
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
      form: {
        request: "",
        name: "",
        selectedSort: "title",
        maxResult: 40,
      },
    };
  },
  methods: {
    onSave() {
      const model = {
        request: this.form.request,
        name: this.form.name === "" ? this.form.request : this.form.name,
        sorting: this.form.selectedSort,
        maxResult: this.form.maxResult,
      };
      this.$store.commit("pushFavourite", [model, this.user.login]);

      this.$emit("success");
    },
  },
};
</script>

<style lang="scss" scoped></style>
