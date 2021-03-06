﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity.UI;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.HttpsPolicy;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using ApplicationCore.DataAccess;
using ApplicationCore.Models;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using ApplicationCore.Services;
using Microsoft.IdentityModel.Tokens;
using System.Text;
using ApplicationCore.Auth;
using ApplicationCore.Helpers;
using Autofac;
using Autofac.Extensions.DependencyInjection;
using Swashbuckle.AspNetCore.Swagger;
using System.Security.Claims;
using System.IdentityModel.Tokens.Jwt;
using Web.Services;
using System.IO;
using NLog;
using Web.Middlewares;
using Microsoft.AspNetCore.SpaServices.Webpack;
using ApplicationCore.Authorization;
using Web.Areas.Api.Hubs;

namespace Web
{
	public class Startup
	{
		public Startup(IConfiguration configuration)
		{
			var nLogConfigPath = string.Concat(Directory.GetCurrentDirectory(), "/nlog.config");
			if (File.Exists(nLogConfigPath)) { LogManager.LoadConfiguration(string.Concat(Directory.GetCurrentDirectory(), "/nlog.config")); }
			Configuration = configuration;
		}

		public IConfiguration Configuration { get; }

		public IServiceProvider ConfigureServices(IServiceCollection services)
		{
			services.AddDbContext<DefaultContext>(options =>
				options.UseSqlServer(Configuration.GetConnectionString("Default"),
				b => b.MigrationsAssembly("ApplicationCore"))
			);
			services.AddDbContext<HistoryContext>(options =>
				options.UseSqlServer(Configuration.GetConnectionString("History"),
				b => b.MigrationsAssembly("ApplicationCore"))
			);
			services.AddDbContext<RealTimeContext>(options =>
				options.UseSqlServer(Configuration.GetConnectionString("RealTime"),
				b => b.MigrationsAssembly("ApplicationCore"))
			);

			services.AddIdentity<User, IdentityRole>(options =>
			{
				options.User.RequireUniqueEmail = true;
				// Password settings
				options.Password.RequireDigit = false;
				options.Password.RequiredLength = 6;
				options.Password.RequireNonAlphanumeric = false;
				options.Password.RequireUppercase = false;
				options.Password.RequireLowercase = false;

			})
			.AddEntityFrameworkStores<DefaultContext>()
			.AddDefaultTokenProviders();

			services.Configure<AppSettings>(Configuration.GetSection("AppSettings"));
			services.Configure<EmailSettings>(Configuration.GetSection("EmailSettings"));
			services.Configure<FacebookAuthSettings>(Configuration.GetSection("FacebookAuthSettings"));
			services.Configure<AdminSettings>(Configuration.GetSection("AdminSettings"));



			var signingKey = new SymmetricSecurityKey(Encoding.ASCII.GetBytes(Configuration["AppSettings:AuthSecret"]));

			string issuer = Configuration["JwtIssuerOptions:Issuer"];
			string audience = Configuration["JwtIssuerOptions:Audience"];

			services.Configure<JwtIssuerOptions>(options =>
			{
				options.Issuer = issuer;
				options.Audience = audience;
				options.SigningCredentials = new SigningCredentials(signingKey, SecurityAlgorithms.HmacSha256);
			});

			JwtSecurityTokenHandler.DefaultInboundClaimTypeMap.Clear(); 
			var tokenValidationParameters = new TokenValidationParameters
			{
				ValidateIssuer = true,
				ValidIssuer = issuer,

				ValidateAudience = true,
				ValidAudience = audience,

				ValidateIssuerSigningKey = true,
				IssuerSigningKey = signingKey,

				RequireExpirationTime = false,
				ValidateLifetime = true,
				ClockSkew = TimeSpan.Zero
			};

			services.AddAuthentication(options =>
			{
				options.DefaultAuthenticateScheme = JwtBearerDefaults.AuthenticationScheme;
				options.DefaultChallengeScheme = JwtBearerDefaults.AuthenticationScheme;

			}).AddJwtBearer(configureOptions =>
			{
				configureOptions.ClaimsIssuer = issuer;
				configureOptions.TokenValidationParameters = tokenValidationParameters;
				configureOptions.SaveToken = true;

				configureOptions.Events = new JwtBearerEvents
				{
					OnAuthenticationFailed = context =>
					{
						if (context.Exception.GetType() == typeof(SecurityTokenExpiredException))
						{
							context.Response.Headers.Add("Token-Expired", "true");
						}
						return Task.CompletedTask;
					}
				};
			});

			services.AddAuthorization(options =>
			{
				options.AddPolicy(Permissions.Admin.ToString(), policy =>
					policy.Requirements.Add(new HasPermissionRequirement(Permissions.Admin.ToString())));

			});

            services.AddCors(options => options.AddPolicy("api",
                   p => p.WithOrigins("http://localhost:8080")
                    .AllowAnyMethod()
                    .AllowAnyHeader().AllowCredentials()
            ));


            services.AddSwaggerGen(c =>
			{
				c.SwaggerDoc("v1", new Info { Title = "AspNetCoreApiStarter", Version = "v1" });
				
				c.AddSecurityDefinition("Bearer", new ApiKeyScheme
				{
					In = "header",
					Description = "Please insert JWT with Bearer into field",
					Name = "Authorization",
					Type = "apiKey"
				});

				c.AddSecurityRequirement(new Dictionary<string, IEnumerable<string>>
				{
					{ "Bearer", new string[] { } }
				});
			});

			services.AddTransient<IEmailSender, EmailSender>();

			services.AddScoped<IAuthorizationHandler, HasPermissionHandler>();

			services.AddScoped(typeof(IDefaultRepository<>), typeof(DefaultRepository<>));
			services.AddScoped(typeof(IHistoryRepository<>), typeof(HistoryRepository<>));
			services.AddScoped(typeof(IRealTimeRepository<>), typeof(RealTimeRepository<>));

			services.AddScoped<IDBSeeder, DBSeeder>();
			services.AddScoped<IDBKeepler, DBKeepler>();

			services.AddScoped<IUserService, UserService>();
			services.AddScoped<IPermissionService, PermissionService>();

			services.AddScoped<IStockService, StockService>();
			services.AddScoped<IIndicatorService, IndicatorService>();
			services.AddScoped<IPlanService, PlanService>();
			services.AddScoped<ISubscribeService, SubscribeService>();
			services.AddScoped<IStrategyService, StrategyService>();
			services.AddScoped<IDayService, DayService>();

			services.AddScoped<IRealTimeService, RealTimeService>();
			services.AddScoped<IHistoryService, HistoryService>();

			services.AddScoped<IAttachmentService, AttachmentService>();

			services.AddMvc().SetCompatibilityVersion(CompatibilityVersion.Version_2_2);

			services.AddSignalR();


			
			var builder = new ContainerBuilder();
			builder.RegisterModule(new ApplicationCore.Modules());
			builder.Populate(services);

			var container = builder.Build();
			return new AutofacServiceProvider(container);
			
		}

		
		public void Configure(IApplicationBuilder app, IHostingEnvironment env)
		{

			if (env.IsDevelopment())
			{
				app.UseDeveloperExceptionPage();
				app.UseDatabaseErrorPage();
			}
			else
			{
				app.UseMiddleware<ExceptionMiddleware>();
				// The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
				app.UseHsts();
			}

			app.UseHttpsRedirection();
			app.UseStaticFiles();

			app.UseCors("api");

            app.UseSwaggerUI(c =>
			{
				c.SwaggerEndpoint("/swagger/v1/swagger.json", "AspNetCoreApiStarter V1");
			});
			
			app.UseSwagger();

			app.UseAuthentication();

			app.UseSignalR(route =>
			{
				route.MapHub<WatchHub>("/watchHub");
			});


			app.UseMvc(routes =>
			{
				routes.MapRoute(
					name: "default",
					template: "{controller=Home}/{action=Index}");


				routes.MapRoute(
					name: "areaRoute",
					template: "{area:exists}/{controller=Home}/{action=Index}/{id?}");
			});


		}
	}
}
