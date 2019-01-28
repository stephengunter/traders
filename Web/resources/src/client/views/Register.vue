<template>
   <div class="container">
      <h1 class="cn">註冊 - 建立您的會員資料</h1>
      <ErrorList />
      <registerForm @submit="onSubmit" />
   </div>
</template>

<script>
import { mapState } from 'vuex';
import { REGISTER, LOGIN } from '../store/actions.type';

import ErrorList from '@/components/ErrorList';
import RegisterForm from '../components/register/Form';

export default {
   name: 'RwvRegister',
   components: {
      ErrorList,
      RegisterForm
   },
   data () {
      return {
         
      }
   },
   computed: {
      ...mapState({
         Errors: state => state.auth.errors
      })
   },
   methods: {
      onSubmit(user) {  
         this.$store
         .dispatch(REGISTER, user)
         .then(() => {
            this.$store
            .dispatch(LOGIN, { email: user.email, password: user.password })
            .then(() => this.redirect())
         })
      },
      redirect(){
         this.$router.push({ name: 'home' });
      }
   },
   
};
</script>
