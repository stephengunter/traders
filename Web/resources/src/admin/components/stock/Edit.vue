<template>
	<form  @submit.prevent="onSubmit">
		<v-card>
			<v-card-title>
				<span class="headline">{{ title }}</span>
			</v-card-title>

			<v-card-text>
				<v-container grid-list-md>
					<v-layout wrap>
						<v-flex xs12 sm6 md4>
							<v-text-field v-model="model.name" label="名稱"></v-text-field>
						</v-flex>
						<v-flex xs12 sm6 md4>
							<v-text-field v-model="model.code" label="代碼"></v-text-field>
						</v-flex>
						<v-flex xs12 sm6 md4>
							<v-text-field v-model="model.weight" label="權重(%)"></v-text-field>
						</v-flex>
						<v-flex xs12 sm6 md4>
							<v-text-field v-model="model.price" label="價格"></v-text-field>
						</v-flex>
						<v-flex xs12 sm6 md4>
							<v-text-field v-model="model.ignore" label="電信股"></v-text-field>
						</v-flex>
					</v-layout>
				</v-container>
			</v-card-text>

			<v-card-actions>
				<v-spacer></v-spacer>
				<v-btn color="blue darken-1" flat>Cancel</v-btn>
				<v-btn color="blue darken-1" flat>Save</v-btn>
			</v-card-actions>
		</v-card>
	</form>	
</template>


<script>


export default {
	name: 'StockEdit',
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
      title(){
			return '編輯';
		}
   },
	methods: {
		onSubmit() {
         this.$validator.validate().then(valid => {
            if(valid) this.$emit('submit');
         });         
      }
	}
}
</script>
