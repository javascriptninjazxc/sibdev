<template>
  <div class="favourites container">
    <h2 class="favourites__title">Избранное</h2>
    <the-list v-if="favouritesList !== null" @modal-open="setVisibleModal($event)" :list="favouritesList" />

    <EditFavouriteModal v-if="editFavouriteModal?.visible === true" :model="editFavouriteModal.props" @modal-close="editFavouriteModal = null" />
  </div>
</template>

<script>
import { mapState } from "vuex";
import TheList from "@/components/Favourites/TheList.vue";
import EditFavouriteModal from "@/components/Modals/Favourites/editFavourite.vue";

export default {
  components: {
    TheList,
    EditFavouriteModal
  },
  data() {
    return {
      editFavouriteModal: {
        visible: false,
        props: null
      }
    }
  },
  computed: {
    ...mapState({ favouritesList: (state) => state.favouritesModule.favouritesList }),
  },
  methods: {
    setVisibleModal(favourite) {
      console.log('i')
        this.editFavouriteModal = {
          visible: true,
          props: favourite
        }
    }
  },
};
</script>

<style lang="scss" scoped>
.favourites {
  &__title {
    font-weight: 400;
    font-size: 28px;
    margin-bottom: 40px;
    color: #000000;
  }
}
</style>
