using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Hosting;
using Newtonsoft.Json;
using ApplicationCore.Services;
using ApplicationCore.Views;

namespace Web.Areas.Api.Controllers
{
    public class ValuesController : BaseApiController
	{
		private readonly IHostingEnvironment hostingEnv;

		public ValuesController(IHostingEnvironment hostingEnv)
		{
			this.hostingEnv = hostingEnv;
		}

		[HttpGet("")]
		public IActionResult Index()
		{

			ModelState.AddModelError("subscribe", "沒有訂閱");
			return BadRequest(ModelState);
		}

		[HttpGet("env")]
		public IActionResult Environment()
        {
		
			return Ok(hostingEnv.EnvironmentName);
        }
    }
}