using System.Collections.Generic;
using ApplicationCore.DataAccess;
using ApplicationCore.Models;
using ApplicationCore.Specifications;
using Microsoft.AspNetCore.Identity;
using System;
using System.Threading.Tasks;
using System.Linq;
using Microsoft.EntityFrameworkCore;
using ApplicationCore.Helpers;


namespace ApplicationCore.Services
{
	public interface IStockService
	{
		Task<IEnumerable<Stock>> FetchStocks(string keyword = "");
	}
	public class StockService : IStockService
	{
		private readonly IDataRepository<Stock> stockRepository;

		public StockService(IDataRepository<Stock> stockRepository)
		{
			this.stockRepository = stockRepository;
		}

		public async Task<IEnumerable<Stock>> FetchStocks(string keyword = "")
		{
			Task<IEnumerable<Stock>> getStocksTask;
			if (String.IsNullOrEmpty(keyword))
			{
				getStocksTask = GetAllAsync();
			}
			else
			{
				getStocksTask = GetByKeywordAsync(keyword);
			}

			var stocks = await getStocksTask;

			return stocks;
		}

		async Task<IEnumerable<Stock>> GetAllAsync() => await stockRepository.ListAllAsync();

		async Task<IEnumerable<Stock>> GetByKeywordAsync(string keyword)
		{
			var filter = new StockFilterSpecifications(keyword);

			return await stockRepository.ListAsync(filter);
		}
	}
}
