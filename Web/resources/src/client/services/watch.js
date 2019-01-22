import BaseService from '@/common/baseService';
import { API_URL } from '@/common/config';

const source = `${API_URL}/watch`;

const WatchService = {
   init() {
      let url = source;
      return BaseService.fetch(url);
   }
};


export default WatchService;