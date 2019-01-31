
class Indicator {
   
   data = [];
   param = 0;

   constructor(data, param) {
      for (let property in data) {
         this[property] = data[property];
      }
      if(param)  this.param = param;
      else this.param = this.defaultParam;
     
   }

   calculate(){
      if(this.entity === 'BlueChips'){
         let sum = 0;
         for(let i = 0; i < this.data.length; i++){
            let item = this.data[i];
            sum += Number(item.val);
            if(this.isDataInTime(item)){
               item.val = sum;
               item.avg = this.countAvg(i);
               item.signal = this.createSignal(i);
              
            }else{
               item.val = 0;
               item.avg = 0;
               item.signal = 0;
            }
         }
      }
   }

   isDataInTime(data){
      return data.time > this.begin && data.time <= this.end;
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
      if(this.entity === 'BlueChips'){
         if(data.val > data.avg) return 1;
         else if(data.val < data.avg) return -1;
         else return 0;
      }
      

   }

   
}


export default Indicator;