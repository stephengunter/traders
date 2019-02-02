import StrategyService from '../services/strategy';
import Helper from '@/common/helper';

import {
   CREATE_STRATEGY, STORE_STRATEGY, EDIT_STRATEGY, UPDATE_STRATEGY
} from './actions.type';

import { 
   SET_LOADING, SET_STRATEGIES, SET_STRATEGY
} from './mutations.type';

const initialState = {
   strategies: [],
};
 
export const state = { ...initialState };
 

const getters = {
   
};

const actions = {
   [CREATE_STRATEGY](context) {
      return new Promise((resolve, reject) => {
         StrategyService.fetch(params)
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
   [EDIT_STRATEGY](context, id) {
      return new Promise((resolve, reject) => {
         StrategyService.edit(id)
            .then(model => resolve(model))
            .catch(error => {
               reject(error);        
            })
            .finally(() => { 
               context.commit(SET_LOADING, false);
            });
      });
   },
   [UPDATE_STRATEGY](context, model) {
      context.commit(SET_LOADING, true);
      return new Promise((resolve, reject) => {
         StrategyService.update(model)
            .then(() => {
               resolve(true);
            })
            .catch(error => {  
               reject(Helper.resolveErrorData(error));
            })
            .finally(() => { 
               context.commit(SET_LOADING, false);
            });
      });
   },
};


const mutations = {
   
};

export default {
   state,
   actions,
   mutations,
   getters
};
 