import BaseService from '@/common/baseService';
import { API_URL } from '@/common/config';

const source = `${API_URL}/account`;

const AccountService = {
   register(user) {
      let url = source;
      let method = 'post';
      return BaseService.submit(method, url, user);
   },
   sendConfirmEmail(model) {
      let url = `${source}/SendConfirmEmail`;
      let method = 'post';
      return BaseService.submit(method, url, model);
   },
   confirmEmail(model) {
      let url = `${source}/ConfirmEmail`;
      let method = 'post';
      return BaseService.submit(method, url, model);
   }
};


export default AccountService;