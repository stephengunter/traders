using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ApplicationCore.Models;
using ApplicationCore.Services;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using ApplicationCore.Views;

namespace Web.Areas.Admin.Controllers
{
	public class IndicatorsController : BaseAdminController
	{
		private readonly IIndicatorService indicatorService;

		public IndicatorsController(IIndicatorService indicatorService)
		{
			this.indicatorService = indicatorService;
		}

		[HttpGet("")]
		public async Task<ActionResult> Index(string keyword = "", bool active = true)
		{
			var indicators = await indicatorService.FetchIndicators(keyword);

			indicators = indicators.Where(i=>i.Active == active).GetOrdered();

			return Ok(indicators.Select(s => s.MapViewModel()));
		}

		
	}
}