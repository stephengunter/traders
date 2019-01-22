<template>
   <div>
      <div v-if="noData" class="alert alert-warning" role="alert">
         查無資料
      </div>
      <div id="chart-watch" v-show="prices.length" :style="`width:${this.width}px;height:${this.height}px`">
   
      </div>
   </div>
</template>

<script>
export default {
   name: 'ChartDefault',
   props: {
      width: {
         type: Number,
         default: 940
      },
      height: {
         type: Number,
         default: 600
      }
   },
}
</script>

