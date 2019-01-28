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

		Stock GetByCode(string code);

		Task<Stock> GetByIdAsync(int id);

		Task<Stock> CreateAsync(Stock stock);

		Task UpdateAsync(Stock stock);

		Task DeleteAsync(Stock stock);

		Task DeleteAsync(IList<int> ids);
	}
	public class StockService : IStockService
	{
		private readonly IDefaultRepository<Stock> stockRepository;

		public StockService(IDefaultRepository<Stock> stockRepository)
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

		public Stock GetByCode(string code)
		{
			var spec = new StockCodeSpecifications(code);
			return stockRepository.GetSingleBySpec(spec);
		}

		public async Task<Stock> GetByIdAsync(int id) => await stockRepository.GetByIdAsync(id);

		public async Task<Stock> CreateAsync(Stock stock) => await stockRepository.AddAsync(stock);

		public async Task UpdateAsync(Stock stock) => await stockRepository.UpdateAsync(stock);

		public async Task DeleteAsync(Stock stock) => await stockRepository.DeleteAsync(stock);

		public async Task DeleteAsync(IList<int> ids)
		{
			var stocks = await GetByIdsAsync(ids);
			stockRepository.DeleteRange(stocks);
		}

		async Task<IEnumerable<Stock>> GetAllAsync() => await stockRepository.ListAllAsync();


		async Task<IEnumerable<Stock>> GetByKeywordAsync(string keyword)
		{
			var filter = new StockFilterSpecifications(keyword);

			return await stockRepository.ListAsync(filter);
		}

		async Task<IEnumerable<Stock>> GetByIdsAsync(IList<int> ids)
		{
			var filter = new StockFilterSpecifications(ids);

			return await stockRepository.ListAsync(filter);
		}
	}
}
