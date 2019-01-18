using ApplicationCore.Helpers;
using ApplicationCore.Models;
using ApplicationCore.Services;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Options;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ApplicationCore.DataAccess
{
	public interface IDBSeeder
	{
		Task SeedAsync();
	}
	public class DBSeeder : IDBSeeder
	{
		private readonly DefaultContext defaultContext;
		private readonly RealTimeContext realTimeContext;
		private readonly DataContext dataContext;

		private readonly UserManager<User> userManager;
		private readonly RoleManager<IdentityRole> roleManager;

		public DBSeeder(DefaultContext defaultContext, RealTimeContext realTimeContext, DataContext dataContext,
			UserManager<User> userManager, RoleManager<IdentityRole> roleManager)
		{
			this.defaultContext = defaultContext;
			this.realTimeContext = realTimeContext;
			this.dataContext = dataContext;

			this.userManager = userManager;
			this.roleManager = roleManager;

		}

		public async Task SeedAsync()
		{
			defaultContext.Database.Migrate();
			realTimeContext.Database.Migrate();
			dataContext.Database.Migrate();

			await AppDBSeed.SeedRoles(roleManager);
			await AppDBSeed.SeedUsers(userManager);

			await AppDBSeed.SeedIndicators(defaultContext);

			await AppDBSeed.SeedStocks(dataContext);
		}
	}

	public class AppDBSeed
	{
		public static async Task EnsureSeedData(IServiceProvider serviceProvider)
		{

			Console.WriteLine("Seeding database...");

			using (var scope = serviceProvider.GetRequiredService<IServiceScopeFactory>().CreateScope())
			{
				var defaultContext = scope.ServiceProvider.GetRequiredService<DefaultContext>();
				defaultContext.Database.Migrate();

				var realTimeContext = scope.ServiceProvider.GetRequiredService<RealTimeContext>();
				realTimeContext.Database.Migrate();

				var dataContext = scope.ServiceProvider.GetRequiredService<DataContext>();
				dataContext.Database.Migrate();


				var userManager = scope.ServiceProvider.GetRequiredService<UserManager<User>>();
				var roleManager = scope.ServiceProvider.GetRequiredService<RoleManager<IdentityRole>>();

				await SeedRoles(roleManager);
				await SeedUsers(userManager);

				await SeedIndicators(defaultContext);

				await SeedStocks(dataContext);


			}

			Console.WriteLine("Done seeding database.");
			Console.WriteLine();


		}

		public static async Task SeedRoles(RoleManager<IdentityRole> roleManager)
		{
			var roles = new List<string> { "Dev", "Boss", "Author" };
			foreach (var item in roles)
			{
				await AddRoleIfNotExist(roleManager, item);
			}


		}

		public static async Task AddRoleIfNotExist(RoleManager<IdentityRole> roleManager, string roleName)
		{
			var role = await roleManager.FindByNameAsync(roleName);
			if (role == null)
			{
				await roleManager.CreateAsync(new IdentityRole { Name = roleName });

			}


		}

		public static async Task SeedUsers(UserManager<User> userManager)
		{
			string username = "traders.com.tw@gmail.com";
			string fullname = "何金水";
			var roles = new List<string>() { "Dev" };
			string password = "secret";

			await CreateUserIfNotExist(userManager, username, fullname, password, roles);

			username = "leojuan@gmail.com";
			fullname = "阿財";
			roles = new List<string>() { "Boss", "Author" };
			password = "secret";

			await CreateUserIfNotExist(userManager, username, fullname, password, roles);


			for (int i = 0; i < 20; i++)
			{
				username = $"test_{i.ToString()}@gmail.com";
				fullname = $"test_{i.ToString()}";
				roles = null;
				password = $"test_{i.ToString()}test_{i.ToString()}";

				await CreateUserIfNotExist(userManager, username, fullname, password, roles);
			}


		}


		public static async Task CreateUserIfNotExist(UserManager<User> userManager, string username, string fullname, string password, IList<string> roles = null)
		{

			var user = await userManager.FindByNameAsync(username);
			if (user == null)
			{
				bool isAdmin = false;
				if (!roles.IsNullOrEmpty())
				{
					isAdmin = roles.Select(r => r == "Dev" || r == "Boss").FirstOrDefault();
				}

				var newUser = new User
				{
					UserName = username,
					Email = username,
					EmailConfirmed = isAdmin,
					CreatedAt = DateTime.Now,
					LastUpdated = DateTime.Now,
					SecurityStamp = Guid.NewGuid().ToString(),


					Profile = new Profile
					{
						Fullname = fullname,
						CreatedAt = DateTime.Now,
						LastUpdated = DateTime.Now,
						Gender = true,

					}

				};


				var result = await userManager.CreateAsync(newUser, password);

				if (!roles.IsNullOrEmpty())
				{
					await userManager.AddToRolesAsync(newUser, roles);
				}


			}
			else
			{
				if (!roles.IsNullOrEmpty())
				{
					foreach (var role in roles)
					{
						bool hasRole = await userManager.IsInRoleAsync(user, role);
						if (!hasRole) await userManager.AddToRoleAsync(user, role);
					}
				}


			}
		}



		public static async Task SeedIndicators(DefaultContext context)
		{
			var indicators = new List<Indicator>
			{
				new Indicator
				{
					Name = "藍籌股指標" , Entity = "BlueChips", Begin = 90000, End = 132500,
					Main = false, Type = IndicatorType.Bar, Source = SourceType.Stock,
					Params = "1,60,5" ,
					Description ="主要權值股多空力道分析"
				}
			};

			foreach (var indicator in indicators)
			{
				var exist = await context.Indicators.Where(i => i.Entity == indicator.Entity).FirstOrDefaultAsync();
				if (exist == null)
				{
					context.Indicators.Add(indicator);
					context.SaveChanges();
				}
				else
				{
					exist.Name = indicator.Name;
					exist.Description = indicator.Description;
					exist.Begin = indicator.Begin;
					exist.End = indicator.End;
					exist.Main = indicator.Main;
					exist.Source = indicator.Source;
					exist.Type = indicator.Type;
					exist.Params = indicator.Params;
					exist.Entity = indicator.Entity;
					context.SaveChanges();
				}
			}


		}


		public static async Task SeedStocks(DataContext context)
		{
			var stocks = new List<Stock>
			{
				new Stock { Name = "中華電" , Code = "2412" , Price = 106.5 , Weight = 2.9486 , Ignore = true },
				new Stock { Name = "台灣大" , Code = "3045", Price = 109 ,Weight = 1.3308 , Ignore = true},
				new Stock { Name = "遠傳" , Code = "4904", Price = 72.5 ,Weight = 0.8501 , Ignore = true },

				new Stock { Name = "台積電" , Code = "2330" , Price = 229, Weight = 21.1929 , Base = true },
				new Stock { Name = "鴻海" , Code = "2317" , Price = 72.4, Weight = 4.2131 },
				new Stock { Name = "台塑化" , Code = "6505",  Price = 111 , Weight = 3.7738 },
				new Stock { Name = "台塑" , Code = "1301", Price = 99.5 , Weight = 2.2606 },
				new Stock { Name = "台化" , Code = "1326" , Price = 104.5, Weight = 2.1860 },
				new Stock { Name = "國泰金" , Code = "2882" ,Price = 48.5, Weight = 2.1769 },
				new Stock { Name = "南亞" , Code = "1303"  ,Price = 74.3, Weight = 2.1031 },
				new Stock { Name = "富邦金" , Code = "2881" ,Price = 48.6, Weight = 1.7751 },
				new Stock { Name = "大立光" , Code = "3008" , Price = 3515 ,Weight = 1.6828 },
				new Stock { Name = "統一" , Code = "1216", Price = 72.2 , Weight = 1.4642 },
				new Stock { Name = "中信金" , Code = "2891",Price= 20.4 , Weight = 1.4195 },
				new Stock { Name = "中鋼" , Code = "2002", Price = 23.85 ,Weight = 1.3394 },
				new Stock { Name = "聯發科" , Code = "2454",Price = 231.5 , Weight = 1.3150 },
				new Stock { Name = "兆豐金" , Code = "2886",Price = 25.75, Weight = 1.2498 },
				new Stock { Name = "統一超" , Code = "2912", Price= 323.5 ,Weight = 1.2003 },
				new Stock { Name = "台達電" , Code = "2308", Price= 128.5,Weight = 1.1913 },
				new Stock { Name = "日月光" , Code = "3711",Price= 62, Weight = 0.9560 },
				new Stock { Name = "第一金" , Code = "2892" ,Price= 20.2, Weight = 0.8895 },
				new Stock { Name = "合庫金" , Code = "5880", Price= 17.8 , Weight = 0.7985 },
				new Stock { Name = "玉山金" , Code = "2884" , Price= 20.65 , Weight = 0.7981},
				new Stock { Name = "華南金" , Code = "2880" , Price= 17.65 ,Weight = 0.7272},
				new Stock { Name = "可成" , Code = "2474",Price=252.5  , Weight = 0.6943 },
				new Stock { Name = "廣達" , Code = "2382",Price=49.2 , Weight = 0.6776 },
				new Stock { Name = "南亞科" , Code = "2408",Price=60.3 , Weight = 0.6675 },
				new Stock { Name = "元大金" , Code = "2885" , Price=15.6 , Weight = 0.6506 },
				new Stock { Name = "台泥" , Code = "1101", Price= 34.05 , Weight = 0.6208 },
				new Stock { Name = "彰銀" , Code = "2801" ,Price=17.6, Weight = 0.6149},
				new Stock { Name = "華碩" , Code = "2357" ,Price=228, Weight = 0.5779},
				new Stock { Name = "研華" , Code = "2395" ,Price=222, Weight = 0.5614},
				new Stock { Name = "國巨" , Code = "2327" ,Price=313, Weight = 0.5442}

			};

			var codes = stocks.Select(s => s.Code).ToArray();
			if (codes.HasDuplicate()) throw new Exception("Stock Code Has Duplicate");

			var bigger = stocks.Where(s => s.Weight >= 100).FirstOrDefault();
			if (bigger != null) throw new Exception(String.Format("Stock {0} Weight Bigger Than 1", bigger.Code));

			var weightSum = stocks.Sum(s => s.Weight);
			if (codes.HasDuplicate()) throw new Exception("Stock Code Has Duplicate");


			foreach (var code in codes)
			{
				var exist = await context.Stocks.Where(s => s.Code == code).FirstOrDefaultAsync();
				if (exist == null)
				{
					context.Stocks.Add(stocks.Where(s => s.Code == code).FirstOrDefault());
					context.SaveChanges();
				}
				else
				{
					var stock = stocks.Where(s => s.Code == code).FirstOrDefault();
					exist.Base = stock.Base;
					exist.Weight = stock.Weight;
					exist.Price = stock.Price;
					exist.Ignore = stock.Ignore;

					context.SaveChanges();
				}
			}
		}


	}
}
