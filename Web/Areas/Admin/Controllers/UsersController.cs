using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ApplicationCore.Models;
using ApplicationCore.Services;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using ApplicationCore.Views;

namespace Web.Areas.Admin.Controllers
{
    public class UsersController : BaseAdminController
	{
		private readonly UserManager<User> userManager;
		private readonly IUserService userService;

		public UsersController(UserManager<User> userManager, IUserService userService)
		{
			this.userManager = userManager;
			this.userService = userService;
		}

		[HttpGet]
		public async Task<ActionResult> Index(string role = "", string keyword = "", int page = 1, int pageSize = 10)
        {
			IdentityRole selectedRole = null;
			if (!String.IsNullOrEmpty(role)) selectedRole = await userService.GetRoleByNameAsync(role);
			if (selectedRole == null) role = "";

			var users = await userService.FetchUsers(selectedRole, keyword);

			users = users.GetOrdered();

			var pageList = users.GetPagedList(page, pageSize);

			foreach (var item in pageList.ViewList)
			{
				var roles = await userService.GetRolesByUserIdAsync(item.id);
				item.roles = String.Join(",", roles.Select(r => r.Name));
			}

			return Ok(pageList);
		}
    }
}