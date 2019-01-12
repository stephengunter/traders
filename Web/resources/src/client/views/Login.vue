<template>
   <div v-if="result === 0" class="container">
      <v-layout v-if="emailSend" row wrap>
         <v-flex xs12>
            <v-alert class="title cn" :value="true"  type="info">
               <span class="cn">
                已經Email一封驗證信給您.  請查看您的Email來完成驗證.  
               </span>  
            </v-alert>
         </v-flex>
      </v-layout>
      <v-layout v-else row wrap>
         <v-flex xs12>
            <v-alert :value="true"  color="error"  icon="warning" outline  class="title">
               <span class="cn" >
                  您的Email尚未驗證
               </span>  
            </v-alert>
         </v-flex>
         <v-flex xs12>
            <v-btn @click="sendEmail" color="info" class="cn" style="margin: 6px 0px">
              重發認證信
            </v-btn>
         </v-flex>
      </v-layout>
   </div>
   <div v-else class="container">
      <div v-if="register">
         <h1 class="cn">註冊 - 建立您的會員資料</h1>
         <v-alert :value="Errors.any()" color="error" outline>
            <ErrorList :model="Errors" />
         </v-alert>
         <RegisterForm :model="registerModel" @submit="onSubmitRegister" />         
      </div>
      <div v-else>
         <h1 class="cn">登入</h1>
         <v-alert :value="Errors.any()" color="error" outline>
            <ErrorList :model="Errors" />
         </v-alert>
         <LoginForm @submit="onSubmit" />
         <v-layout class="mt-3 cn" row wrap>
            <!-- <v-flex xs12 >
               <FacebookLogin 
                @success="handleFacebookLogin" @failed="facebookLoginFailed"
               />
            </v-flex>
            <v-flex xs12 class="mt-3">
               <GoogleLogin 
                @success="handleGoogleLogin" @failed="googleLoginFailed"
               />
            </v-flex> -->
            <v-flex xs12 class="mt-3">
               <a href="#/forgot-password" class="links v-breadcrumbs__item">忘記密碼</a>
               
               <a href="#/register" class="links ml-5 v-breadcrumbs__item">註冊新帳號</a>
            
            </v-flex>
         </v-layout>
      </div>
   </div>
</template>

<script>
import { mapState } from 'vuex';
import { LOGIN, FB_LOGIN, GOOGLE_LOGIN, OAUTH_REGISTER, SEND_CONFIRM_EMAIL } from '../store/actions.type';

import ErrorList from '../components/Errors';
import LoginForm from '../components/login/Form';
import FacebookLogin from '../components/login/Facebook';
import GoogleLogin from '../components/login/Google';
import RegisterForm from '../components/register/Form';

export default {
   name: 'RwvLogin',
   components: {
      ErrorList,
      LoginForm,
      FacebookLogin,
      GoogleLogin,
      RegisterForm
   },
   data () {
      return {
         credentials: null,
         result: -1,
         returnUrl: '',

         emailSend: false,

         authWindow: null,
         register: false,
         registerModel: null
      }
   },
   computed: {
      ...mapState({
         Errors: state => state.auth.errors
      })
   },
   beforeMount(){
      this.returnUrl = this.$route.query.returnUrl;
   },
   methods: {
      onSubmit(credentials) {
         this.credentials = credentials;

         this.$store
         .dispatch(LOGIN, credentials)
         .then((result) => {
            this.result = result;
            if(result > 0) this.onSuccess();            
         })
      },
      onSuccess(){
         this.redirect();
      },
      redirect(){
         if(this.returnUrl) this.$router.push({ path: this.returnUrl });
         else this.$router.push({ name: 'home' });
      },
      sendEmail(){
         this.$store
         .dispatch(SEND_CONFIRM_EMAIL, this.credentials.email)
         .then(() => {
            this.emailSend = true;       
         })
      },
      googleLoginFailed(){
         Bus.$emit('errors', { msg: '登入失敗' });
      },
      handleGoogleLogin(token){
         this.$store
            .dispatch(GOOGLE_LOGIN, token)
            .then(model => {
               if(model){
                  this.initRegister(model);
               }else{
                  //登入成功
                  this.onSuccess();  
               }        
            })
      },
      facebookLoginFailed(){
         Bus.$emit('errors', { msg: '登入失敗' });
      },
      handleFacebookLogin(token){
         this.$store
            .dispatch(FB_LOGIN, token)
            .then(model => {
               if(model){
                  this.initRegister(model);
               }else{
                  //登入成功
                  this.onSuccess();  
               }        
            })
      },
      initRegister(model){
         this.registerModel = model;
         this.register = true;
      },
      onSubmitRegister(user){
         this.$store
         .dispatch(OAUTH_REGISTER, user)
         .then((result) => {
            this.result = result;
            if(result > 0) this.onSuccess();            
         })
      }
   },
   
};
</script>


<style scoped>
.links{
   font-size: 1.2rem
}
</style>
