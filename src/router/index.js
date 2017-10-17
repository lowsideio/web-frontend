import Vue from 'vue';
import Router from 'vue-router';
import MainSearch from '@/components/MainSearch';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'MainSearch',
      component: MainSearch,
    },
  ],
});
