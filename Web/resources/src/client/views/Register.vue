<template>
   <register-un-confirmed v-if="result.emailUnConfirmed" 
   :has_send="true" 
   />
   <div v-else class="container">
      <h1 class="cn">註冊 - 建立您的會員資料</h1>
      <ErrorList />
      <registerForm @submit="onSubmit" />
   </div>
</template>

<script>
import { mapState } from 'vuex';
import { CLEAR_ERROR, SET_ERROR } from '../store/mutations.type';
import { REGISTER, LOGIN } from '../store/actions.type';

import ErrorList from '@/components/ErrorList';
import RegisterForm from '../components/register/Form';
import RegisterUnConfirmed from '../components/register/UnConfirmed';

export default {
   name: 'RwvRegister',
   components: {
      ErrorList,
      RegisterForm,
      'register-un-confirmed' : RegisterUnConfirmed
   },
   data () {
      return {
         result:{
            emailUnConfirmed: false
         }
      }
   },
   methods: {
      onSubmit(user) {  
         this.$store.commit(CLEAR_ERROR);
         this.$store
         .dispatch(REGISTER, user)
         .then(() => {
            this.login(user);
         })
         .catch(error => {
            if(!error)  Bus.$emit('errors');
            else this.$store.commit(SET_ERROR, error);
         })
      },
      login(user){
         let credentials = {
            email: user.email,
            password: user.password
         };
         this.$store
         .dispatch(LOGIN, credentials)
         .then(() => {
            this.onSuccess();              
         })
         .catch(error => {
            if(!error)  Bus.$emit('errors');
            else this.resolveError(error);
         })
      },
      resolveError(error){       
         if(error.hasOwnProperty('email_confirm')){
            //email驗證
            this.result.emailUnConfirmed = true;
            window.scroll({
               top: 0,
               left: 0,
               behavior: 'smooth'
            });
         }else{
            //輸入錯誤, 登入失敗
            this.$store.commit(SET_ERROR, error);
         }
      },
      onSuccess(){
         this.$router.push({ name: 'home' });
      }
   },
   
};
</script>
