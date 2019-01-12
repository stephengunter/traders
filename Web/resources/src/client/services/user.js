const source = 'user';

const UserService = {

   get() {
      let url = `${source}`;
      return new Promise((resolve, reject) => {
			axios.get(url)
				.then(response => {
					resolve(response.data);
				})
				.catch(error => {
					reject(error);
				})
      })
   }
};

export default UserService;