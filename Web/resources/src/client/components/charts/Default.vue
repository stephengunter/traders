<template>
   <div id="charts-watch" :style="`width:100%; height:${this.height}px`">
         
   </div>
  
</template>

<script>
import echarts from 'echarts';

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
         height: 300
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

   },
   mounted(){
      window.addEventListener('resize', this.resize)
	},
	beforeDestroy(){
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
            this.resize();
         },500)
         
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
      resolveError(error){       
         if(!error)  Bus.$emit('errors');
         else console.log(error);
      }
   }
}
</script>

