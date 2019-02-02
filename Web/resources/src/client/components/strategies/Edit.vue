<template>
	<form class="cn"  @submit.prevent="onSubmit">
		<v-card>
			<v-card-title>
				<h1 class="cn"> {{ title }} </h1>
			</v-card-title>
			<v-card-text>
				<v-container grid-list-md>
					<v-layout wrap>
						<v-flex xs6>
							<v-text-field v-model="strategy.name" label="策略名稱"
								v-validate="'required'" 
								:error-messages="errors.collect('name')"
								name="name"
								required
							/>
						</v-flex>
						<v-flex xs6>
							<v-checkbox
								label="我的首選"
								v-model="strategy.isDefault"
							/>
						</v-flex>
					</v-layout>
					<v-layout>
						<v-list>
							<v-list-tile v-for="(item, index) in strategy.indicatorSettings" :key="index">
								<v-list-tile-avatar>
									<v-checkbox color="success" 
									:value="item.indicatorId"
									v-model="selectedIndicators"
									/>
								</v-list-tile-avatar>

								<v-list-tile-content style="width:50%">
									<v-list-tile-title v-text="getIndicatorName(item.indicatorId)" />
								</v-list-tile-content>
								
								<v-list-tile-action>
									<v-select style="margin-left:3rem;"
									label="參數" :items="getArgsOptions(item.indicatorId)"
									v-model="item.arg"
									/>
								</v-list-tile-action>
							</v-list-tile>
						</v-list>
					</v-layout>
					<v-layout wrap>
						<v-flex xs6>
							<v-text-field v-model="strategy.stpl" label="停損(點)"
								v-validate="'numeric'" 
								:error-messages="errors.collect('stpl')"
								name="stpl"
								data-vv-as="停損"
								required
							/>
						</v-flex>
						<v-flex xs6>
							<v-text-field v-model="strategy.stpw" label="停利(點)"
								v-validate="'numeric'" 
								:error-messages="errors.collect('stpw')"
								name="stpw"
								data-vv-as="停利"
								required
							/>
						</v-flex>
						
					</v-layout>
					<ErrorList />
				</v-container>
			</v-card-text>

			<v-card-actions>
				
				<v-spacer></v-spacer>
				<v-btn large @click.prevent="cancel" color="blue darken-1" flat>
					<span class="form-btn">取消</span>
				</v-btn>
				<v-btn large type="submit" @click.prevent="onSubmit" class="form-btn" color="success" flat>
					<span class="form-btn">存檔</span>
				</v-btn>
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
		strategy: {
         type: Object,
         default: null
		},
		indicators: {
			type: Array,
         default: null
		},
		selected_indicators: {
         type: Array,
         default: null
      }
	},
	data () {
		return {
			selectedIndicators: []
		}
	},
	computed: {
		title(){
			if(this.strategy && this.strategy.id) return '策略設定';
			return '新增策略';			
		}
   },
	beforeMount(){
		if(!this.strategy.stpl)  this.strategy.stpl = '';
		if(!this.strategy.stpw)  this.strategy.stpw = '';

		this.selectedIndicators = this.selected_indicators.slice(0);

		this.strategy.indicatorSettings.forEach(item => {
			if(!item.id){
				let indicator = this.getIndicator(item.indicatorId);
				item.arg = indicator.defaultParam;
			}
		});
	},
	methods: {
		cancel(){
			this.$emit('cancel');
		},
		getIndicator(id){
			return this.indicators.find(item => item.id == id);
		},
		getIndicatorName(id){
			let indicator = this.getIndicator(id);
			return indicator.name;
		},
		getArgsOptions(indicatorId){
			let indicator = this.getIndicator(indicatorId);
			return indicator.paramList;
		},
		onSubmit() {
         this.$validator.validate().then(valid => {
            if(valid){
					if(!this.strategy.stpl)  this.strategy.stpl = 0;
					if(!this.strategy.stpw)  this.strategy.stpw = 0;
					this.$emit('submit', this.selectedIndicators);
				} 
         });         
      }
	}
}
</script>
