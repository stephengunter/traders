<template>
   <register-un-confirmed v-if="result.emailUnConfirmed" :email="credentials.email" />
   <div v-else class="container">
      <div v-if="register">
         <h1 class="cn">註冊 - 建立您的會員資料</h1>
         <ErrorList />
         <RegisterForm :model="registerModel" @submit="onSubmitRegister" />         
      </div>
      <div v-else>
         <h1 class="cn">登入 - 請使用測試帳號traderstest@gmail.com 密碼test@traders</h1>
         <ErrorList />
         <LoginForm @submit="onSubmit" />
         <v-layout class="mt-3 cn" row wrap>
            <v-flex xs12 >
               <FacebookLogin 
                @success="onFBLoginSuccess" @failed="oAuthLoginFailed"
               />
            </v-flex>
            <v-flex xs12 class="mt-3">
               <GoogleLogin 
                @success="onGoogleLoginSuccess" @failed="oAuthLoginFailed"
               />
            </v-flex>
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
import { CLEAR_ERROR, SET_ERROR } from '../store/mutations.type';
import { LOGIN, FB_LOGIN, GOOGLE_LOGIN, OAUTH_REGISTER } from '../store/actions.type';
import { ADMIN_URL } from '@/common/config';

import ErrorList from '@/components/ErrorList';
import LoginForm from '../components/login/Form';
import RegisterUnConfirmed from '../components/register/UnConfirmed';
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
      RegisterForm,
      'register-un-confirmed' : RegisterUnConfirmed
   },
   data () {
      return {
         credentials: null,
         returnUrl: '',
        
         register: false,
         registerModel: null,

         result:{
            emailUnConfirmed: false
         }


      }
   },
   beforeMount(){
      this.returnUrl = this.$route.query.returnUrl;
   },
   methods: {
      onSubmit(credentials) {
         this.credentials = credentials;
         
         this.$store.commit(CLEAR_ERROR);
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
         }else{
            //輸入錯誤, 登入失敗
            this.$store.commit(SET_ERROR, error);
         }
      },
      onSuccess(){
         this.redirect();
      },
      redirect(){
         if(this.returnUrl){
            if(this.returnUrl === 'admin') {
               window.location = ADMIN_URL;
            }else {
               this.$router.push({ path: this.returnUrl });
            }
         }
         else this.$router.push({ path: '/watch' });
      },
      oAuthLoginFailed(){
         Bus.$emit('errors', { msg: '登入失敗' });
      },
      oAuthLoginSuccess(model){
         if(model){
            //還沒註冊
            this.initRegister(model);
         }else{
            //登入成功
            this.onSuccess();  
         }  
      },
      onGoogleLoginSuccess(token){
         this.$store.commit(CLEAR_ERROR);
         this.$store
            .dispatch(GOOGLE_LOGIN, token)
            .then(model => {
               this.oAuthLoginSuccess(model);          
            }).catch(error => {
               this.oAuthLoginFailed();
            })
      },
      onFBLoginSuccess(token){
         this.$store.commit(CLEAR_ERROR);
         this.$store
            .dispatch(FB_LOGIN, token)
            .then(model => {
               this.oAuthLoginSuccess(model);                 
            }).catch(error => {
               this.oAuthLoginFailed();
            })
      },
      initRegister(model){
         this.registerModel = model;
         this.register = true;
      },
      onSubmitRegister(user){
         this.$store.commit(CLEAR_ERROR);
         this.$store
         .dispatch(OAUTH_REGISTER, user)
         .then(() => {
            this.onSuccess();            
         }).catch(error => {
            this.oAuthLoginFailed();
         })
      }
   },
   
};
</script>


<style scoped>
.links{
   font-size: 1.2rem
}
/* Shared */
.loginBtn {
  box-sizing: border-box;
  position: relative;
  /* width: 13em;  - apply for fixed size */
  margin: 0.2em;
  padding: 0 15px 0 46px;
  border: none;
  text-align: left;
  line-height: 34px;
  white-space: nowrap;
  border-radius: 0.2em;
  font-size: 16px;
  color: #FFF;
}
.loginBtn:before {
  content: "";
  box-sizing: border-box;
  position: absolute;
  top: 0;
  left: 0;
  width: 34px;
  height: 100%;
}
.loginBtn:focus {
  outline: none;
}
.loginBtn:active {
  box-shadow: inset 0 0 0 32px rgba(0,0,0,0.1);
}


/* Facebook */
.loginBtn--facebook {
  background-color: #4C69BA;
  background-image: linear-gradient(#4C69BA, #3B55A0);
  /*font-family: "Helvetica neue", Helvetica Neue, Helvetica, Arial, sans-serif;*/
  text-shadow: 0 -1px 0 #354C8C;
}
.loginBtn--facebook:before {
  border-right: #364e92 1px solid;
  background: url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/14082/icon_facebook.png') 6px 6px no-repeat;
}
.loginBtn--facebook:hover,
.loginBtn--facebook:focus {
  background-color: #5B7BD5;
  background-image: linear-gradient(#5B7BD5, #4864B1);
}


/* Google */
.loginBtn--google {
  /*font-family: "Roboto", Roboto, arial, sans-serif;*/
  background: #DD4B39;
}
.loginBtn--google:before {
  border-right: #BB3F30 1px solid;
  background: url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/14082/icon_google.png') 6px 6px no-repeat;
}
.loginBtn--google:hover,
.loginBtn--google:focus {
  background: #E74B37;
}

</style>
