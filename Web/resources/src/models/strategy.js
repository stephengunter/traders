import Indicator from './indicator';
import TradeManager from './tradeManager';

class Strategy {

   signals = [];
   dateQuotes = [];
   quotes = [];
   date = 0;

   constructor(model, indicators, dateQuotes, date = 0) {
      for (let property in model) {
         this[property] = model[property];
      }

      this.dateQuotes = dateQuotes;

      if(date){
         let model = dateQuotes.find(item => item.date === date);
         this.quotes = model.quotes;
         this.date = date;
      }else{
         this.quotes = dateQuotes[0].quotes;
         this.date = dateQuotes[0].date;
      } 
      
      this.tradeManager = new TradeManager(this.quotes, this.stpw, this.stpl);

      this.indicators = [];
      for (let i = 0; i < indicators.length; i++) {
         let indicator = indicators[i];
         let settings = this.getIndicatorSettings(indicator.id);
         if(!settings) continue;

         let beginTimeIndex = this.tradeManager.getTimeIndex(indicator.begin);
         this.indicators.push(new Indicator(indicator, settings.arg, beginTimeIndex, this.quotes));
      }
      this.endSignalTime = this.tradeManager.getTimeIndex(133000);
   }

   setDate(date){
      if(date === this.date) return;

      let model = this.dateQuotes.find(item => item.date === date);
      this.quotes = model.quotes;
      
      this.tradeManager = new TradeManager(this.quotes, this.stpw, this.stpl);
      this.indicators.forEach(indicator => indicator.setQuotes(this.quotes));
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
               let data = this.indicators[j].getData(index);
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
      indicator.getData(dataIndex).signal;
   }

   getTradeItems(){
      return this.tradeManager.tradeItems;
   }

   getTradeResult(){
      return this.tradeManager.result;     
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