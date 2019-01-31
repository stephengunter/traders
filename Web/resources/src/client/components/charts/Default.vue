<template>
   <div id="chart-watch" :style="`width:100%; height:${this.height}px`">
         
   </div>
  
</template>

<script>
import echarts from 'echarts';
import Charts from '@/models/chart';

import { mapState, mapGetters } from 'vuex';
import { SET_LOADING } from '../../store/mutations.type';

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
         chartModel: null
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
         quotes: state => state.chart.quotes
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
         this.chartModel = new Charts(this.strategy, this.indicators, this.quotes);
         
         this.chart = echarts.init(document.getElementById('chart-watch'));
         this.chart.setOption(this.chartModel.defaultOptions());

         this.resize();
         
         this.$store.commit(SET_LOADING, false);
      },
      resize(){
         if(this.chart){
            this.chart.resize();
         }
      }
   }
}
</script>

<style scoped>
.test{
   background-image: url(https://upload.wikimedia.org/wikipedia/commons/c/c5/Red_Arrow_Up.png);
}
</style>

</style>


