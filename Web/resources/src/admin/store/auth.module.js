
import jwtDecode from 'jwt-decode';
import Errors from '@/common/errors';

import AuthService from '../services/auth';
import BaseService from '@/common/baseService';
import JwtService from '@/common/jwt';


import {
   LOGOUT,
   CHECK_AUTH,
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

function hasAdminRole(claims){
   let roles = claims.roles.split(',');
   let adminRoles = roles.filter(role => 
      role.toUpperCase() === 'DEV' || role.toUpperCase() === 'BOSS');

   if(adminRoles && adminRoles.length) return true;
   return false;
}

const actions = {
   [LOGOUT](context) {
     	context.commit(PURGE_AUTH);
   },
   [CHECK_AUTH](context) {
      return new Promise((resolve) => {
         let accessToken = JwtService.getToken();
         if (accessToken) {
            BaseService.setHeader();
            let claims = jwtDecode(accessToken);
            if(hasAdminRole(claims)){
               context.commit(SET_USER, {
                  id: claims.id,
                  name: claims.sub
               }); 
               resolve(true);
            }else{
               //有token沒權限,保留token
               let destroyToken = false;
               context.commit(PURGE_AUTH, destroyToken);
               resolve(false);
            }            
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
   [PURGE_AUTH](state, destroyToken = true) {
      state.isAuthenticated = false;
      state.user = {};
    
      state.errors = new Errors();

      if(destroyToken){
         JwtService.destroyToken();
      }
      
   }
};

export default {
   state,
   actions,
   mutations,
   getters
};
 