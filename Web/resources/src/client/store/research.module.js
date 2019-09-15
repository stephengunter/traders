import Helper from '@/common/helper';
import ResearchService from '../services/research';
import Strategy from '@/models/strategy';


import {
   INIT_RESEARCH, RESOLVE_RESEARCH
} from './actions.type';

import { 
   SET_LOADING, SET_KEY, SET_MAXDATE, SET_MINDATE,
   SET_STRATEGY, SET_STRATEGIES, SET_INDICATORS, SET_DATE_QUOTES 
} from './mutations.type';

 
const state = {
   key: '',
   minDate: '',
   maxDate: '',
   strategy: null,
   strategies: [],
   indicators: [],
   dateQuotes: [],
   report: null,
   model: null
};

const getters = {
   
};

var strategyModel = null;
var dateTrades = [];
const initStrategy = (indicators, dateQuotes) => strategyModel = new Strategy(state.strategy, indicators, dateQuotes);

const calculate = (dates, resolve, reject) => {
   let date  = dates.shift();
   strategyModel.setDate(date);

   strategyModel.calculate()
   .then(() => {
      let tradeResult = strategyModel.getTradeResult();
      dateTrades.push({
         date, tradeResult
      });
      if(dates.length) calculate(dates, resolve, reject);
      else{
         state.report = {
            dateTrades
         };
         resolve(state.report);
      }
   }).catch(error => {
      reject(error);
   })
}

const actions = {
   [INIT_RESEARCH](context) {
      context.commit(SET_LOADING, true);
      return new Promise((resolve, reject) => {
         ResearchService.init()
         .then(model => {
           
            context.commit(SET_MINDATE, model.minDate);
            context.commit(SET_MAXDATE, model.maxDate);
            context.commit(SET_KEY, model.key);
            context.commit(SET_STRATEGY, model.strategies[0]);
            context.commit(SET_STRATEGIES, model.strategies);
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
   [RESOLVE_RESEARCH](context, model) {
      context.commit(SET_LOADING, true);
      return new Promise((resolve, reject) => {
         ResearchService.resolve(model)
            .then(model => {
               initStrategy(model.indicators, model.dateQuotes);
              
               context.commit(SET_INDICATORS, model.indicators);
               context.commit(SET_DATE_QUOTES, model.dateQuotes);

               let dates = model.dateQuotes.map(item => item.date);
               calculate(dates, resolve, reject);
               
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
   [SET_KEY](state, key) {
      state.key = key;
   },
   [SET_MINDATE](state, val) {
      state.minDate = val;
   },
   [SET_MAXDATE](state, val) {
      state.maxDate = val;
   },
   [SET_STRATEGY](state, strategy) {
      state.strategy = strategy;
   },
   [SET_STRATEGIES](state, strategies) {
      state.strategies = strategies;
   },
   [SET_INDICATORS](state, indicators) {
      state.indicators = indicators;
   },
   [SET_DATE_QUOTES](state, dateQuotes) {
      state.dateQuotes = dateQuotes;
   }
};

export default {
   state,
   actions,
   mutations,
   getters
};
 