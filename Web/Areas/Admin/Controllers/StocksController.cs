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

		[HttpGet("create")]
		public ActionResult Create() => Ok(new StockViewModel());

		[HttpPost("")]
		public async Task<ActionResult> Store([FromBody] StockViewModel model)
		{
			if (!ModelState.IsValid) return BadRequest(ModelState);
			ValidateRequest(model);
			if (!ModelState.IsValid) return BadRequest(ModelState);

			Stock existStock = stockService.GetByCode(model.code);
			if (existStock == null)
			{
				var stock = new Stock();
				model.SetValues(stock);
				await stockService.CreateAsync(stock);
			}
			else
			{
				model.SetValues(existStock);
				await stockService.UpdateAsync(existStock);
			}

			return Ok();
		}

		void ValidateRequest(StockViewModel model)
		{
			if(model.weight < 0 || model.weight > 100) ModelState.AddModelError("weight", "權重有誤");
			if(model.price <= 0) ModelState.AddModelError("price", "價格有誤");
		}


		[HttpPut("{id}")]
		public async Task<ActionResult> Update(int id, [FromBody] StockViewModel model)
		{
			Stock stock = await stockService.GetByIdAsync(id);
			if (stock == null) return NotFound();

			if (!ModelState.IsValid) return BadRequest(ModelState);
			ValidateRequest(model);
			if (!ModelState.IsValid) return BadRequest(ModelState);

			model.SetValues(stock);
			await stockService.UpdateAsync(stock);

			return Ok();
		}

		
		[HttpDelete("{id}")]
		public async Task<ActionResult> Delete(int id)
		{
			Stock stock = await stockService.GetByIdAsync(id);
			if (stock == null) return NotFound();

			await stockService.DeleteAsync(stock);
			return Ok();
		}

	}
}