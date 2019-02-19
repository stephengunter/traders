import Vue from 'vue';
import Vuex from 'vuex';

import app from './app.module';
import auth from './auth.module';
import password from './password.module';
import account from './account.module';
import watch from './watch.module';
import chart from './chart.module';
import strategy from './strategy.module';
import indicators from './indicators.module';
import plans from './plans.module';
import subscribes from './subscribes.module';

Vue.use(Vuex);

export default new Vuex.Store({
   loading: false,
   modules: {
      app,
      auth,
      password,
      account,
      watch,
      chart,
      strategy,
      indicators,
      plans,
      subscribes
   }
});
