import IndicatorService from '../services/indicator';
import Helper from '@/common/helper';

import {
   FETCH_INDICATORS, CREATE_INDICATOR, STORE_INDICATOR, 
   EDIT_INDICATOR, UPDATE_INDICATOR, DELETE_INDICATOR, ORDER_INDICATORS
} from './actions.type';

import { SET_LOADING
} from './mutations.type';


const initialState = {
   
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
      context.commit(SET_LOADING, true);
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
   [DELETE_INDICATOR](context, id) {
      context.commit(SET_LOADING, true);
      return new Promise((resolve, reject) => {
         IndicatorService.remove(id)
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
   [ORDER_INDICATORS](context, ids) {
      context.commit(SET_LOADING, true);
      return new Promise((resolve, reject) => {
         IndicatorService.order(ids)
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
 