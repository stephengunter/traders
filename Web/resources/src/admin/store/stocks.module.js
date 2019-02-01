import StockService from '../services/stock';
import Helper from '@/common/helper';

import {
   FETCH_STOCKS, CREATE_STOCK, STORE_STOCK, 
   EDIT_STOCK, UPDATE_STOCK, DELETE_STOCK
} from './actions.type';

import { SET_STOCKS, SET_LOADING
} from './mutations.type';


const initialState = {
   pageList: null
};

export const state = { ...initialState };
 
const getters = {
   
};


const actions = {
   [FETCH_STOCKS](context, params) {
      context.commit(SET_LOADING, true);
      return new Promise((resolve, reject) => {
         StockService.fetch(params)
            .then(model => {
               context.commit(SET_STOCKS, model);
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
   [CREATE_STOCK](context) {
      return new Promise((resolve, reject) => {
         StockService.create()
            .then(model => resolve(model))
            .catch(error => {
               reject(error);      
            })
            .finally(() => { 
               context.commit(SET_LOADING, false);
            });
      });
   },
   [STORE_STOCK](context, model) {
      context.commit(SET_LOADING, true);
      return new Promise((resolve, reject) => {
         StockService.store(model)
            .then(stock => {
               resolve(stock);
            })
            .catch(error => {
               reject(Helper.resolveErrorData(error)); 
            })
            .finally(() => { 
               context.commit(SET_LOADING, false);
            });
      });
   },
   [EDIT_STOCK](context, id) {
      return new Promise((resolve, reject) => {
         StockService.edit(id)
            .then(model => resolve(model))
            .catch(error => {
               reject(error);        
            })
            .finally(() => { 
               context.commit(SET_LOADING, false);
            });
      });
   },
   [UPDATE_STOCK](context, model) {
      context.commit(SET_LOADING, true);
      return new Promise((resolve, reject) => {
         StockService.update(model)
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
   [DELETE_STOCK](context, ids) {
      context.commit(SET_LOADING, true);
      return new Promise((resolve, reject) => {
         StockService.remove(ids)
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
   [SET_STOCKS](state, model) {
      state.pageList = model;
   }
};

export default {
   state,
   actions,
   mutations,
   getters
};
 