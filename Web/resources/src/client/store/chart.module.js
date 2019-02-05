import Helper from '@/common/helper';
import QuoteService from '../services/quote';


import {
   FETCH_QUOTES
} from './actions.type';

import { 
   SET_LOADING, SET_REALTIME, SET_INDICATORS,
   SET_CHART_QUOTES, SET_TRADES
} from './mutations.type';

const initialState = {
   indicators: [],
   quotes: [],
   realTime: false,
   trades: [],
   position: null
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
   [SET_TRADES](state, trades) {
     
      state.trades = trades;

      if(trades.length){
         let lastTrade = trades[trades.length - 1];
         if(lastTrade.val === 0){
            state.position = {
               val : 0,
               color: 'black',
               text: '中立'
            }    
         }else if(lastTrade.val > 0){
            state.position = {
               val : 1,
               color: 'red',
               text: '多'
            }  
         }else{
            state.position = {
               val : -1,
               color: 'green',
               text: '空'
            } 
         }
      }else{
         state.position = null;
      }
   }
};

export default {
   state,
   actions,
   mutations,
   getters
};
 