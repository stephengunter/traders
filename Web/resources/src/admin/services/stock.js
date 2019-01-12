import BaseService from '@/common/baseService';
import { ADMIN_URL } from '@/common/config';

const source = `${ADMIN_URL}/stocks`;

const StockService = {
   fetch(params) {
      let url = `${source}`;
		return BaseService.fetch(url, params);
   }
};

export default StockService;