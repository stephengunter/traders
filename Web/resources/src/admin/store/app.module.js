import { SET_LOADING, SET_DRAWER, SET_IMAGE, 
   SET_RESPONSIVE, SET_COLOR, TOGGLE_DRAWER } from './mutations.type';


const state = {
   loading: false,
   responsive: false,
   drawer: null,
   color: 'info',
   image: ''
};


const mutations = {
   [SET_LOADING](state, loading) {
      state.loading = loading;
   },
   [SET_RESPONSIVE](state, val) {
      state.responsive = val;
   },
   [SET_DRAWER](state, drawer) {
      state.drawer = drawer;
   },
   [SET_IMAGE](state, image) {
      state.image = image;
   },
   [SET_COLOR](state, color) {
      state.color = color;
   },
   [TOGGLE_DRAWER](state) {
      state.drawer = !state.drawer;
   }
};

export default {
   state,
   mutations,
};
 