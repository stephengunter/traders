using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.Logging;
using ApplicationCore.DataAccess;

namespace Web
{
	public class Program
	{
		public static void Main(string[] args)
		{
			var host = CreateWebHostBuilder(args).Build();

			var environment = Environment.GetEnvironmentVariable("ASPNETCORE_ENVIRONMENT");
			if (environment == EnvironmentName.Development)
			{
				Task.Run(() => AppDBSeed.EnsureSeedData(host.Services).Wait());
			}

			host.Run();
		}


		public static IWebHostBuilder CreateWebHostBuilder(string[] args) =>
			WebHost.CreateDefaultBuilder(args)
				.UseStartup<Startup>();



		
	}
}
