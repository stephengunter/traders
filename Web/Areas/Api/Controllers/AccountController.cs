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
    public class AccountController : BaseApiController
	{
		private readonly UserManager<User> userManager;
		private readonly IEmailSender emailSender;
		private readonly IOptions<AppSettings> settings;
		private readonly IHostingEnvironment hostingEnvironment;

		public AccountController(UserManager<User> userManager, IEmailSender emailSender,
			IOptions<AppSettings> settings, IHostingEnvironment hostingEnvironment)
		{
			this.userManager = userManager;
			this.emailSender = emailSender;
			this.settings = settings;
			this.hostingEnvironment = hostingEnvironment;
		}

		//POST api/account
		[HttpPost("")]
		public async Task<ActionResult> Register([FromBody] RegisterRequest model)
		{
			if (!ModelState.IsValid) return BadRequest(ModelState);

			var user = model.MapToEntity();

			var result = await userManager.CreateAsync(user, model.password);
			 
			if (result.Succeeded) 
			{
				await SendConfirmationEmail(user);

				return Ok();
			}

			AddErrors(result);
			return BadRequest(ModelState);

		}

		async Task SendConfirmationEmail(User user)
		{
			var code = await userManager.GenerateEmailConfirmationTokenAsync(user);
			var callbackUrl = ConfirmEmailCallbackLink(user.Id, code);

			string msgBody = GetConfirmEmailBody(user.UserName, callbackUrl);
			string subject = "註冊會員Email認證信";

			await emailSender.SendEmailAsync(user.Email, subject, msgBody);
		}

		//POST api/account/SendConfirmEmail
		[HttpPost("SendConfirmEmail")]
		public async Task<IActionResult> SendConfirmEmail([FromBody] SendConfirmEmailRequest model)
		{
			var user = await userManager.FindByEmailAsync(model.email);
			await SendConfirmationEmail(user);
			return Ok();
		}

		//POST api/account/confirmEmail
		[HttpPost("confirmEmail")]
		public async Task<IActionResult> ConfirmEmail([FromBody]  ConfirmEmailRequest model)
		{
			if (model.id != null && model.code != null)
			{
				var user = await userManager.FindByIdAsync(model.id);
				if (user != null)
				{
					var result = await userManager.ConfirmEmailAsync(user, model.code);
					if (result.Succeeded)
					{
						return Ok();
					}
				}
			}

			ModelState.AddModelError(string.Empty, "Email確認失敗");
			return BadRequest(ModelState);
		}




		string ConfirmEmailCallbackLink(string user, string code)
		{
			string url = Url.Action("ConfirmEmail", "Account", new { user, code }, protocol: HttpContext.Request.Scheme);

			return url.Replace(Url.Action("ConfirmEmail", "Account"), "/#/confirm-email");
		}

		string GetConfirmEmailBody(string fullname, string actionUrl)
		{
			string appName = settings.Value.Title;
			string footer = String.Format("{0} {1}", appName, settings.Value.Url);
			var pathToFile = Path.Combine(hostingEnvironment.WebRootPath, "templates", "confirmEmail.html");
			if (!System.IO.File.Exists(pathToFile)) throw new Exception("File Not Exist: " + pathToFile);

			string body = "";
			using (StreamReader reader = System.IO.File.OpenText(pathToFile))
			{
				body = reader.ReadToEnd();
			}

			string messageBody = body.Replace("APPNAME", appName).Replace("USERNAME", fullname).Replace("ACTION_URL", actionUrl).Replace("FOOTER", footer);

			return messageBody;
		}


		void AddErrors(IdentityResult result)
		{
			foreach (var error in result.Errors)
			{
				if (error.Code == "PasswordRequiresDigit")
				{
					ModelState.AddModelError(string.Empty, "密碼必須有至少一個數字");
				}
				else if (error.Code.ToLower() == "DuplicateUsername".ToLower())
				{
					ModelState.AddModelError(string.Empty, "這個Email已經有人使用了");
				}
				else if (error.Code.ToLower() == "DuplicateEmail".ToLower())
				{
					
				}
				else
				{
					ModelState.AddModelError(string.Empty, error.Description);
				}

			}
		}


	}
}