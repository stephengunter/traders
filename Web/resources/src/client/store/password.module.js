import Helper from '@/common/helper';

import PasswordService from '../services/password';

import {
   INIT_CHANGE_PASSWORD,
   SET_PASSWORD,
   CHANGE_PASSWORD,
   FORGOT_PASSWORD,
   RESET_PASSWORD   
} from './actions.type';

import { SET_LOADING } from './mutations.type';
 

const actions = {
   [INIT_CHANGE_PASSWORD](context) {
      context.commit(SET_LOADING, true);
      return new Promise((resolve, reject) => {
         PasswordService.initChange()
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
   },
   [SET_PASSWORD](context, model) {
      context.commit(SET_LOADING, true);
      return new Promise((resolve, reject) => {
         PasswordService.set(model)
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
   [CHANGE_PASSWORD](context, model) {
      context.commit(SET_LOADING, true);
      return new Promise((resolve, reject) => {
         PasswordService.change(model)
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
   [FORGOT_PASSWORD](context, user) {
      context.commit(SET_LOADING, true);
      return new Promise((resolve, reject) => {
         PasswordService.forgot(user)
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
   [RESET_PASSWORD](context, user) {
      context.commit(SET_LOADING, true);
      return new Promise((resolve, reject) => {
         PasswordService.reset(user)
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


export default {
   actions
};
 