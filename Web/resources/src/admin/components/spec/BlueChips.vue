<template>
   <v-layout row wrap>
      <v-flex sm12>
         <v-data-table :headers="headers" :items="symbols" hide-actions>
            <template slot="headerCell" slot-scope="{ header }">
               <span class="subheading font-weight-light text-success text--darken-3 cn">
                  {{ header.text }}
               </span>
            </template>
            <template slot="items" slot-scope="props">
               <td class="cn">{{ props.item.symbol }}</td>
               <td>{{ props.item.weight }}</td>
               <td>{{ props.item.price }}</td>
               <td v-text="getRatio(props.item)"></td>
            </template>
         </v-data-table>
      </v-flex>
      <v-flex sm12 class="cn">
         <h2 class="font-weight-light mb-4"> <span class="cn">藍籌股指標</span></h2>
         <h5 class="cn">
            <span class="cn">定義與說明</span> 
         </h5>
         <ul>
            <li>
               以台積電為基準,另選49檔權值股,其相對於台積電的比例為 (股價/台積電股價) x (權值/台積電權值) 
            </li>
            <li>
               以上表鴻海為例,計算比例得到 0.0632 可解釋為『以權值角度，一張鴻海相當於0.0632張台積電』
            </li>
            <li>
               記錄權值股的每筆報價(Tick),可得其『多方量』(參照第一頁報價資料說明)
            </li>
            <li>
               最後計算方式，給定一個時間範圍例如 10:30:00 ~ 10:31:00，預計回傳兩個數字『多方能量』與『空方能量』
            </li>
            <li>
               『多方能量』 = 多方量張數. 『空方能量』 = 空方量張數. 
            </li>
         </ul>
         <h5>
            <span class="cn">圖形呈現</span>
         </h5>
         <ul>
            <li>
               參數範圍：1 到 60
            </li>
            <li>
               柱狀圖：數值 = (開盤起至給定時間止)累計多方能量 - 累計空方能量
            </li>
            <li>
               平均線：(參數n分鐘)內的數值平均
            </li>
         </ul>
         <h5>
            <span class="cn">信號判斷</span>
         </h5>
         <ul>
            <li>
               如數值大於均線則輸出信號1 ,   數值小於均線則輸出信號-1
            </li>
         </ul>
         
         
      </v-flex>
      <v-flex sm6 class="cn">
         <v-img :aspect-ratio="548/169"  class="white--text" src="https://n3s5qg.ch.files.1drv.com/y4mj0hsZC2a_ibUXzboF_pJcndsACBdw7go1g-2AmXNsSk1QHXMun5JtmJ-9oRS1AukwYgxxfVYA77YD2aMySF4d17PbCGcC-IhLPgftXuJPo-rj-8jqK70JXNcgQ3jfhT0CybkWaR7VGQWvatVcPc8eqOqQcEeUp3JfhGxRqL-dQMWcew_kRrj12U-mlFiXEJE">
         <v-container fill-height fluid>
            <v-layout fill-height>
               <v-flex xs12 align-end flexbox>
                  <div class="headline ">
                     <span class="cn">指標圖形範例 紅色柱狀圖代表信號為1，綠色代表信號為-1</span>
                  </div>
                  
               </v-flex>
            </v-layout>
         </v-container>
      </v-img>
      </v-flex>
      <v-flex sm6 class="cn">
      </v-flex>
   </v-layout>
</template>

<script>
export default {
   data () {
		return {
			headers: [
				{
					sortable: false,
					text: '商品',
					value: 'symbol'
            },
            {
					sortable: false,
					text: '權重 (%)',
					value: 'weight'
				},
				{
					sortable: false,
					text: '成交價',
					value: 'price'
            },
            {
					sortable: false,
					text: '比例',
					value: 'ratio'
            }
         ],
         symbols: [{
            symbol: '台積電',
            weight: '21.1929',
            price: 221,
            ratio: 1
         },{
            symbol: '鴻海',
            weight: '4.2131',
            price: 70.3,
            ratio: 0
         },{
            symbol: '台塑化',
            weight: '3.7738',
            price: 111,
            ratio: 0
         }]
			
		}
   },
   methods: {
		getRatio(item){
         if(item.ratio) return item.ratio;
         let baseStock = this.symbols[0];
         
         let ratio = (item.price / baseStock.price) * (item.weight / baseStock.weight);
         return Math.round(ratio * 10000)/ 10000;
      }
	}
}
</script>
