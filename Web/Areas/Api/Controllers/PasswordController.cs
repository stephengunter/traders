using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using ApplicationCore.Views;
using Microsoft.AspNetCore.Identity;
using ApplicationCore.Models;
using ApplicationCore.Auth;
using Microsoft.Extensions.Options;
using ApplicationCore.Services;
using Microsoft.AspNetCore.Authorization;
using Web.Services;
using System.IO;
using Microsoft.AspNetCore.Hosting;
using ApplicationCore.Logging;

namespace Web.Areas.Api.Controllers
{
    public class PasswordController : BaseApiController
	{
		private readonly UserManager<User> userManager;
		private readonly IEmailSender emailSender;
		private readonly IOptions<AppSettings> settings;
		private readonly IHostingEnvironment hostingEnvironment;

		public PasswordController(UserManager<User> userManager, IEmailSender emailSender, 
			IOptions<AppSettings> settings, IHostingEnvironment hostingEnvironment)
		{
			this.userManager = userManager;
			this.emailSender = emailSender;
			this.settings = settings;
			this.hostingEnvironment = hostingEnvironment;
		}

		


		//POST api/password/forgot
		[HttpPost("forgot")]
		public async Task<IActionResult> ForgotPassword([FromBody] ForgotPasswordRequest model)
		{
			if (!ModelState.IsValid) return BadRequest(ModelState);

			var user = await userManager.FindByEmailAsync(model.email);
			if (user == null)
			{
				ModelState.AddModelError("", "啟動密碼重設程序失敗");
				return BadRequest(ModelState);
			}

			var code = await userManager.GeneratePasswordResetTokenAsync(user);
			var callbackUrl = ResetPasswordCallbackLink(code);

			string msgBody = GetForgotPasswordMailBody(user.UserName, callbackUrl);
			string subject = "忘記密碼確認信";

			await emailSender.SendEmailAsync(model.email, subject, msgBody);

			return Ok(code);

		}

		//POST api/password/reset
		[HttpPost("reset")]
		public async Task<IActionResult> ResetPassword([FromBody] ResetPasswordRequest model)
		{
			if (!ModelState.IsValid) return BadRequest(ModelState);

			var user = await userManager.FindByEmailAsync(model.email);
			if (user == null)
			{
				ModelState.AddModelError("", "密碼重設失敗");
				return BadRequest(ModelState);
			}
			var result = await userManager.ResetPasswordAsync(user, model.code, model.password);
			if (result.Succeeded)
			{
				return Ok();
			}


			AddResetPasswordErrors(result);
			return BadRequest(ModelState);
		}

		[Authorize]
		[HttpGet("change")]
		public async Task<IActionResult> ChangePassword()
		{
			var user = await userManager.FindByIdAsync(CurrentUserId);

			var hasPassword = await userManager.HasPasswordAsync(user);
			if(hasPassword) return Ok(new ChangePasswordRequest());

			return Ok(new SetPasswordRequest());
		}

		//POST api/password/change
		[Authorize]
		[HttpPost("change")]
		public async Task<IActionResult> ChangePassword([FromBody] ChangePasswordRequest model)
		{
			
			if (!ModelState.IsValid) return BadRequest(ModelState);			

			var user = await userManager.FindByIdAsync(CurrentUserId);

			var hasPassword = await userManager.HasPasswordAsync(user);
			if (!hasPassword)
			{
				ModelState.AddModelError("no_password", "還沒有密碼");
				return BadRequest(ModelState);
			}

			var result = await userManager.ChangePasswordAsync(user, model.oldPassword, model.password);

			if (result.Succeeded) return Ok();


			AddChangePasswordErrors(result);
			return BadRequest(ModelState);
		}

		//POST api/password/set
		[Authorize]
		[HttpPost("set")]
		public async Task<IActionResult> SetPassword([FromBody] SetPasswordRequest model)
		{
			if (!ModelState.IsValid) return BadRequest(ModelState);

			var user = await userManager.FindByIdAsync(CurrentUserId);

			var hasPassword = await userManager.HasPasswordAsync(user);

			if (hasPassword)
			{
				ModelState.AddModelError("has_password", "舊密碼錯誤");
				return BadRequest(ModelState);
			}

			var result = await userManager.AddPasswordAsync(user, model.password);
			if (result.Succeeded) return Ok();

			AddChangePasswordErrors(result);
			return BadRequest(ModelState);
		}


		string ResetPasswordCallbackLink(string code)
		{
			string url = Url.Action("ResetPassword", "Password", new { code }, protocol: HttpContext.Request.Scheme);
		
			return url.Replace(Url.Action("ResetPassword", "Password"), "/#/reset-password");
		}

		string GetForgotPasswordMailBody(string fullname, string actionUrl)
		{
			string appName = settings.Value.Title;
			string footer = String.Format("{0} {1}", appName, settings.Value.Url);
			var pathToFile = Path.Combine(hostingEnvironment.WebRootPath, "templates", "forgotPasswordEmail.html");
			if (!System.IO.File.Exists(pathToFile)) throw new Exception("File Not Exist: " + pathToFile);

			string body = "";
			using (StreamReader reader = System.IO.File.OpenText(pathToFile))
			{
				body = reader.ReadToEnd();
			}


			string messageBody = body.Replace("APPNAME", appName).Replace("USERNAME", fullname).Replace("ACTION_URL", actionUrl).Replace("FOOTER", footer);

			return messageBody;
		}

		void AddChangePasswordErrors(IdentityResult result)
		{
			foreach (var error in result.Errors)
			{
				if (error.Code == "PasswordMismatch")
				{
					ModelState.AddModelError("oldPassword", "舊密碼錯誤");
				}
				else if (error.Code == "PasswordRequiresDigit")
				{
					ModelState.AddModelError("password", "密碼必須有至少一個數字");
				}
				else 
				{
					ModelState.AddModelError("", "密碼變更失敗");
				}

			}
		}

		void AddResetPasswordErrors(IdentityResult result)
		{
			foreach (var error in result.Errors)
			{
				if (error.Code == "PasswordRequiresDigit")
				{
					ModelState.AddModelError("password", "密碼必須有至少一個數字");
				}
				//else if (error.Code == "InvalidToken")
				//{
				//	ModelState.AddModelError("token", "密碼重設失敗");
				//}
				else
				{
					ModelState.AddModelError("", "密碼重設失敗");
				}

			}
		}

	}
}