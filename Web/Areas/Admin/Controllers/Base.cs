using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace Web.Areas.Admin.Controllers
{
	[Area("Admin")]
	[Route("admin/[controller]")]
	[ApiController]
	[Authorize(Policy = "Admin")]
	public abstract class BaseAdminController : ControllerBase
	{
		protected string RemoteIpAddress => Request.HttpContext.Connection.RemoteIpAddress?.ToString();

		protected string CurrentUserName => User.Claims.Where(c => c.Type == "sub").FirstOrDefault().Value;

		protected string CurrentUserId => User.Claims.Where(c => c.Type == "id").FirstOrDefault().Value;

	}
}