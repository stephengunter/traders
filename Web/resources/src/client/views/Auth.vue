<template>
   <div class="container">
      
   </div>
</template>

<script>
import { mapGetters } from 'vuex';

import { REFRESH_TOKEN } from '../store/actions.type';
import AuthService from '@/common/authService';
import JwtService from '@/common/jwt';

export default {
   name: 'AuthView',
   data () {
      return {
         returnUrl: ''
      }
   },
   computed: {
      ...mapGetters(['isAuthenticated'])      
   },
   beforeMount(){
      if(this.$route.query && this.$route.query.returnUrl){
         this.returnUrl = this.$route.query.returnUrl;
      }

      let tokenStatus = JwtService.tokenStatus();
      if(tokenStatus === -1){
         //token過期
         this.$store.dispatch(REFRESH_TOKEN).then(token => {	
            if(token){
               this.redirect();
            }else{
               //REFRESH_TOKEN 失敗
               this.redirectToLogin();
            }
         })	
      }else if(tokenStatus === 0) {
         //token 即將到期
         this.$store.dispatch(REFRESH_TOKEN).then(token => {	
            if(token){
               this.redirect();
            }else{
               //REFRESH_TOKEN 失敗
               this.redirectToLogin();
            }
         })	   
      }else{
         //token正常
         this.redirect();
      }
   },
   methods:{
      redirect(){
         if(this.returnUrl) this.$router.push({ path: this.returnUrl });
         else this.$router.push({ name: 'home' });
      },
      redirectToLogin(){
         if(this.returnUrl){
            this.$router.push({ path: '/login',  query:{ returnUrl: this.returnUrl }});
         } 
         else this.$router.push({ path: '/login' });
      }
   }
}
</script>

