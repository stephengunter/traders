using System;
using System.Collections.Generic;
using System.Text;

namespace ApplicationCore.Views
{
	public class AccessTokenResponse
	{
		public string token { get; }
		public int expiresIn { get; }

		public AccessTokenResponse(string token, int expiresIn)
		{
			this.token = token;
			this.expiresIn = expiresIn;
		}
	}

	public class AuthResponse
	{
		public AccessTokenResponse accessToken { get; set; }
		public string refreshToken { get; set; }

	}

}
