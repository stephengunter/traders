
class Indicator {
   
   data = [];
   param = 0;

   beginTimeIndex = 0;

   buySignalIndexes = []
   sellSignalIndexes = [];

   constructor(model, param) {
      for (let property in model) {
         this[property] = model[property];
      }
      if(param)  this.param = param;
      else this.param = this.defaultParam;
     
   }

   

   calculate(quotes){

      this.beginTimeIndex = this.data.findIndex(item => item.time == this.begin);
      
      if(this.entity === 'BlueChips' || this.entity === 'Powers'){
         this.calculatePowers(quotes);
      }else if(this.entity === 'Prices'){
         //let sum = 0;
         for(let i = 0; i < this.data.length; i++){
            let item = this.data[i];
            //sum += Number(item.val);
            if(!this.isDataInTime(item)){
               item.val = 0;
               item.avg = 0;
               item.signal = 0;         
            }else if(this.canCountAvg(i)){
               item.val = quotes[i].price;
               item.avg = item.val;
               item.signal = this.createSignal(i);
            }
            else{
               item.val = quotes[i].price;
               item.avg = item.val;
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
      return sum == 0 ? 0 : sum / this.param;
   }

   createSignal(index){
      let data = this.data[index];
      if(this.entity === 'BlueChips' || this.entity === 'Powers'){
         if(data.val > data.avg){
            this.buySignalIndexes.push(index);
            return 1;
         } 
         else if(data.val < data.avg){
            this.sellSignalIndexes.push(index);
            return -1;
         } 
         else return 0;
      }else if(this.entity === 'Prices'){
         if(data.val > data.avg){
            this.buySignalIndexes.push(index);
            return 1;
         } 
         else if(data.val < data.avg){
            this.sellSignalIndexes.push(index);
            return -1;
         } 
         else return 0;
      }
      

   }

   
}


export default Indicator;