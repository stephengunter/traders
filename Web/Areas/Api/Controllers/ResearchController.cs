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
		private readonly IRealTimeService realTimeService;
		private readonly IHistoryService historyService;

		public ResearchController(IOptions<AppSettings> settings, IHttpContextAccessor accessor, ISubscribeService subscribeService,
			IStrategyService strategyService, IRealTimeService realTimeService, IHistoryService historyService)
		{
            this.settings = settings.Value;

            this.accessor = accessor;
			this.subscribeService = subscribeService;
			this.strategyService = strategyService;
			this.realTimeService = realTimeService;
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
			var model = new ResearchIndexViewModel()
			{
                minDate = settings.MinDate,
				maxDate = maxDate.ToDatetime().ToDateString(),
				strategies = strategies.Select(s => s.MapViewModel()).ToList(),
				key = CurrentUserId
			};

			return Ok(model);
		}

        [HttpPost("Resolve")]
        public async Task<ActionResult> Resolve([FromBody] ResearchViewModel model)
        {
            ValidateRequest(model);
            if (!ModelState.IsValid) return BadRequest(ModelState);

            var selectedStrategy = strategyService.GetById(model.strategy);
            if (selectedStrategy == null) throw new Exception("Action: Api/Research/Resolve , Strategy Not Found. id = " + model.strategy.ToString());


            var quotes = await historyService.FetchRangeAsync(model.beginDate, model.endDate);

            var dates = quotes.Select(q => q.Date).Distinct();

            return Ok();
        }

        async Task<IEnumerable<Strategy>> GetUserStrategiesAsync()
		{
			var strategies = await strategyService.FetchByUserAsync(CurrentUserId);
			if (strategies.IsNullOrEmpty())
			{
				var strategy = await strategyService.CreateDefaultStrategyAsync(CurrentUserId);
				return new List<Strategy> { strategy };
			}
			else return strategies.GetOrdered();

		}

        void ValidateRequest(ResearchViewModel model)
        {
            string ip = accessor.HttpContext.Connection.RemoteIpAddress.ToString();
            if (!subscribeService.CheckKey(CurrentUserId, ip)) ModelState.AddModelError("user", "權限不足或重複登入");

            if(model.beginDate > model.endDate) ModelState.AddModelError("date", "日期錯誤");

        }

    }
}