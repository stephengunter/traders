using ApplicationCore.Models;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;


namespace ApplicationCore.Views
{
	public class RegisterRequest
	{
		[Required(ErrorMessage = "請填寫Email")]
		[EmailAddress(ErrorMessage = "必須符合Email格式")]
		[Display(Name = "Email")]
		public string email { get; set; }

		[Required(ErrorMessage = "請填寫密碼")]
		[StringLength(12, ErrorMessage = "密碼長度必須在6到12之間", MinimumLength = 6)]
		[DataType(DataType.Password)]
		[Display(Name = "密碼")]
		public string password { get; set; }

		[DataType(DataType.Password)]
		[Display(Name = "確認密碼")]
		[Compare("password", ErrorMessage = "確認密碼與密碼不相符")]
		public string confirmPassword { get; set; }


		[Required(ErrorMessage = "請填寫姓名")]
		[Display(Name = "姓名")]
		public string fullname { get; set; }

		[Display(Name = "性別")]
		public bool gender { get; set; }

		
		[Display(Name = "手機")]
		public string phone { get; set; }


		public User MapToEntity()
		{
			var user = new User() { Profile = new Profile() };
			user.UserName = email;
			user.Email = email;
			user.PhoneNumber = phone;

			user.Profile.Fullname = fullname;
			user.Profile.Gender = gender;

			return user;
		}

	}

	

	public class LoginRequest
	{
		[Required(ErrorMessage = "請輸入Email")]
		public string email { get; set; }

		[Required(ErrorMessage = "請輸入密碼")]
		[DataType(DataType.Password)]
		public string password { get; set; }

	}


	public class RefreshTokenRequest
	{
		public string accessToken { get; set; }
		public string refreshToken { get; set; }

	}

	public class ConfirmEmailRequest
	{
		public string id { get; set; }
		public string code { get; set; }

	}

	public class SendConfirmEmailRequest
	{
		public string email { get; set; }
	}

	public class OAuthLoginRequest
	{
		public string token { get; set; }

		[Display(Name = "Email")]
		public string email { get; set; }

		[Display(Name = "姓名")]
		public string fullname { get; set; }

		[Display(Name = "性別")]
		public bool gender { get; set; }

		[Display(Name = "手機")]
		public string phone { get; set; }

		public string facebookId { get; set; }

		public string googleId { get; set; }


		public User MapToEntity()
		{
			var user = new User() { Profile = new Profile() };
			user.UserName = email;
			user.Email = email;
			user.PhoneNumber = phone;

			user.Profile.Fullname = fullname;
			user.Profile.Gender = gender;

			if (!String.IsNullOrEmpty(facebookId)) user.FacebookId = facebookId;

			if (!String.IsNullOrEmpty(googleId)) user.GoogleId = googleId;

			return user;
		}
	}

}
