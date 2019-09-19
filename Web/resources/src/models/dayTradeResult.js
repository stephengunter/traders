class DayTradeResult {
   constructor(date, trades) {
      this._date = date;
      this._trades = trades;
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
      return this._outTrade;
   }

   get netProfit(){
      return this._totalProfit;
   }
}



export default DayTradeResult;