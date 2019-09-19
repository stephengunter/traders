import Helper from '@/common/helper';
import WatchService from '../services/watch';
import QuoteService from '../services/quote';
import Hub from '@/models/hub';
import { WATCH_URL } from '@/common/config';

import {
   INIT_WATCH, FETCH_QUOTES, GET_QUOTES
} from './actions.type';

import { 
   SET_LOADING, SET_KEY, SET_WATCH_DATE, SET_MINDATE,
   SET_STRATEGY, SET_STRATEGIES, SET_INDICATORS
} from './mutations.type';
import { Number } from 'core-js';

const initialState = {   
   minDate: '',
   emptyDates: ['2019-08-28', '2019-08-29', '2019-08-30'],
   date: '',
   realTime: false,
   strategyModel: null,
   indicators: [],
   tradeResult: null
};

export const state = { ...initialState }; 

const getters = {};

const actions = {
   [INIT_WATCH](context) {
      context.commit(SET_LOADING, true);
      return new Promise((resolve, reject) => {
         WatchService.init()
         .then(model => {
            context.commit(SET_MINDATE, model.minDate);
            context.commit(SET_KEY, model.key);
            context.commit(SET_WATCH_DATE, model.date);
            context.commit(SET_STRATEGY, model.strategies[0]);
            context.commit(SET_STRATEGIES, model.strategies);
            context.commit(SET_INDICATORS, model.indicators);
            resolve(true);
         })
         .catch(error => {
            reject(Helper.resolveErrorData(error));           
         })
         .finally(() => { 
            context.commit(SET_LOADING, false);
         });
      });
   }
};


const mutations = {
   [SET_MINDATE](state, val) {
      state.minDate = val;
   },
   [SET_WATCH_DATE](state, date) {
      state.date = parseInt(date);
   }
};

export default {
   state,
   actions,
   mutations,
   getters
};
 