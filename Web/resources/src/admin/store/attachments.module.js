import AttachmentService from '../services/attachment';
import Helper from '@/common/helper';

import {
   STORE_ATTACHMENT, DELETE_ATTACHMENT
} from './actions.type';

import { SET_LOADING
} from './mutations.type';


const initialState = {
   
};

export const state = { ...initialState };
 
const getters = {
   
};


const actions = {
   [STORE_ATTACHMENT](context, { postId, files }) {
      context.commit(SET_LOADING, true);
      return new Promise((resolve, reject) => {
         let form = new FormData();
         form.append('postId', postId);
         for (let i = 0; i < files.length; i++) {
            form.append('files', files[i]); 
         }
         AttachmentService.store(form)
            .then(() => {
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
   [DELETE_ATTACHMENT](context, id) {
      context.commit(SET_LOADING, true);
      return new Promise((resolve, reject) => {
         AttachmentService.remove(ids)
            .then(() => {
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
   
};

export default {
   state,
   actions,
   mutations,
   getters
};
 