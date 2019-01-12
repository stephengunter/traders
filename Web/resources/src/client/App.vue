<template>
	<v-app>
		<loading :active.sync="loading"></loading>
		<RwvHeader />
		<v-content class="main-content">
			<router-view></router-view>
		</v-content>
		<RwvFooter />
		

		<v-dialog v-model="err.show" width="480">
         <v-card-title class="headline red lighten-1" >
				<v-icon class="errIcon">warning</v-icon>
				<span class="errText cn" >
					{{ err.msg  }}
				</span>
         </v-card-title>
      </v-dialog>

	</v-app>
</template>

<script>

import { mapState } from 'vuex';

import RwvHeader from './components/TheHeader';
import RwvFooter from './components/TheFooter';

export default {
	name: 'App',
	components: {
		RwvHeader,
		RwvFooter
	},
	data () {
		return {
			err: {
				show: false,
				msg: '伺服器無回應. 請稍候再試'
			},
			date:''
		}
	},
	computed: {
      ...mapState({
         loading: state => state.app.loading
      })
   },
	created() {
      Bus.$on('errors', this.onError);
   },
	methods: {
		onError(error){
			if(!error){
				this.err.msg = '伺服器無回應. 請稍候再試';
				this.err.show = true;
				return;
			}
			if(!error.status){
				this.err.msg = error.msg ? error.msg : '伺服器無回應. 請稍候再試';
				this.err.show = true;
			}
			if(error.status === 500){
				this.err.msg = '伺服器無回應. 請稍候再試';
				this.err.show = true;
			}else if(error.status === 401){
				this.$router.push({ name: 'login' })
			}
		}
	}
}
</script>


<style scoped>
.main-content{
	min-height: 680px
}
.errIcon{
	color: #fff;
	padding-right: 1rem;
}
.errText{
	color: #fff;
}
</style>


