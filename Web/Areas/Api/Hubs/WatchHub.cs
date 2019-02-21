using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.Extensions.Options;
using Microsoft.AspNetCore.SignalR;

namespace Web.Areas.Api.Hubs
{
	public class WatchHub : Hub
	{
		private readonly AdminSettings adminSettings;

		public WatchHub(IOptions<AdminSettings> adminSettings)
		{
			this.adminSettings = adminSettings.Value;
		}


		public async Task Quote(string key)
		{
			if (key == adminSettings.QuoteKey)
			{
				await Clients.All.SendAsync("receive");
			}

		}

	}
}
