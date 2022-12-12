<template>
  <div class="_default">
    <the-header />
    <router-view />
  </div>
</template>

<script>
import TheHeader from "@/components/General/TheHeader.vue";
export default {
  components: {
    TheHeader,
  },
};
</script>

<style lang="scss" scoped></style>
