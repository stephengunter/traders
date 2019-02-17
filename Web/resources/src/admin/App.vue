<template>
	<v-app>
		<loading :active.sync="loading"></loading>
		<TheToolBar v-if="isAuthenticated" :user="currentUser" 
			:responsive="responsive"
		/>
		<TheDrawer v-if="isAuthenticated" :responsive="responsive" 
			:image="image" :color="color"
		/>
		<TheView />

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
				<v-icon color="white" class="mr-3">
					mdi-alert-circle
				</v-icon>
				<span class="errText cn">
					{{ err.msg  }}
				</span>
         </v-card-title>
      </v-dialog>
	</v-app>
</template>

<script>
import { mapState, mapGetters } from 'vuex';
import { SET_RESPONSIVE } from './store/mutations.type';

import TheFilter from './components/TheFilter';
import TheToolBar from './components/TheToolBar';
import TheDrawer from './components/TheDrawer';
import TheView from './components/TheView';

export default {
	name: 'App',
	components: {
		TheFilter,
		TheToolBar,
		TheDrawer,
		TheView
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
		...mapGetters(['isAuthenticated', 'currentUser']),
      ...mapState({
			loading: state => state.app.loading,
			responsive: state => state.app.responsive,
			image: state => state.app.image,
			color: state => state.app.color,
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
	beforeDestroy () {
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
         if (window.innerWidth < 991) {
            this.$store.commit(SET_RESPONSIVE, true);
         } else {
            this.$store.commit(SET_RESPONSIVE, false);
         }
      },
	}
}
</script>


<style lang="scss">
@import './styles/index.scss';

/* Remove in 1.2 */
.v-datatable thead th.column.sortable i {
  vertical-align: unset;
}
.cn {
    font-family: "微軟正黑體", "Lato", "Helvetica Neue", Helvetica, Arial, sans-serif;
}
.errText{
	color: #fff;
}
.successText{
	font-size: 1.2rem;
	color: #fff;
}
.v-btn {
    padding: 12px 12px;
    font-size: 16px;
}
</style>

