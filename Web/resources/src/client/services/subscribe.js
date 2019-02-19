import BaseService from '@/common/baseService';
import { API_URL } from '@/common/config';

const source = `${API_URL}/subscribes`;

const SubscribeService = {
   fetch() {
      let url = `${source}`;
		return BaseService.fetch(url);
   },
   create(){
      let url = `${source}/create`;
		return BaseService.fetch(url);
   },
   store(model){
      let url = `${source}`;
      return BaseService.submit('post', url, model);
   },
   remove(id){
      let url = `${source}/${id}`;
      return BaseService.submit('delete', url);
   },
};

export default SubscribeService;