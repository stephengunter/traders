import IndicatorService from '../services/indicator';

import { FETCH_INDICATORS } from './actions.type';
import { SET_LOADING } from './mutations.type';

const initialState = {
   
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
               reject(error);
            })
            .finally(() => { 
               context.commit(SET_LOADING, false);
            });
      });
   }   
   
};


const mutations = {
   
};

export default {
   state,
   actions,
   mutations,
   getters
};
 