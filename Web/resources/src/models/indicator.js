
class Indicator {

   quotes = [];
   data = [];
   param = 0;

   beginTimeIndex = 0;

   buySignalIndexes = []
   sellSignalIndexes = [];

   constructor(model, param, beginIndex, quotes) {
      for (let property in model) {
         this[property] = model[property];
      }

      this.quotes = quotes;
      this.data = quotes.map(q => q.dataList.find(data => data.indicator == this.entity));

      
      if(param)  this.param = param;
      else this.param = this.defaultParam;

      this.beginTimeIndex = beginIndex;
     
   }

   getQuotePrice(index){
      return this.quotes[index].price;
   }

   calculate(startIndex = 0){

      if(this.entity === 'BlueChips' || this.entity === 'Powers'){
         this.calculatePowers(startIndex);
      }else if(this.entity === 'Prices'){
         for(let i = startIndex; i < this.data.length; i++){
            let item = this.data[i];   
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
         }
      }
   }

   getSumVal(index){
      
      let sum = 0;
      for(let i = 0; i <= index; i++){
         sum += Number(this.data[i].val);
      }
      return sum;
   }


   calculatePowers(startIndex = 0){
      for(let i = startIndex; i < this.data.length; i++){
         let item = this.data[i];   
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
            sum += this.data[i].result;
         }
       
      }else if(this.entity === 'Prices'){
         
         for(let i = startIndex; i <= index; i++){
            sum += Number(this.data[i].val);
         }
         
      }

      return sum == 0 ? 0 : Math.round((sum / this.param) * 100) / 100;

      
   }

   createSignal(index){
      let data = this.data[index];
      if(this.entity === 'BlueChips' || this.entity === 'Powers'){
         if(data.result > data.avg){
            this.buySignalIndexes.push(index);
            return 1;
         }else if(data.result < data.avg){
            this.sellSignalIndexes.push(index);
            return -1;
         } 
         else return 0;
      }else if(this.entity === 'Prices'){
         if(data.result > 1){
            this.buySignalIndexes.push(index);
            return 1;
         }else if(data.result < -1){
            this.sellSignalIndexes.push(index);
            return -1;
         }
         else return 0;
      }
      

   }

   mapChartResult(startIndex = 0){
      let dataList = startIndex ? this.data.slice(startIndex) : this.data;
      
      return dataList.map(item => {
         if(item.hasOwnProperty('result')) return item.result;
         else return item.val;
      });
      
   }

   mapChartAvg(startIndex = 0){
      let dataList = startIndex ? this.data.slice(startIndex) : this.data;
      
      return dataList.map(item => item.avg);
      
   }

   
}


export default Indicator;