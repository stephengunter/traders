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
		private readonly IAttachmentService attachmentService;

		public IndicatorsController(IIndicatorService indicatorService, IAttachmentService attachmentService)
		{
			this.indicatorService = indicatorService;
			this.attachmentService = attachmentService;
		}


		[HttpGet]
		public async Task<ActionResult> Index()
		{
			var indicators = await indicatorService.FetchAsync(active: true);

			indicators = indicators.GetOrdered();

			var pageList = indicators.GetPagedList();

			var coverIds = pageList.ViewList.Select(m => m.coverId).ToList();

			var covers = await attachmentService.FetchByIdsAsync(coverIds);

			foreach (var item in pageList.ViewList)
			{
				var cover = covers.Where(a => a.Id == item.coverId).FirstOrDefault();
				item.medias = new List<MediaViewModel> { cover.MapViewModel() };
			}

			return Ok(pageList);
		}

	}
}