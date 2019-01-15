import jwtDecode from 'jwt-decode';

import BaseService from '@/common/baseService';
import JwtService from '@/common/jwt';
import Errors from '@/common/errors';
import Helper from '@/common/helper';

import AuthService from '@/common/authService';
import OAuthService from '../services/oAuth';
import AccountService from '../services/account';
import PasswordService from '../services/password';


import {
   FB_LOGIN,
   GOOGLE_LOGIN,
   LOGIN,
   LOGOUT,
   OAUTH_REGISTER,
   REGISTER,
   SEND_CONFIRM_EMAIL,
   CONFIRM_EMAIL,
   CHECK_AUTH,
   FORGOT_PASSWORD,
   RESET_PASSWORD,
   CHANGE_PASSWORD,
   REFRESH_TOKEN
} from './actions.type';

import { SET_AUTH, PURGE_AUTH, SET_USER, 
   SET_ERROR, CLEAR_ERROR, SET_LOADING 
} from './mutations.type';

 
const state = {
   errors: new Errors(),
   user: {},
   isAuthenticated: !!JwtService.getToken()
};

const getters = {
   currentUser(state) {
     return state.user;
   },
   isAuthenticated(state) {
     return state.isAuthenticated;
   }
};

const actions = {
   [LOGIN](context, credentials) {
      context.commit(CLEAR_ERROR);
      context.commit(SET_LOADING, true);
      return new Promise((resolve) => {
         AuthService.login(credentials)
         .then(model => {
            context.commit(SET_AUTH, {
               token: model.accessToken.token,
               refreshToken: model.refreshToken
            }); 
            context.commit(SET_LOADING, false);
            resolve(1);
         })
         .catch(error => {
            context.commit(SET_LOADING, false);  
            let errorData = Helper.resolveErrorData(error);
            if(errorData){
               if(errorData.hasOwnProperty('email_confirm')){
                  resolve(0);
               }else{
                  context.commit(SET_ERROR, errorData);
               }
            }else{
               Bus.$emit('errors', error);
            }
         })
      });     
   },
   [FB_LOGIN](context, token) {
      context.commit(CLEAR_ERROR);
      context.commit(SET_LOADING, true);
      return new Promise((resolve) => {
         OAuthService.fbLogin(token)
         .then(model => {
            if(model.accessToken){
               context.commit(SET_AUTH, {
                  token: model.accessToken.token,
                  refreshToken: model.refreshToken
               }); 
               context.commit(SET_LOADING, false);
               resolve(null);
            }else{
               context.commit(SET_LOADING, false);
               resolve(model);              
            }
         })
         .catch(error => {
            context.commit(SET_LOADING, false);   
            let errorData = Helper.resolveErrorData(error);
            if(errorData){
               context.commit(SET_ERROR, errorData);
            }else{
               Bus.$emit('errors', error);
            }
         })
      });     
   },
   [GOOGLE_LOGIN](context, token) {
      context.commit(CLEAR_ERROR);
      context.commit(SET_LOADING, true);
      return new Promise((resolve) => {
         OAuthService.googleLogin(token)
         .then(model => {
            if(model.accessToken){
               context.commit(SET_AUTH, {
                  token: model.accessToken.token,
                  refreshToken: model.refreshToken
               }); 
               context.commit(SET_LOADING, false);
               resolve(null);
            }else{
               context.commit(SET_LOADING, false);
               resolve(model);              
            }
         })
         .catch(error => {
            context.commit(SET_LOADING, false);  
            let errorData = Helper.resolveErrorData(error);
            if(errorData){
               context.commit(SET_ERROR, errorData);
            }else{
               Bus.$emit('errors', error);
            }
         })
      });     
   },
   [OAUTH_REGISTER](context, user) {
      context.commit(CLEAR_ERROR);
      context.commit(SET_LOADING, true);
      return new Promise((resolve) => {
         OAuthService.register(user)
         .then(model => {
            context.commit(SET_AUTH, {
               token: model.accessToken.token,
               refreshToken: model.refreshToken
            }); 
            context.commit(SET_LOADING, false);
            resolve(1);
         })
         .catch(error => {
            context.commit(SET_LOADING, false);   
            Bus.$emit('errors', error);
         })
      });     
   },
   [LOGOUT](context) {
     	context.commit(PURGE_AUTH);
   },
   [REGISTER](context, user) {
      context.commit(CLEAR_ERROR);
      context.commit(SET_LOADING, true);
      return new Promise((resolve) => {
         AccountService.register(user)
            .then(() => {
               context.commit(SET_LOADING, false);
               resolve(true);
            })
            .catch(error => {
               context.commit(SET_LOADING, false);   
               let errorData = Helper.resolveErrorData(error);
               if(errorData){
                  context.commit(SET_ERROR, errorData);
               }else{
                  Bus.$emit('errors', error);
               }
            })
      });
   },
   [SEND_CONFIRM_EMAIL](context, email) {
      return new Promise((resolve) => {
         AccountService.sendConfirmEmail(email)
            .then(() => {
               resolve(true);
            })
            .catch(error => {
               Bus.$emit('errors', error);
            })
      });
   },
   [CONFIRM_EMAIL](context, user) {
      return new Promise((resolve) => {
         AccountService.confirmEmail(user)
            .then(() => {
               resolve(true);
            })
            .catch(error => {
               let errorData = Helper.resolveErrorData(error);
               if(errorData){
                  resolve(false);
               }else{
                  Bus.$emit('errors', error);
               }
            })
      });
   },
   [CHECK_AUTH](context) {
      return new Promise((resolve) => {
         let accessToken = JwtService.getToken();
         if (accessToken) {
            BaseService.setHeader();
            let claims = jwtDecode(accessToken);
            context.commit(SET_USER, {
               id: claims.id,
               name: claims.sub
            }); 
            resolve(true);
         } else {
            context.commit(PURGE_AUTH);
            resolve(false);
         }
      });
   },
   [REFRESH_TOKEN](context) {
      return new Promise((resolve) => {
         let accessToken = JwtService.getToken();
         let refreshToken = JwtService.getRefreshToken();
         if (accessToken && refreshToken) {
            context.commit(SET_LOADING, true);
            AuthService.refreshToken({ accessToken, refreshToken })
            .then(model => {
               context.commit(SET_AUTH, {
                  token: model.accessToken.token,
                  refreshToken: model.refreshToken
               });
               context.commit(SET_LOADING, false);
               resolve(true);
            })
            .catch(err => {
               context.commit(SET_LOADING, false);
               context.commit(PURGE_AUTH);
               resolve(false);           
            })
         } else {
            context.commit(PURGE_AUTH);
            resolve(false);
         }
      });
   },
   [FORGOT_PASSWORD](context, user) {
      context.commit(CLEAR_ERROR);
      context.commit(SET_LOADING, true);
      return new Promise((resolve, reject) => {
         PasswordService.forgot(user)
            .then(() => {
               context.commit(SET_LOADING, false);
               resolve(true);
            })
            .catch(error => {
               context.commit(SET_LOADING, false);  
               let errorData = Helper.resolveErrorData(error);
               if(errorData){
                  context.commit(SET_ERROR, errorData);
               }else{
                  Bus.$emit('errors', error);
                  reject();
               }
            })
      });
   },
   [RESET_PASSWORD](context, user) {
      context.commit(CLEAR_ERROR);
      context.commit(SET_LOADING, true);
      return new Promise((resolve, reject) => {
         PasswordService.reset(user)
            .then(() => {
               context.commit(SET_LOADING, false);
               resolve(true);
            })
            .catch(error => {
               context.commit(SET_LOADING, false);  
               let errorData = Helper.resolveErrorData(error);
               if(errorData){
                  context.commit(SET_ERROR, errorData);
               }else{
                  Bus.$emit('errors', error);
                  reject();
               }
            })
      });
   },
   [CHANGE_PASSWORD](context, user) {
      context.commit(CLEAR_ERROR);
      context.commit(SET_LOADING, true);
      return new Promise((resolve, reject) => {
         PasswordService.change(user)
            .then(() => {
               context.commit(SET_LOADING, false);
               resolve(true);
            })
            .catch(error => {
               context.commit(SET_LOADING, false);   
               let errorData = Helper.resolveErrorData(error);
               if(errorData){
                  context.commit(SET_ERROR, errorData);
               }else{
                  Bus.$emit('errors', error);
                  reject();
               }
            })
      });
   }
};


const mutations = {
   [SET_ERROR](state, errors) {
      state.errors.record(errors);
   },
   [CLEAR_ERROR](state) {
      state.errors.clear();   
   },
   [SET_USER](state, user) {
      state.user = user;
   },
   [SET_AUTH](state, model) {
      
      JwtService.saveToken(model.token, model.refreshToken);

      let claims = jwtDecode(model.token);
      state.user = {
         id: claims.id,
         name: claims.sub
      };

      state.isAuthenticated = true;
      state.errors = new Errors();
      
   },
   [PURGE_AUTH](state) {
      state.isAuthenticated = false;
      state.user = {};
    
      state.errors = new Errors();
      JwtService.destroyToken();
   }
};

export default {
   state,
   actions,
   mutations,
   getters
};
 