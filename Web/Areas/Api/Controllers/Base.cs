using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace Web.Areas.Api.Controllers
{
	[Area("Api")]
	[Route("api/[controller]")]
	[ApiController]
	public abstract class BaseApiController : ControllerBase
	{
		protected string RemoteIpAddress => Request.HttpContext.Connection.RemoteIpAddress?.ToString();

		protected string CurrentUserName => User.Claims.Where(c => c.Type == "sub").FirstOrDefault().Value;

		protected string CurrentUserId => User.Claims.Where(c => c.Type == "id").FirstOrDefault().Value;
		
	}
}