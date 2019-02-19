<template>
	<v-container fluid grid-list-xl fill-height>
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
								<v-tooltip top content-class="top">
									<v-btn :disabled="!orderChanged" @click.prevent="save" slot="activator"  color="success" icon>
										<v-icon>mdi-content-save</v-icon>
									</v-btn>
									<span class="cn">存檔</span>
								</v-tooltip>
							</v-flex>
						</v-layout>
						
						<v-layout id="indicatorsList" row wrap>	
							<v-flex class="sortableRow" xs12 v-for="item in pageList.viewList" :key="itemKey(item)">									
								<indicator-box :model="item" @select="edit" />
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
import * as Sortable from 'sortablejs';

import { mapState } from 'vuex';
import { CLEAR_ERROR, SET_ERROR } from '../store/mutations.type';

import { FETCH_INDICATORS, ORDER_INDICATORS } from '../store/actions.type';

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
				active: true
			},
			
			pageList: {
				viewList:[]
			},

			activeOptions: Helper.activeOptions(),

			itemKeys: new WeakMap(),
			currentItemKey: 0,

			orderChanged: false
		}
	},
	computed: {
      
	},
	beforeMount(){
		
		this.fetchData();
	},
	methods: {
		init(){
			new Sortable(
					document.getElementById('indicatorsList'),
					{
						draggable: '.sortableRow',
						onEnd: this.onDragEnd
					}
				);
		},
		fetchData(){
			this.$store.commit(CLEAR_ERROR);
			this.$store.dispatch(FETCH_INDICATORS, this.params.active)
				.then(model => {
					this.pageList = model;
					this.init();
				})
				.catch(error => {
					Bus.$emit('errors');
				})
		},
		itemKey(item){
			if (!this.itemKeys.has(item)) this.itemKeys.set(item, ++this.currentItemKey)
			return this.itemKeys.get(item)
		},
		onDragEnd ({ oldIndex, newIndex }) {
			const movedItem = this.pageList.viewList.splice(oldIndex, 1)[0];
			this.pageList.viewList.splice(newIndex, 0, movedItem);
			
			this.orderChanged = true;			
		},
		save(){
			this.$store.commit(CLEAR_ERROR);

			let ids = this.pageList.viewList.map(item => item.id);			
			this.$store.dispatch(ORDER_INDICATORS, ids.join())
				.then(() => {
					this.orderChanged = false;			
					this.fetchData();
				})
				.catch(error => {
					Bus.$emit('errors');
				})
		},
		create(){
			this.$router.push({ path: '/indicators/create' });
		},
		edit(id){
			let path = `/indicators/${id}`;
			this.$router.push({ path });
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


