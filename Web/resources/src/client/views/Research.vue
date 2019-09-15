<template>
   <div class="container">
      <Bread />
      <Forbidden v-if="result.error" :msg="result.msg" />
      <v-card>
         <v-card-text>
            <Menu ref="menu" :responsive="responsive"
               :strategy_options="strategyOptions" :strategy_id="strategyId"
               :seleted_dates = "seletedDates"
               :min_date="minDate" :max_date="maxDate" :empty_dates="emptyDates"
               @strategy-changed="onStrategyChanged"   @submit="submit"
            />
            
            <h1>回測結果</h1>
            <Report />

            <v-layout row>
               <v-flex sm12>
                  <days-table :trades="trades" />
               </v-flex>
            </v-layout>
         </v-card-text>
      </v-card>
   </div>
   
</template>

<script>
import moment from 'moment';
import Helper from '@/common/helper';
import Strategy from '@/models/strategy';

import { mapState } from 'vuex';
import { INIT_RESEARCH, RESOLVE_RESEARCH,
   CREATE_STRATEGY, STORE_STRATEGY,
   EDIT_STRATEGY, UPDATE_STRATEGY,
   DELETE_STRATEGY } from '../store/actions.type';


import { SET_RESPONSIVE, SET_DATE, SET_STRATEGY, CLEAR_ERROR, SET_ERROR } from '../store/mutations.type';

import Bread from '../components/TheBread';
import Forbidden from '../components/research/Forbidden';
import Menu from '../components/research/Menu';
import Report from '../components/research/Report';
import DaysTable from '../components/research/Days';
import ChartsDefault from '../components/charts/Default';
import StrategyEdit from '../components/strategies/Edit';
import TradeList from '../components/trades/List';

const updateManagefee = (done) => {
   let apiEndPoint = getApiEndPoint('core');
   let model  = models.shift();
   let id = model.id;
   console.log('updateManagefee id:',id);
   setTimeout(() => {
      request(apiEndPoint)
      .put(`/api/fundoperation/${id}`)
      .set('Authorization', `Bearer ${token}`)
      .send(model)
      .expect(204)
      .end((err, res) => {
         if (err) return done(err);
         else{
            if(models.length) updateManagefee(done);
            else done();
         }
      });
   }, 1000);
}

