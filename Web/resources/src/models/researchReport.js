class ResearchReport {
   constructor(dateTrades){
      this._dateTradeResults = dateTrades;
      let totalGrossProfit = 0;
      let totalNetProfit = 0;
      let totalTradeCount = 0;
      for (let i = 0; i < dateTrades.length; i++) {
         totalGrossProfit += dateTrades[i].grossProfit;
         totalNetProfit += dateTrades[i].netProfit;
         totalTradeCount += dateTrades[i].tradeCount;
      }

      this._totalGrossProfit = totalGrossProfit;
      this._totalNetProfit = totalNetProfit;
      this._totalTradeCount = totalTradeCount;
   }

   get dateTradeResults(){
      return this._dateTradeResults;
   }

   get totalGrossProfit(){
      return this._totalProfit;
   }
   get totalNetProfit(){
      return this._totalProfit;
   }

   get totalTradeCount(){
      return this._totalTradeCount;
   }
   
}

export default ResearchReport;