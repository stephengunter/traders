import Vue from 'vue';
import Router from 'vue-router';

import appRoutes from './app';

Vue.use(Router);

export default new Router({
   routes: appRoutes,
   scrollBehavior () {
      return { x: 0, y: 0 }
   }
});
