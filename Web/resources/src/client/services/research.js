import BaseService from '@/common/baseService';
import { API_URL } from '@/common/config';

const source = `${API_URL}/research`;

const ResearchService = {
   init() {
      let url = source;
      return BaseService.fetch(url);
   },
   resolve(model) {
      let url = `${source}/resolve`;
      return BaseService.submit('post', url, model);
   }
};


export default ResearchService;