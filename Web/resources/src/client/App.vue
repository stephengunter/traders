<template>
	<v-app>
		<loading :active.sync="loading"></loading>
		<RwvHeader />
		<v-content class="main-content">
			<router-view></router-view>
		</v-content>
		<RwvFooter />
		
		<v-snackbar :timeout="success.timeout"
			:color="success.color"
			:top="true"
			:right="true"
			v-model="success.show"
			dark
		>
			<v-icon color="white" class="mr-3">
			mdi-check-circle
			</v-icon>
			<span class="successText cn">
				{{ success.msg  }}
			</span>
	
		</v-snackbar>

		<v-dialog v-model="err.show" width="480">
         <v-card-title class="headline red lighten-1" >
				<v-icon class="errIcon">mdi-alert</v-icon>
				<span class="errText cn" >
					{{ err.msg  }}
				</span>
         </v-card-title>
      </v-dialog>

	</v-app>
</template>

<script>

import { mapState } from 'vuex';
import { SET_RESPONSIVE } from './store/mutations.type';
import Helper from '@/common/helper';

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
			success: {
				color: 'success',
				show: false,
				timeout: 1500,
				msg: '存檔成功'
			}
		}
	},
	computed: {
      ...mapState({
			loading: state => state.app.loading
      })
   },
	created() {
      Bus.$on('errors', this.onError);
		Bus.$on('success', this.onSuccess);
	},
	mounted(){
      this.onResponsiveInverted()
      window.addEventListener('resize', this.onResponsiveInverted)
	},
	beforeDestroy(){
      window.removeEventListener('resize', this.onResponsiveInverted)
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
		},
		onSuccess(msg){
			this.success.show = true;
			this.success.msg = msg ? msg : '存檔成功';
		},
		onResponsiveInverted () {
			this.$store.commit(SET_RESPONSIVE, Helper.isSmallScreen());         
      },
	}
}
</script>

<style lang="scss">
* :not(.v-icon) {
  font-family: "微軟正黑體",sans-serif!important;
}
</style>
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
.td-btn {
	padding: 0px, 12px;
}
</style>


