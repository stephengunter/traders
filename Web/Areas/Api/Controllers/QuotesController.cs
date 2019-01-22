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

namespace Web.Areas.Api.Controllers
{
	[Authorize]
	public class QuotesController : BaseApiController
	{
		private readonly IHttpContextAccessor accessor;
		private readonly ISubscribeService subscribeService;
		private readonly IStrategyService strategyService;

		public QuotesController(IHttpContextAccessor accessor, ISubscribeService subscribeService,
			IStrategyService strategyService)
		{
			this.accessor = accessor;
			this.subscribeService = subscribeService;
			this.strategyService = strategyService;
		}

		[HttpGet]
		public async Task<IActionResult> Index()
		{
			if (!await subscribeService.HasActiveSubscribeAsync(CurrentUserId))
			{
				ModelState.AddModelError("subscribe", "沒有訂閱");
				return BadRequest(ModelState);
			}

			var strategies = await strategyService.FetchByUserAsync(CurrentUserId);
			var model = new WatchViewModel() { strategies = strategies.Select(s => s.MapViewModel()).ToList() };

			return Ok(model);
		}



	}
}