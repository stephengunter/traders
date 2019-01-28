<template>
   <button class="loginBtn loginBtn--facebook">
      <fb-signin-button
         :params="fbSignInParams"
         @success="onSignInSuccess"
         @error="onSignInError"
      >
      使用 facebook 登入
      </fb-signin-button>
   </button>
</template>



<script>

export default {
   name: 'FacebookLogin',
   data() {
      return {
         fbSignInParams: {
            scope: 'email',
            return_scopes: true
         }
      }
   },
   created(){
      
   },
   methods: {
      onSignInSuccess (response) {
         let accessToken = response.authResponse.accessToken;
         this.$emit('success', accessToken);
      },
      onSignInError (error) {
         this.$emit('failed');
      }
   }
};
</script>