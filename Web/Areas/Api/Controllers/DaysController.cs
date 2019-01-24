using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using ApplicationCore.Views;
using ApplicationCore.Services;

namespace Web.Areas.Api.Controllers
{
	public class DaysController : BaseApiController
	{
		private readonly IDayService dayService;

		public DaysController(IDayService dayService)
		{
			this.dayService = dayService;
		}



		[HttpGet]
		public async Task<ActionResult> Index(int year)
		{
			var holidays = await dayService.FetchHolidaysAsync(year);

			holidays = holidays.GetOrdered();

			return Ok(holidays.Select(d => d.MapViewModel()));
		}

	}
}