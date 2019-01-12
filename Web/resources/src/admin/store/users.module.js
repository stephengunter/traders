import UserService from '../services/user';

import {
   FETCH_USERS
} from './actions.type';

import { SET_USERS, SET_LOADING
} from './mutations.type';


const initialState = {
   pageList: null
};
 
export const state = { ...initialState };
 
const getters = {
   
};


const actions = {
   [FETCH_USERS](context, params) {
      context.commit(SET_LOADING, true);
      return UserService.fetch(params)
         .then(model => {
            context.commit(SET_USERS, model);
            context.commit(SET_LOADING, false);
         })
         .catch(error => {
            context.commit(SET_LOADING, false);
            Bus.$emit('errors', error);
         });
   },
};


const mutations = {
   [SET_USERS](state, model) {
      state.pageList = model;
   }
};

export default {
   state,
   actions,
   mutations,
   getters
};
 