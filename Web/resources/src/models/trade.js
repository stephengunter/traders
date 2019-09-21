class Trade {
   constructor(inTrade, outTrade = null) {
      this._val = inTrade.val;
      this._inTrade = inTrade;
      this._outTrade = outTrade;
      this._profit = outTrade ? outTrade.profit : 0;
   }
   get val() {
      return this._inTrade.val;
   }
   
   get inTrade() {
      return this._inTrade;
   }
   get outTrade() {
      return this._outTrade;
   }

   get profit() {
      return this._profit;
   }
}



export default Trade;