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

		public SubscribesController(ISubscribeService subscribeService)
		{
			this.subscribeService = subscribeService;
		}


		[HttpGet("")]
		public async Task<ActionResult> Index()
		{
			var subscribes = await subscribeService.FetchByUserAsync(CurrentUserId);

			subscribes = subscribes.GetOrdered();

			var pageList = subscribes.GetPagedList();

			return Ok(pageList);
		}

		//[HttpGet("create")]
		//public async Task<ActionResult> Create()
		//{
		//	var plans = await planService.FetchAsync(active: true);

		//	plans = plans.GetOrdered();

		//	var pageList = plans.GetPagedList();

		//	return Ok(pageList);
		//}

	}
}