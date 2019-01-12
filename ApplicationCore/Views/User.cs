using Infrastructure.Views;
using ApplicationCore.Models;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text;

namespace ApplicationCore.Views
{

	public enum RoleType
	{
		Dev,
		Boss
	}

	public class UserViewModel
	{
		public string id { get; set; }

		public string name { get; set; }

		[Required(ErrorMessage = "請填寫Email")]
		[EmailAddress(ErrorMessage = "Email格式錯誤")]
		public string email { get; set; }

		public string phone { get; set; }

		public string roles { get; set; }

		public string token { get; set; }

		public ProfileViewModel profile { get; set; }

		public User MapToEntity(User entity)
		{
			if (entity == null) entity = new User();
			entity.UserName = email;
			entity.Email = email;
			entity.PhoneNumber = phone;

			if (entity.Profile == null) entity.Profile = new Profile();
			entity.Profile = this.profile.MapToEntity(entity.Profile);

			return entity;
		}
	}

	public class ProfileViewModel
	{
		[Required(ErrorMessage = "請填寫姓名")]
		public string fullname { get; set; }

		public string sid { get; set; }
		public DateTime dob { get; set; }
		public bool gender { get; set; }


		public Profile MapToEntity(Profile entity)
		{
			if (entity == null) entity = new Profile();
			entity.Fullname = fullname;
			entity.SID = sid;
			entity.DOB = dob;
			entity.Gender = gender;

			return entity;
		}
	}

	public class UserEditViewModel
	{
		public List<BaseOption> roleOptions { get; set; }

		public string[] roles { get; set; }

		public UserViewModel user { get; set; }
	}
}
