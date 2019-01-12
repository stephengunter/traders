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

namespace Web.Areas.Api.Controllers
{
	public class AuthController : BaseApiController
	{
		private readonly UserManager<User> userManager;
		private readonly IUserService userService;

		private readonly IJwtFactory jwtFactory;
		private readonly ITokenFactory tokenFactory;
		private readonly IJwtTokenValidator jwtTokenValidator;

		private readonly IOptions<AppSettings> settings;


		public AuthController(UserManager<User> userManager, IUserService userService, IJwtFactory jwtFactory, ITokenFactory tokenFactory, IJwtTokenValidator jwtTokenValidator, IOptions<AppSettings> settings)
		{
			this.userManager = userManager;
			this.userService = userService;

			this.jwtFactory = jwtFactory;
			this.tokenFactory = tokenFactory;
			this.jwtTokenValidator = jwtTokenValidator;

			this.settings = settings;
		}

		
		//POST api/auth/login
	    [HttpPost("login")]
		public async Task<ActionResult> Login([FromBody] LoginRequest model)
		{
			if (!ModelState.IsValid) return BadRequest(ModelState);

			var user = await userManager.FindByNameAsync(model.email);

			if (user != null)
			{
				if (await userManager.CheckPasswordAsync(user, model.password))
				{
					if (!user.EmailConfirmed)
					{
						ModelState.AddModelError("email_confirm", "Email未驗證");
						return BadRequest(ModelState);
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
			}

			ModelState.AddModelError("login", "登入失敗");
			return BadRequest(ModelState);

		}

		//POST api/auth/refreshtoken
	    [HttpPost("refreshtoken")]
		public async Task<ActionResult> RefreshToken([FromBody] RefreshTokenRequest model)
		{
			if (!ModelState.IsValid) { return BadRequest(ModelState); }

			var secretKey = settings.Value.AuthSecret;

			var cp = jwtTokenValidator.GetPrincipalFromToken(model.accessToken, secretKey);
			
			if (cp != null)
			{
				var id = cp.Claims.First(c => c.Type == "id").Value;

				bool valid = userService.HasValidRefreshToken(id, model.refreshToken);

				if (valid)
				{
					var user = await userManager.FindByIdAsync(id);
					var roles = await userManager.GetRolesAsync(user);
					
					var refreshToken = tokenFactory.GenerateToken();

					userService.SetRefreshToken(user, refreshToken, RemoteIpAddress);

					var accessToken = await jwtFactory.GenerateEncodedToken(user.Id, user.UserName, roles);

					var responseView = new AuthResponse
					{
						accessToken = accessToken,
						refreshToken = refreshToken
					};

					return Ok(responseView);
				}

			}

			ModelState.AddModelError("token", "身分驗證失敗. 請重新登入");
			return BadRequest(ModelState);



		}

	}
}