<template>
   <div class="container">
      <Bread />
      <v-card>
         <v-container fluid grid-list-lg>
            <v-layout row>
               <v-flex xs6 md4>
                  <v-radio-group v-model="params.payed" row>
                     <v-radio v-for="(item, index) in payedOptions" :key="index" 
                        :label="item.text" :value="item.value"                     
                     />
                  </v-radio-group>
               </v-flex>
               <v-flex xs6 md4>
                  <v-select v-show="params.payed" label="狀態"
                     :items="statusOptions"  
                     v-model="params.status" @change="fetchData"
                  />	 
                  
               </v-flex>
            </v-layout>   
            <v-layout row wrap>
               <v-flex xs12>
						<v-data-table :headers="headers" 
						:items="subscribes" hide-actions item-key="id"
						>
							<template slot="headerCell" slot-scope="{ header }">
								<span class="subheading font-weight-light text-success text--darken-3 cn">
									{{ header.text }}
								</span>
							</template>
							<!-- <template slot="items" slot-scope="props">
								<td>
									<v-checkbox v-model="props.selected" primary hide-details  />
								</td>
								<td class="cn">{{ props.item.name }}  <v-icon v-if="props.item.ignore">mdi-cancel</v-icon></td>
								<td>{{ props.item.code }}</td>
								<td>{{ props.item.weight }}</td>
								<td>
									<v-tooltip top  content-class="top">
										<a href="#" @click.prevent="edit(props.item.id)"  slot="activator" icon>
											<v-icon small color="success">mdi-pencil</v-icon>
										</a>
										<span class="cn">編輯</span>
									</v-tooltip>
								</td>
							</template> -->
							<template slot="no-data">
								<p class="title text-md-center">查無資料</p>
							</template>
						</v-data-table>
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

export default {
   name: 'SubscribesView',
   components: {
      Bread
   },
   data () {
      return {
         params: {
            payed: true,
				status: 1
         },
         payedOptions: Helper.payedOptions(),

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
					text: '訂閱方案',
					value: 'plan'
				},
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
			],
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
		headers(){
			return this.payedHeaders;
		}
	},
   methods: {
      fetchData(){
			// this.$store.commit(CLEAR_ERROR);
			// this.$store.dispatch(FETCH_INDICATORS, this.params.active)
			// 	.then(model => {
			// 		this.pageList = model;
			// 		this.init();
			// 	})
			// 	.catch(error => {
			// 		Bus.$emit('errors');
			// 	})
		},
   }
}
</script>

