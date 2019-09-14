import BaseService from '@/common/baseService';
import { API_URL } from '@/common/config';

const source = `${API_URL}/research`;

const ResearchService = {
   init() {
      let url = source;
      return BaseService.fetch(url);
   },
   resolve(data) {
      let url = `${source}/resolve`;
      return BaseService.submit('post', url, data);
   }
};


export default ResearchService;