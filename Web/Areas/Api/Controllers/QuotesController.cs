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
	public class QuotesController : BaseApiController
	{
		private readonly IHttpContextAccessor accessor;
		private readonly ISubscribeService subscribeService;
		private readonly IStrategyService strategyService;
		private readonly IIndicatorService indicatorService;
		private readonly IRealTimeService realTimeService;
		private readonly IHistoryService dataService;

		public QuotesController(IHttpContextAccessor accessor, ISubscribeService subscribeService, 
			IStrategyService strategyService, IIndicatorService indicatorService,
			IRealTimeService realTimeService, IHistoryService dataService)
		{
			this.accessor = accessor;
			this.subscribeService = subscribeService;

			this.strategyService = strategyService;
			this.indicatorService = indicatorService;

			this.realTimeService = realTimeService;
			this.dataService = dataService;
		}

		[HttpGet]
		public async Task<IActionResult> Index(string user, int date, int strategy)
		{
			string ip = accessor.HttpContext.Connection.RemoteIpAddress.ToString();
			if (!subscribeService.CheckKey(user, ip)) return RequestError("user", "權限不足或重複登入");

			var selectedStrategy = strategyService.GetById(strategy);
			if (selectedStrategy == null) throw new Exception("Action: Api/Quotes/Index , Strategy Not Found. id = " + strategy.ToString());
			
			var indicators = await indicatorService.FetchByIdsAsync(selectedStrategy.IndicatorSettings.Select(i => i.IndicatorId).ToList());
			var indicatorEntities = indicators.Select(i => i.Entity).ToList();

			bool realTime = false;
			var quotes = await dataService.FetchAsync(date);
			if (quotes.IsNullOrEmpty())
			{
				realTime = true;				
				quotes = await realTimeService.FetchAsync();
			}

			if (quotes.IsNullOrEmpty()) return Ok(new ChartsViewModel());

			quotes = quotes.OrderBy(q => q.Time);

			var model = new ChartsViewModel
			{
				realTime = realTime,
				indicators = indicators.Select(i => i.MapViewModel()).ToList(),
				quotes = quotes.Select(q => q.MapViewModel(q.DataList.Where(d => indicatorEntities.Contains(d.Indicator)))).ToList()
			};

			return Ok(model);

		}



	}
}