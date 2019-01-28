import StrategyService from '../services/strategy';
import Errors from '@/common/errors';
import Helper from '@/common/helper';

import {
   CREATE_STRATEGY, STORE_STRATEGY, EDIT_STRATEGY, UPDATE_STRATEGY
} from './actions.type';

import { 
   SET_LOADING, SET_STRATEGIES, SET_STRATEGY
} from './mutations.type';

const initialState = {
   errors: new Errors(),
   strategies: [],
};
 
export const state = { ...initialState };
 

const getters = {
   
};

const actions = {
   [CREATE_STRATEGY](context) {
      
      return new Promise((resolve, reject) => {
         QuoteService.fetch(params)
         .then(model => {
            context.commit(SET_REALTIME, model.realTime);
            context.commit(SET_INDICATORS, model.indicators);
            context.commit(SET_CHART_QUOTES, model.quotes);
           
            resolve(model.quotes.length);
         })
         .catch(error => {
            reject(error);
         })
      });  
   },
};


const mutations = {
   [SET_REALTIME](state, val) {
      state.realTime = val;
   },
   [SET_INDICATORS](state, indicators) {
      state.indicators = indicators;
   },
   [SET_CHART_QUOTES](state, quotes) {
      state.quotes = quotes;
   }
};

export default {
   state,
   actions,
   mutations,
   getters
};
 