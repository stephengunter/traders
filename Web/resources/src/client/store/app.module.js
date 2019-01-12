import { SET_LOADING } from './mutations.type';


const state = {
   loading: false,
};


const mutations = {
   [SET_LOADING](state, loading) {
      state.loading = loading;
   }
};

export default {
   state,
   mutations,
};
 