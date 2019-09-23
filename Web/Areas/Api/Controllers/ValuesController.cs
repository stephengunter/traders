using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Hosting;
using ApplicationCore.Services;
using ApplicationCore.Models;
using ApplicationCore.Indicators;

namespace Web.Areas.Api.Controllers
{
    public class ValuesController : BaseApiController
	{
		private readonly IHostingEnvironment hostingEnv;
        private readonly IIndicatorService indicatorService;

        public ValuesController(IHostingEnvironment hostingEnv, IIndicatorService indicatorService)
		{
			this.hostingEnv = hostingEnv;
            this.indicatorService = indicatorService;
        }

		[HttpGet("")]
		public async Task<IActionResult> Index()			 
		{
            var indicators = await indicatorService.FetchAsync(true);
            var indicator = indicators.FirstOrDefault();
            return Ok(indicator as Prices);

        }


		[HttpGet("env")]
		public IActionResult Environment()
        {
		
			return Ok(hostingEnv.EnvironmentName);
        }
    }
}