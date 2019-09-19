import StrategyService from '../services/strategy';
import Helper from '@/common/helper';
import Strategy from '@/models/strategy';

import {
   CREATE_STRATEGY, STORE_STRATEGY, 
   EDIT_STRATEGY, UPDATE_STRATEGY,
   DELETE_STRATEGY, INIT_STRATEGY
} from './actions.type';

import { 
   SET_LOADING, SET_STRATEGY, SET_STRATEGIES, SET_STRATEGY_MODEL,
   SET_TRADES, SET_POSITION, SET_SIGNAL_POSITION
} from './mutations.type';

const initialState = {
   strategies: [],
   strategy: null,
   strategyModel: null,
   trades: [],
   position: null,
   signalPosition: null
};
 
export const state = { ...initialState };
 

const getters = {
   
};

const actions = {
   [CREATE_STRATEGY](context) {
      return new Promise((resolve, reject) => {
         StrategyService.fetch(params)
         .then(model => {
            context.commit(SET_REALTIME, model.realTime);
            context.commit(SET_INDICATORS, model.indicators);
            context.commit(SET_CHART_QUOTES, model.quotes);
           
            resolve(model.quotes.length);
         })
         .catch(error => {
            reject(error);
         })
      });  
   },
   [CREATE_STRATEGY](context) {
      return new Promise((resolve, reject) => {
         StrategyService.create()
            .then(model => resolve(model))
            .catch(error => {
               reject(error);        
            })
            .finally(() => { 
               context.commit(SET_LOADING, false);
            });
      });
   },
   [STORE_STRATEGY](context, model) {
      context.commit(SET_LOADING, true);
      return new Promise((resolve, reject) => {
         StrategyService.store(model)
            .then((id) => {
               resolve(id);
            })
            .catch(error => {  
               reject(Helper.resolveErrorData(error));
            })
            .finally(() => { 
               context.commit(SET_LOADING, false);
            });
      });
   },
   [EDIT_STRATEGY](context, id) {
      return new Promise((resolve, reject) => {
         StrategyService.edit(id)
            .then(model => resolve(model))
            .catch(error => {
               reject(error);        
            })
            .finally(() => { 
               context.commit(SET_LOADING, false);
            });
      });
   },
   [UPDATE_STRATEGY](context, model) {
      context.commit(SET_LOADING, true);
      return new Promise((resolve, reject) => {
         StrategyService.update(model)
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
   [DELETE_STRATEGY](context, id) {
      context.commit(SET_LOADING, true);
      return new Promise((resolve, reject) => {
         StrategyService.remove(id)
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
   [INIT_STRATEGY](context, model) {
      let date = model.date;
      let indicators = model.indicators;
      let dateQuotesList = model.dateQuotesList;

      context.commit(SET_LOADING, true);
      return new Promise((resolve, reject) => {
         let strategyModel = new Strategy(state.strategy, indicators, dateQuotesList);
         strategyModel.init(date);
         strategyModel.calculate()
         .then(() => {
            context.commit(SET_STRATEGY_MODEL, strategyModel);
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
   [SET_STRATEGY](state, strategy) {
      state.strategy = strategy;
   },
   [SET_STRATEGIES](state, strategies) {
      state.strategies = strategies;
   },
   [SET_STRATEGY_MODEL](state, strategyModel) {
      state.strategyModel = strategyModel;
   },
   [SET_POSITION](state, item) {
      state.position = item;
   },
   [SET_SIGNAL_POSITION](state, item) {
      state.signalPosition = item;
   },
   [SET_TRADES](state, trades) {
      state.trades = trades;
   }
};

export default {
   state,
   actions,
   mutations,
   getters
};
 