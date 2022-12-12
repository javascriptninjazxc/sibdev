<template>
  <header class="header">
    <div class="header__wrapper container">
      <div class="header__inner">
        <div class="header__brand">
          <LogoIcon class="header__brand" />
        </div>

        <nav class="header__nav">
          <ul class="header__list">
            <li v-for="link in nav" :key="link.id" class="header__item">
              <router-link class="header__link" :to="link.path">
                {{ link.title }}
              </router-link>
            </li>
          </ul>
        </nav>
      </div>

      <div class="header__actions">
        <BaseButton classes="header__logout" @click="onLogout"
          >Выйти</BaseButton
        >
      </div>
    </div>
  </header>
</template>

<script>
// import { mapMutations } from "vuex";
import LogoIcon from "@/assets/img/logo.svg";
import BaseButton from "@/components/UI/BaseButton.vue";
export default {
  components: {
    BaseButton,
    LogoIcon,
  },
  data() {
    return {
      nav: [
        {
          id: 1,
          title: "Поиск",
          path: "/",
        },
        {
          id: 2,
          title: "Избранное",
          path: "/favourites",
        },
      ],
    };
  },
  methods: {
    onLogout() {
      this.$store.commit("logout");
    },
  },
};
</script>

<style lang="scss" scoped>
.header {
  background: #ffffff;
  border-bottom: 1px solid #f1f1f1;
  margin: 16px 0;
  margin-bottom: 40px;

  &__brand {
    margin-right: 20px;

    svg {
      width: 18px;
      height: 38px;
    }

    @media screen and (max-width:500px) {
      margin: 0;
    }
  }
  &__wrapper {
    display: flex;
    align-items: center;
    justify-content: space-between;

    .header__inner {
      display: flex;
      align-items: center;
    }
  }

  &__nav {
    ul.header__list {
      display: flex;
      li.header__item {
        padding: 26px 20px;
        border-bottom: 2px solid transparent;

        &:hover {
          a.header__link {
            color: #1390e5;
          }

          border-bottom: 2px solid #1390e5;
        }

        a.header__link {
          font-weight: 400;
          font-size: 18px;
          color: rgba(39, 39, 39, 0.3);
          transition: 0.5s all;

          @media screen and (max-width:500px) {
            font-size: 14px;
          }

          &.router-link-exact-active {
            color: #1390e5;
          }
        }
      }
    }
  }
}
</style>
