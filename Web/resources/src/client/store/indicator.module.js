import IndicatorService from '../services/indicator';

import { FETCH_INDICATORS } from './actions.type';
import { SET_LOADING, SET_INDICATORS } from './mutations.type';

const initialState = {
   indicators: []
};

export const state = { ...initialState };
 
const getters = {
   
};


const actions = {
   [FETCH_INDICATORS](context) {
      context.commit(SET_LOADING, true);
      return new Promise((resolve, reject) => {
         IndicatorService.fetch()
            .then(model => {
               resolve(model);
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
   [SET_INDICATORS](state, indicators) {
      state.indicators = indicators;
   }
};

export default {
   state,
   actions,
   mutations,
   getters
};
 