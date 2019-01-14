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
	public interface IQuoteService
	{
		bool RealTimeDate(int date);

		Task<IEnumerable<Quote>> FetchAsync();

		Task<IEnumerable<Quote>> FetchAsync(int date);

		Task<IEnumerable<Data>> FetchDataListAsync(int indicatorId, int param);

		Task<IEnumerable<Data>> FetchDataListAsync(int date, int indicatorId, int param);

		Task<IEnumerable<Data>> FetchDataListAsync(Quote quote, int indicatorId, int param);

		Data Get(int indicator, Quote quote, int param);

		Quote GetQuote();

		Quote GetQuote(int date, int time);

		Quote GetCloseQuote(int date, int closeTime);

		Task CreateAsync(Quote quote, ICollection<Data> dataList = null);


	}

	public class QuoteService : IQuoteService
	{
		private readonly IDataRepository<Data> dataRepository;
		private readonly IDataRepository<Quote> quoteRepository;

		private readonly IRealTimeRepository<Data> realtimeDataRepository;
		private readonly IRealTimeRepository<Quote> realtimeQuoteRepository;

		public QuoteService(IDataRepository<Data> dataRepository, IDataRepository<Quote> quoteRepository,
			IRealTimeRepository<Data> realtimeDataRepository, IRealTimeRepository<Quote> realtimeQuoteRepository)
		{
			this.dataRepository = dataRepository;
			this.quoteRepository = quoteRepository;

			this.realtimeDataRepository = realtimeDataRepository;
			this.realtimeQuoteRepository = realtimeQuoteRepository;
		}

		public bool RealTimeDate(int date)
		{
			var quote = GetQuote();
			if (quote == null) return false;

			return quote.Date == date;
		}

		public async Task CreateAsync(Quote quote, ICollection<Data> dataList = null)
		{
			var spec = new QuoteFilterSpecification(quote.Date, quote.Time);
			var exist = realtimeQuoteRepository.GetSingleBySpec(spec);

			if (exist == null) await realtimeQuoteRepository.AddAsync(quote);
			else await realtimeQuoteRepository.UpdateAsync(quote);
		}

		public async Task<IEnumerable<Quote>> FetchAsync()
		{
			return await realtimeQuoteRepository.ListAllAsync();
		}

		public async Task<IEnumerable<Quote>> FetchAsync(int date)
		{
			var spec = new QuoteFilterSpecification(date);
			return await quoteRepository.ListAsync(spec);
		}

		public Data Get(int indicator, Quote quote, int param)
		{
			var spec = new DataFilterSpecification(indicator, quote, param);
			return dataRepository.GetSingleBySpec(spec);
		}

		public async Task<IEnumerable<Data>> FetchDataListAsync(Quote quote, int indicatorId, int param)
		{
			var spec = new DataFilterSpecification(indicatorId, quote, param);
			return await realtimeDataRepository.ListAsync(spec);
		}

		public async Task<IEnumerable<Data>> FetchDataListAsync(int indicatorId, int param)
		{
			var spec = new DataFilterSpecification(indicatorId, param);
			return await realtimeDataRepository.ListAsync(spec);
		}

		public async Task<IEnumerable<Data>> FetchDataListAsync(int date, int indicatorId, int param)
		{
			var spec = new DataFilterSpecification(indicatorId, date, param);
			return await dataRepository.ListAsync(spec);
		}

		public Quote GetQuote()
		{
			return realtimeQuoteRepository.DbSet.OrderByDescending(q => q.Time).FirstOrDefault();
		}

		public Quote GetQuote(int date, int time)
		{
			var spec = new QuoteFilterSpecification(date, time);
			return quoteRepository.GetSingleBySpec(spec);
		}

		public Quote GetCloseQuote(int date, int closeTime)
		{
			var quote = GetQuote(date, closeTime);
			if (quote == null)
			{
				var spec = new QuoteFilterSpecification(date);
				var dailyQuotes = quoteRepository.List(spec);

				quote = dailyQuotes.OrderByDescending(q => q.Time).FirstOrDefault();
			}

			return quote;
		}

	}
}
