
class Strategy {
   
   constructor(data) {
      for (let property in data) {
         this[property] = data[property];
      }
   }

   getIndicatorSettings(id){
      return this.indicatorSettings.find(item => item.indicatorId == id);
   }

   
}


export default Strategy;