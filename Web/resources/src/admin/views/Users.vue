<template>
	<v-container v-if="pageList" fluid grid-list-xl fill-height>
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
								<v-data-table :headers="headers" :items="users" hide-actions>
									<template slot="headerCell" slot-scope="{ header }">
										<span class="subheading font-weight-light text-success text--darken-3 cn">
											{{ header.text }}
										</span>
									</template>
									<template slot="items" slot-scope="props">
										<td>{{ props.item.profile.fullname }}</td>
										<td>{{ props.item.email }}</td>
										<td>{{ props.item.phone }}</td>
									</template>
								</v-data-table>
								
							</v-flex>
						</v-layout>
						<table-pager :model="pageList" :responsive="responsive" v-show="users.length > 0" 
							@pageChanged="onPageChanged" @sizeChanged="onPageSizeChanged"
						/>
					</v-card-text>
				</material-card>
			</v-flex>
     </v-layout>
	</v-container>
    
	
</template>

<script>
import { mapState } from 'vuex';
import { FETCH_USERS } from '../store/actions.type';

import MaterialCard from '../components/material/Card';
import TablePager from '../components/TablePager';

export default {
	name: 'UserView',
	components: {
		'material-card' : MaterialCard,
		'table-pager' : TablePager
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
					text: '姓名',
					value: 'name'
				},
				{
					sortable: false,
					text: 'Email',
					value: 'email'
				},
				{
					sortable: false,
					text: '手機',
					value: 'phone'
				}
			]
			
		}
	},
	computed: {
      ...mapState({
			responsive: state => state.app.responsive,
			pageList: state => state.users.pageList,
		}),
		users(){
			if(this.pageList){
				return this.pageList.viewList
			}else {
				return [];
			}
		}
   },
	beforeMount(){
		this.fetchData();
	},
	methods: {
		fetchData(){
			this.$store.dispatch(FETCH_USERS, this.params);
		},
		onPageChanged(page){
			this.params.page = page;
			this.fetchData();
		},
		onPageSizeChanged(size){
			this.params.pageSize = size;
			this.fetchData();
		},
		search(){
			this.fetchData();
		}
	}
}
</script>




