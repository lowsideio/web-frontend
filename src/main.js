// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';

/* components registration */
import SearchResult from '@/components/SearchResult';

import App from './App';
import router from './router';


Vue.config.productionTip = false;

/* components registration */
Vue.component('search-result', SearchResult);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App },
});
