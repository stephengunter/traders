import BaseService from '@/common/baseService';
import { API_URL } from '@/common/config';

const source =`${API_URL}/oauth`;

const OAuthService = {
   
   fbLogin(user) {
      let url = `${source}/facebook`;
      let method = 'post';
      return BaseService.submit(method, url, user);
   },
   googleLogin(token) {
      let url = `${source}/google`;
      let method = 'post';
      return BaseService.submit(method, url, { token });
   },
   register(user){
      let url = `${source}/register`;
      let method = 'post';
      return BaseService.submit(method, url, user);
   }
};

export default OAuthService;