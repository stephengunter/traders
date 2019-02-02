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
				strategy = new StrategyViewModel(),
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
		public async Task<ActionResult> Edit(int id)
		{
			var strategy = strategyService.GetById(id);
			if (strategy == null) return NotFound();

			if (strategy.UserId != CurrentUserId) throw new Exception("Edit Strategy Error. UserId Not Equal");

			var indicators = await indicatorService.GetActiveIndicatorsAsync();

			var model = new StrategyEditForm
			{
				strategy = strategy.MapViewModel(),
				selectedIndicators = strategy.IndicatorSettings.Select(i => i.IndicatorId).ToList(),
				indicators = indicators.Select(i => i.MapViewModel()).ToList()
			};

			return Ok(model);
		}


		[HttpPut("{id}")]
		public async Task<ActionResult> Update(int id, [FromBody] StrategyEditForm model)
		{
			var strategy = await strategyService.GetByIdAsync(id);
			if (strategy == null) return NotFound();

			if (!ModelState.IsValid) return BadRequest(ModelState);
			ValidateRequest(model);
			if (!ModelState.IsValid) return BadRequest(ModelState);

			var settings = model.strategy.indicatorSettings.Where(s => model.selectedIndicators.Contains(s.indicatorId));
			if (settings.IsNullOrEmpty()) throw new Exception("Action: UpdateStrategy. Error: No IndicatorSettings");

			var indicatorSettingList = new List<IndicatorSettings>();
			foreach (var item in settings)
			{
				var indicatorSetting = new IndicatorSettings();
				item.SetValues(indicatorSetting);
				indicatorSettingList.Add(indicatorSetting);
			}

			model.strategy.SetValues(strategy, CurrentUserId);
			await strategyService.UpdateAsync(strategy, indicatorSettingList);

			
			return Ok();
		}

		void ValidateRequest(StrategyEditForm model)
		{
			if (model.selectedIndicators.IsNullOrEmpty()) ModelState.AddModelError("indicators", "沒有選擇任何指標");
		}


		//[HttpDelete("{id}")]
		//public async Task<ActionResult> Delete(string id)
		//{
		//	var ids = id.Split(',').Select(i => i.ToInt()).ToList();

		//	await stockService.DeleteAsync(ids);
		//	return Ok();
		//}
	}
}