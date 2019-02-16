import IndicatorService from '../services/indicator';
import Helper from '@/common/helper';

import {
   FETCH_INDICATORS, CREATE_INDICATOR, STORE_INDICATOR, 
   EDIT_INDICATOR, UPDATE_INDICATOR, DELETE_INDICATOR
} from './actions.type';

import { SET_INDICATORS, SET_LOADING
} from './mutations.type';


const initialState = {
   pageList: null
};

export const state = { ...initialState };
 
const getters = {
   
};


const actions = {
   [FETCH_INDICATORS](context, active) {
      let params = {
         active : Helper.isTrue(active)
      };
     
      context.commit(SET_LOADING, true);
      return new Promise((resolve, reject) => {
         IndicatorService.fetch(params)
            .then(model => {
               context.commit(SET_INDICATORS, model);
               resolve(model);
            })
            .catch(error => {
               reject(error);
            })
            .finally(() => { 
               context.commit(SET_LOADING, false);
            });
      });
   },
   [CREATE_INDICATOR](context) {
      return new Promise((resolve, reject) => {
         IndicatorService.create()
            .then(model => resolve(model))
            .catch(error => {
               reject(error);      
            })
            .finally(() => { 
               context.commit(SET_LOADING, false);
            });
      });
   },
   [STORE_INDICATOR](context, model) {
      context.commit(SET_LOADING, true);
      return new Promise((resolve, reject) => {
         IndicatorService.store(model)
            .then(id => {
               resolve(id);
            })
            .catch(error => {
               reject(Helper.resolveErrorData(error)); 
            })
            .finally(() => { 
               context.commit(SET_LOADING, false);
            });
      });
   },
   [EDIT_INDICATOR](context, id) {
      return new Promise((resolve, reject) => {
         IndicatorService.edit(id)
            .then(model => resolve(model))
            .catch(error => {
               reject(error);        
            })
            .finally(() => { 
               context.commit(SET_LOADING, false);
            });
      });
   },
   [UPDATE_INDICATOR](context, model) {
      context.commit(SET_LOADING, true);
      return new Promise((resolve, reject) => {
         IndicatorService.update(model)
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
   [DELETE_INDICATOR](context, ids) {
      context.commit(SET_LOADING, true);
      return new Promise((resolve, reject) => {
         IndicatorService.remove(ids)
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
   [SET_INDICATORS](state, model) {
      state.pageList = model;
   }
};

export default {
   state,
   actions,
   mutations,
   getters
};
 