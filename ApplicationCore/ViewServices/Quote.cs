﻿using System;
using System.Collections.Generic;
using System.Text;
using ApplicationCore.Views;
using ApplicationCore.Models;
using ApplicationCore.Paging;
using System.Threading.Tasks;
using System.Linq;
using ApplicationCore.Helpers;

namespace ApplicationCore.Views
{
	public static class QuoteViewService
	{
		public static QuoteViewModel MapViewModel(this Quote quote, IEnumerable<Data> dataList = null)
		{
			var model = new QuoteViewModel();
			model.date = quote.Date;
			model.time = quote.Time;
			model.price = quote.Price;
			model.open = quote.Open;
			model.low = quote.Low;
			model.high = quote.High;

			if (!dataList.IsNullOrEmpty())
			{
				model.dataList = dataList.Select(d => d.MapViewModel()).ToList();
			}

			return model;
		}

		public static DataViewModel MapViewModel(this Data data)
		{
			return new DataViewModel()
			{
				date = data.Date,
				time = data.Time,
				indicator = data.Indicator,
				 
				text = data.Text,
				val = data.Val
			};

		}

		public static IEnumerable<Quote> GetOrdered(this IEnumerable<Quote> quotes)
		{
			return quotes.OrderBy(q => q.Time);
		}

	}


}
