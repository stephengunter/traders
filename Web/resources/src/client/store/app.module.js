import { SET_LOADING, SET_RESPONSIVE } from './mutations.type';


const state = {
   loading: false,
   responsive: false
};


const mutations = {
   [SET_LOADING](state, loading) {
      state.loading = loading;
   },
   [SET_RESPONSIVE](state, val) {
      state.responsive = val;
   }
};

export default {
   state,
   mutations,
};
 