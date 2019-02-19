import SubscribeService from '../services/subscribe';

import { FETCH_SUBSCRIBES } from './actions.type';
import { SET_SUBSCRIBES, SET_LOADING } from './mutations.type';

const initialState = {
   statusOptions:[{
      value: 0,
      text: '尚未開始'
   },{
      value: 1,
      text: '期間內'
   },{
      value: 2,
      text: '已結束'
   }],
   pageList: null
};

export const state = { ...initialState };
 
const getters = {
   
};


const actions = {
   [FETCH_SUBSCRIBES](context) {
      context.commit(SET_LOADING, true);
      return new Promise((resolve, reject) => {
         SubscribeService.fetch()
            .then(model => {
               context.commit(SET_SUBSCRIBES, model);
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
   [SET_SUBSCRIBES](state, model) {
      state.pageList = model;
   }
};

export default {
   state,
   actions,
   mutations,
   getters
};
 