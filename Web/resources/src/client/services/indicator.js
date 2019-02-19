import BaseService from '@/common/baseService';
import { API_URL } from '@/common/config';

const source = `${API_URL}/indicators`;

const IndicatorService = {
   fetch() {
      let url = `${source}`;
		return BaseService.fetch(url);
   }
};

export default IndicatorService;