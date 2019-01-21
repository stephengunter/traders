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
	public class WatchController : BaseApiController
	{
		private readonly IHttpContextAccessor accessor;
		private readonly ISubscribeService subscribeService;
		private readonly IStrategyService strategyService;

		public WatchController(IHttpContextAccessor accessor, ISubscribeService subscribeService,
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

			var strategies = strategyService.FetchByUserAsync(CurrentUserId);

			

			return Ok();
		}



	}
}