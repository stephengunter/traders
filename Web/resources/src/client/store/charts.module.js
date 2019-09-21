import Helper from '@/common/helper';
import Charts from '@/models/charts';

import { INIT_CHART } from './actions.type';
import { SET_LOADING, SET_CHARTS_MODEL } from './mutations.type';

const initialState = {
   chartsModel: null
};
 
export const state = { ...initialState };

const getters = {
   
};


const actions = {
   [INIT_CHART](context, strategyModel) {
      context.commit(SET_LOADING, true);
      return new Promise((resolve, reject) => {
         let chartsModel = new Charts(strategyModel);
         chartsModel.init()
         .then(() => {
            context.commit(SET_CHARTS_MODEL, chartsModel);
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
   [SET_CHARTS_MODEL](state, chartsModel) {
      state.chartsModel = chartsModel;
   }
};

export default {
   state,
   actions,
   mutations,
   getters
};
 