<template>
   <button @click.prevent="fbLogin" class="loginBtn loginBtn--facebook">
      使用 facebook 登入
   </button>
</template>



<script>

export default {
   name: 'FacebookLogin',
   data() {
      return {
         authWindow: null,
      }
   },
   created(){
      if (window.addEventListener) {
         window.addEventListener('message', this.handleMessage.bind(this), false);
      } else {
         window.attachEvent('onmessage', this.handleMessage.bind(this));
      }
   },
   methods: {
      fbLogin(){
         this.authWindow = window.open(Config.FB_LOGIN_URL, '', 'width=600,height=400');         
      },
      handleMessage(event){
        
         if (event.origin !== Config.SITE_URL){
            return;
         }  

         try { 
            const result = JSON.parse(event.data);
            if(result.type === 'fbAuth'){
               this.handleFBLogin(result);
            }
         }
         catch (e) {}//與login無關,忽略 
      },
      handleFBLogin(result){
         if (this.authWindow) {
            this.authWindow.close();
         }
         if (!result.status) {
            this.$emit('failed');
         } else {
            this.$emit('success', result.accessToken);
         }
      },
   }
};
</script>