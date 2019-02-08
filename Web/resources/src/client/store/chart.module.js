import Helper from '@/common/helper';
import QuoteService from '../services/quote';


import {
   FETCH_QUOTES, GET_QUOTES
} from './actions.type';

import { 
   SET_LOADING, SET_REALTIME, SET_INDICATORS,
   SET_CHART_QUOTES, ADD_CHART_QUOTES 
   
} from './mutations.type';

const initialState = {
   indicators: [],
   quotes: [],
   realTime: false
};
 
export const state = { ...initialState };
 

const getters = {
   
};


const actions = {
   [FETCH_QUOTES](context, params) {
      context.commit(SET_REALTIME, false);
      context.commit(SET_INDICATORS, []);
      context.commit(SET_CHART_QUOTES, []);
      
      context.commit(SET_LOADING, true);
      return new Promise((resolve, reject) => {
         QuoteService.fetch(params)
         .then(model => {
            if(model.quotes.length){
               context.commit(SET_REALTIME, model.realTime);
               context.commit(SET_INDICATORS, model.indicators);
               context.commit(SET_CHART_QUOTES, model.quotes);
            }

            resolve(model.quotes.length);
         })
         .catch(error => { 
            reject(Helper.resolveErrorData(error)); 
         })
         .finally(() => { 
            context.commit(SET_LOADING, false);
         });
      });  
   },
   [GET_QUOTES](context, params) {
      return new Promise((resolve, reject) => {
         QuoteService.get(params)
         .then(quotes => {
            let newQuotes = [];
            for (let i = 0; i < quotes.length; i++) {
               let exist = state.quotes.find(q => q.time == quotes[i].time);
               if(!exist){
                  newQuotes.push(quotes[i]);
               }
            }
            context.commit(ADD_CHART_QUOTES, newQuotes);
            resolve(newQuotes);
         })
         .catch(error => { 
            reject(Helper.resolveErrorData(error)); 
         })
      });  
   }
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
   },
   [ADD_CHART_QUOTES](state, quotes) {
      for (let i = 0; i < quotes.length; i++) {
         state.quotes.push(quotes[i]);
      }
   }
   
};

export default {
   state,
   actions,
   mutations,
   getters
};
 