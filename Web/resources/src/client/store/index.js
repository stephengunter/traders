import Vue from 'vue';
import Vuex from 'vuex';

import app from './app.module';
import auth from './auth.module';
import watch from './watch.module';
import chart from './chart.module';

Vue.use(Vuex);

export default new Vuex.Store({
   loading: false,
   modules: {
      app,
      auth,
      watch,
      chart
   }
});
