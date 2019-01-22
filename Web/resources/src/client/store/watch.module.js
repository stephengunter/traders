import Helper from '@/common/helper';
import Errors from '@/common/errors';

import WatchService from '../services/watch';


import {
   INIT_WATCH
} from './actions.type';

import { 
   SET_ERROR, CLEAR_ERROR, SET_LOADING, SET_WATCH_MODEL,
   SET_STRATEGY 
} from './mutations.type';

 
const state = {
   errors: new Errors(),
   model: null,
   strategy: null
};

const getters = {
   
};

const actions = {
   [INIT_WATCH](context) {
      context.commit(SET_LOADING, true);
      return new Promise((resolve, reject) => {
         WatchService.init()
         .then(model => {
            context.commit(SET_WATCH_MODEL, model);
            context.commit(SET_STRATEGY, model.strategies[0]);
            context.commit(SET_LOADING, false);
            resolve(1);
         })
         .catch(error => {
            context.commit(SET_LOADING, false);  
            context.commit(SET_WATCH_MODEL, null);
            context.commit(SET_STRATEGY, null);
            let errorData = Helper.resolveErrorData(error);
            if(errorData){
               if(errorData.hasOwnProperty('subscribe')){
                  context.commit(SET_WATCH_MODEL, null);
                  context.commit(SET_STRATEGY, null);
                  resolve(0);
               }else{
                  reject(error);
               }
            }else{
               reject(error);
            }
         })
      });  
   }
};


const mutations = {
   [SET_ERROR](state, errors) {
      state.errors.record(errors);
   },
   [CLEAR_ERROR](state) {
      state.errors.clear();   
   },
   [SET_WATCH_MODEL](state, model) {
      state.model = model;
   },
   [SET_STRATEGY](state, strategy) {
      state.strategy = strategy;
   }
};

export default {
   state,
   actions,
   mutations,
   getters
};
 