const source = 'oauth';

const OAuthService = {
   
   fbLogin(token) {
      let url = `${source}/facebook`;
      let method = 'post';
      return new Promise((resolve, reject) => {
         axios[method](url, { token })
            .then(response => {
               resolve(response.data);
            })
            .catch(error => {
               reject(error.response);
            });
      });
   },
   googleLogin(token) {
      let url = `${source}/google`;
      let method = 'post';
      return new Promise((resolve, reject) => {
         axios[method](url, { token })
            .then(response => {
               resolve(response.data);
            })
            .catch(error => {
               reject(error.response);
            });
      });
   },
   register(user){
      let url = `${source}/register`;
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

export default OAuthService;