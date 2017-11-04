import Vue from 'vue';
import Router from 'vue-router';

import MainSearch from '@/pages/MainSearch';
import MotorcycleDetail from '@/pages/MotorcycleDetail';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'MainSearch',
      component: MainSearch,
    },
    {
      path: '/motorcycles/:slug',
      name: 'MotorcycleDetail',
      component: MotorcycleDetail,
    },
  ],
});
