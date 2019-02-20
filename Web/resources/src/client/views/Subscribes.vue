<template>
   <div class="container">
      <Bread />
      <v-card>
         <v-container fluid grid-list-lg>
            <v-layout row>
               <v-flex xs6 md4>
                  <v-radio-group v-model="params.payed" row>
                     <v-radio v-for="(item, index) in payedOptions" :key="index" 
                        :label="item.text" :value="item.value" color="primary"
								@change="onPayedChanged"                  
                     />
                  </v-radio-group>
               </v-flex>
               <v-flex xs6 md4>
                  <v-select v-show="params.payed" label="狀態"
                     :items="statusOptions"  
                     v-model="params.status" @change="filterData"
                  />	 
                  
               </v-flex>
            </v-layout>   
            <v-layout row wrap>
               <v-flex xs12>
						<v-data-table :headers="headers" id="tableSubscribes"
						:items="viewList" hide-actions item-key="id"
						>
							<template slot="headerCell" slot-scope="{ header }">
								<span class="subheading font-weight-light text-success text--darken-3 cn">
									{{ header.text }}
								</span>
							</template>
							<template v-if="params.payed" slot="items" slot-scope="props">
								<td> {{ props.item.startDate }} ~ {{ props.item.endDate }} </td>
								<td class="cn">{{ props.item.statusText }}</td>
								<td>
									<v-tooltip top  content-class="top">
										<a class="no-line-link" href="#" @click.prevent="payRecords(props.item.id)"  slot="activator">
											<span>{{ props.item.bill.payedDate }}</span>
											<span class="money ml-3">${{ props.item.bill.amount }}</span>
										</a>
										<span class="cn">查看詳情</span>
									</v-tooltip>
								</td>
							</template>
							<template slot="no-data">
								<p class="title text-md-center">查無資料</p>
							</template>
						</v-data-table>
						<v-dialog v-model="showPayRecords" persistent max-width="500px">
							<v-card v-if="selected">
								<v-card-title>
									<span class="headline">
										<span class="cn">付款紀錄</span>
									</span>
									<v-spacer></v-spacer>
									<v-btn @click.prevent="hidePayRecords" icon>
										<v-icon>mdi-close</v-icon>
									</v-btn>
								</v-card-title>
								<v-card-text>
									<PayRecords :pays="selectedItem.bill.pays" />
								</v-card-text>
							</v-card>
						</v-dialog>
               </v-flex>
            </v-layout>
         </v-container>
      </v-card>
   </div>
   
</template>

<script>
import { mapState } from 'vuex';
import Helper from '@/common/helper';
import Bread from '../components/TheBread';
import PayRecords from '../components/subscribes/PayRecords';
import { FETCH_SUBSCRIBES } from '../store/actions.type';

export default {
   name: 'SubscribesView',
   components: {
		Bread,
		PayRecords
   },
   data () {
      return {
         params: {
            payed: true,
				status: 1
         },
			payedOptions: Helper.payedOptions(),
			
			viewList: [],
			showPayRecords:false,
			selected: 0,

         unPayedHeaders: [
				{
					sortable: false,
					text: '訂閱方案',
					value: 'plan'
				},
				{
					sortable: false,
					text: '訂閱日期',
					value: 'date'
				},
				{
					sortable: false,
					text: '狀態',
					value: 'status'
				},
				{
					sortable: false,
					text: '付款資訊',
					value: 'pay',
					//width: '50px'
				}
			],

         payedHeaders: [
				{
					sortable: false,
					text: '訂閱期間',
					value: 'date'
				},
				{
					sortable: false,
					text: '狀態',
					value: 'status'
				},
				{
					sortable: false,
					text: '付款資訊',
					value: 'pay',
					//width: '50px'
				}
			]
      }
   },
   computed: {
      ...mapState({
			pageList: state => state.subscribes.pageList,
			statusOptions: state => state.subscribes.statusOptions
		}),
		subscribes(){
			if(!this.pageList) return [];
			return this.pageList.viewList;
		},
		payedSubscribes(){
			return this.subscribes.filter(item => item.bill.payed);
		},
		unPayedSubscribes(){
			return this.subscribes.filter(item => !item.bill.payed);
		},
		headers(){
			if(this.params.payed) return  this.payedHeaders;
			return this.unPayedHeaders;
		},
		selectedItem(){
			return this.subscribes.find(item => item.id === this.selected);
		}
	},
	beforeMount(){
      this.fetchData();
   },
   methods: {
      fetchData(){
			this.$store.dispatch(FETCH_SUBSCRIBES)
				.then(model => {
					if(this.unPayedSubscribes.length){
						this.params.payed = false;
					}else{
						this.params.payed = true;
						this.params.status = 1;
					}
					this.filterData();
				})
				.catch(error => {
					Bus.$emit('errors');
				})
		},
		onPayedChanged(val){
			this.params.payed = val;
			this.filterData();
		},
		filterData(){
			if(this.params.payed){
				this.viewList = this.payedSubscribes.filter(item => item.status === this.params.status);
			}else{
				this.viewList = this.unPayedSubscribes;
			}
		},
		payRecords(id){
			this.selected = id;
			this.showPayRecords = true;
		},
		hidePayRecords(){
			this.selected = 0;
			this.showPayRecords = false;
		}
   }
}
</script>

<style scoped>
	#tableSubscribes tbody tr td {
		font-size: 1.2rem;
	}
</style>

