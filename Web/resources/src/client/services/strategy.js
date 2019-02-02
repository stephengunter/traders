import BaseService from '@/common/baseService';
import { API_URL } from '@/common/config';

const source = `${API_URL}/strategies`;

const StrategyService = {
   create(){
      let url = `${source}/create`;
		return BaseService.fetch(url);
   },
   store(model){
      let url = `${source}`;
      return BaseService.submit('post', url, model);
   },
   edit(id){
      let url = `${source}/edit/${id}`;
		return BaseService.fetch(url);
   },
   update(model){
      let url = `${source}/${model.strategy.id}`;
      return BaseService.submit('put', url, model);
   },
   remove(ids){
      let url = `${source}/${ids}`;
      return BaseService.submit('delete', url);
   }
};


export default StrategyService;