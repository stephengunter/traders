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
	public interface IRealTimeService
	{
		Task CreateAsync(Quote quote);
		Task UpdateAsync(Quote quote);
		Quote GetQuote(int date, int time);
	}

	public class RealTimeService : IRealTimeService
	{
		private readonly IRealTimeRepository<Data> dataRepository;
		private readonly IRealTimeRepository<Quote> quoteRepository;

		public RealTimeService(IRealTimeRepository<Data> dataRepository, IRealTimeRepository<Quote> quoteRepository)
		{
			this.dataRepository = dataRepository;
			this.quoteRepository = quoteRepository;
		}

		public async Task CreateAsync(Quote quote) => await quoteRepository.AddAsync(quote);

		public async Task UpdateAsync(Quote quote) => await quoteRepository.UpdateAsync(quote);

		public Quote GetQuote(int date, int time)
		{
			var spec = new QuoteDateTimeFilterSpecifications(date, time);
			return quoteRepository.GetSingleBySpec(spec);
		}
	}
}
