using ApplicationCore.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace ApplicationCore.DataAccess
{

	public class DataContext : DbContext
	{
		
		public DataContext(DbContextOptions<DataContext> options) : base(options)
		{
		}

		public DataContext(string connectionString) : base(new DbContextOptionsBuilder<DataContext>().UseSqlServer(connectionString).Options)
		{

		}

		public DbSet<Stock> Stocks { get; set; }
		public DbSet<Quote> Quotes { get; set; }
		public DbSet<Data> Data { get; set; }



	}
}
