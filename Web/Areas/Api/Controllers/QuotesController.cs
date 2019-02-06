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
		private readonly IHistoryService historyService;

		public QuotesController(IHttpContextAccessor accessor, ISubscribeService subscribeService, 
			IStrategyService strategyService, IIndicatorService indicatorService,
			IRealTimeService realTimeService, IHistoryService historyService)
		{
			this.accessor = accessor;
			this.subscribeService = subscribeService;

			this.strategyService = strategyService;
			this.indicatorService = indicatorService;

			this.realTimeService = realTimeService;
			this.historyService = historyService;
		}

		[HttpGet("")]
		public async Task<IActionResult> Index(string user, int date, int strategy)
		{
			string ip = accessor.HttpContext.Connection.RemoteIpAddress.ToString();
			if (!subscribeService.CheckKey(user, ip)) return RequestError("user", "權限不足或重複登入");

			var selectedStrategy = strategyService.GetById(strategy);
			if (selectedStrategy == null) throw new Exception("Action: Api/Quotes/Index , Strategy Not Found. id = " + strategy.ToString());

			bool realTime = false;
			var quotes = await historyService.FetchAsync(date);
			if (quotes.IsNullOrEmpty())
			{
				realTime = true;				
				quotes = await realTimeService.FetchAsync();
			}

			if (quotes.IsNullOrEmpty()) return Ok(new ChartsViewModel());

			var hasDataIndicatorEntities = quotes.First().DataList.Select(d => d.Indicator).ToList();
			var indicators = await indicatorService.FetchByEntitiesAsync(hasDataIndicatorEntities);

			var inidatorEntities = GetInidatorEntities(selectedStrategy, indicators);

			quotes = quotes.OrderBy(q => q.Time);
			var model = new ChartsViewModel
			{
				realTime = realTime,
				indicators = indicators.Select(i => i.MapViewModel()).ToList(),
				quotes = quotes.Select(q => q.MapViewModel(q.DataList.Where(d => inidatorEntities.Contains(d.Indicator)))).ToList()
			};

			return Ok(model);

		}

		[HttpGet("get")]
		public async Task<IActionResult> Get(string user, int time)
		{
			string ip = accessor.HttpContext.Connection.RemoteIpAddress.ToString();
			if (!subscribeService.CheckKey(user, ip)) return RequestError("user", "權限不足或重複登入");

			if (time == 0) time = 84500;
			
			var quotes = await realTimeService.GetLatestAsync(120000);
			
			if (quotes.IsNullOrEmpty()) return Ok(new List<QuoteViewModel>());
			

			quotes = quotes.OrderBy(q => Guid.NewGuid()).ToList().Take(3);

			foreach (var item in quotes)
			{
				item.Time = time;
				time += 100;
			}

			//quotes = quotes.OrderBy(q => q.Time);


			return Ok(quotes.Select(q => q.MapViewModel(q.DataList)).ToList());

		}


		IList<string> GetInidatorEntities(Strategy strategy, IEnumerable<Indicator> indicators)
		{
			var ids = strategy.IndicatorSettings.Select(s => s.IndicatorId);

			return indicators.Where(i => ids.Contains(i.Id)).Select(i => i.Entity).ToList();

		}



	}
}