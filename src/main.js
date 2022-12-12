import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Axios from 'axios';

import DefaultLayout from "@/layouts/DefaultLayout.vue";
import EmptyLayout from "@/layouts/EmptyLayout.vue";


Vue.component("default-layout", DefaultLayout);
Vue.component("empty-layout", EmptyLayout);



Vue.config.productionTip = false

new Vue({
  router,
  store,
  Axios,
  render: h => h(App)
}).$mount('#app')
