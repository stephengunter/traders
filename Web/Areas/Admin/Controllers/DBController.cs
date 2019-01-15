using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ApplicationCore.DataAccess;
using Microsoft.AspNetCore.Mvc;

namespace Web.Areas.Admin.Controllers
{
    public class DBController : BaseAdminController
	{
		private readonly RealTimeContext realTimeContext;

		public DBController(RealTimeContext realTimeContext)
		{
			this.realTimeContext = realTimeContext;
		}

		//[HttpPost("realtime")]
		public IActionResult Index()
        {
			var test = realTimeContext.Quotes.FirstOrDefault();
			return Ok(test);
			//context.Database.ExecuteSqlCommand("TRUNCATE TABLE [Quotes]");
			//return View();

//			DELETE FROM[Quotes]
//DBCC CHECKIDENT('Quotes', RESEED, 1)  
        }
    }
}