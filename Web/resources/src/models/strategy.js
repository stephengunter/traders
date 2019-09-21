import Indicator from './indicator';
import TradeManager from './tradeManager';

class Strategy {

   constructor(model, indicators, dateQuotesList) {
      
      this._indicators = [];
      this._quotes = [];

      for (let property in model) {
         this[property] = model[property];
      }

      this._dateQuotesList = dateQuotesList;
      
      this._tradeManager = new TradeManager(this.stpw, this.stpl, this.cost);

      
      for (let i = 0; i < indicators.length; i++) {
         let indicator = indicators[i];
         let settings = this.getIndicatorSettings(indicator.id);
         if(!settings) continue;

         let beginTimeIndex = this._tradeManager.getTimeIndex(indicator.begin);
         this._indicators.push(new Indicator(indicator, settings.arg, beginTimeIndex, this._quotes));
      }
      this._endSignalTime = this._tradeManager.getTimeIndex(133000);
   }

   init(date){
      
      this._date = date;
      
      let model = this._dateQuotesList.find(item => item.date === date);
      if(model) this._quotes = model.quotes;
      else this._quotes = [];
      
      this._tradeManager.init(this._date, this._quotes);

      let indicators = this._indicators;
      for (let i = 0; i < indicators.length; i++) {
         indicators[i].setQuotes(this._quotes);
      }
   }

   get date() {
      return this._date;
   }
   get quotes() {
      return this._quotes;
   }
   get indicators() {
      return this._indicators;
   }
   get tradeResult(){
      return this._tradeManager.result;     
   }
   get latestTradePosition(){
      return this._tradeManager.getPosition(0);
   }
   get latestSignalPosition(){
      return this._tradeManager.getSignalPosition(0);
   }

   addDataList(dataList){
      for (let i = 0; i < dataList.length; i++) {
         let data = dataList[i];
         let indicator = this.getIndicator(data.indicator);
         indicator.dataList.push(data);
      }
   }

   updateDataList(quote){
      let dataList = quote.dataList;
      for (let i = 0; i < dataList.length; i++) {
         let data = dataList[i];
         let indicator = this.getIndicator(data.indicator);
         let index = indicator.dataList.findIndex(d => d.time == quote.time);
         indicator.dataList.splice(index, 1, data);
      }
   }

   getIndicator(entity){
      return this._indicators.find(i => i.entity == entity);
   }

   getMainIndicators(){
      return this._indicators.filter(item => item.main);
   }

   getSubIndicators(){
      return this._indicators.filter(item => !item.main);
   }

   getIndicatorSettings(id){
      return this.indicatorSettings.find(item => item.indicatorId == id);
   }

   calculate(startIndex = 0){
      return new Promise((resolve, reject) => {
         for (let i = 0; i < this._indicators.length; i++) {
            this._indicators[i].calculate(startIndex);
         }
         
         for (let index = startIndex; index < this._quotes.length; index++) {
            let dataList = [];
            for (let j = 0; j < this._indicators.length; j++) {
               let data = this._indicators[j].getData(index);
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
      if(index < this._endSignalTime){
         let sum = 0;
         for (let i = 0; i < dataList.length; i++) {
            sum += dataList[i].signal;
         }

         if(sum == dataList.length) signal = 1;
         else if(sum == (0 - dataList.length)) signal = -1;
      }

      this._tradeManager.onSignal(signal, index);
      
   }

   getIndicatorSignal(entity, dataIndex){
      let indicator = this.getIndicator(entity);
      indicator.getData(dataIndex).signal;
   }

   getTradeItems(){
      return this._tradeManager.tradeItems;
   }

   getTradeResult(){
      return this._tradeManager.result;     
   }

   getPosition(index){
      return this._tradeManager.getPosition(index);
   }

   getLatestSignalPosition(){
      return this._tradeManager.getSignalPosition(0);
   }

   getLatestTradePosition(){
      return this._tradeManager.getPosition(0);
   }

   
}


export default Strategy;