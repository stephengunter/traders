import BaseService from '@/common/baseService';

const source = 'auth';

const AuthService = {
   login(credentials) {
      BaseService.init();
      let url = `${source}/login`;
      let method = 'post';
      return BaseService.submit(method, url, credentials);
   },
   refreshToken(credentials){
      BaseService.init();
      let url = `${source}/RefreshToken`;
      let method = 'post';
      return BaseService.submit(method, url, credentials);
   }
};

export default AuthService;