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

		private readonly int minParam = 1;
		private readonly int maxParam = 90;
		private readonly int defaultParam = 15;

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
			form.minParam = this.minParam;
			form.maxParam = this.maxParam;

			form.indicator.minParam = this.minParam;
			form.indicator.maxParam = this.maxParam;
			form.indicator.defaultParam = this.defaultParam;
			form.LoadOptions();

			form.indicator.source = form.sourceOptions.FirstOrDefault().value;
			form.indicator.type = form.typeOptions.FirstOrDefault().value;

			return Ok(form);
		}

		[HttpPost("")]
		public async Task<ActionResult> Store([FromBody] IndicatorViewModel model)
		{
			if (!ModelState.IsValid) return BadRequest(ModelState);
			ValidateRequest(model);
			if (!ModelState.IsValid) return BadRequest(ModelState);

			var indicator = new Indicator();
			model.SetValues(indicator, CurrentUserId);
			indicator = await indicatorService.CreateAsync(indicator);

			return Ok(indicator.Id);
		}

		void ValidateRequest(IndicatorViewModel model)
		{
			var exist = indicatorService.GetByEntity(model.entity);
			if (exist != null) ModelState.AddModelError("entity", "代碼重複");

			if (model.minParam < this.minParam) ModelState.AddModelError("minParam", "參數範圍錯誤");
			if (model.maxParam > this.maxParam) ModelState.AddModelError("maxParam", "參數範圍錯誤");
			if (model.maxParam <= model.minParam) ModelState.AddModelError("maxParam", "參數範圍錯誤");
		}


	}
}