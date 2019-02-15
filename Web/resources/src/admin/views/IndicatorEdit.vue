<template>
	<v-container fluid grid-list-xl fill-height>
     <v-layout justify-center  align-center>
			<v-flex xs12>
				<form v-if="model" class="cn" @submit.prevent="onSubmit">
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

									<!-- row -->
									<v-flex xs12>
										<v-textarea v-model="model.description" label="說明"
											v-validate="'required'" 
											:error-messages="errors.collect('description')"
											name="description"
											required
										/>

										 
									</v-flex>

									<!-- row -->
									<v-flex xs6>
										<v-menu ref="menuTimeBegin" v-model="timeBegin.selecting"
										:close-on-content-click="false" :nudge-right="40"
										:return-value.sync="timeBegin.val"
										lazy transition="scale-transition"
										offset-y full-width max-width="290px" min-width="290px"
										>
											<v-text-field
												slot="activator"
												v-model="timeBegin.val"
												label="信號開始時間"
												prepend-icon="mdi-clock-outline"
												v-validate="'required'" 
												:error-messages="errors.collect('indicator_begin')"
												name="indicator_begin"
												readonly
											/>
											<v-time-picker full-width
												v-if="timeBegin.selecting"
												v-model="timeBegin.val"
												@change="onBeginTimeChanged"
											/>
										</v-menu>
									</v-flex>
									<v-flex xs6>
										<v-menu ref="menuTimeEnd" v-model="timeEnd.selecting"
										:close-on-content-click="false" :nudge-right="40"
										:return-value.sync="timeEnd.val"
										lazy transition="scale-transition"
										offset-y full-width max-width="290px" min-width="290px"
										>
											<v-text-field
												slot="activator"
												v-model="timeEnd.val"
												label="信號結束時間"
												prepend-icon="mdi-clock-outline"
												v-validate="'required'" 
												:error-messages="errors.collect('indicator_end')"
												name="indicator_end"
												readonly
											/>
											<v-time-picker full-width
												v-if="timeEnd.selecting"
												v-model="timeEnd.val"
												@change="onEndTimeChanged"
											/>
										</v-menu>
									</v-flex>
									<!-- row -->
									<v-flex xs6>
										<v-text-field v-model="model.minParam" label="最小參數"
											v-validate="{ required: true, numeric: true, min_value: minParam, max_value: maxParam }"
											:error-messages="errors.collect('minParam')"
											name="minParam"
											required
										/>
									</v-flex>
									<v-flex xs6>
										<v-text-field v-model="model.maxParam" label="最大參數"
											v-validate="{ required: true, numeric: true, min_value: model.minParam, max_value: maxParam }"
											:error-messages="errors.collect('maxParam')"
											name="maxParam"
											required
										/>
									</v-flex>
									<!-- row -->
									<v-flex xs6>
										<v-text-field v-model="model.defaultParam" label="預設參數"
											v-validate="{ required: true, numeric: true, min_value: model.minParam, max_value: maxParam }"
											:error-messages="errors.collect('defaultParam')"
											name="defaultParam"
											required
										/>
										
									</v-flex>
									<v-flex xs6>
										<v-select
											:items="activeOptions"  label="狀態"
											v-model="model.active"
										/>
									</v-flex>
									<!-- row -->
									<v-flex xs6>
										<v-select
											:items="sourceOptions"  label="資料來源"
											v-model="model.source"
										/>
										
									</v-flex>
									<v-flex xs6>
										<v-select
											:items="mainOptions"  label="主圖/副圖"
											v-model="model.main"
										/>
									</v-flex>
									<!-- row -->
									<v-flex xs6>
										<v-select
											:items="typeOptions"  label="圖表類型"
											v-model="model.type"
										/>
										
									</v-flex>
									<v-flex xs6>
										<v-select
											:items="withAvgOptions"  label="附均線"
											v-model="model.withAvg"
										/>
									</v-flex>
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

import Helper from '@/common/helper';
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

			minParam: 1,
			maxParam: 90,

			activeOptions: Helper.activeOptions(),
			active: 0,

			mainOptions:[{
				value: true,
				text: '主圖'
			},{
				value: false,
				text: '副圖'
			}],

			withAvgOptions: Helper.yesNoOptions(),

			typeOptions:[],
			sourceOptions: [],

			model: null,

			timeBegin:{
				selecting: false,
				val: null
			},
			timeEnd:{
				selecting: false,
				val: null
			},

			validate:{
				minParam: ''
			}
			
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
		validateMinParam(){
			let basic = 'required|numeric';
			return `'${basic}|min_value:${this.minParam}'`;
		},
		validateMaxParam(){
			let basic = 'required|numeric';
			return 'required|numeric'; 
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
		onBeginTimeChanged(val){
			this.$refs.menuTimeBegin.save(val);			
		},
		onEndTimeChanged(val){
			this.$refs.menuTimeEnd.save(val);			
		},
		create(){
			this.title = '新增指標';
			this.$store.commit(CLEAR_ERROR);
			this.$store.dispatch(CREATE_INDICATOR)
				.then(model => {
					this.model = model.indicator;
					this.minParam = model.minParam;
					this.minParam = model.minParam;

					this.typeOptions = model.typeOptions
					this.sourceOptions = model.sourceOptions
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
		onSubmit() {
         this.$validator.validate().then(valid => {
            if(valid) this.submit();
         });         
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


