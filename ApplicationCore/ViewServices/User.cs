using System;
using System.Collections.Generic;
using System.Text;
using ApplicationCore.Views;
using ApplicationCore.Models;
using ApplicationCore.Paging;
using System.Threading.Tasks;
using System.Linq;
using ApplicationCore.Helpers;
using Microsoft.AspNetCore.Identity;
using Infrastructure.Views;

namespace ApplicationCore.Views
{
	public static class UserViewService
	{
		public static IEnumerable<User> GetOrdered(this IEnumerable<User> users)
		{
			return users.OrderByDescending(u => u.CreatedAt);
		}
		public static PagedList<User, UserViewModel> GetPagedList(this IEnumerable<User> users, int page, int pageSize)
		{
			var pageList = new PagedList<User, UserViewModel>(users, page, pageSize);

			pageList.ViewList = new List<UserViewModel>();
			foreach (var item in pageList.List)
			{
				pageList.ViewList.Add(MapViewModel(item));
			}

			pageList.List = null;

			return pageList;
		}

		public static UserViewModel MapViewModel(this User user, IEnumerable<IdentityRole> roles = null)
		{

			var model = new UserViewModel
			{
				id = user.Id,
				name = user.UserName,
				email = user.Email,

			};

			if (user.Profile != null) model.profile = MapViewModel(user.Profile);

			if (!roles.IsNullOrEmpty()) model.roles = String.Join(",", roles.Select(r => r.Name));


			return model;

		}

		public static ProfileViewModel MapViewModel(this Profile profile)
		{

			var model = new ProfileViewModel
			{
				fullname = profile.Fullname,
				sid = profile.SID,
				dob = profile.DOB,
				gender = profile.Gender

			};

			return model;

		}

		public static List<BaseOption> ToOptions(this IEnumerable<IdentityRole> roles, bool withEmpty = true)
		{
			var options = roles.Select(r => new BaseOption(r.Name, r.Name)).ToList();
			if (withEmpty) options.Insert(0, new BaseOption("", "所有角色"));
			return options;
		}

	}
}
