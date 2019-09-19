import Helper from '@/common/helper';
import QuoteService from '../services/quote';

import { FETCH_QUOTES, GET_REALTIME_QUOTES } from './actions.type';


import { SET_LOADING, SET_REALTIME,
   SET_DATE_QUOTES_LIST, ADD_REALTIME_QUOTES
} from './mutations.type';

const initialState = {
   realTime: false,
   dateQuotesList: []
};

export const state = { ...initialState };

const getters = {
   quoteLatestTime(state) {
      if(state.dateQuotesList.length){
         let quotes = state.dateQuotesList[0].quotes;
         return quotes.length > 0 ? quotes[quotes.length - 1].time : 0;
      }else return 0;
   }
};

const actions = {
   [FETCH_QUOTES](context, params) {
      context.commit(SET_LOADING, true);
      return new Promise((resolve, reject) => {
         QuoteService.fetch(params)
         .then(model => {
            context.commit(SET_REALTIME, model.realTime);
            context.commit(SET_DATE_QUOTES_LIST, model.dateQuotesList);
            
            resolve(model);
            
         })
         .catch(error => { 
            reject(Helper.resolveErrorData(error)); 
         })
         .finally(() => { 
            context.commit(SET_LOADING, false);
         });
      });
   },
   [GET_REALTIME_QUOTES](context, params) {
      return new Promise((resolve, reject) => {
         QuoteService.get(params)
         .then(quotes => {
            context.commit(ADD_REALTIME_QUOTES, quotes);
            resolve(quotes);
         })
         .catch(error => { 
            reject(Helper.resolveErrorData(error)); 
         })
      });  
   }
};


const mutations = {
   [SET_REALTIME](state, realTime) {
      state.realTime = realTime;
   },
   [SET_DATE_QUOTES_LIST](state, dateQuotesList) {
      state.dateQuotesList = dateQuotesList;
   },
   [ADD_REALTIME_QUOTES](state, quotes) {
      for (let i = 0; i < quotes.length; i++) {
         state.dateQuotesList[0].quotes.push(quotes[i]);
      }
   }  
};

export default {
   state,
   actions,
   mutations,
   getters
};
 