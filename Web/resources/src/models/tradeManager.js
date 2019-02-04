class TradeManager {

   constructor() {
      this.trades = [];
      this.position = 0;
   }

   getTrades(){
      return this.trades;
   }

   onSignal(signal, dataIndex){
      if(signal > 0){
         this.onBuy(dataIndex);
      }else if(signal < 0){
         this.onSell(dataIndex);
      }
   }

   onBuy(dataIndex){
      if(this.position > 0) return;

      if(this.position < 0){
         this.out(dataIndex);
      }

      this.in(dataIndex, 1);

   }

   onSell(dataIndex){
      if(this.position < 0) return;

      if(this.position > 0){
         this.out(dataIndex);
      }

      this.in(dataIndex, -1);
   }

   //平倉出場
   out(dataIndex){
      this.addTrade({
         index: dataIndex,
         val: 0
      });  
      this.position = 0;    
   }

   //進場
   in(dataIndex, val){
      this.addTrade({
         index: dataIndex,
         val: val
      });
      this.position = val;    
   }

   addTrade(trade){
      this.trades.push(trade);
   }



   
}


export default TradeManager;