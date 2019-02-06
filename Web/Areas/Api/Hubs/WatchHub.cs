using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ApplicationCore.DataAccess;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Hosting;
using ApplicationCore.Helpers;
using ApplicationCore.Views;
using Microsoft.Extensions.Options;
using ApplicationCore.Models;
using ApplicationCore.Services;
using Newtonsoft.Json;
using Microsoft.AspNetCore.SignalR;

namespace Web.Areas.Api.Hubs
{
	public class WatchHub : Hub
	{
		private readonly IRealTimeService realTimeService;
		private readonly AdminSettings adminSettings;

		public WatchHub(IOptions<AdminSettings> adminSettings, IRealTimeService realTimeService)
		{
			this.realTimeService = realTimeService;
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
