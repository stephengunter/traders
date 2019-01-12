import Vue from 'vue';
import Vuex from 'vuex';

import app from './app.module';
import auth from './auth.module';

Vue.use(Vuex);

export default new Vuex.Store({
   loading: false,
   modules: {
      app,
      auth
   }
});
