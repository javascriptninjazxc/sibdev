<template>
  <div class="tooltip">
    <div class="tooltip__wrapper">
      <h2 class="tooltip__title">Поиск сохранён в разделе «Избранное»</h2>

      <router-link class="tooltip__link" to="/favourites">Перейти в избранное</router-link>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.tooltip {
  max-width: 220px;
  width: 232px;
  padding: 19px 15px;
  background: #ffffff;
  box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.15);
  border-radius: 10px;
  position: absolute;
  top: 100%;
  right: -50%;
  transform: translateX(50%);
  z-index: 2;

  &__wrapper {
    display: flex;
    flex-direction: column;
    gap: 15px;
    .tooltip__title {
      font-weight: 400;
      font-size: 16px;
      line-height: 150%;
      font-family: "PT Sans";
      color: #272727;

      opacity: 0.5;
    }

    .tooltip__link {
      font-family: "PT Sans";

      font-weight: 400;
      font-size: 16px;
      color: #1390e5;
    }
  }

  &::before {
    content: "";
    width: 14px;
    height: 7px;
    left: 50%;
    top: 0;
    transform: translateY(-50%);
    position: absolute;

    background: #ffffff;
    transform: matrix(1, 0, 0, -1, 0, 0);
  }
}
</style>
