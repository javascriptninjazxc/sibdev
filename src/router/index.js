import Vue from 'vue'

import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    meta: {
      auth: true
    },
    props: true
  },
  {
    path: '/login',
    name: 'login',
    meta: {
      layout: "empty-layout"
    },
    component: () => import(/* webpackChunkName: "login" */ '../views/LoginView.vue')
  },
  {
    path: '/favourites',
    name: 'favourites',
    meta: {
      auth: true
    },
    component: () => import(/* webpackChunkName: "favourites" */ '../views/FavouritesView.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

// router.beforeEach((to, from, next) => {
//   const loggedIn = localStorage.getItem('jwt');
//   const requireAuth = to.matched.some(route => route.meta.auth);

//   if (requireAuth && !loggedIn) {
//     next('/login');
//   } else {
//     next();
//   }
// })

export default router
