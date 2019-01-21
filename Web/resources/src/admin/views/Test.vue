<template>
	<v-card>
        <v-card-title
          class="headline red lighten-1"
          primary-title
        >
          <v-icon color="white" class="mr-3">
					mdi-alert-circle
				</v-icon>
				<span class="errText cn">
					Damn
				</span>
        </v-card-title>

        <v-card-text>
          
        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="primary" flat @click="dialog = false">
            I accept
          </v-btn>
        </v-card-actions>
      </v-card>
    
	
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


