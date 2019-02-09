<template>
   <v-layout row wrap>
      <v-flex sm12 class="cn">
         <h2 class="font-weight-light mb-4"> <span class="cn">策略</span></h2>
         <ul>
            <li>
               使用者可以自定多個策略，一個策略可以選擇多個指標，每個指標可以設定不同的參數
            </li>
            <li>
               策略可以設定停損點與停利點。就是說當持倉損失(獲利)超過停損點(停利點)時，輸出停損(停利)信號。
            </li>
            <li>
               當根K線中，當策略的每一個指標信號皆為1時，輸出多方信號。每一個指標信號皆為-1時，輸出空方信號
            </li>
            
         </ul>
      </v-flex>
   </v-layout>
</template>

<script>
export default {
   data () {
		return {
			
			
		}
   },
   methods: {
		
	}
}
</script>
