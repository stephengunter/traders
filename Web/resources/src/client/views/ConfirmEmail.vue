<template>
   <div v-if="ready" class="container">
      <v-layout row wrap>
         <v-flex xs12>
            <v-alert class="title cn" :value="true"  :type="alert.type">
               <span class="cn">
               {{ alert.msg }}         
               </span>  
               <span v-if="alert.type === 'success'" class="cn">
                  <em id="seconds">{{ seconds }}</em> 秒後重新導向登入頁面
               </span>    
            </v-alert>
         </v-flex>
      </v-layout>
   </div>
</template>

<script>
import { CONFIRM_EMAIL } from '../store/actions.type';

export default {
   name: 'RwvConfirmEmail',
   data () {
      return {
         ready: false,
         alert: {
            type: 'error',
            msg: 'Email確認失敗.'       
         },
         user: {
            id: '',
            code: ''
         },
         seconds: 3
      }
   },
   beforeMount(){
      if(this.$route.query.user) this.user.id = this.$route.query.user;
      if(this.$route.query.code) this.user.code = this.$route.query.code;

      if(this.user.id && this.user.code){
         this.submit(); 
      }   
   },
   methods: {
      submit(){
         this.$store
         .dispatch(CONFIRM_EMAIL, this.user)
         .then((ok) => {
            if(ok){
               this.alert.type = 'success';
               this.alert.msg = 'Email確認成功.';
               this.ready = true;
               this.onSuccess();
            }else{
               this.ready = true;  
            }
         })
      },
      onSuccess(){        
         window.setInterval(() => {
            if (this.seconds > 1) {
               this.seconds--;
            } else {
               this.$router.push({ name: 'login' });
            }
         }, 1000);
      }
   },
   
};
</script>
