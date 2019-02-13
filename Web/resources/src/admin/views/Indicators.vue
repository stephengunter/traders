<template>
	<v-container v-if="pageList" fluid grid-list-xl fill-height>
     <v-layout justify-center  align-center>
			<v-flex xs12>
				<material-card>
					<v-card-text >
						<v-layout row>
							<v-flex xs6 sm6 md6>
								<v-select
									:items="activeOptions"  label="狀態"
									v-model="params.active" @change="fetchData"
								/>
							</v-flex>
							<v-flex xs6 sm6 md6 class="text-lg-right">
								<v-tooltip top content-class="top">
									<v-btn @click.prevent="create" class="mr-2" slot="activator"  color="info" icon>
										<v-icon>mdi-plus-circle</v-icon>
									</v-btn>
									<span class="cn">新增</span>
								</v-tooltip>
							</v-flex>
						</v-layout>
						
						<v-layout row wrap>
							<v-flex xs12 v-for="(item,index) in indicators" :key="index">
								<indicator-box :model="item">
								</indicator-box>
							</v-flex>
						</v-layout>
						<table-pager :model="pageList" :canPage="false"/>
						
					</v-card-text>
				</material-card>
			</v-flex>
     </v-layout>
	</v-container>
    
	
</template>

<script>
import { mapState } from 'vuex';
import { CLEAR_ERROR, SET_ERROR } from '../store/mutations.type';

import { FETCH_INDICATORS, CREATE_INDICATOR, STORE_INDICATOR,
EDIT_INDICATOR, UPDATE_INDICATOR, DELETE_INDICATOR } from '../store/actions.type';

import MaterialCard from '../components/material/Card';
import TablePager from '../components/TablePager';
import IndicatorBox from '../components/indicator/Box';
import Confirm from '@/components/Confirm';
import Helper from '@/common/helper';

export default {
	name: 'IndicatorsView',
	components: {
		'material-card' : MaterialCard,
		'indicator-box' : IndicatorBox,
		'table-pager' : TablePager,
		Confirm
	},
	data () {
		return {
			params: {
				active: 1
			},

			activeOptions: Helper.activeOptions()
		}
	},
	computed: {
      ...mapState({
			pageList: state => state.indicators.pageList,
		}),
		indicators(){
			return this.pageList ? this.pageList.viewList : [];
		}
	},
	beforeMount(){
		this.fetchData();
	},
	methods: {
		fetchData(){
			this.$store.commit(CLEAR_ERROR);
			this.$store.dispatch(FETCH_INDICATORS, this.params.active)
				.catch(error => {
					Bus.$emit('errors');
				})
		},
		create(){
			this.$router.push({ path: '/indicators/create' });
		},
		edit(id){
			this.$store.commit(CLEAR_ERROR);
			this.selected = [];
			this.$store.dispatch(EDIT_STOCK, id)
				.then(model => {
					this.model = model;  
					this.editting = true;
				})
				.catch(error => {
					Bus.$emit('errors');
				})
		},
      cancelEdit(){
			this.model = null;  
         this.editting = false;
		},
		remove(){
			this.deleting = true;
		},
		submitDelete(){
			this.$store.commit(CLEAR_ERROR);
			let ids = this.selected.map(item => item.id);
			this.$store.dispatch(DELETE_STOCK, ids.join(','))
				.then(() => {
					this.fetchData();
					this.model = null;  
					this.deleting = false;
				})
				.catch(error => {
					Bus.$emit('errors');
				})
		},
		cancelDelete(){
			this.deleting = false;
		},
      submit(){
			this.$store.commit(CLEAR_ERROR);
			let action = this.model.id ? UPDATE_STOCK : STORE_STOCK;
         this.$store.dispatch(action, this.model)
				.then(() => {
					this.fetchData();
					Bus.$emit('success');
					this.model = null;  
					this.editting = false;
				})
				.catch(error => {
					if(!error)  Bus.$emit('errors');
					else this.$store.commit(SET_ERROR, error);
				})
      }
	}
}
</script>


