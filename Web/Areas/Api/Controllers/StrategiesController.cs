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
        private readonly AppSettings settings;

        private readonly IStrategyService strategyService;
		private readonly IIndicatorService indicatorService;

		public StrategiesController(IOptions<AppSettings> settings,  IStrategyService strategyService, IIndicatorService indicatorService)
		{
            this.settings = settings.Value;

            this.strategyService = strategyService;
			this.indicatorService = indicatorService;
		}


		[HttpGet("create")]
		public async Task<ActionResult> Create()
		{
			var indicators = await indicatorService.GetActiveIndicatorsAsync();

			var strategyView = new StrategyViewModel() { name = this.settings.DefaultStrategyName };
			foreach (var indicator in indicators)
			{
				var settings = new IndicatorSettingsView
				{
					arg = indicator.DefaultParam,
					indicatorId = indicator.Id
				};
				strategyView.indicatorSettings.Add(settings);
			}

			var model = new StrategyEditForm
			{
				strategy = strategyView,
				selectedIndicators = indicators.Select(i => i.Id).ToList(),
				indicators = indicators.Select(i => i.MapViewModel()).ToList()
			};

			return Ok(model);
		}

		[HttpPost("")]
		public async Task<ActionResult> Store([FromBody] StrategyEditForm model)
		{
			if (!ModelState.IsValid) return BadRequest(ModelState);
			ValidateRequest(model);
			if (!ModelState.IsValid) return BadRequest(ModelState);

			var settings = model.strategy.indicatorSettings.Where(s => model.selectedIndicators.Contains(s.indicatorId));
			if (settings.IsNullOrEmpty()) throw new Exception("Action: StoreStrategy. Error: No IndicatorSettings");

			var indicatorSettingList = new List<IndicatorSettings>();
			foreach (var item in settings)
			{
				var indicatorSetting = new IndicatorSettings();
				item.SetValues(indicatorSetting);
				indicatorSettingList.Add(indicatorSetting);
			}

			var strategy = new Strategy();
			model.strategy.SetValues(strategy, CurrentUserId);

			strategy = await strategyService.CreateAsync(strategy, indicatorSettingList);

			return Ok(strategy.Id);
		}



		[HttpGet("edit/{id}")]
		public async Task<ActionResult> Edit(int id)
		{
			var strategy = strategyService.GetById(id);
			if (strategy == null) return NotFound();

			if (strategy.UserId != CurrentUserId) throw new Exception("Edit Strategy Error. UserId Not Equal");

			var indicators = await indicatorService.GetActiveIndicatorsAsync();

			var strategyView = strategy.MapViewModel();

			foreach (var indicator in indicators)
			{
				var exist = strategyView.indicatorSettings.Where(s => s.indicatorId == indicator.Id).FirstOrDefault();
				if (exist == null)
				{
					var settings = new IndicatorSettingsView
					{
						strategyId = strategy.Id,
						arg = indicator.DefaultParam,
						indicatorId = indicator.Id
					};
					strategyView.indicatorSettings.Add(settings);
				}
				
			}

			var model = new StrategyEditForm
			{
				strategy = strategyView,
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


		[HttpDelete("{id}")]
		public async Task<ActionResult> Delete(int id)
		{
			await strategyService.DeleteAsync(id);
			return Ok();
		}
	}
}