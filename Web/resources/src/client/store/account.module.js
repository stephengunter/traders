import Helper from '@/common/helper';

import AccountService from '../services/account';

import {
   REGISTER,
   SEND_CONFIRM_EMAIL,
   CONFIRM_EMAIL
} from './actions.type';

import { SET_LOADING } from './mutations.type';

const actions = {
   [REGISTER](context, user) {
      context.commit(SET_LOADING, true);
      return new Promise((resolve) => {
         AccountService.register(user)
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
   [SEND_CONFIRM_EMAIL](context, email) {
      context.commit(SET_LOADING, true);
      return new Promise((resolve) => {
         AccountService.sendConfirmEmail(email)
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
   [CONFIRM_EMAIL](context, user) {
      return new Promise((resolve) => {
         AccountService.confirmEmail(user)
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
   }
};



export default {
   actions
};
 