using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ApplicationCore.Models;
using ApplicationCore.Services;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using ApplicationCore.Views;
using ApplicationCore.Helpers;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Options;
using System.IO;

namespace Web.Areas.Admin.Controllers
{
	public class IndicatorsController : BaseAdminController
	{
		private readonly IIndicatorService indicatorService;
		private readonly IAttachmentService attachmentService;

		private readonly int minParam = 1;
		private readonly int maxParam = 90;
		private readonly int defaultParam = 15;

		public IndicatorsController(IIndicatorService indicatorService, IAttachmentService attachmentService)
		{
			this.indicatorService = indicatorService;
			this.attachmentService = attachmentService;
		}

		[HttpGet("")]
		public async Task<ActionResult> Index(bool active = true)
		{
			var indicators = await indicatorService.FetchAsync(active);

			indicators = indicators.GetOrdered();

			var pageList = indicators.GetPagedList();

			var coverIds = pageList.ViewList.Select(m => m.coverId).ToList();

			var covers = await attachmentService.FetchByIdsAsync(coverIds);

			foreach (var item in pageList.ViewList)
			{
				var cover = covers.Where(a => a.Id == item.coverId).FirstOrDefault();
				if(cover != null) item.medias = new List<MediaViewModel> { cover.MapViewModel() };
			}

			return Ok(pageList);
		}

		//Receiver使用
		[HttpGet("get")]
		public async Task<ActionResult> Get()
		{
			var indicators = await indicatorService.GetAllAsync();

			indicators = indicators.GetOrdered();

			return Ok(indicators.Select(i => i.MapViewModel()));
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

			if (model.medias.IsNullOrEmpty())
			{
				indicator = await indicatorService.CreateAsync(indicator);
				return Ok(indicator.Id);
			}
			else
			{
				var medias = new List<UploadFile>();
				foreach (var item in model.medias)
				{
					var media = new UploadFile();
					item.SetValues(media, CurrentUserId);
					medias.Add(media);
				}

				indicator = await indicatorService.CreateAsync(indicator, medias);
				return Ok(indicator.Id);

			}
		}

		void ValidateRequest(IndicatorViewModel model)
		{

			var exist = indicatorService.GetByEntity(model.entity);
			if (exist != null && model.id != exist.Id)
			{
				ModelState.AddModelError("entity", "代碼重複");
			}

			if (model.minParam < this.minParam) ModelState.AddModelError("minParam", "參數範圍錯誤");
			if (model.maxParam > this.maxParam) ModelState.AddModelError("maxParam", "參數範圍錯誤");
			if (model.maxParam <= model.minParam) ModelState.AddModelError("maxParam", "參數範圍錯誤");
		}

		async Task<List<UploadFile>> GetMediasAsync(int id)
		{
			var medias = await attachmentService.FetchAsync(PostType.Indicator, id);
			return medias.GetOrdered().ToList();
		}

		[HttpGet("edit/{id}")]
		public async Task<ActionResult> Edit(int id)
		{
			var indicator = await indicatorService.GetByIdAsync(id);
			if (indicator == null) return NotFound();

			var medias = await GetMediasAsync(id);

			var model = indicator.MapViewModel(medias);

			var form = new IndicatorEditForm() { indicator = model };
			form.minParam = this.minParam;
			form.maxParam = this.maxParam;
		
			form.LoadOptions();

			return Ok(form);
		}

		[HttpPut("{id}")]
		public async Task<ActionResult> Update(int id, [FromBody] IndicatorViewModel model)
		{
			var indicator = await indicatorService.GetByIdAsync(id);
			if (indicator == null) return NotFound();

			if (!ModelState.IsValid) return BadRequest(ModelState);
			ValidateRequest(model);
			if (!ModelState.IsValid) return BadRequest(ModelState);
		
			model.SetValues(indicator, CurrentUserId);

			var medias = await GetMediasAsync(id);
			var mediaList = new List<UploadFile>();
			foreach (var item in model.medias)
			{
				var existAttachment = medias.Where(m => m.Id == item.id).FirstOrDefault();
				if (existAttachment == null)
				{
					var attachment = new UploadFile();
					item.SetValues(attachment, CurrentUserId);
					mediaList.Add(attachment);
				}
				else
				{
					item.SetValues(existAttachment, CurrentUserId);
					mediaList.Add(existAttachment);
				}
			}

			await indicatorService.UpdateAsync(indicator, mediaList);

			return Ok();
		}


		[HttpDelete("{id}")]
		public async Task<ActionResult> Delete(int id)
		{
			var indicator = await indicatorService.GetByIdAsync(id);
			if (indicator == null) return NotFound();

			await indicatorService.RemoveAsync(indicator);

			return Ok();
		}


		[HttpPost("{id}")]
		public async Task<ActionResult> Orders(string id)
		{
			var ids = id.Split(',').Select(i => i.ToInt()).ToList();

			await indicatorService.OrdersAsync(ids);
			return Ok();
		}

	}
}