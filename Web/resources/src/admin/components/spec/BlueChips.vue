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
            <li style="color:red">
               『多方能量』與『空方能量』應如何計算? 這是我沒想通的。
            </li>
         </ul>
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