export default {
   name: 'WatchView',
   components: {
      Bread,
      Forbidden,
      Menu,
      Report,
      'days-table' : DaysTable,
      'charts-default' : ChartsDefault,
      'strategy-edit' : StrategyEdit,
      'trade-list' : TradeList
   },
   data () {
      return {
         emptyDates: ['2019-08-28', '2019-08-29', '2019-08-30'],
         strategyId: 0,
         seletedDates: [],

         result: {
            error: false,
            msg: ''
         },

         strategyModel: null,
         
         noData: false,

         settings:{
            action: '',
            model: null
         },
         
         models:[],
         
         trades:[{
            date: '2019-9-11', profit: -24, counts: 12
         }]
         
      }
   },
   computed: {
      ...mapState({
         responsive: state => state.app.responsive,
         key: state => state.research.key,
         minDate: state => state.research.minDate,
         maxDate: state => state.research.maxDate,
         strategy: state => state.research.strategy,
         strategies: state => state.research.strategies,
         indicators: state => state.research.indicators,
         dateQuotes: state => state.research.dateQuotes
      }),
      strategyOptions(){
         return this.strategies.map(item => ({
               value: item.id, text: item.name 
             }))
      },
      editting(){
         return this.settings.action != '';
      }
   },
   beforeMount(){
      this.init();
   },
   methods: {
		init(){
         this.settings.action = '';
         this.settings.model = null;

         this.$store.dispatch(INIT_RESEARCH)
            .then(model => {
               this.seletedDates = [
                  moment(model.maxDate).add(-7, 'days').format('YYYY-MM-DD'),
                  model.maxDate
               ];
               this.result.error = false;
               this.onStrategyChanged(this.strategies[0].id);               

               setTimeout(() => {
                   this.$refs.menu.init();
               }, 500)
              
            }).catch(error => {
               if(!error)  Bus.$emit('errors');
               else this.resolveResearchError(error);
            })
      },
      onDateQuotesLoaded(){
         this.strategyModel = new Strategy(this.strategy, this.indicators, this.dateQuotes);
         // for (let i = 0; i < this.dateQuotes.length; i++) {
         //    let date = this.dateQuotes[i].date;
         //    this.strategyModel.setDate(date);

         //    this.strategyModel.calculate()
         //    .then(() => {
         //       let trades = this.strategyModel.getTrades();
         //       this.models.push({
         //          date, trades
         //       })
         //    }).catch(error => {
         //       console.log(error);
         //    })
         // }

         let dates = this.dateQuotes.map(item => item.date);
        
         this.calculateByDay(dates);

         console.log(this.models);

      },
      oncalculateComplete(){
         console.log('oncalculateComplete', this.models);
      },
      calculateByDay(dates){
         let date  = dates.shift();
         this.strategyModel.setDate(date);
         this.strategyModel.calculate()
         .then(() => {
            let trades = this.strategyModel.getTrades();
            this.models.push({
               date, trades
            });
            if(dates.length) this.calculateByDay(dates);
            else this.oncalculateComplete();
         }).catch(error => {
            console.log(error);
         })
      },
      resolveResearchError(error){
         if(error.hasOwnProperty('subscribe')){
            this.errMsg = '您還沒有完成訂閱或者不在訂閱期間內';
            this.result = -1;
         }else if(error.hasOwnProperty('user')){
            this.errMsg = '權限不足或重複登入';
            this.result = -1;
         }else{
            Bus.$emit('errors');
         }
      },
      onStrategyChanged(val){
         this.strategyId = val;
         let strategy = this.strategies.find(item => item.id == val);
         if(strategy.id !== this.strategy.id){
            this.$store.commit(SET_STRATEGY, strategy);
         }
      },
      allowedDates(val){
         return this.emptyDates.indexOf(val) < 0
      },
      onDateChanged(){
         this.showDatePicker = false;
         this.$store.commit(SET_DATE, Helper.dateNumber(this.dateString));
         this.fetchQuotes();
      },
      onResize(){
         this.$store.commit(SET_RESPONSIVE, Helper.isSmallScreen());
      },
      submit(model){
         this.$store.dispatch(RESOLVE_RESEARCH, model)
            .then(model => {
               this.onDateQuotesLoaded();
            }).catch(error => {
               console.log('error',error);
               if(!error)  Bus.$emit('errors');
               else this.resolveResearchError(error);
            })
      },
      details(){

      },
      cancelEditStrategy(){
         this.settings.model = null;
         this.settings.action = '';
      },
      editStrategy(){
         this.$store.commit(CLEAR_ERROR);
			this.$store.dispatch(EDIT_STRATEGY, this.strategyId)
				.then(model => {
               this.settings.model = model;
               this.settings.action = 'edit';
				})
				.catch(error => {
					Bus.$emit('errors');
				})
      },
      createStrategy(){
         this.$store.commit(CLEAR_ERROR);
			this.$store.dispatch(CREATE_STRATEGY)
				.then(model => {
               this.settings.model = model;
               this.settings.action = 'create';
				})
				.catch(error => {
					Bus.$emit('errors');
				})
      },
      submitStrategy(selectedIndicators){
         let model = {
            strategy: this.settings.model.strategy,
            selectedIndicators: selectedIndicators
         };

         model.strategy.indicatorSettings.forEach((item, index) => {
            item.order = index;
         });

         let action = STORE_STRATEGY;
         if(model.strategy.id){
            action = UPDATE_STRATEGY
         }

         this.$store.commit(CLEAR_ERROR);
         this.$store
         .dispatch(action, model)
         .then(id => {
            this.onSettingsUpdated(true);              
         })
         .catch(error => {
            if(!error)  Bus.$emit('errors');
            else this.resolveSettingsError(error);
         })
      },
      removeStrategy(){
         let id = this.strategyId;
         this.$store.commit(CLEAR_ERROR);
         this.$store
         .dispatch(DELETE_STRATEGY, id)
         .then(() => {
            this.onSettingsUpdated();           
         })
         .catch(error => {
            if(!error)  Bus.$emit('errors');
            else this.resolveSettingsError(error);
         })
      },
      resolveSettingsError(error){       
         if(error){
            this.$store.commit(SET_ERROR, error);
         }else{
            Bus.$emit('errors');
         }
      },
      onSettingsUpdated(showMsg){
         this.init();

         if(showMsg) Bus.$emit('success');
      }
   }
}
</script>