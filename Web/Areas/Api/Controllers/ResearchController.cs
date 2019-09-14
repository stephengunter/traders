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
		private readonly IHistoryService dataService;

		public ResearchController(IOptions<AppSettings> settings, IHttpContextAccessor accessor, ISubscribeService subscribeService,
			IStrategyService strategyService, IRealTimeService realTimeService, IHistoryService dataService)
		{
            this.settings = settings.Value;

            this.accessor = accessor;
			this.subscribeService = subscribeService;
			this.strategyService = strategyService;
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

			int maxDate = dataService.LatestDate();
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
            await ValidateRequestAsync(model);
            if (!ModelState.IsValid) return BadRequest(ModelState);

            

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

        async Task ValidateRequestAsync(ResearchViewModel model)
        {

            //if (model.ParentId > 0)
            //{
            //    var parent = await _subjectsService.GetByIdAsync(model.ParentId);
            //    if (parent == null) ModelState.AddModelError("parentId", "主科目不存在");
            //}
        }

    }
}