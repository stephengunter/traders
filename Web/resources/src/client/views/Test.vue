<template>
   <div class="container">


      
      <h1>Test</h1>

      <button @click="test">test</button>
   </div>
   
</template>

<script>
import { REFRESH_TOKEN } from '../store/actions.type';

export default {
   name: 'TestView',
   data () {
      return {
        
      }
   },
   methods:{
      test(){
         this.$store
            .dispatch(REFRESH_TOKEN)
            .then(result => {
               if(result){
                 this.$router.push({ name: 'home' });
               }     
            })
         // if(!this.accessToken) this.accessToken = JwtService.getToken();
         // if(!this.refreshToken) this.refreshToken = JwtService.getRefreshToken();

         // let result = this.refresh(this.accessToken, this.refreshToken);
         // result.then(model => {
         //    this.accessToken = model.accessToken.token;
         //    this.refreshToken = model.refreshToken;
         // }).catch(err => console.log(err))
      },
      refresh(accessToken, refreshToken){
            return new Promise((resolve) => {
            if (accessToken && refreshToken) {
              
               AuthService.refreshToken({ accessToken, refreshToken })
               .then(model => {
                  resolve(model);
               })
               .catch((err) => {
                  console.log(err);
                  resolve(null);           
               })
            } else {
             
               resolve(null);
            }
         });
      }
   }
}
</script>

