using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using ApplicationCore.Views;
using ApplicationCore.Services;
using Microsoft.AspNetCore.Authorization;

namespace Web.Areas.Api.Controllers
{
	[Authorize]
	public class SubscribesController : BaseApiController
	{
		private readonly ISubscribeService subscribeService;
		private readonly IPlanService planService;

		public SubscribesController(ISubscribeService subscribeService, IPlanService planService)
		{
			this.subscribeService = subscribeService;
			this.planService = planService;
		}


		[HttpGet("")]
		public async Task<ActionResult> Index()
		{
			var subscribes = await subscribeService.FetchByUserAsync(CurrentUserId);

			subscribes = subscribes.GetOrdered();

			var pageList = subscribes.GetPagedList();

			return Ok(pageList);
		}

		[HttpGet("create")]
		public async Task<ActionResult> Create()
		{
			var plans = await planService.GetActivePlansAsync();

			plans = plans.GetOrdered();

			var model = new SubscribeEditForm
			{
				subscribe = new SubscribeViewModel(),
				plans = plans.Select(p => p.MapViewModel()).ToList()
			};

			model.LoadOptions();

			return Ok(model);
		}

	}
}