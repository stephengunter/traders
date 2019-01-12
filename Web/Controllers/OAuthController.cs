using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace Web.Controllers
{
    public class OAuthController : Controller
    {
		public IActionResult Facebook()
		{

			return File("~/facebook-auth.html", "text/html");
		}
	}
}