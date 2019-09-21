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
	public class ResearchController : BaseApiController
	{
        private readonly AppSettings settings;

        private readonly IHttpContextAccessor accessor;
		private readonly ISubscribeService subscribeService;
		private readonly IStrategyService strategyService;
        private readonly IIndicatorService indicatorService;
        private readonly IHistoryService historyService;

		public ResearchController(IOptions<AppSettings> settings, IHttpContextAccessor accessor, ISubscribeService subscribeService,
			IStrategyService strategyService, IIndicatorService indicatorService, IHistoryService historyService)
		{
            this.settings = settings.Value;

            this.accessor = accessor;
			this.subscribeService = subscribeService;
			this.strategyService = strategyService;
            this.indicatorService = indicatorService;
			this.historyService = historyService;
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

			int maxDate = historyService.LatestDate();
            if (maxDate == 0) maxDate = DateTime.Today.ToDateNumber();

            var strategies = await GetUserStrategiesAsync();
            var indicators = await indicatorService.GetActiveIndicatorsAsync();

            var model = new ResearchIndexViewModel()
			{
                minDate = settings.MinDate,
				maxDate = maxDate.ToDatetime().ToDateString(),
				strategies = strategies.Select(s => s.MapViewModel()).ToList(),
                indicators = indicators.Select(i => i.MapViewModel()).ToList(),
                key = CurrentUserId
			};

            return Ok(model);
		}

        [HttpPost("Resolve")]
        public async Task<ActionResult> Resolve([FromBody] ResearchRequestModel request)
        {
            ValidateRequest(request);
            if (!ModelState.IsValid) return BadRequest(ModelState);

            var selectedStrategy = strategyService.GetById(request.strategy);
            if (selectedStrategy == null) throw new Exception("Action: Api/Research/Resolve , Strategy Not Found. id = " + request.strategy.ToString());

            var indicatorIds = selectedStrategy.IndicatorSettings.Select(item => item.IndicatorId).ToList();
            var indicators = await indicatorService.FetchByIdsAsync(indicatorIds);

            var inidatorEntities = indicators.Select(i => i.Entity).ToList();

            var quotes = await historyService.FetchRangeAsync(request.beginDate, request.endDate);

            var model = new ResearchViewModel { indicators = indicators.Select(i => i.MapViewModel()).ToList() };

            var dates = quotes.Select(q => q.Date).Distinct().OrderBy(date => date);

			var dateQuotesList = new List<DateQuotesViewModel>();

			foreach (var date in dates)
            {
                var dateQuotes = quotes.Where(q => q.Date == date);
                dateQuotes = dateQuotes.GetOrdered();
                dateQuotes.Select(q => q.MapViewModel(q.DataList.Where(d => inidatorEntities.Contains(d.Indicator)))).ToList();

				dateQuotesList.Add(
                    new DateQuotesViewModel
                    {
                        date = date,
                        quotes = dateQuotes.Select(q => q.MapViewModel(q.DataList.Where(d => inidatorEntities.Contains(d.Indicator)))).ToList()
                    }
                );
            }

            

            return Ok(dateQuotesList);
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

        void ValidateRequest(ResearchRequestModel model)
        {
            string ip = accessor.HttpContext.Connection.RemoteIpAddress.ToString();
            if (!subscribeService.CheckKey(CurrentUserId, ip)) ModelState.AddModelError("user", "權限不足或重複登入");

			if (model.beginDate > model.endDate) ModelState.AddModelError("date", "日期錯誤");

        }

    }
}