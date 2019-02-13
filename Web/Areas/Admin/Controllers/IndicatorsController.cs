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
		public async Task<ActionResult> Index(bool active = true)
		{
			var indicators = await indicatorService.FetchAsync(active);

			indicators = indicators.GetOrdered();

			var pageList = indicators.GetPagedList();

			return Ok(pageList);
		}

		[HttpGet("create")]
		public ActionResult Create()
		{
			var form = new IndicatorEditForm() { indicator = new IndicatorViewModel() };
			form.LoadOptions();

			return Ok(form);
		}

		//[HttpPost("")]
		//public async Task<ActionResult> Store([FromBody] StockViewModel model)
		//{
		//	if (!ModelState.IsValid) return BadRequest(ModelState);
		//	ValidateRequest(model);
		//	if (!ModelState.IsValid) return BadRequest(ModelState);

		//	Stock existStock = stockService.GetByCode(model.code);
		//	if (existStock == null)
		//	{
		//		var stock = new Stock();
		//		model.SetValues(stock);
		//		await stockService.CreateAsync(stock);
		//	}
		//	else
		//	{
		//		model.SetValues(existStock);
		//		await stockService.UpdateAsync(existStock);
		//	}

		//	return Ok();
		//}


	}
}