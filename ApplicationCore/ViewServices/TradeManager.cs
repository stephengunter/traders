using System;
using System.Collections.Generic;
using System.Text;
using ApplicationCore.Views;
using ApplicationCore.Models;
using ApplicationCore.Paging;
using System.Threading.Tasks;
using System.Linq;
using ApplicationCore.Helpers;

namespace ApplicationCore.ViewServices
{

	public class TradeManager
	{
		private readonly List<Quote> quotes;
		private readonly TradeSettings tradeSettings;
		private readonly List<PositionViewModel> signals;
		private readonly int closeTime;  // closeTime == 0 => 即時, 不收盤強出


		List<int> signalsTimes;

		public TradeManager(IEnumerable<Quote> quotes, TradeSettings tradeSettings, List<PositionViewModel> signals, int closeTime)
		{
			this.quotes = quotes.OrderBy(q => q.Time).ToList();
			this.tradeSettings = tradeSettings;
			this.signals = signals;
			this.closeTime = closeTime;

			signalsTimes = signals.Select(s => s.time.ToInt()).ToList();
		}

		private readonly List<PositionViewModel> positions;

		List<int> positionsTimes;

		public TradeManager(IEnumerable<Quote> quotes, List<PositionViewModel> positions, int closeTime)
		{
			this.quotes = quotes.OrderBy(q => q.Time).ToList();
			this.positions = positions;
			this.closeTime = closeTime;

			positionsTimes = positions.Select(p => p.time.ToInt()).ToList();
		}


		List<TradeViewModel> trades = new List<TradeViewModel>();

		TradeViewModel LatestTrade => trades[trades.Count - 1];

		int Current
		{
			get
			{
				if (trades.IsNullOrEmpty()) return 0;
				return LatestTrade.val;
			}
		}

		Quote CloseQuote
		{
			get
			{
				var quote = quotes.Where(q => q.Time == this.closeTime).FirstOrDefault();
				if (quote == null)
				{
					var quotesAfterClose = quotes.Where(q => q.Time > this.closeTime);
					if (quotesAfterClose.IsNullOrEmpty()) return null;
					quote = quotesAfterClose.OrderBy(q => q.Time).FirstOrDefault();
				}
				return quote;
			}
		}

		List<TradeViewModel> ResolveBySignals()
		{
			trades = new List<TradeViewModel>();

			foreach (var quote in quotes)
			{
				//沒信號
				if (!signalsTimes.Contains(quote.Time))
				{
					if (Current == 0) continue;
					else
					{
						if (StopLoss(quote))
						{
							Out(quote);
							continue;
						}
						else if (StopWin(quote))
						{
							Out(quote);
							continue;
						}
					}

					continue;
				}

				//有信號
				var signal = GetSignal(quote.Time);
				if (signal.val == Current)
				{
					if (Current == 0) continue;
					else
					{
						if (StopLoss(quote))
						{
							Out(quote);
							continue;
						}
						else if (StopWin(quote))
						{
							Out(quote);
							continue;
						}
					}
				}
				else
				{
					//信號翻轉
					if (Current != 0) Out(quote);

					In(quote, signal);

				}
			}

			if (Current != 0 && closeTime > 0) OutAtClose(); //收盤仍有部位, 強制出場


			return trades;
		}

		List<TradeViewModel> ResolveByPositions()
		{
			trades = new List<TradeViewModel>();

			foreach (var position in positions)
			{
				if (position.val == Current) continue;

				//信號翻轉
				if (Current != 0) Out(position);

				In(position);
			}

			if (Current != 0 && closeTime > 0) OutAtClose(); //收盤仍有部位, 強制出場


			return trades;
		}

		public List<TradeViewModel> Resolve()
		{
			if (tradeSettings == null || tradeSettings.CanIgnore()) return ResolveByPositions();
			return ResolveBySignals();
		}



		int Profit(Quote quote)
		{
			if (Current > 0) return quote.Price - LatestTrade.price;
			else if (Current < 0) return LatestTrade.price - quote.Price;

			return 0;
		}

		int Profit(PositionViewModel position)
		{
			if (Current > 0) return position.price - LatestTrade.price;
			else if (Current < 0) return LatestTrade.price - position.price;

			return 0;
		}

		bool StopLoss(PositionViewModel position)
		{
			if (tradeSettings.STPL < 1) return false;

			int profit = Profit(position);
			if (profit >= 0) return false;

			return profit <= (0 - tradeSettings.STPL);

		}
		bool StopLoss(Quote quote)
		{
			if (tradeSettings.STPL < 1) return false;

			int profit = Profit(quote);
			if (profit >= 0) return false;

			return profit <= (0 - tradeSettings.STPL);

		}

		bool StopWin(PositionViewModel position)
		{
			if (tradeSettings.STPW < 1) return false;

			int profit = Profit(position);
			if (profit <= 0) return false;

			return profit >= tradeSettings.STPW;
		}

		bool StopWin(Quote quote)
		{
			if (tradeSettings.STPW < 1) return false;

			int profit = Profit(quote);
			if (profit <= 0) return false;

			return profit >= tradeSettings.STPW;

		}

		PositionViewModel GetSignal(int time)
		{
			return signals.Where(s => s.time.ToInt() == time).FirstOrDefault();
		}

		//平倉出場
		void Out(Quote quote)
		{
			var trade = new TradeViewModel()
			{
				price = quote.Price,
				time = quote.Time.ToTimeString(),
				val = 0,
				result = Profit(quote)

			};

			SetTradeText(trade);

			trades.Add(trade);
		}

		void Out(PositionViewModel position)
		{
			var trade = new TradeViewModel()
			{
				price = position.price,
				time = position.time,
				val = 0,
				result = Profit(position)

			};

			SetTradeText(trade);

			trades.Add(trade);
		}

		//新單出場
		void In(Quote quote, PositionViewModel signal)
		{
			var trade = new TradeViewModel()
			{
				price = quote.Price,
				time = quote.Time.ToTimeString(),
				val = signal.val,
				result = 0
			};

			SetTradeText(trade);

			trades.Add(trade);
		}

		void In(PositionViewModel position)
		{
			var trade = new TradeViewModel()
			{
				price = position.price,
				time = position.time,
				val = position.val,
				result = 0
			};

			SetTradeText(trade);

			trades.Add(trade);
		}

		void OutAtClose()
		{
			var quote = CloseQuote;
			if (quote == null) return;

			var trade = new TradeViewModel()
			{
				price = quote.Price,
				time = quote.Time.ToTimeString(),
				val = 0,
				result = Profit(quote)

			};

			SetTradeText(trade);

			trades.Add(trade);
		}

		void SetTradeText(TradeViewModel trade)
		{
			if (trade.val == 0) //平倉
			{
				if (Current > 0) trade.text = "多單平倉";
				else trade.text = "空單平倉";
			}
			else if (trade.val > 0) trade.text = "多單進場";
			else if (trade.val < 0) trade.text = "空單進場";

		}

	}
}
