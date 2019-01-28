using ApplicationCore.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace ApplicationCore.DataAccess
{
	public class RealTimeContext : DbContext
	{
		public RealTimeContext(DbContextOptions<RealTimeContext> options) : base(options)
		{
		}

		public RealTimeContext(string connectionString) : base(new DbContextOptionsBuilder<RealTimeContext>().UseSqlServer(connectionString).Options)
		{

		}

		
		public DbSet<Quote> Quotes { get; set; }
		public DbSet<Data> Data { get; set; }

	}
}
