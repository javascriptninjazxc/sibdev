<template>
  <div class="login">
    <the-form />
  </div>
</template>

<script>
import TheForm from "@/components/Login/TheForm.vue";
export default {
  components: {
    TheForm,
  },
  created() {
    if (localStorage.getItem("jwt")) {
      this.$router.push("/");
    }
  },
};
</script>

<style lang="scss" scoped>
.login {
  height: 100vh;
  display: flex;
  align-items: center;
}
</style>
