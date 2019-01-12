using ApplicationCore.Models;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using System;

namespace ApplicationCore.DataAccess
{

	public class DefaultContext : IdentityDbContext<User>
	{
		public DefaultContext(DbContextOptions<DefaultContext> options) : base(options)
		{
		}

		public DefaultContext(string connectionString) : base(new DbContextOptionsBuilder<DefaultContext>().UseSqlServer(connectionString).Options)
		{

		}

		public DbSet<Profile> Profiles { get; set; }
		public DbSet<RefreshToken> RefreshTokens { get; set; }
		
		public DbSet<Indicator> Indicators { get; set; }
		public DbSet<TradeSettings> TradeSettings { get; set; }



		protected override void OnModelCreating(ModelBuilder builder)
		{
			base.OnModelCreating(builder);

			builder.Entity<User>(ConfigureUser);

		}

		private void ConfigureUser(EntityTypeBuilder<User> builder)
		{
			builder.HasOne(u => u.Profile)
					.WithOne(p => p.User)
					.HasForeignKey<Profile>(p => p.UserId);

			builder.HasOne(u => u.RefreshToken)
					.WithOne(rt => rt.User)
					.HasForeignKey<RefreshToken>(rt => rt.UserId);
		}

		

		


	}
}
