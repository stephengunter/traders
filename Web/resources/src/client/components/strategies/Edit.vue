<template>
	<form class="cn"  @submit.prevent="onSubmit">
		<v-card>
			<v-card-title>
				<span class="headline">
					<span>{{ title }}</span>
				</span>
				<v-spacer></v-spacer>
				<v-btn @click.prevent="cancel" icon>
					<v-icon>mdi-close</v-icon>
				</v-btn>
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
					<v-layout row>
						<v-flex xs12 class="title">使用指標</v-flex>
					</v-layout>
					<v-layout>	
						<v-list>
							<draggable v-model="strategy.indicatorSettings">
								<v-list-tile style="cursor: move;" v-for="item in enableSettings" :key="item.indicatorId">
									<v-list-tile-avatar>
										<v-checkbox color="success" 
										:value="item.indicatorId"
										v-model="selectedIndicators"
										@change="onSelectIndicatorsChanged"
										/>
									</v-list-tile-avatar>

									<v-list-tile-content style="width:50%">
										<v-list-tile-title v-text="getIndicatorName(item.indicatorId)" />
									</v-list-tile-content>
									
									<v-list-tile-action>
										<v-select style="margin-left:3rem;" 
										:disabled="!hasSelected(item.indicatorId)"
										label="參數" :items="getArgsOptions(item.indicatorId)"
										v-model="item.arg"
										/>
									</v-list-tile-action>
								</v-list-tile>
							</draggable>
							<v-list-tile v-for="item in disableSettings" :key="item.indicatorId">
								<v-list-tile-avatar>
									<v-checkbox color="success" 
									:value="item.indicatorId"
									v-model="selectedIndicators"
									@change="onSelectIndicatorsChanged"
									/>
								</v-list-tile-avatar>

								<v-list-tile-content style="width:50%">
									<v-list-tile-title v-text="getIndicatorName(item.indicatorId)" />
								</v-list-tile-content>
								
								<v-list-tile-action>
									<v-select style="margin-left:3rem;" 
									:disabled="!hasSelected(item.indicatorId)"
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
						<v-flex xs12>
							<v-slider
          v-model="slider" :tick-size="0.1"
          thumb-label="always"
        ></v-slider>
						</v-flex>
					</v-layout>
					<ErrorList />
				</v-container>
			</v-card-text>

			<v-card-actions>
				<v-btn v-if="strategy.id" large @click.prevent="remove" color="error" flat>
					<span class="form-btn">刪除</span>
				</v-btn>
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
import draggable from 'vuedraggable';
import { mapState } from 'vuex';
import ErrorList from '@/components/ErrorList';

export default {
	name: 'StrategyEdit',
	components: {
		draggable,
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
			slider: 40,
			selectedIndicators: []
		}
	},
	computed: {
		title(){
			if(this.strategy && this.strategy.id) return '策略設定';
			return '新增策略';			
		},
		enableSettings(){
			return this.strategy.indicatorSettings.filter(item => this.hasSelected(item.indicatorId));
		},
		disableSettings(){
			return this.strategy.indicatorSettings.filter(item => !this.hasSelected(item.indicatorId));
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
		hasSelected(indicatorId){
			return this.selectedIndicators.includes(indicatorId);
		},
		onSelectIndicatorsChanged(){
			this.strategy.indicatorSettings.sort((a, b) => {
				let slectedA = this.hasSelected(a.indicatorId);
				let slectedB = this.hasSelected(b.indicatorId);
				if(slectedA && !slectedB){
					return -1;
				}else if(!slectedA && slectedB){
					return 1;
				}
				return a.order - b.order;
         });
			
		},
		onSubmit() {
         this.$validator.validate().then(valid => {
            if(valid){
					if(!this.strategy.stpl)  this.strategy.stpl = 0;
					if(!this.strategy.stpw)  this.strategy.stpw = 0;
					this.$emit('submit', this.selectedIndicators);
				} 
         });         
      },
		remove(){
			this.$emit('remove');
		}
	}
}
</script>
