<template>
  <div id="app">
    <component :is="layout" />
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  computed: {
    ...mapState({ user: (state) => state.userModule.user }),
    layout() {
      return this.$route.meta.layout || "default-layout";
    },
  },
  created() {
    this.storageCheckUser();
  },
  methods: {
    storageCheckUser() {
      const token = localStorage.getItem("jwt");
      if (token !== undefined && this.user === null) {
        this.$store.dispatch("getAccount", token).then(r => {
          if(r.status === 200) {
            this.storageCheckFavourites();
          }
        });
      }
    },
    storageCheckFavourites() {
      if (localStorage.getItem(`fav-${this.user.login}`) !== null &&this.user !== null) {
        this.$store.commit(
          "setFavourites",
          JSON.parse(localStorage.getItem(`fav-${this.user.login}`))
        );
      }
    },
  },
};
</script>

<style lang="scss">
@import "@/assets/scss/reset.css";
@import "@/assets/scss/main.scss";
</style>
