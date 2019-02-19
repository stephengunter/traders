import BaseService from '@/common/baseService';
import { API_URL } from '@/common/config';

const source = `${API_URL}/plans`;

const PlanService = {
   fetch() {
      let url = `${source}`;
		return BaseService.fetch(url);
   }
};

export default PlanService;