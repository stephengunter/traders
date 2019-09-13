<template>
   <v-layout v-if="responsive" row  wrap>
      <v-flex xs10>
         <v-select
            :items="strategy_options"  label="策略"
            v-model="strategyId" @change="onStrategyChanged"
         />
      </v-flex>
      <v-flex xs2 class="text-sm-right">
         <v-menu offset-y class="hidden-md-and-up">
            <v-toolbar-side-icon  slot="activator" />
            <v-list>
               <v-list-tile @click.prevent="refresh" >
                  <v-list-tile-action>
                        <v-btn class="mr-1" slot="activator"  color="info" icon>
                        <v-icon>mdi-refresh</v-icon>
                     </v-btn>
                  </v-list-tile-action>
                  <v-list-tile-content>
                     <v-list-tile-title>重新整理</v-list-tile-title>
                  </v-list-tile-content>
               </v-list-tile>
               <v-list-tile @click.prevent="editStrategy" >
                  <v-list-tile-action>
                     <v-btn class="mr-1" slot="activator"  color="success" icon>
                        <v-icon>mdi-settings</v-icon>
                     </v-btn>
                  </v-list-tile-action>
                  <v-list-tile-content>
                     <v-list-tile-title>策略設定</v-list-tile-title>
                  </v-list-tile-content>
               </v-list-tile>
               <v-list-tile @click.prevent="createStrategy" >
                  <v-list-tile-action>
                     <v-btn slot="activator" color="primary" icon>
                        <v-icon>mdi-plus</v-icon>
                     </v-btn>
                  </v-list-tile-action>
                  <v-list-tile-content>
                     <v-list-tile-title>新增策略</v-list-tile-title>
                  </v-list-tile-content>
               </v-list-tile>
            </v-list>
         </v-menu>
      </v-flex>
      <v-flex xs10 class="d-inline-flex">
         <v-menu 
            v-model="datePickers[0].show"
            :nudge-right="40"  full-width min-width="290px"
            lazy  transition="scale-transition" offset-y
         >
            <v-text-field readonly
               slot="activator" v-model="datePickers[0].val" label="起始日期"
               prepend-icon="mdi-calendar"
            />
            <v-date-picker v-model="datePickers[0].val" locale="zh-cn" full-width
               :min="min_date"
               :max="max_date"
               :allowed-dates="allowedDates"
               @input="onDateChanged()"
            />
         </v-menu>
         <v-menu
            v-model="datePickers[1].show"
            :nudge-right="40"  full-width min-width="290px"
            lazy  transition="scale-transition" offset-y
         >
            <v-text-field readonly
               slot="activator" v-model="datePickers[1].val" label="截止日期"
               prepend-icon="mdi-calendar"
            />
            <v-date-picker v-model="datePickers[1].val" locale="zh-cn" full-width
               :min="min_date"
               :max="max_date"
               :allowed-dates="allowedDates"
               @input="onDateChanged()" 
            />
         </v-menu>
      </v-flex>
      <v-flex xs2 class="text-sm-right">

      </v-flex>
   </v-layout>
   <v-layout v-else row>
      <v-flex xs10 class="d-inline-flex">
         <v-select
            :items="strategy_options"  label="策略"
            v-model="strategyId" @change="onStrategyChanged"
         />
         <v-menu 
            v-model="datePickers[0].show"
            :nudge-right="40"  full-width min-width="290px"
            lazy  transition="scale-transition" offset-y
         >
            <v-text-field readonly
               slot="activator" v-model="datePickers[0].val" label="起始日期"
               prepend-icon="mdi-calendar"
            />
            <v-date-picker v-model="datePickers[0].val" locale="zh-cn"
               :min="min_date"
               :max="max_date"
               :allowed-dates="allowedDates"
               @input="onDateChanged()" 
            />
         </v-menu>
         <v-menu 
            v-model="datePickers[1].show"
            :nudge-right="40"  full-width min-width="290px"
            lazy  transition="scale-transition" offset-y
         >
            <v-text-field readonly
               slot="activator" v-model="datePickers[1].val" label="截止日期"
               prepend-icon="mdi-calendar"
            />
            <v-date-picker v-model="datePickers[1].val" locale="zh-cn"
               :min="min_date"
               :max="max_date"
               :allowed-dates="allowedDates"
               @input="onDateChanged()" 
            />
         </v-menu>
      </v-flex>
      <v-flex xs2 class="text-sm-right">
         <v-tooltip top content-class="top">
            <v-btn @click.prevent="refresh" class="mr-1" slot="activator"  color="info" icon>
               <v-icon>mdi-refresh</v-icon>
            </v-btn>
            <span>重新整理</span>
         </v-tooltip>
         <v-tooltip top content-class="top">
            <v-btn @click.prevent="editStrategy" class="mr-1" slot="activator"  color="success" icon>
               <v-icon>mdi-settings</v-icon>
            </v-btn>
            <span>策略設定</span>
         </v-tooltip>
         <v-tooltip top content-class="top">
            <v-btn @click.prevent="createStrategy" slot="activator"  color="primary" icon>
               <v-icon>mdi-plus</v-icon>
            </v-btn>
            <span>新增策略</span>
         </v-tooltip>
      </v-flex>
   </v-layout>

</template>


<script>
import { mapState } from 'vuex';

export default {
   name: 'ResearchMenu',
   props: {
      strategy_options: {
         type: Array,
         default: null
      },
      strategy_id: {
         type: Number,
         default: 0
      },
      min_date: {
         type: String,
         default: ''
      },
      max_date: {
         type: String,
         default: ''
      },
      empty_dates: {
         type: Array,
         default: null
      },

   },
   computed: {
      ...mapState({
         responsive: state => state.app.responsive,
         key: state => state.watch.key,
         date: state => state.watch.date,
         strategy: state => state.watch.strategy,
         strategies: state => state.watch.strategies,
         realTime: state => state.chart.realTime,
         position: state => state.strategy.position,
         signalPosition: state => state.strategy.signalPosition
      })
   },
   data(){
      return {
         strategyId: 0,
         datePickers: [{
            show: false, val: ''
         },{
            show: false, val: ''
         }],
      }
   },
   watch: {
      strategy_id(){
         this.init();
      }
   },
   methods: {
      init(){
         this.strategyId = this.strategy_id;
      },
      allowedDates(val){
         return this.empty_dates.indexOf(val) < 0
      },
      onStrategyChanged(){

      },
      onDateChanged(){
         // this.showDatePicker = false;
         // this.$store.commit(SET_DATE, Helper.dateNumber(this.dateString));
         // this.fetchQuotes();
      },
      refresh(){

      },
      editStrategy(){

      },
      createStrategy(){

      }

   }
}
</script>