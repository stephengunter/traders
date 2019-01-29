using System;
using System.Collections.Generic;
using System.Text;
using System.ComponentModel.DataAnnotations;

namespace ApplicationCore.Views
{
	public class ForgotPasswordRequest
	{
		[Required(ErrorMessage = "請輸入Email")]
		[EmailAddress(ErrorMessage = "Email格式錯誤")]
		public string email { get; set; }
	}

	public class ResetPasswordRequest
	{

		[Required(ErrorMessage = "請輸入Email")]
		[EmailAddress(ErrorMessage = "Email格式錯誤")]
		public string email { get; set; }

		[Required(ErrorMessage = "請輸入新密碼")]
		[Display(Name = "新密碼")]
		[StringLength(100, ErrorMessage = "密碼長度最少6位", MinimumLength = 6)]
		[DataType(DataType.Password)]
		public string password { get; set; }

		[DataType(DataType.Password)]
		[Display(Name = "確認新密碼")]
		[Compare("password", ErrorMessage = "確認密碼與新密碼不相符")]
		public string confirmPassword { get; set; }

		public string code { get; set; }
	}

	public class SetPasswordRequest
	{
		[Required(ErrorMessage = "請輸入密碼")]
		[Display(Name = "密碼")]
		[StringLength(100, ErrorMessage = "密碼長度最少6位", MinimumLength = 6)]
		[DataType(DataType.Password)]
		public string password { get; set; }

		[DataType(DataType.Password)]
		[Display(Name = "確認密碼")]
		[Compare("password", ErrorMessage = "確認密碼與密碼不相符")]
		public string confirmPassword { get; set; }

	}

	public class ChangePasswordRequest
	{
		[Required(ErrorMessage = "請輸入舊密碼")]
		[Display(Name = "舊密碼")]
		[DataType(DataType.Password)]
		public string oldPassword { get; set; }

		[Required(ErrorMessage = "請輸入密碼")]
		[Display(Name = "密碼")]
		[StringLength(100, ErrorMessage = "密碼長度最少6位", MinimumLength = 6)]
		[DataType(DataType.Password)]
		public string password { get; set; }

		[DataType(DataType.Password)]
		[Display(Name = "確認密碼")]
		[Compare("password", ErrorMessage = "確認密碼與密碼不相符")]
		public string confirmPassword { get; set; }

	}
}
