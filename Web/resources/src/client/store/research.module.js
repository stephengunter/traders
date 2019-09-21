import Helper from '@/common/helper';
import ResearchService from '../services/research';

import {
   INIT_RESEARCH, RESOLVE_RESEARCH
} from './actions.type';

import { 
   SET_LOADING, SET_KEY, SET_RESEARCH_MAXDATE, SET_RESEARCH_MINDATE,
   SET_STRATEGY, SET_STRATEGIES, SET_INDICATORS, SET_DATE_QUOTES_LIST
} from './mutations.type';

const initialState = {   
   minDate: '',
   maxDate: '',
   emptyDates: ['2019-08-28', '2019-08-29', '2019-08-30'],
   date: '',
   indicators: [],
   tradeResult: null
};

export const state = { ...initialState }; 

const getters = {};

const actions = {
   [INIT_RESEARCH](context) {
      context.commit(SET_LOADING, true);
      return new Promise((resolve, reject) => {
         ResearchService.init()
         .then(model => {
            context.commit(SET_RESEARCH_MINDATE, model.minDate);
            context.commit(SET_RESEARCH_MAXDATE, model.maxDate);
            context.commit(SET_KEY, model.key);
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
   },
   [RESOLVE_RESEARCH](context, model) {
      context.commit(SET_LOADING, true);
      return new Promise((resolve, reject) => {
         ResearchService.resolve(model)
         .then(dateQuotesList => {
            context.commit(SET_DATE_QUOTES_LIST, dateQuotesList);
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
   [SET_RESEARCH_MINDATE](state, val) {
      state.minDate = val;
   },
   [SET_RESEARCH_MAXDATE](state, val) {
      state.maxDate = val;
   }
};

export default {
   state,
   actions,
   mutations,
   getters
};
 