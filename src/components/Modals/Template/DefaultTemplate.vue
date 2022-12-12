<template>
  <div class="modal">
    <div class="modal__wrapper">
      <h2 class="modal__title">
        <slot name="title" />
      </h2>

      <div class="modal__form">
        <slot name="inputs" />
      </div>

      <div class="modal__actions">
        <slot name="actions" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
};
</script>

<style lang="scss" scoped>
.modal {
  background: #ffffff;
  box-shadow: 0px 10px 50px rgba(19, 144, 229, 0.8);
  border-radius: 10px;
  max-width: 510px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 95%;
  z-index: 99;

  &__wrapper {
    padding: 36px 40px;
    display: flex;
    flex-direction: column;
    gap: 36px;

    @media screen and (max-width: 500px) {
      padding: 20px 18px;
    }

    .modal__form {
      display: flex;
      flex-direction: column;
      gap: 24px;

      .modal__label {
        &-range {
          display: flex;
          align-items: center;
          gap: 20px;

          .slider__value {
            border: 1px solid rgba(23, 23, 25, 0.2);
            border-radius: 10px;
            font-weight: 400;
            color: #272727;
            max-width: 100px;
            width: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            font-size: 20px;
            padding: 12px 0;
          }
        }
        .modal__span {
          font-weight: 400;
          font-size: 16px;
          margin-bottom: 5px;
          display: inline-block;
          color: #272727;

          &-red {
            color: #ff0000;
            padding-right: 2px;
          }
        }
      }
    }

    h2.modal__title {
      text-align: center;
      font-weight: 500;
      font-size: 18px;
    }
  }

  &__actions {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 10px;
  }
}
</style>
