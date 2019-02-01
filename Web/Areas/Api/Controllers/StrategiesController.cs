using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using ApplicationCore.Views;
using Microsoft.AspNetCore.Identity;
using ApplicationCore.Models;
using ApplicationCore.Auth;
using Microsoft.Extensions.Options;
using ApplicationCore.Services;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using ApplicationCore.Helpers;


namespace Web.Areas.Api.Controllers
{
	[Authorize]
	public class StrategiesController : BaseApiController
	{
		private readonly IStrategyService strategyService;
		private readonly IIndicatorService indicatorService;

		public StrategiesController(IStrategyService strategyService, IIndicatorService indicatorService)
		{
			this.strategyService = strategyService;
			this.indicatorService = indicatorService;
		}


		[HttpGet("create")]
		public async Task<ActionResult> Create()
		{
			var indicators = await indicatorService.GetActiveIndicatorsAsync();

			var model = new StrategyEditForm
			{
				model = new StrategyViewModel(),
				indicators = indicators.Select(i => i.MapViewModel()).ToList()
			};

			return Ok(model);
		}

		//[HttpPost("")]
		//public async Task<ActionResult> Store([FromBody] StockViewModel model)
		//{
		//	if (!ModelState.IsValid) return BadRequest(ModelState);
		//	ValidateRequest(model);
		//	if (!ModelState.IsValid) return BadRequest(ModelState);

		//	Stock existStock = stockService.GetByCode(model.code);
		//	if (existStock == null)
		//	{
		//		var stock = new Stock();
		//		model.SetValues(stock);
		//		await stockService.CreateAsync(stock);
		//	}
		//	else
		//	{
		//		model.SetValues(existStock);
		//		await stockService.UpdateAsync(existStock);
		//	}

		//	return Ok();
		//}

		//void ValidateRequest(StockViewModel model)
		//{
		//	if (model.weight < 0 || model.weight > 100) ModelState.AddModelError("weight", "權重有誤");
		//	if (model.price <= 0) ModelState.AddModelError("price", "價格有誤");
		//}

		[HttpGet("edit/{id}")]
		public ActionResult Edit(int id)
		{
			var strategy = strategyService.GetById(id);
			if (strategy == null) return NotFound();

			if (strategy.UserId != CurrentUserId) throw new Exception("Edit Strategy Error. UserId Not Equal");

			var model = strategy.MapViewModel();
			return Ok(model);
		}


		//[HttpPut("{id}")]
		//public async Task<ActionResult> Update(int id, [FromBody] StockViewModel model)
		//{
		//	Stock stock = await stockService.GetByIdAsync(id);
		//	if (stock == null) return NotFound();

		//	if (!ModelState.IsValid) return BadRequest(ModelState);
		//	ValidateRequest(model);
		//	if (!ModelState.IsValid) return BadRequest(ModelState);

		//	model.SetValues(stock);
		//	await stockService.UpdateAsync(stock);

		//	return Ok();
		//}


		//[HttpDelete("{id}")]
		//public async Task<ActionResult> Delete(string id)
		//{
		//	var ids = id.Split(',').Select(i => i.ToInt()).ToList();

		//	await stockService.DeleteAsync(ids);
		//	return Ok();
		//}
	}
}