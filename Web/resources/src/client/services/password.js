import BaseService from '@/common/baseService';
import { API_URL } from '@/common/config';

const source =`${API_URL}/password`;

const PasswordService = {
   initChange(){
      let url = `${source}/change`;
      return BaseService.fetch(url);
   },
   change(model) {
      let url = `${source}/change`;
      let method = 'post';
      return BaseService.submit(method, url, model);
   },
   set(model) {
      let url = `${source}/set`;
      let method = 'post';
      return BaseService.submit(method, url, model);
   },
   forgot(model){
      let url = `${source}/forgot`;
      let method = 'post';
      return BaseService.submit(method, url, model);
   },
   register(user){
      let url = `${source}/register`;
      let method = 'post';
      return BaseService.submit(method, url, user);
   }
};

export default PasswordService;