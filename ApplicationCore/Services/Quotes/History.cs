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
	public interface IHistoryService
	{
		Task CreateAsync(Quote quote);
		Task UpdateAsync(Quote quote);
		Quote GetQuote(int date, int time);
		Task<IEnumerable<Quote>> FetchAsync(int date);
        Task<IEnumerable<Quote>> FetchRangeAsync(int begin, int end);

        Task<IEnumerable<Quote>> FetchAllAsync();

		int LatestDate();
	}

	public class HistoryService : IHistoryService
	{
		private readonly IHistoryRepository<Data> dataRepository;
		private readonly IHistoryRepository<Quote> quoteRepository;

		public HistoryService(IHistoryRepository<Data> dataRepository, IHistoryRepository<Quote> quoteRepository)
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

        public async Task<IEnumerable<Quote>> FetchRangeAsync(int begin, int end)
        {
            var spec = new QuoteFilterByRangeSpecification(begin, end);
            return await quoteRepository.ListAsync(spec);
        }

        public async Task<IEnumerable<Quote>> FetchAllAsync()
		{
			var spec = new QuoteFilterSpecification();
			return await quoteRepository.ListAsync(spec);
		}

		public int LatestDate()
		{
			if (quoteRepository.DbSet.IsNullOrEmpty()) return 0;
			return quoteRepository.DbSet.Max(q => q.Date);
		}
	}
}
