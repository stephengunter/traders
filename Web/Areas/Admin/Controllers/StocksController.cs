using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ApplicationCore.Models;
using ApplicationCore.Services;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using ApplicationCore.Views;

namespace Web.Areas.Admin.Controllers
{
    public class StocksController : BaseAdminController
	{
		private readonly IStockService stockService;

		public StocksController(IStockService stockService)
		{
			this.stockService = stockService;
		}

		[HttpGet]
		public async Task<ActionResult> Index(string keyword = "")
		{
			var stocks = await stockService.FetchStocks(keyword);

			stocks = stocks.GetOrdered();			

			return Ok(stocks.Select(s=>s.MapViewModel()));
		}
	}
}