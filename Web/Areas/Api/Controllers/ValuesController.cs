using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Hosting;
using ApplicationCore.Services;

namespace Web.Areas.Api.Controllers
{
    public class ValuesController : BaseApiController
	{
		private readonly IHostingEnvironment hostingEnv;

		private readonly IRealTimeService realTimeService;

		public ValuesController(IHostingEnvironment hostingEnv, IRealTimeService realTimeService)
		{
			this.hostingEnv = hostingEnv;
			this.realTimeService = realTimeService;
		}

		[HttpGet("")]
		public IActionResult Index(int time)
		{
			int date = 20190114;
			var quote = realTimeService.GetQuote(date, time);

			var data = quote.DataList.Where(d => d.Indicator == "Prices").FirstOrDefault();

			var val = quote.Price - Convert.ToDouble(data.Val);

			return Ok(val);
		}


		[HttpGet("env")]
		public IActionResult Environment()
        {
		
			return Ok(hostingEnv.EnvironmentName);
        }
    }
}