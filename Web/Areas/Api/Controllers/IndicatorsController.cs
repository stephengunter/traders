using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using ApplicationCore.Views;
using ApplicationCore.Services;

namespace Web.Areas.Api.Controllers
{
	public class IndicatorsController : BaseApiController
	{
		private readonly IIndicatorService indicatorService;

		public IndicatorsController(IIndicatorService indicatorService)
		{
			this.indicatorService = indicatorService;
		}



		[HttpGet]
		public async Task<ActionResult> Index()
		{
			var indicators = await indicatorService.GetActiveIndicatorsAsync();

			indicators = indicators.GetOrdered();

			return Ok(indicators.Select(s => s.MapViewModel()));
		}

	}
}