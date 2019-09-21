class Indicator {

   quotes = [];
   dataList = [];
   param = 0;
   beginTimeIndex = 0;

   buySignalIndexes = []
   sellSignalIndexes = [];

   constructor(model, param, beginIndex, quotes) {
      
      for (let property in model) {
         this[property] = model[property];
      }
      this.quotes = quotes;
      this.dataList = quotes.map(q => q.dataList.find(data => data.indicator == this.entity));

      
      if(param)  this.param = param;
      else this.param = this.defaultParam;

      this.beginTimeIndex = beginIndex;
     
   }

   setQuotes(quotes){
      this.quotes = quotes;
      this.dataList = quotes.map(q => q.dataList.find(data => data.indicator == this.entity));
      
      this.buySignalIndexes = [];
      this.sellSignalIndexes = [];
   }

   getData(index){
      return this.dataList[index];
   }

   getQuotePrice(index){
      return this.quotes[index].price;
   }

   addSignal(val, index){
      let bIndex = this.buySignalIndexes.indexOf(index);
      let sIndex = this.sellSignalIndexes.indexOf(index);
      if(val > 0 ){
         if(bIndex < 0 ){
            this.buySignalIndexes.push(index);
         }
         if(sIndex >= 0 ){
            this.sellSignalIndexes.splice(sIndex, 1);
         }
      }else if(val < 0 ){
         if(sIndex < 0 ){
            this.sellSignalIndexes.push(index);
         }
         if(bIndex >= 0 ){
            this.buySignalIndexes.splice(bIndex, 1);
         }         
      }else {
         if(bIndex >= 0 ){
            this.buySignalIndexes.splice(bIndex, 1);
         }
         if(sIndex >= 0 ){
            this.sellSignalIndexes.splice(sIndex, 1);
         }
      }
      
   }

   calculate(startIndex = 0){
      if(this.entity === 'BlueChips' || this.entity === 'Powers'){
         this.calculatePowers(startIndex);
      }else if(this.entity === 'Prices'){
         this.calculatePrices(startIndex);
      }
   }

   getSumVal(index){
      let sum = 0;
      for(let i = 0; i <= index; i++){
         sum += Number(this.dataList[i].val);
      }
      return sum;
   }


   calculatePowers(startIndex = 0){
      for(let i = startIndex; i < this.dataList.length; i++){
         let item = this.dataList[i];   
         if(this.isDataInTime(item)){
            let sum = this.getSumVal(i);
            item.result = sum;
            item.avg = this.countAvg(i);
            item.signal = this.createSignal(i);
         }else{
            item.result = 0;
            item.avg = 0;
            item.signal = 0;   
         }

         this.addSignal(item.signal, i);
      }
   }

   calculatePrices(startIndex = 0){
      for(let i = startIndex; i < this.dataList.length; i++){
         let item = this.dataList[i];   
         if(this.isDataInTime(item)){
            if(this.canCountAvg(i)){
               let avg = this.countAvg(i);
               let val = this.getQuotePrice(i) - avg;
               item.result = Math.round(val * 100) / 100;
               item.signal = this.createSignal(i);
            }else{
               item.result = 0;
               item.signal = 0;  
            }
            
         }else{
            item.result = 0;
            item.signal = 0;   
         }

         this.addSignal(item.signal, i);
      }
   }

   isDataInTime(data){
      return data.time > this.begin && data.time <= this.end;
   }

   canCountAvg(index){
      return index >= (this.beginTimeIndex + this.param);
   }

   countAvg(index){
      let startIndex = index - this.param + 1;
      if(startIndex < 0) return 0;
      let sum = 0;

      if(this.entity === 'BlueChips' || this.entity === 'Powers'){
        
         for(let i = startIndex; i <= index; i++){
            sum += this.dataList[i].result;
         }
       
      }else if(this.entity === 'Prices'){
         
         for(let i = startIndex; i <= index; i++){
            sum += Number(this.dataList[i].val);
         }
         
      }

      return sum == 0 ? 0 : Math.round((sum / this.param) * 100) / 100;

      
   }

   createSignal(index){
      let data = this.dataList[index];
      if(this.entity === 'BlueChips' || this.entity === 'Powers'){
         if(data.result > data.avg){
            return 1;
         }else if(data.result < data.avg){
            return -1;
         } 
         else return 0;
      }else if(this.entity === 'Prices'){
         if(data.result > 1){
            return 1;
         }else if(data.result < -1){
            return -1;
         }
         else return 0;
      }

   }

   mapChartResult(startIndex = 0){
      let results = [];
      for(let i = startIndex; i < this.dataList.length; i++){
         let item = this.dataList[i];
         if(item.hasOwnProperty('result')){
            results.push({
               index: i,
               result: item.result
            });
         }else{
            results.push({
               index: i,
               result: item.val
            });
         }
      }
      return results; 
   }

   mapChartAvg(startIndex = 0){
      let results = [];
      for(let i = startIndex; i < this.dataList.length; i++){
         let item = this.dataList[i];
         results.push({
            index: i,
            avg: item.avg
         });
      }

      return results;
      
   }

   
}


export default Indicator;