using System;
using System.Collections.Generic;
using System.Text;
using ApplicationCore.Views;
using ApplicationCore.Models;
using ApplicationCore.Paging;
using System.Threading.Tasks;
using System.Linq;
using ApplicationCore.Helpers;
using Microsoft.AspNetCore.Identity;
using Infrastructure.Views;

namespace ApplicationCore.Views
{
	public static class StockViewService
	{
		public static StockViewModel MapViewModel(this Stock stock)
		{

			var model = new StockViewModel
			{
				id = stock.Id,
				name = stock.Name,
				code = stock.Code,
				ignore = stock.Ignore,
				isBase = stock.Base,
				price = stock.Price,
				weight = stock.Weight
			};


			return model;

		}

		public static IEnumerable<Stock> GetOrdered(this IEnumerable<Stock> stocks)
		{
			return stocks.OrderBy(s => s.Ignore);
		}

		public static PagedList<Stock, StockViewModel> GetPagedList(this IEnumerable<Stock> stocks, int page = 1, int pageSize = 999)
		{
			var pageList = new PagedList<Stock, StockViewModel>(stocks, page, pageSize);

			pageList.ViewList = stocks.Select(s => MapViewModel(s)).ToList();

			pageList.List = null;

			return pageList;
		}

	}
}
