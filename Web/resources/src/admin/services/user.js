import BaseService from '@/common/baseService';
import { ADMIN_URL } from '@/common/config';

const source = `${ADMIN_URL}/users`;

const UserService = {
   fetch(params) {
      let url = `${source}`;
		return BaseService.fetch(url, params);
   }
};

export default UserService;