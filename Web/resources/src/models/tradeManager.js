class TradeManager {
   
   times = [];
   trades = [];
   quotes = [];
   stpw = 0;
   stpl = 0;

   constructor(quotes, stpw, stpl) {
      this.quotes = quotes;
      this.stpw = stpw;
      this.stpl = 0 - stpl;
      this.trades = [];

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

   getPrice(index){
      return this.quotes[index].price;    
   }

   getTradePrice(index){
      return this.getPrice(index);
      //return this.prices[index + 1].open;    
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

   getPositionProfit(index){
      let currentPosition = this.getPosition(index);
      if(!currentPosition) return 0;
      
      if(currentPosition.val > 0){
         return currentPosition.price - this.getPrice(index);
      }else if(currentPosition.val < 0){
         return this.getPrice(index) - currentPosition.price;
      }else return 0;

   }

   getSignalPosition(index){
      let trades = this.trades.filter(item => item.index <= index);
      try{
         if(trades){
            let signalPosition = null;
            for (let i = trades.length - 1; i >=0; i--) {
               if(!isStopTrade(trades[i])){
                  signalPosition = trades[i];
                  break;
               }
            }
            console.log('signalPosition', signalPosition);
            return signalPosition;
         }else{
            return null;
         }
      }catch(e){
         console.log(e);
      }
      
   }

   getSignalPositionVal(index){
      let signalPosition = this.getSignalPosition(index);
      if(!signalPosition) return 0;
      return signalPosition.val;
   }

   

   checkSTP(profit){
      if(this.stpw !== 0 && profit >= this.stpw) return 1;
      else if(this.stpl !== 0 && profit <= this.stpl) return -1;
      return 0;
   }

   isStopTrade(trade){
      return trade.stp !== 0;
   }

   getProfit(index, price = 0){
      let profit = 0;
      let currentPosition = this.getPosition(index);
      if(currentPosition){
         if(!price) price = this.getPrice(index);   
         if(currentPosition.val > 0){
            profit = price - currentPosition.price;
         }else if(currentPosition.val < 0){
            profit = currentPosition.price - price;
         }

      }

      return profit;
   }

   onSignal(signal, dataIndex){
      let profit = this.getProfit(dataIndex);
      
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
               this.stpOut(dataIndex, stp, profit);
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
               this.stpOut(dataIndex, stp, profit);
            }
         } 
      }else{
         console.log('現沒部位. signal = ', signal);
         //現沒部位
         //查看信號部位
         let signalPositionVal = this.getSignalPositionVal;
         if(signal > 0){
            if(signalPositionVal > 0){

            }else{
               this.onBuy(dataIndex);
            }
         }else if(signal < 0){
            if(signalPositionVal < 0){

            }else{
               this.onSell(dataIndex);
            }
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

   stpOut(dataIndex, stp, profit){
      let text = stp > 0 ? '停利出場' : '停損出場';

      this.addTrade({
         index: dataIndex,
         time: this.times[dataIndex],
         val: 0,
         price: this.getTradePrice(dataIndex),
         text: text,
         result: profit,
         stp: stp
      }); 
   }

   //平倉出場
   out(dataIndex){
      let text = '平倉出場';
      let tradePrice = this.getTradePrice(dataIndex);
      let profit = this.getPositionProfit(dataIndex, tradePrice);
      
      this.addTrade({
         index: dataIndex,
         time: this.times[dataIndex],
         val: 0,
         price: tradePrice,
         text: text,
         result: profit,
         stp: 0
      });     
   }

   //進場
   in(dataIndex, val){
      this.addTrade({
         index: dataIndex,
         time: this.times[dataIndex],
         val: val,
         price: this.getTradePrice(dataIndex),
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