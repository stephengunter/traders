import jwtDecode from 'jwt-decode';

import BaseService from '@/common/baseService';
import JwtService from '@/common/jwt';
import Helper from '@/common/helper';

import AuthService from '@/common/authService';
import OAuthService from '../services/oAuth';


import {
   CHECK_AUTH,
   REFRESH_TOKEN,
   LOGIN,
   FB_LOGIN,
   GOOGLE_LOGIN,
   OAUTH_REGISTER,
   LOGOUT
   
} from './actions.type';

import { SET_AUTH, PURGE_AUTH, SET_USER, SET_KEY,
   SET_LOADING 
} from './mutations.type';

 
const initialState = {
   key: '',
   user: {},
   isAuthenticated: !!JwtService.getToken()
};

export const state = { ...initialState };

const getters = {
   currentUser(state) {
     return state.user;
   },
   isAuthenticated(state) {
     return state.isAuthenticated;
   }
};

const actions = {
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
               resolve(true);
            })
            .catch(err => {
               context.commit(PURGE_AUTH);
               resolve(false);           
            })
            .finally(() => { 
               context.commit(SET_LOADING, false);
            });
         } else {
            context.commit(PURGE_AUTH);
            resolve(false);
         }
      });
   },
   [LOGIN](context, credentials) {
      context.commit(SET_LOADING, true);
      return new Promise((resolve, reject) => {
         AuthService.login(credentials)
         .then(model => {
            context.commit(SET_AUTH, {
               token: model.accessToken.token,
               refreshToken: model.refreshToken
            }); 
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
   [FB_LOGIN](context, token) {
      context.commit(SET_LOADING, true);
      return new Promise((resolve, reject) => {
         OAuthService.fbLogin(token)
         .then(model => {
            if(model.accessToken){
               context.commit(SET_AUTH, {
                  token: model.accessToken.token,
                  refreshToken: model.refreshToken
               }); 
               resolve(null);
            }else{
               resolve(model);              
            }
         })
         .catch(error => {
            reject(error);
         })
         .finally(() => { 
            context.commit(SET_LOADING, false);
         });
      });     
   },
   [GOOGLE_LOGIN](context, token) {
      context.commit(SET_LOADING, true);
      return new Promise((resolve, reject) => {
         OAuthService.googleLogin(token)
         .then(model => {
            if(model.accessToken){
               context.commit(SET_AUTH, {
                  token: model.accessToken.token,
                  refreshToken: model.refreshToken
               }); 
               resolve(null);
            }else{
               resolve(model);              
            }
         })
         .catch(error => {
            reject(error);
         })
         .finally(() => { 
            context.commit(SET_LOADING, false);
         });
      });     
   },
   [OAUTH_REGISTER](context, user) {
      context.commit(SET_LOADING, true);
      return new Promise((resolve, reject) => {
         OAuthService.register(user)
         .then(model => {
            context.commit(SET_AUTH, {
               token: model.accessToken.token,
               refreshToken: model.refreshToken
            }); 
            resolve(true);
         })
         .catch(error => { 
            reject(error);
         })
         .finally(() => { 
            context.commit(SET_LOADING, false);
         });
      });     
   },
   [LOGOUT](context) {
     	context.commit(PURGE_AUTH);
   },
};


const mutations = {
   [SET_USER](state, user) {
      state.user = user;
   },
   [SET_KEY](state, key) {
      state.key = key;
   },
   [SET_AUTH](state, model) {
      
      JwtService.saveToken(model.token, model.refreshToken);

      let claims = jwtDecode(model.token);
      state.user = {
         id: claims.id,
         name: claims.sub
      };

      state.isAuthenticated = true;
      
   },
   [PURGE_AUTH](state) {
      state.isAuthenticated = false;
      state.user = {};
    
      JwtService.destroyToken();
   }
};

export default {
   state,
   actions,
   mutations,
   getters
};
 