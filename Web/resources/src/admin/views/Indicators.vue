<template>
	<v-container v-if="pageList" fluid grid-list-xl fill-height>
     <v-layout justify-center  align-center>
			<v-flex xs12>
				<material-card>
					<v-card-text >
						<v-layout row>
							<v-flex xs12 sm6 md6>
								<form @submit.prevent="search">
									<v-text-field
										v-model="params.keyword"
										append-icon="mdi-magnify"
										label="Search"
										single-line
										hide-details
									/>
								</form>
							</v-flex>
							<v-flex xs12 sm6 md6 class="text-lg-right">
								<v-tooltip top content-class="top">
									<v-btn :disabled="!canCreate" @click.prevent="create" class="mr-2" slot="activator"  color="info" icon>
										<v-icon>mdi-plus-circle</v-icon>
									</v-btn>
									<span class="cn">新增</span>
								</v-tooltip>
							</v-flex>
						</v-layout>
						
						<v-layout row wrap>
							<v-flex sm12>
								
								
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
import StockEdit from '../components/stock/Edit';
import Confirm from '@/components/Confirm';

export default {
	name: 'IndicatorsView',
	components: {
		'material-card' : MaterialCard,
		'stock-edit' : StockEdit,
		'table-pager' : TablePager,
		Confirm
	},
	data () {
		return {
			params: {
				keyword: '',
				page: 1,
				pageSize: 10
			},
			headers: [
				{
					sortable: false,
					text: '名稱',
					value: 'name'
				},
				{
					sortable: false,
					text: '代碼',
					value: 'code'
				},
				{
					sortable: false,
					text: '權重 (%)',
					value: 'weight'
				},
				{
					sortable: false,
					text: '',
					value: '',
					width: '50px'
				}
			],

			selected: [],
			editting: false,
			deleting: false,
			model: null,
			
		}
	},
	computed: {
      ...mapState({
			pageList: state => state.stocks.pageList,
		}),
		stocks(){
			return this.pageList ? this.pageList.viewList : [];
		},
		canRemove(){
			if(this.editting) return false; 
			return this.selected.length > 0;
		},
		canCreate(){
			return !this.editting && !this.deleting;
		}
	},
	beforeMount(){
		//this.fetchData();
	},
	methods: {
		fetchData(){
			this.$store.commit(CLEAR_ERROR);
			this.$store.dispatch(FETCH_STOCKS, this.params)
				.catch(error => {
					Bus.$emit('errors');
				})
		},
		search(){
			this.fetchData();
		},
		create(){
			this.$store.commit(CLEAR_ERROR);
			this.selected = [];
			this.$store.dispatch(CREATE_STOCK)
				.then(model => {
					this.model = model;  
					this.editting = true;
				})
				.catch(error => {
					Bus.$emit('errors');
				})
			
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


