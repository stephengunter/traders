const source = 'account';

const AccountService = {
   
   register(user) {
      let url = source;
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
   sendConfirmEmail(email) {
      let url = `${source}/SendConfirmEmail`;
      let method = 'post';
      return new Promise((resolve, reject) => {
         axios[method](url, { email })
            .then(response => {
               resolve(response.data);
            })
            .catch(error => {
               reject(error.response);
            });
      });
   },
   confirmEmail(user) {
      let url = `${source}/ConfirmEmail`;
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

export default AccountService;