class ResearchReport {
   constructor(dateTrades){
      this.dateTrades = dateTrades;
      let totalProfit = 0;
      for (let i = 0; i < dateTrades.length; i++) {
         totalProfit += dateTrades[i].tradeResult.total;
      }

      this._totalProfit = totalProfit;
   }

   get totalProfit() {
      return this._totalProfit;
   }
   
}

export default ResearchReport;