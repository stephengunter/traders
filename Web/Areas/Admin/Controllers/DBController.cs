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

namespace Web.Areas.Admin.Controllers
{
    public class DBController : BaseAdminController
	{
		private readonly IHostingEnvironment hostingEnv;
		private readonly AdminSettings adminSettings;
		private readonly IDBSeeder dBSeeder;
		private readonly IDBKeepler dbKeepler;

		public DBController(IHostingEnvironment hostingEnv, IOptions<AdminSettings> adminSettings,
			IDBSeeder dBSeeder, IDBKeepler dbKeepler)
		{
			this.hostingEnv = hostingEnv;
			this.adminSettings = adminSettings.Value;

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
			//context.Database.ExecuteSqlCommand("TRUNCATE TABLE [Quotes]");
			//return View();

//			DELETE FROM[Quotes]
//DBCC CHECKIDENT('Quotes', RESEED, 1)  
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