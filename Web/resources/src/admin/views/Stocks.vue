<template>
	<v-container fluid grid-list-xl fill-height>
     <v-layout justify-center  align-center>
			<v-flex xs12>
				<material-card  color="green">
					<v-card-text >
						<v-layout row>
							<v-flex sm6>
              				
				 
							</v-flex>
							<v-flex sm6>
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
						</v-layout>
						<v-layout row wrap>
							<v-flex sm12>
								<v-data-table :headers="headers" :items="stocks" hide-actions>
									<template slot="headerCell" slot-scope="{ header }">
										<span class="subheading font-weight-light text-success text--darken-3 cn">
											{{ header.text }}
										</span>
									</template>
									<template slot="items" slot-scope="props">
										<td class="cn">{{ props.item.name }}  <v-icon v-if="props.item.ignore">mdi-cancel</v-icon></td>
										<td>{{ props.item.code }}</td>
										<td>{{ props.item.weight }}</td>
									</template>
								</v-data-table>
								
							</v-flex>
						</v-layout>
						
					</v-card-text>
				</material-card>
			</v-flex>
     </v-layout>
	</v-container>
    
	
</template>

<script>
import { mapState } from 'vuex';
import { FETCH_STOCKS } from '../store/actions.type';

import MaterialCard from '../components/material/Card';

export default {
	name: 'StocksView',
	components: {
		'material-card' : MaterialCard
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
				}
			]
			
		}
	},
	computed: {
      ...mapState({
			stocks: state => state.stocks.stocks,
		})
   },
	beforeMount(){
		this.fetchData();
	},
	methods: {
		fetchData(){
			this.$store.dispatch(FETCH_STOCKS, this.params);
		},
		search(){
			this.fetchData();
		}
	}
}
</script>


