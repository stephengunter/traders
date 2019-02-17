import Vue from 'vue';
import Vuex from 'vuex';

import app from './app.module';
import auth from './auth.module';
import users from './users.module';
import stocks from './stocks.module';
import indicators from './indicators.module';
import attachments from './attachments.module';

Vue.use(Vuex);

export default new Vuex.Store({
   loading: false,
   modules: {
      app,
      auth,
      users,
      stocks,
      indicators,
      attachments
   }
});
