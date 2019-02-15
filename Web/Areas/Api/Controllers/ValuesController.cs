using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Hosting;
using ApplicationCore.Services;
using ApplicationCore.Models;

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
			int min = 1;
			int max = 90;
			int d = 5;
			var arr = new string[] { min.ToString(), max.ToString(), d.ToString() };
			return Ok(String.Join(",", arr));
			//return list
		}


		[HttpGet("env")]
		public IActionResult Environment()
        {
		
			return Ok(hostingEnv.EnvironmentName);
        }
    }
}