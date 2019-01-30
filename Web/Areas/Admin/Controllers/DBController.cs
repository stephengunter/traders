using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ApplicationCore.DataAccess;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Hosting;
using ApplicationCore.Helpers;
using ApplicationCore.Views;
using Microsoft.Extensions.Options;
using ApplicationCore.Models;
using ApplicationCore.Services;
using Newtonsoft.Json;

namespace Web.Areas.Admin.Controllers
{
    public class DBController : BaseAdminController
	{
		private readonly IHostingEnvironment hostingEnv;
		private readonly AdminSettings adminSettings;
		private readonly IHistoryService historyService;

		private readonly IDBSeeder dBSeeder;
		private readonly IDBKeepler dbKeepler;

		public DBController(IHostingEnvironment hostingEnv, IOptions<AdminSettings> adminSettings, IHistoryService historyService,
			IDBSeeder dBSeeder, IDBKeepler dbKeepler)
		{
			this.hostingEnv = hostingEnv;
			this.adminSettings = adminSettings.Value;
			this.historyService = historyService;

			this.dBSeeder = dBSeeder;
			this.dbKeepler = dbKeepler;
		}

		//將Realtime資料轉移到History
		[HttpPost("realtime")]
		public async Task<ActionResult> Realtime([FromBody] DBAdminRequest model)
        {
			ValidateRequest(model);

			if (!ModelState.IsValid) return BadRequest(ModelState);

			await dbKeepler.MoveRealTimeToDataAsync();

			return Ok();
			
        }

		//下載History Quotes json file
		[HttpPost("history")]
		public async Task<ActionResult> History([FromBody] DBAdminRequest model)
		{
			ValidateRequest(model);
			if (!ModelState.IsValid) return BadRequest(ModelState);

			var historyQuotes = await historyService.FetchAllAsync();
			if (historyQuotes.IsNullOrEmpty())
			{
				ModelState.AddModelError("no_data", "Not History Data");
				return BadRequest(ModelState);
			}

			int minDate = historyQuotes.Min(q => q.Date);
			int maxDate = historyQuotes.Max(q => q.Date);

			string fileName = $"{minDate}_{maxDate}.json";


			var views = historyQuotes.Select(q => q.MapViewModel(q.DataList));
			string content = JsonConvert.SerializeObject(views);

			return File(System.Text.Encoding.UTF8.GetBytes(content), "text/plain", fileName);

		}

		void ValidateRequest(DBAdminRequest model)
		{
			if (!hostingEnv.IsDevelopment()) ModelState.AddModelError("env", "Not Development Env");
			if (model.Key != adminSettings.DBKey) ModelState.AddModelError("key", "Key Error");
		}

		[HttpPost("migrate")]
		public async Task<ActionResult> Migrate([FromBody] DBAdminRequest model)
		{
			ValidateRequest(model);

			if (!ModelState.IsValid) return BadRequest(ModelState);

			await dBSeeder.SeedAsync();

			return Ok();
		}
	}
}