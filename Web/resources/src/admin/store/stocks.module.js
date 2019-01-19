import StockService from '../services/stock';

import {
   FETCH_STOCKS, CREATE_STOCK
} from './actions.type';

import { SET_STOCKS, SET_STOCK_MODEL, SET_LOADING
} from './mutations.type';


const initialState = {
   stocks: []
};
 
export const state = { ...initialState };
 
const getters = {
   
};


const actions = {
   [FETCH_STOCKS](context, params) {
      context.commit(SET_LOADING, true);
      return StockService.fetch(params)
         .then(stocks => {
            context.commit(SET_STOCKS, stocks);
            context.commit(SET_LOADING, false);
         })
         .catch(error => {
            context.commit(SET_LOADING, false);
            Bus.$emit('errors', error);
         });
   },
   [CREATE_STOCK]() {
      return new Promise((resolve, reject) => {
         StockService.create()
            .then(model => resolve(model))
            .catch(error => {
               Bus.$emit('errors', error);
               reject(error);        
            })
      });
   },
   
   
   
};


const mutations = {
   [SET_STOCKS](state, stocks) {
      state.stocks = stocks;
   }
};

export default {
   state,
   actions,
   mutations,
   getters
};
 