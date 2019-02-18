import BaseService from '@/common/baseService';
import { ADMIN_URL } from '@/common/config';

const source = `${ADMIN_URL}/indicators`;

const IndicatorService = {
   fetch(params) {
      let url = `${source}`;
		return BaseService.fetch(url, params);
   },
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
      let url = `${source}/${model.id}`;
      return BaseService.submit('put', url, model);
   },
   remove(id){
      console.log(id);
      let url = `${source}/${id}`;
      return BaseService.submit('delete', url);
   }
};

export default IndicatorService;