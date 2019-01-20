<template>
	<v-container fluid grid-list-xl fill-height>
     <v-layout justify-center  align-center>
			<v-flex xs12>
				<material-card>
					<v-card-text >
						<v-layout row>
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
							<v-flex sm6 class="text-lg-right">
								<v-tooltip top content-class="top">
									<v-btn @click.prevent="create" slot="activator"  color="info" icon>
										<v-icon>mdi-plus-circle</v-icon>
									</v-btn>
									<span class="cn">新增</span>
								</v-tooltip>
				 				<v-dialog v-model="editting" persistent max-width="500px">
									<stock-edit v-if="editting" :model="model" 
									@submit="submit" @cancel="cancelEdit"
									/>
      						</v-dialog>
							</v-flex>
						</v-layout>
						
						<v-layout row wrap>
							<v-flex sm12> 
								<v-list three-line>
                           <v-list-tile>
                              <v-list-tile-action>
                                 <v-checkbox
                                    value="0"
                                    color="green"
                                 />
                              </v-list-tile-action>
                           </v-list-tile>
                           <v-list-tile-title>
                              Sign contract for "What are conference organized afraid of?"
                           </v-list-tile-title>
                           <div class="d-flex">
                              <v-tooltip
                      top
                      content-class="top">
                      <v-btn
                        slot="activator"
                        class="v-btn--simple"
                        color="success"
                        icon
                      >
                        <v-icon color="primary">mdi-pencil</v-icon>
                      </v-btn>
                      <span>Edit</span>
                    </v-tooltip>
                           </div>
								</v-list>
								
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
import { FETCH_STOCKS, CREATE_STOCK } from '../store/actions.type';

import MaterialCard from '../components/material/Card';
import StockEdit from '../components/stock/Edit';

export default {
	name: 'TestView',
	components: {
		'material-card' : MaterialCard,
		'stock-edit' : StockEdit
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
					width: '200px'
				}
			],

			editting: false,
         model: null,
         
         tabs: 0,
			
		}
	},
	computed: {
      ...mapState({
			stocks: state => state.stocks.stocks
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
		},
		create(){
			this.$store.dispatch(CREATE_STOCK)
				.then(model => {
					this.model = model;  
					this.editting = true;
				})
			
		},
		edit(){

		},
      cancelEdit(){
			this.model = null;  
         this.editting = false;
      },
      submit(){
        
      }
	}
}
</script>


