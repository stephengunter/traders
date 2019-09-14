using System;
using System.Collections.Generic;
using System.Text;
using ApplicationCore.Models;
using ApplicationCore.Helpers;
using System.Linq;
using ApplicationCore.Indicators;

namespace ApplicationCore.Services
{
    public class TradeManager
    {
        private readonly Strategy strategy;
        private readonly List<Quote> quotes;
       
        private readonly List<int> times;

        public TradeManager(Strategy strategy, List<Indicator> indicators, List<Quote> quotes)
        {
            this.strategy = strategy;
            this.strategy.Init(indicators, quotes);


            this.quotes = quotes;
            this.times = quotes.Select(q => q.Time).Distinct().ToList();            
        }

        //void InitTimes()
        //{
        //    for (int time = 84600; time < 86000; time += 100) _times.Add(time);
        //    for (int time = 90000; time < 96000; time += 100) _times.Add(time);
        //    for (int time = 100000; time < 106000; time += 100) _times.Add(time);
        //    for (int time = 110000; time < 116000; time += 100) _times.Add(time);
        //    for (int time = 120000; time < 126000; time += 100) _times.Add(time);
        //    for (int time = 130000; time < 134600; time += 100) _times.Add(time);
        //}

        public void Resolve()
        {

        }
    }
}
