import PlanService from '../services/plan';

import { FETCH_PLANS } from './actions.type';
import { SET_PLANS, SET_LOADING } from './mutations.type';

const initialState = {
   pageList: null
};

export const state = { ...initialState };
 
const getters = {
   
};


const actions = {
   [FETCH_PLANS](context) {
      context.commit(SET_LOADING, true);
      return new Promise((resolve, reject) => {
         PlanService.fetch()
            .then(model => {
               context.commit(SET_PLANS, model);
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
   [SET_PLANS](state, model) {
      state.pageList = model;
   }
};

export default {
   state,
   actions,
   mutations,
   getters
};
 