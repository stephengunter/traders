using ApplicationCore.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace ApplicationCore.DataAccess
{

	public class HistoryContext : DbContext
	{
		
		public HistoryContext(DbContextOptions<HistoryContext> options) : base(options)
		{
		}

		public HistoryContext(string connectionString) : base(new DbContextOptionsBuilder<HistoryContext>().UseSqlServer(connectionString).Options)
		{

		}

		
		public DbSet<Quote> Quotes { get; set; }
		public DbSet<Data> Data { get; set; }


	}

}
