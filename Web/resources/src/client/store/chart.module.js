import Helper from '@/common/helper';

import QuoteService from '../services/quote';


import {
   FETCH_QUOTES
} from './actions.type';

import { 
   SET_LOADING, SET_REALTIME, 
   SET_CHART_TIMES, ADD_CHART_TIME,
   SET_CHART_QUOTES, ADD_CHART_QUOTE
} from './mutations.type';

const initialState = {
   quotes: [],
   times: [],
   realTime: false
};
 
export const state = { ...initialState };
 

const getters = {
   
};


const actions = {
   [FETCH_QUOTES](context, params) {
      context.commit(SET_REALTIME, false);
      context.commit(SET_CHART_QUOTES, []);
      context.commit(SET_CHART_TIMES, []);
      context.commit(SET_LOADING, true);
      return new Promise((resolve, reject) => {
         QuoteService.fetch(params)
         .then(model => {
            context.commit(SET_REALTIME, model.realTime);
            model.quotes.forEach(quote => {
               context.commit(ADD_CHART_QUOTE, {
                  open: quote.open,
                  high: quote.high,
                  low: quote.low,
                  price: quote.price,
               });

               context.commit(ADD_CHART_TIME, Helper.timeString(quote.time));
            });

            context.commit(SET_LOADING, false);
            resolve(model.quotes.length);
         })
         .catch(error => {
            context.commit(SET_LOADING, false);  
            reject(error);
         })
      });  
   },
};


const mutations = {
   [SET_REALTIME](state, val) {
      state.realTime = val;
   },
   [SET_CHART_TIMES](state, times) {
      state.times = times;
   },
   [ADD_CHART_TIME](state, time) {
      state.times.push(time);
   },
   [SET_CHART_QUOTES](state, quotes) {
      state.quotes = quotes;
   },
   [ADD_CHART_QUOTE](state, quote) {
      state.quotes.push(quote);
   }
};

export default {
   state,
   actions,
   mutations,
   getters
};
 