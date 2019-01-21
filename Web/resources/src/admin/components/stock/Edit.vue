<template>
	<form class="cn"  @submit.prevent="onSubmit">
		<v-card>
			<v-card-title>
				
				<h3>
					<span class="cn">{{ title }}</span>
				</h3>
			</v-card-title>
			

			<v-card-text>
				<v-container grid-list-md>
					<v-layout wrap>
						<v-flex xs12 sm6 md4>
							<v-text-field v-model="model.name" label="名稱"
								v-validate="'required'" 
								:error-messages="errors.collect('name')"
								name="name"
								required
							/>
						</v-flex>
						<v-flex xs12 sm6 md4>
							<v-text-field v-model="model.code" label="代碼"
								v-validate="'required'" 
								:error-messages="errors.collect('code')"
								name="code"
								required
							/>
						</v-flex>
						<v-flex xs12 sm6 md4>
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
						</v-flex>
					</v-layout>
					<v-alert :value="Errors.any()" color="error" outline>
						<ErrorList :model="Errors" />
					</v-alert>
				</v-container>
			</v-card-text>

			<v-card-actions>
				
				<v-spacer></v-spacer>
				<v-btn @click.prevent="cancel" color="blue darken-1" flat >Cancel</v-btn>
				<v-btn type="submit" @click.prevent="onSubmit" color="primary" flat>Save</v-btn>
			</v-card-actions>
		</v-card>
	</form>	
</template>


<script>

import { mapState } from 'vuex';
import ErrorList from '@/components/Errors';

export default {
	name: 'StockEdit',
	components: {
      ErrorList
   },
	props: {
		model: {
         type: Object,
         default: null
      },
	},
	data () {
		return {
			
		}
	},
	computed: {
      ...mapState({
         Errors: state => state.stocks.errors
		}),
		title(){
			if(this.model && this.model.id) return '編輯權值股';
			return '新增權值股';			
		}
   },
	beforeMount(){
		if(!this.model.weight)  this.model.weight = '';
		if(!this.model.price)  this.model.price = '';
	},
	methods: {
		cancel(){
			this.$emit('cancel');
		},
		onSubmit() {
         this.$validator.validate().then(valid => {
            if(valid) this.$emit('submit');
         });         
      }
	}
}
</script>
