const source = 'password';

const PasswordService = {
   
   forgot(user) {
      let url = `${source}/forgot`;
      let method = 'post';
      return new Promise((resolve, reject) => {
         axios[method](url, user)
            .then(response => {
               resolve(response.data);
            })
            .catch(error => {
               reject(error.response);
            });
      });
   },
   reset(user) {
      let url = `${source}/reset`;
      let method = 'post';
      return new Promise((resolve, reject) => {
         axios[method](url, user)
            .then(response => {
               resolve(response.data);
            })
            .catch(error => {
               reject(error.response);
            });
      });
   },
   change(user) {
      let url = `${source}/change`;
      let method = 'post';
      return new Promise((resolve, reject) => {
         axios[method](url, user)
            .then(response => {
               resolve(response.data);
            })
            .catch(error => {
               reject(error.response);
            });
      });
   }
};

export default PasswordService;