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
	public class WatchController : BaseApiController
	{
        private readonly AppSettings settings;

        private readonly IHttpContextAccessor accessor;
		private readonly ISubscribeService subscribeService;
		private readonly IStrategyService strategyService;
        private readonly IIndicatorService indicatorService;
        private readonly IRealTimeService realTimeService;
		private readonly IHistoryService dataService;

		public WatchController(IOptions<AppSettings> settings, IHttpContextAccessor accessor, ISubscribeService subscribeService,
			IStrategyService strategyService, IIndicatorService indicatorService,
            IRealTimeService realTimeService, IHistoryService dataService)
		{
            this.settings = settings.Value;

            this.accessor = accessor;
			this.subscribeService = subscribeService;
			this.strategyService = strategyService;
            this.indicatorService = indicatorService;
            this.realTimeService = realTimeService;
			this.dataService = dataService;
		}

		 

		[HttpGet]
		public async Task<IActionResult> Index()
		{
			if (!await subscribeService.HasActiveSubscribeAsync(CurrentUserId))
			{
				ModelState.AddModelError("subscribe", "沒有訂閱");
				return BadRequest(ModelState);
			}

			string ip = accessor.HttpContext.Connection.RemoteIpAddress.ToString();

			await subscribeService.CreateKeysAsync(CurrentUserId, ip);

			int date = GetLatestDate();

			var strategies = await GetUserStrategiesAsync();
            var indicators = await indicatorService.GetActiveIndicatorsAsync();

            var model = new WatchViewModel()
			{
                minDate = settings.MinDate,
				date = date,
				strategies = strategies.Select(s => s.MapViewModel()).ToList(),
                indicators = indicators.Select(i => i.MapViewModel()).ToList(),
                key = CurrentUserId
			};

			return Ok(model);
		}

		async Task<IEnumerable<Strategy>> GetUserStrategiesAsync()
		{
			var strategies = await strategyService.FetchByUserAsync(CurrentUserId);
			if (strategies.IsNullOrEmpty())
			{
                var name = this.settings.DefaultStrategyName;
                var cost = this.settings.DefaultCost;
                var strategy = await strategyService.CreateDefaultStrategyAsync(CurrentUserId, name, cost);
				return new List<Strategy> { strategy };
			}
			else return strategies.GetOrdered();

		}


		int GetLatestDate()
		{
			int date = realTimeService.LatestDate();
			if (date == 0) date = dataService.LatestDate();
			if (date == 0) date = DateTime.Today.ToDateNumber();

			return date;
		}

	}
}