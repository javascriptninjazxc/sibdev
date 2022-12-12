<template>
  <form class="form" @click.prevent>
    <div class="form__wrapper">
      <div class="form__header">
        <LogoIcon class="form__brand" />

        <h2 class="form__title">Вход</h2>
      </div>

      <div class="form__inputs">
        <label class="form__label">
          <span class="form__span">Логин</span>
          <base-input v-model.trim="form.login" />
        </label>
        <label class="form__label">
          <span class="form__span">Пароль</span>
          <base-input :type="form.passwordType" v-model.trim="form.password" />
          <span class="form__span-icon" @click="changePasswordType">
            <eye-off v-if="form.passwordType === 'password'" />
            <Eye v-else-if="form.passwordType === 'text'" />
          </span>
        </label>
      </div>

      <div class="form__actions">
        <base-button @click="onLogin">Войти</base-button>
      </div>
    </div>
  </form>
</template>

<script>
// Доделать глаз на Input
import Eye from "@/assets/img/General/eye.svg";
import EyeOff from "@/assets/img/General/eye-off.svg";

import LogoIcon from "@/assets/img/logo.svg";
import BaseInput from "@/components/UI/BaseInput.vue";
import BaseButton from "@/components/UI/BaseButton.vue";

export default {
  components: {
    Eye,
    EyeOff,
    BaseInput,
    BaseButton,
    LogoIcon,
  },
  data() {
    return {
      form: {
        login: "admin",
        password: "admin",
        passwordType: "password",
      },
    };
  },
  methods: {
    onLogin() {
      if (this.form.login.length >= 1 && this.form.password.length >= 1) {
        this.$store
          .dispatch("login", {
            login: this.form.login,
            password: this.form.password,
          })
          .then((r) => {
            if (r.status === 200) {
              this.$router.push("/");
            }
          });
      }
    },
    changePasswordType() {
      if (this.form.passwordType === "password") {
        this.form.passwordType = "text";
      } else {
        this.form.passwordType = "password";
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.form {
  max-width: 510px;
  width: 95%;
  background: #ffffff;
  border: 1px solid rgba(39, 39, 39, 0.1);
  border-radius: 10px;
  margin: 0 auto;

  &__wrapper {
    padding: 50px 88px;

    @media screen and (max-width:500px) {
      padding: 50px 10px;
    }
  }

  &__header {
    text-align: center;
    margin-bottom: 20px;

    .form__brand {
      margin-bottom: 30px;
        width: 34px;
        height: 70px;
    }

    .form__title {
      font-weight: 500;
      font-size: 18px;
    }
  }

  &__inputs {
    display: flex;
    flex-direction: column;
    gap: 20px;
    margin-bottom: 40px;
    .form__label {
      position: relative;

      &:hover {
        .form__span-icon {
          
          svg g {
            stroke: #1390e5;
          }
        }
      }
      .form__span {
        font-weight: 400;
        font-size: 16px;
        color: rgba(23, 23, 25, 0.3);
        margin-bottom: 5px;
        display: inline-block;

        &-icon {
          position: absolute;
          right: 15px;
          cursor: pointer;
          top: 50%;
          transition: 0.5s all;

          &:hover {
            svg g {
              stroke: #1390e5;
            }
          }
        }
      }
    }
  }

  &__actions {
    text-align: center;
  }
}
</style>
