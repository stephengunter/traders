import BaseService from '@/common/baseService';
import { ADMIN_URL } from '@/common/config';

const source = `${ADMIN_URL}/uploads`;

const AttachmentService = {
   store(model){
      let url = `${source}`;
      return BaseService.submit('post', url, model);
   },
   remove(id){
      let url = `${source}/${id}`;
      return BaseService.submit('delete', url);
   }
};

export default AttachmentService;