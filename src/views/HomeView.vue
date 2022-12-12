<template>
  <div class="home container">
    <search-form
      :isTooltipVisible="isTooltipVisible"
      @tooltip-close="isTooltipVisible = false"
      @modal-open="setVisibleModal($event)"
    />

    <add-favourite-modal
      :reserveName="addFavouriteModal.props"
      @success="(addFavouriteModal = null), (isTooltipVisible = true)"
      @close-modal="addFavouriteModal = null"
      v-if="addFavouriteModal?.visible === true"
    />
  </div>
</template>

<script>
import AddFavouriteModal from "@/components/Modals/Favourites/AddFavourite.vue";

import SearchForm from "@/components/General/SearchForm.vue";

export default {
  name: "HomeView",
  components: {
    SearchForm,
    AddFavouriteModal,
  },
  data() {
    return {
      addFavouriteModal: {
        visible: false,
        props: false,
      },
      isTooltipVisible: false,
    };
  },
  methods: {
    setVisibleModal(favourite) {
      this.addFavouriteModal = {
        visible: true,
        props: favourite,
      };
    },
  }
};
</script>

<style lang="scss" scoped></style>
