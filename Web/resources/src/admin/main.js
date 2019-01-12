import Vue from 'vue';
window.Bus = new Vue({});

import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/vue-loading.css';
Vue.component('loading', Loading);

import '@/plugins/vuetifyDashboard';
import '@/plugins/validate';


import router from './router';
import store from './store';

import { CHECK_AUTH } from './store/actions.type';
import JwtService from '@/common/jwt';

router.beforeEach((to, from, next) => {	
	if(to.path === '/auth')  return next();
	
	store.dispatch(CHECK_AUTH).then((user) => {
		if(user){  
			let tokenStatus = JwtService.tokenStatus();
			if(tokenStatus === -1) {

				return  next({ path: '/auth' , query:{ returnUrl: to.path }});

			}else if(tokenStatus === 0) {

				return  next({ path: '/auth' , query:{ returnUrl: to.path }});

			}else  return next();
			
		}else{
			return next({ path: '/auth' });
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
