class TradeManager {
   
   times = [];

   constructor() {
      this.trades = [];
      this.position = 0;

      let time = 84600;
      while (time <= 134500) {
         if(time === 86000) time = 90000;
         else if(time === 96000) time = 100000;
         else if(time === 106000) time = 110000;
         else if(time === 116000) time = 120000;
         else if(time === 126000) time = 130000;

         this.times.push(time);
         time += 100;
      }

   }

   getTimeIndex(time){
    return this.times.indexOf(time);
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