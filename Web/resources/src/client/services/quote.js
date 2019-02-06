import BaseService from '@/common/baseService';
import { API_URL } from '@/common/config';

const source = `${API_URL}/quotes`;

const QuoteService = {
   fetch(params) {
      let url = source;
      return BaseService.fetch(url, params);
   },
   get(params) {
      let url = `${source}/get`;
      return BaseService.fetch(url, params);
   }
};


export default QuoteService;