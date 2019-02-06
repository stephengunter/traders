
class Indicator {
   
   data = [];
   param = 0;

   beginTimeIndex = 0;

   buySignalIndexes = []
   sellSignalIndexes = [];

   constructor(model, param, beginIndex) {
      for (let property in model) {
         this[property] = model[property];
      }
      if(param)  this.param = param;
      else this.param = this.defaultParam;

      this.beginTimeIndex = beginIndex;
     
   }
   
   

   calculate(quotes){
      
      if(this.entity === 'BlueChips' || this.entity === 'Powers'){
         this.calculatePowers(quotes);
      }else if(this.entity === 'Prices'){
         for(let i = 0; i < this.data.length; i++){
            let item = this.data[i];
            if(!this.isDataInTime(item)){
               item.result = 0;
               item.signal = 0;         
            }else if(this.canCountAvg(i)){
               
               item.val = Number(item.val);
               let avg = this.countAvg(i);

               let val = quotes[i].price - avg;
               item.result = Math.round(val * 100) / 100;
               item.signal = this.createSignal(i);
            }
            else{
               item.result = 0;
               item.signal = 0;      
            }
         }
      }
   }

   calculatePowers(quotes){
      let sum = 0;
      for(let i = 0; i < this.data.length; i++){
         let item = this.data[i];
         sum += Number(item.val);
         if(!this.isDataInTime(item)){
            item.val = 0;
            item.avg = 0;
            item.signal = 0;              
         }else if(this.canCountAvg(i)){
            item.val = sum;
            item.avg = this.countAvg(i);
            item.signal = this.createSignal(i);
         }
         else{
            item.val = sum;
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
      for(let i = startIndex; i <= index; i++){
         sum += this.data[i].val;
      }
      
      return sum == 0 ? 0 : Math.round((sum / this.param) * 100) / 100;
   }

   createSignal(index){
      let data = this.data[index];
      if(this.entity === 'BlueChips' || this.entity === 'Powers'){
         if(data.val > data.avg){
            this.buySignalIndexes.push(index);
            return 1;
         }else if(data.val < data.avg){
            this.sellSignalIndexes.push(index);
            return -1;
         } 
         else return 0;
      }else if(this.entity === 'Prices'){
         if(data.result > 0){
            this.buySignalIndexes.push(index);
            return 1;
         }else if(data.result < 0){
            this.sellSignalIndexes.push(index);
            return -1;
         }
         else return 0;
      }
      

   }

   
}


export default Indicator;