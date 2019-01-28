import Errors from '@/common/errors';
import { SET_LOADING, SET_RESPONSIVE, 
   SET_ERROR, CLEAR_ERROR } from './mutations.type';


const initialState = {
   errorList: new Errors(),
   loading: false,
   responsive: false
};

export const state = { ...initialState };


const mutations = {
   [SET_LOADING](state, loading) {
      state.loading = loading;
   },
   [SET_RESPONSIVE](state, val) {
      state.responsive = val;
   },
   [SET_ERROR](state, errors) {
      state.errorList.record(errors);
   },
   [CLEAR_ERROR](state) {
      state.errorList.clear();   
   },
};

export default {
   state,
   mutations,
};
 