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
							<v-text-field v-model="model.name" label="策略名稱"
								v-validate="'required'" 
								:error-messages="errors.collect('name')"
								name="name"
								required
							/>
						</v-flex>
						<v-flex xs12 sm6 md4>
							<v-text-field v-model="model.stpl" label="停損(點)"
								v-validate="'required|decimal'" 
								:error-messages="errors.collect('stpl')"
								name="stpl"
								data-vv-as="停損"
								required
							/>
						</v-flex>
						<v-flex xs12 sm6 md4>
							<v-text-field v-model="model.stpw" label="停利(點)"
								v-validate="'required|decimal'" 
								:error-messages="errors.collect('stpw')"
								name="stpw"
								data-vv-as="停利"
								required
							/>
						</v-flex>
						<v-flex xs12 sm6 md4>
							<v-checkbox
								label="我的首選"
								v-model="model.isDefault"
							/>
						</v-flex>
					</v-layout>
					<ErrorList />
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
import ErrorList from '@/components/ErrorList';

export default {
	name: 'StrategyEdit',
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
         Errors: state => state.strategy.errors
		}),
		title(){
			if(this.model && this.model.id) return '策略設定';
			return '新增策略';			
		}
   },
	beforeMount(){
		if(!this.model.stpl)  this.model.stpl = '';
		if(!this.model.stpw)  this.model.stpw = '';
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