<template>
   <div class="container">
      
      <Bread />
      <v-layout v-if="noSubscribe" row wrap>
         <v-flex xs12>
            <v-alert :value="true"  color="error"  icon="mdi-alert" outline  class="title">
               <span class="cn" >
                  您還沒有完成訂閱或者不在訂閱期間內
               </span>  
            </v-alert>
         </v-flex>
      </v-layout>
      <v-card v-if="model">
         <v-card-text>
            <v-layout row>
               <v-flex xs12 sm4 md4>
                  <v-select 
                     :items="strategyOptions"  label="策略"
                     v-model="strategyId" @change="onStrategyChanged"
                  />
               </v-flex>
               <v-flex xs12 sm4 md4>
                  <v-menu
        :close-on-content-click="false"
        v-model="menu2"
        :nudge-right="40"
        lazy
        transition="scale-transition"
        offset-y
        full-width
        min-width="290px"
      >
        <v-text-field
          slot="activator"
          v-model="date"
          label="日期"
          prepend-icon="mdi-canlendar"
          readonly
        ></v-text-field>
        <v-date-picker v-model="date" locale="zh-cn" @input="menu2 = false">

        </v-date-picker>
      </v-menu>
               </v-flex>
               <v-flex xs12 sm4 md4 class="text-sm-right">
                  <v-tooltip top content-class="top">
                     <v-btn class="mr-2" slot="activator"  color="info" icon>
                        <v-icon>mdi-refresh</v-icon>
                     </v-btn>
                     <span class="cn">重新整理</span>
                  </v-tooltip>
                  <v-tooltip top content-class="top">
                     <v-btn class="mr-2" slot="activator"  color="success" icon>
                        <v-icon>mdi-settings</v-icon>
                     </v-btn>
                     <span class="cn">設定</span>
                  </v-tooltip>
               </v-flex>
            </v-layout>
            <v-layout row>
               <!-- <charts-default /> -->
            </v-layout>
         </v-card-text>
      </v-card>
   </div>
   
</template>

<script>
import { mapState } from 'vuex';

import { INIT_WATCH } from '../store/actions.type';
import Bread from '../components/TheBread';
import ChartsDefault from '../components/charts/Default';

export default {
   name: 'WatchView',
   components: {
      Bread,
      'charts-default' : ChartsDefault
   },
   data () {
      return {
         noSubscribe: false,
         strategyId: 0,
         date: new Date().toISOString().substr(0, 10),
      menu: false,
      modal: false,
      menu2: false
      }
   },
   computed: {
      ...mapState({
         model: state => state.watch.model,
         strategy: state => state.watch.strategy,
      }),
      strategyOptions(){
         if(!this.model) return [];
         return this.model.strategies.map(item => ({
               value: item.id, text: item.name 
             }))
      }
   },
   beforeMount(){
		this.init();
   },
   methods: {
		init(){
         this.initResult = -1;
         this.$store.dispatch(INIT_WATCH)
            .then(result => {
               if(result){
                  this.strategyId = this.strategy.id;
               }else{
                  //沒有訂閱
                  this.model = null;
                  this.noSubscribe = true;
               }        
            }).catch(error => {
               Bus.$emit('errors', error);
            })
      },
      onStrategyChanged(){
         alert(this.strategyId);
      }
   }
}
</script>

