
class Strategy {
   
   signals = [];

   constructor(data) {
      for (let property in data) {
         this[property] = data[property];
      }
   }

   getIndicatorSettings(id){
      return this.indicatorSettings.find(item => item.indicatorId == id);
   }

   calculate(index, dataList){
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