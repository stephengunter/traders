import './css/app.css';

import Vue from 'vue';
window.Bus = new Vue({});

import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/vue-loading.css';
Vue.component('loading', Loading);


import '@/plugins/vuetify';
import '@/plugins/validate';
import '@/plugins/googleAuth';
import '@/plugins/fbAuth';


import router from './router';
import store from './store';

import { CHECK_AUTH } from './store/actions.type';
import JwtService from '@/common/jwt';

router.beforeEach((to, from, next) => {	
	store.dispatch(CHECK_AUTH).then((user) => {		
		let needAuth = to.meta.type === 'user';
		let guestOnly = to.meta.type === 'guest';
		let forAll = to.meta.type === 'all';

		if(user){  
			//有token
			let tokenStatus = JwtService.tokenStatus();
			
			if(tokenStatus === -1) {
				//token過期
				if(forAll) return next();
				else return  next({ path: '/auth' , query:{ returnUrl: to.path }});

			}else if(tokenStatus === 0) {
				//token 即將到期
				if(forAll) return next();
				else if(guestOnly) return next({ name: 'home'});
				else return  next({ path: '/auth' , query:{ returnUrl: to.path }});

			}else {
				//token正常
				if(guestOnly) return next({ name: 'home'});
				else return next();
			} 	
			
		}else{
			//沒有token
			if(needAuth){
				//需要驗證, 導入login
				return next({ path: '/login' , query:{ returnUrl: to.path }});
			}
			else{
				return next();
			} 
		}
	})
});


Vue.config.productionTip = false;

import App from './App.vue';

new Vue({
	router,
	store,
	render: h => h(App),
}).$mount('#app')
