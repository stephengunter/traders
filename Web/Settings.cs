using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Web
{
	public class AppSettings
	{
		public string Title { get; set; }
		public string Url { get; set; }
		public string AuthSecret { get; set; }
		public string UploadPath { get; set; }

        public string MinDate { get; set; }

        public string DefaultStrategyName { get; set; }
        public decimal DefaultCost { get; set; }

    }

	public class EmailSettings
	{
		public string Provider { get; set; }
		public string Title { get; set; }
		public string Email { get; set; }
		public string Host { get; set; }
		public int Port { get; set; }
		public string UserName { get; set; }
		public string Password { get; set; }
		public string ApiKey { get; set; }
	}

	public class FacebookAuthSettings
	{
		public string AppId { get; set; }
		public string AppSecret { get; set; }
	}

	public class AdminSettings
	{
		public string DBKey { get; set; }
		public string QuoteKey { get; set; }

	}
}
