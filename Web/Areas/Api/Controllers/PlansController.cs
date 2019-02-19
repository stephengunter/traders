using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using ApplicationCore.Views;
using ApplicationCore.Services;

namespace Web.Areas.Api.Controllers
{
	public class PlansController : BaseApiController
	{
		private readonly IPlanService planService;

		public PlansController(IPlanService planService)
		{
			this.planService = planService;
		}


		[HttpGet]
		public async Task<ActionResult> Index()
		{
			var plans = await planService.FetchAsync(active: true);

			plans = plans.GetOrdered();

			var pageList = plans.GetPagedList();

			return Ok(pageList);
		}

	}
}