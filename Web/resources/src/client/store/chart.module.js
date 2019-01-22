import Helper from '@/common/helper';

import QuoteService from '../services/quote';


import {
   FETCH_QUOTES
} from './actions.type';

import { 
   SET_LOADING, SET_CHART_MODEL
} from './mutations.type';

 
const state = {
   model: null
};

const getters = {
   
};

const actions = {
   [FETCH_QUOTES](context, params) {
      console.log(params);
      // context.commit(SET_LOADING, true);
      // return new Promise((resolve, reject) => {
      //    QuoteService.fetch(params)
      //    .then(model => {
      //       context.commit(SET_CHART_MODEL, model);
      //       context.commit(SET_LOADING, false);
      //       resolve(model.quotes.length);
      //    })
      //    .catch(error => {
      //       context.commit(SET_CHART_MODEL, null);
      //       context.commit(SET_LOADING, false);  
      //       reject(error);
      //    })
      // });  
   },
};


const mutations = {
   [SET_CHART_MODEL](state, model) {
      state.model = model;
   }
};

export default {
   state,
   actions,
   mutations,
   getters
};
 