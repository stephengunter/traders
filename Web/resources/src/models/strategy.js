import Indicator from './indicator';
import TradeManager from './tradeManager';

class Strategy {

   signals = [];
   quotes = [];

   constructor(data, indicators, quotes) {
      this.tradeManager = new TradeManager(quotes, data.stpw, data.stpl);

      this.quotes = quotes;

      for (let property in data) {
         this[property] = data[property];
      }

      this.indicators = indicators.map(indicator => {
         let settings = this.getIndicatorSettings(indicator.id);
         let beginTimeIndex = this.tradeManager.getTimeIndex(indicator.begin);
         return new Indicator(indicator, settings.arg, beginTimeIndex, quotes);
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

   updateDataList(quote){
      let dataList = quote.dataList;
      for (let i = 0; i < dataList.length; i++) {
         let data = dataList[i];
         let indicator = this.getIndicator(data.indicator);
         let index = indicator.data.findIndex(d => d.time == quote.time);
         indicator.data.splice(index, 1, data);
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

   calculate(startIndex = 0){
      
      return new Promise((resolve, reject) => {
         for (let i = 0; i < this.indicators.length; i++) {
            this.indicators[i].calculate(startIndex);
         }
         
         for (let index = startIndex; index < this.quotes.length; index++) {
            let dataList = [];
            for (let j = 0; j < this.indicators.length; j++) {
               let data = this.indicators[j].data[index];
               dataList.push({
                  indicator: data.indicator,
                  signal : data.signal
               });
            }
   
            this.calculateItem(index, dataList);
         }
         resolve(true);
         
      });
      
   }

   calculateItem(index, dataList){
      let signal = 0;
      if(index < this.endSignalTime){
         let sum = 0;
         for (let i = 0; i < dataList.length; i++) {
            sum += dataList[i].signal;
         }

         if(sum == dataList.length) signal = 1;
         else if(sum == (0 - dataList.length)) signal = -1;
      }

      this.tradeManager.onSignal(signal, index);
      
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

   getLatestSignalPosition(){
      return this.tradeManager.getSignalPosition(0);
   }

   getLatestTradePosition(){
      return this.tradeManager.getPosition(0);
   }

   
}


export default Strategy;