import Indicator from './indicator';
import TradeManager from './tradeManager';

class Strategy {

   signals = [];

   constructor(data, indicators) {
      this.tradeManager = new TradeManager(data.stpw, data.stpl);

      for (let property in data) {
         this[property] = data[property];
      }

      this.indicators = indicators.map(indicator => {
         let settings = this.getIndicatorSettings(indicator.id);
         let beginTimeIndex = this.tradeManager.getTimeIndex(indicator.begin);
         return new Indicator(indicator, settings.arg, beginTimeIndex);
      });

      this.endSignalTime = this.tradeManager.getTimeIndex(133000);
   }

   addDataList(dataList){
      for (let i = 0; i < dataList.length; i++) {
         let data = dataList[i];
         let indicator = this.getIndicator(data.indicator);
         indicator.data.push(data);
      }
   }

   getIndicator(entity){
      return this.indicators.find(i => i.entity == entity);
   }

   getMainIndicators(){
      return this.indicators.filter(item => item.main);
   }

   getSubIndicators(){
      return this.indicators.filter(item => !item.main);
   }
      

   getIndicatorSettings(id){
      return this.indicatorSettings.find(item => item.indicatorId == id);
   }

   calculate(quotes, startIndex = 0){
      return new Promise((resolve, reject) => {
         try { 
            for (let i = 0; i < this.indicators.length; i++) {
               this.indicators[i].calculate(quotes, startIndex);
            }
      
            for (let index = startIndex; index < quotes.length; index++) {
               let dataList = [];
               for (let j = 0; j < this.indicators.length; j++) {
                  let data = this.indicators[j].data[index];
                  dataList.push({
                     indicator: data.indicator,
                     signal : data.signal
                  });
               }
      
               this.calculateItem(index, dataList, quotes[index]);
            }
            resolve(true);
         }
         catch (error) {
            reject(error); 
         }
         
      });
      
   }

   calculateItem(index, dataList, quote){
      let signal = 0;
      if(index < this.endSignalTime){
         let sum = 0;
         for (let i = 0; i < dataList.length; i++) {
            sum += dataList[i].signal;
         }

         if(sum == dataList.length) signal = 1;
         else if(sum == (0 - dataList.length)) signal = -1;
      }

      let profit = 0;
      let currentPosition = this.getPosition(index);
      if(currentPosition){
         let price = quote.price;
        
         if(currentPosition.val > 0){
            profit = price - currentPosition.price;
         }else if(currentPosition.val < 0){
            profit = currentPosition.price - price;
         }
      }

      this.tradeManager.onSignal(signal, index, profit);
      
   }

   getIndicatorSignal(entity, dataIndex){
      let indicator = this.getIndicator(entity);
      return indicator.data[dataIndex].signal;
   }

   getTrades(){
      return this.tradeManager.getTrades();        
   }

   getPosition(index){
      return this.tradeManager.getPosition(index);
   }

   
}


export default Strategy;