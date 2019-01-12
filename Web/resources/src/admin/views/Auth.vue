<template>
	<v-container fluid grid-list-xl fill-height>
     <v-layout justify-center  align-center>
			
     </v-layout>
	</v-container>
    
	
</template>

<script>
import { CHECK_AUTH, REFRESH_TOKEN } from '../store/actions.type';

import JwtService from '@/common/jwt';
import { LOGIN_URL } from '@/common/config';

export default {
	name: 'AuthView',
	data () {
		return {
			returnUrl: ''
		}
	},
	beforeMount(){
      if(this.$route.query && this.$route.query.returnUrl){
         this.returnUrl = this.$route.query.returnUrl;
		}

		console.log('beforeMount');

		this.$store.dispatch(CHECK_AUTH).then((user) => {
			if(user){  
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
				
			}else{
				this.redirectToLogin();
			}
		})

   },
	methods: {
		redirect(){
         if(this.returnUrl) this.$router.push({ path: this.returnUrl });
         else this.$router.push({ name: 'home' });
      },
		redirectToLogin(){
			window.location = `${LOGIN_URL}?returnUrl=admin`;
		},

	}
}
</script>


