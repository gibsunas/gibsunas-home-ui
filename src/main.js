// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import Vuetify from 'vuetify';
import App from './App';
import router from './router';

Vue.config.productionTip = false;

Vue.use(Vuetify, {
  theme: {
    primary: '#141B41',
    secondary: '#567AAB',
    accent: '#484349',
    error: '#F9347C',
    info: '#3891A6',
    success: '#8FFC00',
    warning: '#FF8150',
  },
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
});
