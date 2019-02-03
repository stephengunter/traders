import Indicator from './indicator';

class Strategy {

   signals = [];

   constructor(data, indicators) {
      for (let property in data) {
         this[property] = data[property];
      }

      this.indicators = indicators.map(indicator => {
         let settings = this.getIndicatorSettings(indicator.id);
         return new Indicator(indicator, settings.arg);
      });
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

   calculate(quotes){
      for (let i = 0; i < this.indicators.length; i++) {
         this.indicators[i].calculate(quotes);
      }

      for (let index = 0; index < quotes.length; index++) {
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
      
   }

   calculateItem(index, dataList){
      let sum = 0;
      for (let i = 0; i < dataList.length; i++) {
         sum += dataList[i].signal;
      }

      if(sum == dataList.length){
         this.signals.push({
            index: index,
            val: 1
         });
      }else if(sum == (0 - dataList.length)){
         this.signals.push({
            index: index,
            val: -1
         });
      } 
   }

   
}


export default Strategy;