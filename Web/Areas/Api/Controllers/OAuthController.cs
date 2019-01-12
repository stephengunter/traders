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
using System.Net.Http;
using Newtonsoft.Json;
using Google.Apis.Auth;
using System.Security.Claims;
using System.IdentityModel.Tokens.Jwt;
using Microsoft.IdentityModel.Tokens;

namespace Web.Areas.Api.Controllers
{
	public class OAuthController : BaseApiController
	{
		private readonly UserManager<User> userManager;
		private readonly IUserService userService;

		private readonly IJwtFactory jwtFactory;
		private readonly ITokenFactory tokenFactory;
		private readonly IJwtTokenValidator jwtTokenValidator;

		private readonly FacebookAuthSettings fbAuthSettings;
		private static readonly HttpClient Client = new HttpClient();


		public OAuthController(UserManager<User> userManager, IUserService userService, IJwtFactory jwtFactory, ITokenFactory tokenFactory, IJwtTokenValidator jwtTokenValidator, IOptions<FacebookAuthSettings> facebookAuthSettings)
		{
			this.userManager = userManager;
			this.userService = userService;

			this.jwtFactory = jwtFactory;
			this.tokenFactory = tokenFactory;
			this.jwtTokenValidator = jwtTokenValidator;

			this.fbAuthSettings = facebookAuthSettings.Value;
		}

		string AppAccessTokenUrl => $"https://graph.facebook.com/oauth/access_token?client_id={fbAuthSettings.AppId}&client_secret={fbAuthSettings.AppSecret}&grant_type=client_credentials";

		string UserValidateTokenUrl(string userToken, string appToken) =>
			$"https://graph.facebook.com/debug_token?input_token={userToken}&access_token={appToken}";

		string RequestUserInfoUrl(string userToken) =>
			 $"https://graph.facebook.com/v2.8/me?fields=id,email,first_name,last_name,name,gender,locale,birthday,picture&access_token={userToken}";

		//POST api/oauth/facebook
		[HttpPost("facebook")]
		public async Task<ActionResult> Facebook([FromBody] OAuthLoginRequest model)
		{
			// 1.generate an app access token
			var appAccessTokenResponse = await Client.GetStringAsync(AppAccessTokenUrl);
			var appAccessToken = JsonConvert.DeserializeObject<FacebookAppAccessToken>(appAccessTokenResponse);
			// 2. validate the user access token
			var userAccessTokenValidationResponse = await Client.GetStringAsync(UserValidateTokenUrl(model.token, appAccessToken.AccessToken));


			var userAccessTokenValidation = JsonConvert.DeserializeObject<FacebookUserAccessTokenValidation>(userAccessTokenValidationResponse);

			if (!userAccessTokenValidation.Data.IsValid)
			{
				//Invalid facebook token.
				ModelState.AddModelError("facebook", "登入失敗");
				return BadRequest(ModelState);
			}

			// 3. we've got a valid token so we can request user data from fb
			var userInfoResponse = await Client.GetStringAsync(RequestUserInfoUrl(model.token));
			var userInfo = JsonConvert.DeserializeObject<FacebookUserData>(userInfoResponse);

			var user = await userManager.FindByEmailAsync(userInfo.Email);
			if (user == null)
			{
				model.facebookId = userInfo.Id;
				model.email = userInfo.Email;
				model.fullname = userInfo.Name;

				return Ok(model);
			}

			var roles = await userManager.GetRolesAsync(user);
			var accessToken = await jwtFactory.GenerateEncodedToken(user.Id, user.UserName, roles);

			var refreshToken = tokenFactory.GenerateToken();
			userService.SetRefreshToken(user, refreshToken, RemoteIpAddress);

			var responseView = new AuthResponse
			{
				accessToken = accessToken,
				refreshToken = refreshToken
			};

			return Ok(responseView);

		}

		//POST api/oauth/facebook
		[HttpPost("google")]
		public async Task<ActionResult> Google([FromBody] OAuthLoginRequest model)
		{
			var payload = await GoogleJsonWebSignature.ValidateAsync(model.token, new GoogleJsonWebSignature.ValidationSettings());
			
			var user = await userManager.FindByEmailAsync(payload.Email);
			if (user == null)
			{
				model.googleId = payload.Subject;
				model.email = payload.Email;
				model.fullname = payload.Name;

				return Ok(model);
			}

			var roles = await userManager.GetRolesAsync(user);
			var accessToken = await jwtFactory.GenerateEncodedToken(user.Id, user.UserName, roles);

			var refreshToken = tokenFactory.GenerateToken();
			userService.SetRefreshToken(user, refreshToken, RemoteIpAddress);

			var responseView = new AuthResponse
			{
				accessToken = accessToken,
				refreshToken = refreshToken
			};

			return Ok(responseView);
		}

		[HttpPost("register")]
		public async Task<ActionResult> Register([FromBody] OAuthLoginRequest model)
		{
			var result = await userManager.CreateAsync(model.MapToEntity());

			var user = await userManager.FindByEmailAsync(model.email);

			var roles = await userManager.GetRolesAsync(user);
			var accessToken = await jwtFactory.GenerateEncodedToken(user.Id, user.UserName, roles);

			var refreshToken = tokenFactory.GenerateToken();
			userService.SetRefreshToken(user, refreshToken, RemoteIpAddress);

			var responseView = new AuthResponse
			{
				accessToken = accessToken,
				refreshToken = refreshToken
			};

			return Ok(responseView);

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