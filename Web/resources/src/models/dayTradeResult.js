class DayTradeResult {
   constructor(date, trades, cost = 0) {
      this._date = date;
      this._trades = trades;
      this._cost = cost;

      let totalProfit = 0;
      let totalCost = 0;
      for (let i = 0; i < trades.length; i++) {
         totalProfit += trades[i].profit;
         totalCost += cost;
      }

      this._totalProfit = totalProfit;
      this._totalCost = totalCost;
   }

   get date() {
      return this._date;
   }

   get trades() {
      return this._trades;
   }
   
   get tradeCount() {
      return this._trades.length;
   }

   get grossProfit() {
      return this._totalProfit;
   }

   get netProfit(){
      return this._totalProfit - this._totalCost;
   }
}



export default DayTradeResult;