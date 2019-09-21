import Trade from './trade';
import DayTradeResult from './dayTradeResult';

class TradeManager {
   constructor(stpw, stpl, cost = 0) {
      this._quotes = [];
      this._stpw = stpw;
      this._stpl = 0 - stpl;
      this._cost = cost;
      this._tradeItems = [];
      this._times = [];

      let time = 84600;
      while (time <= 134500) {
         if(time === 86000) time = 90000;
         else if(time === 96000) time = 100000;
         else if(time === 106000) time = 110000;
         else if(time === 116000) time = 120000;
         else if(time === 126000) time = 130000;

         this._times.push(time);
         time += 100;
      }

   }

   init(date, quotes){
      this._date = date;
      this._quotes = quotes;
      this._tradeItems = [];
   }

   get tradeItems() {
      return this._tradeItems;
   }

   get result() {
      if(!this._tradeItems) return null;
      
      let tradeItems = this._tradeItems;
      let trades = [];
      
      try{
         for (let i = 0; i < tradeItems.length; i++) {
         
            if(i % 2 === 0){
               let inTrade = tradeItems[i];
               let outTrade = (i === tradeItems.length - 1) ? null : tradeItems[i + 1];
   
               trades.push(new Trade(inTrade, outTrade));
            }
         }
   
         return new DayTradeResult(this._date, trades, this._cost);
      }
      catch(e){
         console.log(e);
         return null; 
      }


      
   }

   getTimeIndex(time){
      return this._times.indexOf(time);
   }

   getPrice(index){
      return this._quotes[index].price;    
   }

   getTradePrice(index){
      return this.getPrice(index);
      //return this.prices[index + 1].open;    
   }
   

   getPosition(index){
      let tradeItems = this._tradeItems;
      if(index > 0) tradeItems = tradeItems.filter(item => item.index <= index);

      if(tradeItems){
         return tradeItems[tradeItems.length - 1];
      }else{
         return null;
      }
   }
   getPositionVal(index){
      let currentPosition = this.getPosition(index);
      if(!currentPosition) return 0;
      return currentPosition.val;
   }

   getSignalPosition(index){
      let tradeItems = this._tradeItems;
      if(index > 0) tradeItems = tradeItems.filter(item => item.index <= index);

      if(tradeItems){
         let signalPosition = null;
         for (let i = tradeItems.length - 1; i >=0; i--) {
            
            if(tradeItems[i].val !== 0 ){
               signalPosition = tradeItems[i];
               break;
            }
         }
         
         return signalPosition;
      }else{
         return null;
      }
      
   }

   getSignalPositionVal(index){
      let signalPosition = this.getSignalPosition(index);
      if(!signalPosition) return 0;
      return signalPosition.val;
   }

   

   checkSTP(profit){
      if(this._stpw !== 0 && profit >= this._stpw) return 1;
      else if(this._stpl !== 0 && profit <= this._stpl) return -1;
      return 0;
   }

   isStopTrade(tradeItem){
      return tradeItem.stp !== 0;
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
      this.removeTrade(dataIndex);

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
         //現沒部位
         //查看信號部位
         let signalPositionVal = this.getSignalPositionVal(dataIndex);
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
         time: this._times[dataIndex],
         val: 0,
         price: this.getTradePrice(dataIndex),
         text: text,
         profit: profit,
         stp: stp
      }); 
   }

   //平倉出場
   out(dataIndex){
      let text = '平倉出場';
      let tradeItemPrice = this.getTradePrice(dataIndex);
      let profit = this.getProfit(dataIndex, tradeItemPrice);
      
      this.addTrade({
         index: dataIndex,
         time: this._times[dataIndex],
         val: 0,
         price: tradeItemPrice,
         text: text,
         profit: profit,
         stp: 0
      });     
   }

   //進場
   in(dataIndex, val){
      this.addTrade({
         index: dataIndex,
         time: this._times[dataIndex],
         val: val,
         price: this.getTradePrice(dataIndex),
         text: val > 0 ? '多單進場' : '空單進場',
         profit: 0,
         stp: 0
      });
   }

   removeTrade(dataIndex){
      let existIndex = this._tradeItems.findIndex(item => item.index === dataIndex);
      if(existIndex >= 0 ){
         this._tradeItems.splice(existIndex, 1);
      }
   }

   addTrade(tradeItem){
      this._tradeItems.push(tradeItem);      
   }



   
}


export default TradeManager;