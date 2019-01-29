import axios from 'axios';
import JwtService from './jwt';
import Helper from '@/common/helper';

const BaseService = {	
	setHeader() {
		let token = JwtService.getToken();
		if(!token) token = '';
		axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;		
	},
   fetch(url, params){
		if(params) url = Helper.buildQuery(url, params);
     
      return new Promise((resolve, reject) => {
			axios.get(url)
				.then(response => {
					resolve(response.data);
				})
				.catch(error => {
					reject(error.response);
				})
      })
   },
   
   submit(requestType, url, data) {
      return new Promise((resolve, reject) => {
			axios[requestType](url, data)
				.then(response => {
					resolve(response.data);
				})
				.catch(error => {
					reject(error.response);
				});
      });
  }
   
};

export default BaseService;