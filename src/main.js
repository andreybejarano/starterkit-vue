import Vue from 'vue';
import VueRouter from 'vue-router';
import Vuetify from 'vuetify';

import App from '@/App.vue';
import routes from '@/routes';
import store from '@/store';

Vue.use(Vuetify);
Vue.use(VueRouter);

const router = new VueRouter({
  routes,
  mode: 'history'
});

new Vue({
  el: '#app',
  render: h => h(App),
  vuetify: new Vuetify(),
  router,
  store
});
