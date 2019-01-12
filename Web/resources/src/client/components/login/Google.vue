<template>
   <button class="loginBtn loginBtn--google">
      <g-signin-button 
      :params="googleSignInParams"
      @success="onSignInSuccess"
      @error="onSignInError">
      使用 google 登入
      </g-signin-button>
   </button>
</template>



<script>

export default {
   name: 'GoogleLogin',
   data() {
      return {
         googleSignInParams: {
            client_id:  `${Config.GOOGLE_API.client_id}.apps.googleusercontent.com`
         }
      }
   },
   methods: {
      onSignInSuccess (googleUser) {
         this.$emit('success', googleUser.getAuthResponse().id_token);
      },
      onSignInError (error) {
         this.$emit('failed');
      }
   }
};
</script>