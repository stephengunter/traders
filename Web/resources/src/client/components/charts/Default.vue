<template>
   <div id="chart-watch" :style="`width:100%; height:${this.height}px`">
         
   </div>
  
</template>

<script>
import echarts from 'echarts';
import * as signalR from '@aspnet/signalr';
import Charts from '@/models/chart';

import { WATCH_URL } from '@/common/config';

import { mapState, mapGetters } from 'vuex';
import { SET_LOADING, SET_TRADES, SET_REALTIME_POSITION } from '../../store/mutations.type';

export default {
   name: 'ChartDefault',
   props: {
      strategy: {
         type: Object,
         default: null
      }
   },
   data () {
		return {
         chart: null,
         height: 500,
         chartModel: null,

         connection: null,
		}
   },
   watch: {
      responsive (val) {
         this.resize();
      }
   },
	computed: {
      ...mapState({
         indicators: state => state.chart.indicators,
         quotes: state => state.chart.quotes,
         realTime: state => state.chart.realTime         
      }),
   },
   mounted(){
      window.addEventListener('resize', this.resize)
	},
	beforeDestroy () {
      window.removeEventListener('resize', this.resize)
   },
   methods: {
      init(){
         this.$store.commit(SET_LOADING, true);

         this.height = 400 + (this.indicators.length * 100);
         this.chartModel = new Charts(this.strategy, this.indicators);
         this.chartModel.init(this.quotes)
            .then(() => {
               this.chart = echarts.init(document.getElementById('chart-watch'));               
               this.chart.setOption(this.chartModel.defaultOptions());

               this.resize();
               this.$store.commit(SET_LOADING, false);

               this.loadTrades();
            }).catch(error => {
               Bus.$emit('errors');
            })

         if(this.realTime){
            window.setInterval(this.getQuote, 2100);
            //this.connectHub();
         }else{
            //this.disconnectHub();
         }   
      },
      loadTrades(){
         this.chartModel.resolveTrades()
            .then(trades => {
               this.$store.commit(SET_TRADES, trades);
            }).catch(error => {
               console.log(error);
            })
      },
      resize(){
         if(this.chart){
            this.chart.resize();
            this.$emit('resize');
         }
      },
      registerHub(){         
         console.log('registerHub');
         


         // this.connection = new signalR.HubConnectionBuilder().withUrl(WATCH_URL).build(); 

         // this.connection.start().catch((error) => {
         //    console.log(error);
         // });

         // this.connection.on('receive', () => {
         //    this.getQuote();
         // });
      },
      connectHub(){
         if(this.connection == null) this.registerHub();
         else this.connection.start(); 
      },
      disconnectHub(){
         if(this.connection != null) this.connection.stop(); 
      },
      getQuote(){
         console.log('getQuotes');
         // let getData = Quote.get(this.params);
         // getData.then(quote => {
         //    this.onNewQuote(quote);
         // })
         // .catch(error => {
         //    this.$emit('fetch-error', error);            
         // });
      },
      refresh(){
         
         let series = [{
            markPoint: {
               data: this.markPointData
            } 
         }];

         axisData = (new Date()).toLocaleTimeString().replace(/^\D*/,'');

    var data0 = option.series[0].data;
    var data1 = option.series[1].data;
    data0.shift();
    data0.push(Math.round(Math.random() * 1000));
    data1.shift();
    data1.push((Math.random() * 10 + 5).toFixed(1) - 0);

    option.xAxis[0].data.shift();
    option.xAxis[0].data.push(axisData);
    option.xAxis[1].data.shift();
    option.xAxis[1].data.push(app.count++);

    myChart.setOption(option);

         // let mainIndicators = this.indicators.filter(item => item.main);
         // for(let i = 0; i < mainIndicators.length; i++)
         // {
         //    let indicator = mainIndicators[i];
         //    let data = this.indicators.find(item => item.id == indicator.id).data;
         
         //    series.push({
         //       data: data
         //    });
         
         // }

         // for(let i = 0; i < this.subIndicators.length; i++)
         // {
         //    xAxis.push({
         //       data: this.times,
         //    });

         //    let indicators = this.subIndicators[i];
         //    let data = this.indicators.find(item => item.id == indicators.id).data;

         //    series.push({
         //       data: data
         //    });
         
         // }

         this.chart.setOption({
               series: series
            });

      }
   }
}
</script>

