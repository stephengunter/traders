<template>
   <div id="charts-watch" :style="`width:100%; height:${this.height}px`">
         
   </div>
  
</template>

<script>
import echarts from 'echarts';

import { GET_QUOTES } from '../../store/actions.type';
import { SET_LOADING, SET_TRADES, SET_POSITION, SET_SIGNAL_POSITION,
SET_REALTIME_POSITION, ADD_CHART_QUOTES } from '../../store/mutations.type';

export default {
   name: 'ChartDefault',
   props: {
      responsive:{
         type: Boolean,
         default: false
      },
      strategy_model: {
         type: Object,
         default: null
      },
      charts_model: {
         type: Object,
         default: null
      }
   },
   data () {
		return {
         echartsModel: null,
         height: 300,

         //hubModel: null,
         //strategyModel: null,
         //chartModel: null,

         //connection: null,
         // connState:{
         //    connecting: 0,
         //    connected: 1,
         //    reconnecting: 2,
         //    disconnected: 4
         // }

		}
   },
   watch: {
      responsive(val) {
         this.resize();
      }
   },
	computed: {
      latestTime(){
         if(this.quotes.length){
            return this.quotes[this.quotes.length - 1].time;
         }else return 0;
      }
   },
   beforeMount(){
      // this.hubModel = new Hub(WATCH_URL);
      // this.hubModel.on('receive', this.getQuote);
   },
   mounted(){
      window.addEventListener('resize', this.resize)
	},
	beforeDestroy () {
      window.removeEventListener('resize', this.resize)
   },
   methods: {
      init(){
         let height = 300;
         for (let i = 0; i < this.strategy_model.indicators.length; i++) {
            height += 120;
         }
         this.height = height;

         let options = this.charts_model.options;
         setTimeout(() => {
            this.echartsModel = echarts.init(document.getElementById('charts-watch'));
            this.echartsModel.setOption(options, true);
            this.$emit('init-completed');
         },500)

         
         
         //this.resize();

         // let dateQuotes = [{ date: this.date, quotes: this.quotes }];
         // this.strategy_modelModel = new Strategy(this.strategy_model, this.indicators, dateQuotes); 
         
         // this.chartModel = new Charts(this.strategy_modelModel, this.quotes);


         
         // this.chartModel.init()
         // .then(options => {
         //    this.chart = echarts.init(document.getElementById('chart-watch'));
         //    this.chart.setOption(options, true);

         //    this.resize();
         //    this.$store.commit(SET_LOADING, false);

         //    this.loadTrades();
         // }).catch(error => {
         //    this.resolveError(error);
         // })

        
         // if(this.realTime){
         //    this.hubModel.connect();
         // }
         
      },
      loadTrades(){
         this.$store.commit(SET_TRADES, this.chartModel.resolveTrades());
         this.$store.commit(SET_POSITION, this.strategy_modelModel.getLatestTradePosition());
         this.$store.commit(SET_SIGNAL_POSITION, this.strategy_modelModel.getLatestSignalPosition());
      },
      resize(){
         if(this.echartsModel){
            this.echartsModel.resize();
            this.$emit('resize');
         }
      },
      update(){
         let options = this.charts_model.options;
         this.echartsModel.setOption(options);
      },
      getQuote(){
         let params = {
            user: this.key,
            time: this.latestTime  
         };
        
         this.$store.dispatch(GET_QUOTES, params)
            .then(quotes => {
               if(quotes.length){
                  this.chartModel.updateRealTimeQuotes(quotes)
                  .then(options => {
                     this.chart.setOption(options);
                     this.loadTrades();
                  }).catch(error => {
                     this.resolveError(error);
                  })
               }
               
            }).catch(error => {
               this.resolveError(error);
            })
      },
      resolveError(error){       
         if(!error)  Bus.$emit('errors');
         else console.log(error);
      }
   }
}
</script>

