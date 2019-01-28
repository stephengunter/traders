import Helper from '@/common/helper';
import Errors from '@/common/errors';

import WatchService from '../services/watch';


import {
   INIT_WATCH
} from './actions.type';

import { 
   SET_LOADING, SET_KEY, SET_DATE,
   SET_STRATEGY, SET_STRATEGIES 
} from './mutations.type';

 
const state = {
   key: '',
   date: '',
   strategy: null,
   strategies: [],
};

const getters = {
   
};

const actions = {
   [INIT_WATCH](context) {
      context.commit(SET_LOADING, true);
      return new Promise((resolve, reject) => {
         WatchService.init()
         .then(model => {
            context.commit(SET_KEY, model.key);
            context.commit(SET_DATE, model.date);
            context.commit(SET_STRATEGY, model.strategies[0]);
            context.commit(SET_STRATEGIES, model.strategies);

            context.commit(SET_LOADING, false);
            resolve(true);
         })
         .catch(error => {
            
            context.commit(SET_LOADING, false); 
            reject(error);            
         })
      });  
   }
};


const mutations = {
   [SET_KEY](state, key) {
      state.key = key;
   },
   [SET_DATE](state, date) {
      state.date = date;
   },
   [SET_STRATEGY](state, strategy) {
      state.strategy = strategy;
   },
   [SET_STRATEGIES](state, strategies) {
      state.strategies = strategies;
   }
};

export default {
   state,
   actions,
   mutations,
   getters
};
 