<template>
	<v-container fluid grid-list-xl fill-height>
     <v-layout justify-center  align-center>
			<v-flex xs12>
				<form v-if="model" class="cn"  @submit.prevent="onSubmit">
					<v-card>
						<v-card-title>
							<h3>
								<span class="cn">{{ title }}</span>
							</h3>
						</v-card-title>
						<v-card-text>
							<v-container grid-list-md>
								<v-layout wrap>
									<v-flex xs6>
										<v-text-field v-model="model.name" label="名稱"
											v-validate="'required'" 
											:error-messages="errors.collect('name')"
											name="name"
											required
										/>
									</v-flex>
									<v-flex xs6>
										<v-text-field v-model="model.entity" label="代碼"
											v-validate="'required'" 
											:error-messages="errors.collect('entity')"
											name="entity"
											required
										/>
									</v-flex>
									<v-flex xs12>
										<v-textarea v-model="model.description" label="說明"
											v-validate="'required'" 
											:error-messages="errors.collect('description')"
											name="description"
											required
										/>

										 
									</v-flex>
									<!-- <v-flex xs12 sm6 md4>
										<v-text-field v-model="model.weight" label="權重(%)"
											v-validate="'required|decimal'" 
											:error-messages="errors.collect('weight')"
											name="weight"
											data-vv-as="權重"
											required
										/>
									</v-flex>
									<v-flex xs12 sm6 md4>
										<v-text-field v-model="model.price" label="價格"
											v-validate="'required|decimal'" 
											:error-messages="errors.collect('price')"
											name="price"
											data-vv-as="價格"
											required
										/>
									</v-flex>
									<v-flex xs12 sm6 md4>
										<v-checkbox
											label="電信股"
											v-model="model.ignore"
										/>
									</v-flex> -->
								</v-layout>
								<ErrorList  />
							</v-container>
						</v-card-text>

						<v-card-actions>
							
							<v-spacer></v-spacer>
							<v-btn @click.prevent="cancel" color="blue darken-1" flat >Cancel</v-btn>
							<v-btn type="submit" @click.prevent="onSubmit" color="primary" flat>Save</v-btn>
						</v-card-actions>
					</v-card>
				</form>
			</v-flex>
     </v-layout>
	</v-container>
    
	
</template>

<script>
import { mapState } from 'vuex';
import { CLEAR_ERROR, SET_ERROR } from '../store/mutations.type';

import { CREATE_INDICATOR, STORE_INDICATOR,
EDIT_INDICATOR, UPDATE_INDICATOR, DELETE_INDICATOR } from '../store/actions.type';

import ErrorList from '@/components/ErrorList';
import Confirm from '@/components/Confirm';

export default {
	name: 'IndicatorsEditView',
	components: {
		ErrorList,
		Confirm
	},
	data () {
		return {
			title: '',
			selected: [],
			editting: false,
			deleting: false,


			model: null,
			
		}
	},
	computed: {
      ...mapState({
			params: state => state.route.params,
		}),
		id(){
			if(!this.params) return 0;
			if(!this.params.id) return 0;
			return parseInt(this.params.id);
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
		this.init();
	},
	methods: {
		init(){
			if(this.id) this.edit();
			else this.create();
		},
		fetchData(){
			this.$store.commit(CLEAR_ERROR);
			this.$store.dispatch(FETCH_INDICATORS, this.params)
				.catch(error => {
					Bus.$emit('errors');
				})
		},
		search(){
			this.fetchData();
		},
		create(){
			this.title = '新增指標';
			this.$store.commit(CLEAR_ERROR);
			this.$store.dispatch(CREATE_INDICATOR)
				.then(model => {
					this.model = model.indicator;
				})
				.catch(error => {
					Bus.$emit('errors');
				})
			
		},
		edit(id){
			this.title = '編輯指標';
			this.$store.commit(CLEAR_ERROR);
			this.$store.dispatch(EDIT_INDICATOR, this.id)
				.then(model => {
					this.model = model;  
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
			this.$store.dispatch(DELETE_INDICATOR, ids.join(','))
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
			let action = this.id ? UPDATE_INDICATOR : STORE_INDICATOR;
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


