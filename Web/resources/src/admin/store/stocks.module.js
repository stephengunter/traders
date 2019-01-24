import StockService from '../services/stock';
import Errors from '@/common/errors';
import Helper from '@/common/helper';

import {
   FETCH_STOCKS, CREATE_STOCK, STORE_STOCK, 
   EDIT_STOCK, UPDATE_STOCK, DELETE_STOCK
} from './actions.type';

import { SET_STOCKS, SET_LOADING, SET_ERROR, CLEAR_ERROR
} from './mutations.type';


const initialState = {
   errors: new Errors(),
   pageList: null
};

export const state = { ...initialState };
 
const getters = {
   
};


const actions = {
   [FETCH_STOCKS](context, params) {
      context.commit(SET_LOADING, true);
      return StockService.fetch(params)
         .then(model => {
            context.commit(SET_STOCKS, model);
            context.commit(SET_LOADING, false);
         })
         .catch(error => {
            context.commit(SET_LOADING, false);
            Bus.$emit('errors', error);
         });
   },
   [CREATE_STOCK](context) {
      context.commit(CLEAR_ERROR);
      return new Promise((resolve, reject) => {
         StockService.create()
            .then(model => resolve(model))
            .catch(error => {
               Bus.$emit('errors', error);
               reject(error);        
            })
      });
   },
   [STORE_STOCK](context, model) {
      context.commit(CLEAR_ERROR);
      context.commit(SET_LOADING, true);
      return new Promise((resolve, reject) => {
         StockService.store(model)
            .then(stock => {
               context.commit(SET_LOADING, false);
               resolve(stock);
            })
            .catch(error => {
               context.commit(SET_LOADING, false); 
               let errorData = Helper.resolveErrorData(error); 
               if(errorData){
                  context.commit(SET_ERROR, errorData);
               }else{
                  Bus.$emit('errors', error);
               }      
               reject(error); 
            })
      });
   },
   [EDIT_STOCK](context, id) {
      context.commit(CLEAR_ERROR);
      return new Promise((resolve, reject) => {
         StockService.edit(id)
            .then(model => resolve(model))
            .catch(error => {
               Bus.$emit('errors', error);
               reject(error);        
            })
      });
   },
   [UPDATE_STOCK](context, model) {
      context.commit(CLEAR_ERROR);
      context.commit(SET_LOADING, true);
      return new Promise((resolve, reject) => {
         StockService.update(model)
            .then(() => {
               context.commit(SET_LOADING, false);
               resolve(true);
            })
            .catch(error => {
               context.commit(SET_LOADING, false); 
               let errorData = Helper.resolveErrorData(error); 
               if(errorData){
                  context.commit(SET_ERROR, errorData);
               }else{
                  Bus.$emit('errors', error);
               }      
               reject(error); 
            })
      });
   },
   [DELETE_STOCK](context, ids) {
      context.commit(CLEAR_ERROR);
      context.commit(SET_LOADING, true);
      return new Promise((resolve, reject) => {
         StockService.remove(ids)
            .then(() => {
               context.commit(SET_LOADING, false);
               resolve(true);
            })
            .catch(error => {
               context.commit(SET_LOADING, false); 
               Bus.$emit('errors', error);    
               reject(error); 
            })
      });
   },
   
   
};


const mutations = {
   [SET_ERROR](state, errors) {
      state.errors.record(errors);
   },
   [CLEAR_ERROR](state) {
      state.errors.clear();   
   },
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
 