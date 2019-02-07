class TradeManager {
   
   times = [];

   constructor(stpw, stpl) {
      this.trades = [];
      this.stpw = stpw;
      this.stpl = 0 - stpl;

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

   getPosition(index){
      let trades = this.trades.filter(item => item.index <= index);
      if(trades){
         return trades[trades.length - 1];
      }else{
         return null;
      }
      
   }

   getPositionVal(index){
      let currentPosition = this.getPosition(index);
      if(!currentPosition) return 0;
      return currentPosition.val;
   }

   checkSTP(profit){
      if(this.stpw !== 0 && profit >= this.stpw) return 1;
      else if(this.stpl !== 0 && profit <= this.stpl) return -1;
      return 0;
   }

   onSignal(signal, dataIndex, profit){
      let currentPositionVal = this.getPositionVal(dataIndex);
      if(currentPositionVal > 0){
         //現有多單
         if(signal < 0){
            //信號空 
            this.onSell(dataIndex);
         }else {
             //信號多 或 沒信號 
            let stp = this.checkSTP(profit);
            if(stp !== 0){
               this.out(dataIndex, stp);
            }
         }   
      }else if(currentPositionVal < 0){
         //現有空單
         if(signal > 0){
             //信號多 
            this.onBuy(dataIndex);
         }else {
             //信號空 或 沒信號 
            let stp = this.checkSTP(profit);
            if(stp !== 0){
               this.out(dataIndex, stp);
            }
         } 
      }else{
          //現沒部位
         if(signal > 0){
            //信號多 
            this.onBuy(dataIndex);
         }else if(signal < 0){
            //信號空 或 沒信號 
            this.onSell(dataIndex);
         } 
      }
      
   }

   onBuy(dataIndex){
      let currentPositionVal = this.getPositionVal(dataIndex);
      if(currentPositionVal > 0) return;

      if(currentPositionVal < 0){
         this.out(dataIndex);
      }

      this.in(dataIndex, 1);

   }

   onSell(dataIndex){
      let currentPositionVal = this.getPositionVal(dataIndex);
      if(currentPositionVal < 0) return;

      if(currentPositionVal > 0){
         this.out(dataIndex);
      }

      this.in(dataIndex, -1);
   }

   //平倉出場
   out(dataIndex, stp){
      let text = '平倉出場';
      if(stp > 0) text = '停利出場';
      else if(stp < 0) text = '停損出場';
      this.addTrade({
         index: dataIndex,
         time: this.times[dataIndex],
         val: 0,
         price: 0,
         text: text,
         result: 0,
         stp: stp
      });     
   }

   //進場
   in(dataIndex, val){
      this.addTrade({
         index: dataIndex,
         time: this.times[dataIndex],
         val: val,
         price: 0,
         text: val > 0 ? '多單進場' : '空單進場',
         result: 0,
         stp: 0
      });
   }

   addTrade(trade){
      this.trades.push(trade);
   }



   
}


export default TradeManager;