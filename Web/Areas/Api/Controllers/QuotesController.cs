using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using ApplicationCore.Views;
using Microsoft.AspNetCore.Identity;
using ApplicationCore.Models;
using ApplicationCore.Auth;
using Microsoft.Extensions.Options;
using ApplicationCore.Services;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using ApplicationCore.Helpers;

namespace Web.Areas.Api.Controllers
{
	public class QuotesController : BaseApiController
	{
		private readonly IHttpContextAccessor accessor;
		private readonly ISubscribeService subscribeService;
		private readonly IRealTimeService realTimeService;
		private readonly IDataService dataService;

		public QuotesController(IHttpContextAccessor accessor, ISubscribeService subscribeService,
			IRealTimeService realTimeService, IDataService dataService)
		{
			this.accessor = accessor;
			this.subscribeService = subscribeService;
			this.realTimeService = realTimeService;
			this.dataService = dataService;
		}

		[HttpGet]
		public async Task<IActionResult> Index(string user, int date)
		{
			string ip = accessor.HttpContext.Connection.RemoteIpAddress.ToString();
			if (!subscribeService.CheckKey(user, ip)) return RequestError("user", "權限不足或重複登入");

			
			bool realTime = false;
			var quotes = await dataService.FetchAsync(date);
			if (quotes.IsNullOrEmpty())
			{
				realTime = true;
				quotes = await realTimeService.FetchAsync();
			}

			if (quotes.IsNullOrEmpty()) return Ok(new ChartsViewModel());

			var model = new ChartsViewModel
			{
				realTime = realTime,
				quotes = quotes.Select(q => q.MapViewModel()).ToList()
			};

			return Ok(model);

		}



	}
}