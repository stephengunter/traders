class ResearchReport {
   constructor(dateTrades){
      this.dateTrades = dateTrades;
      let totalProfit = 0;
      for (let i = 0; i < dateTrades.length; i++) {
         totalProfit += dateTrades[i].tradeResult.total;
      }

      this._totalProfit = totalProfit;
   }

   get grossProfit(){
      return this._totalProfit;
   }
   get netProfit(){
      return this._totalProfit;
   }

   get tradeCount(){
      return this._tradeCount;
   }
   
}

export default ResearchReport;