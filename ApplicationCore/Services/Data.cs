using ApplicationCore.DataAccess;
using ApplicationCore.Models;
using ApplicationCore.Specifications;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using ApplicationCore.Helpers;
using Microsoft.EntityFrameworkCore;

namespace ApplicationCore.Services
{
	public interface IDataService
	{
		Task CreateAsync(Quote quote);
		Task UpdateAsync(Quote quote);
		Quote GetQuote(int date, int time);
		Task<IEnumerable<Quote>> FetchAsync(int date);

		int LatestDate();
	}

	public class DataService : IDataService
	{
		private readonly IDataRepository<Data> dataRepository;
		private readonly IDataRepository<Quote> quoteRepository;

		public DataService(IDataRepository<Data> dataRepository, IDataRepository<Quote> quoteRepository)
		{
			this.dataRepository = dataRepository;
			this.quoteRepository = quoteRepository;
		}

		public async Task CreateAsync(Quote quote) => await quoteRepository.AddAsync(quote);

		public async Task UpdateAsync(Quote quote) => await quoteRepository.UpdateAsync(quote);

		public Quote GetQuote(int date, int time)
		{
			var spec = new QuoteFilterSpecification(date, time);
			return quoteRepository.GetSingleBySpec(spec);
		}

		public async Task<IEnumerable<Quote>> FetchAsync(int date)
		{
			var spec = new QuoteFilterSpecification(date);
			return await quoteRepository.ListAsync(spec);
		}

		public int LatestDate()
		{
			if (quoteRepository.DbSet.IsNullOrEmpty()) return 0;
			return quoteRepository.DbSet.Max(q => q.Date);
		}
	}
}
