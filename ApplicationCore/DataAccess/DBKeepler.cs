using ApplicationCore.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using ApplicationCore.Helpers;

namespace ApplicationCore.DataAccess
{
	public interface IDBKeepler
	{
		Task MoveRealTimeToDataAsync();

		void ImportDataToHistoryDB();

		void ResetHistoryDB();
	}

	public class ImportQuotesDataHelper
	{
		public static List<Quote> ResolveQuotes()
		{
			string quotesContent = System.IO.File.ReadAllText(@"C:\applog\quotes.txt");

			var rows = quotesContent.Split(';');
			var quotes = new List<Quote>();
			foreach (var item in rows)
			{
				var nums = item.Split(',');
				if (nums.Length == 7)
				{
					quotes.Add(new Quote
					{
						Date = nums[1].ToInt(),
						Time = nums[2].ToInt(),
						Price = nums[3].ToInt(),
						Open = nums[4].ToInt(),
						Low = nums[5].ToInt(),
						High = nums[6].ToInt(),
					});
				}
			}

			return quotes;
		}

		public static List<Data> ResolveData()
		{
			string content = System.IO.File.ReadAllText(@"C:\applog\data.txt");

			var rows = content.Split(':');
			var dataList = new List<Data>();
			foreach (var item in rows)
			{
				var nums = item.Split(';');
				if (nums.Length == 7)
				{
					var data = new Data
					{
						Date = nums[2].ToInt(),
						Time = nums[3].ToInt(),
						Text = nums[4],
						Indicator = nums[6]
					};

					int buyQty = data.Text.Split(',')[0].ToInt();
					int sellQty = data.Text.Split(',')[1].ToInt();

					data.Val = (buyQty - sellQty).ToString();

					dataList.Add(data);
					

				}
			}


			return dataList;
		}

	}

	public class DBKeepler : IDBKeepler
	{
		private readonly DefaultContext defaultContext;
		private readonly RealTimeContext realTimeContext;
		private readonly HistoryContext historyContext;


		public DBKeepler(DefaultContext defaultContext, RealTimeContext realTimeContext, HistoryContext historyContext)			
		{
			this.defaultContext = defaultContext;
			this.realTimeContext = realTimeContext;
			this.historyContext = historyContext;
		}

		public async Task MoveRealTimeToDataAsync()
		{
			var quotes = await realTimeContext.Quotes.Include(q => q.DataList).ToListAsync();
			if (quotes.IsNullOrEmpty()) return;

			await SaveQuotesAsync(quotes);

			realTimeContext.Database.ExecuteSqlCommand("DELETE FROM [Quotes]");
			realTimeContext.Database.ExecuteSqlCommand("DBCC CHECKIDENT('Quotes', RESEED, 0)");
			realTimeContext.Database.ExecuteSqlCommand("DBCC CHECKIDENT('Data', RESEED, 0)");

		}

		public void ImportDataToHistoryDB()
		{
			var quotes = ImportQuotesDataHelper.ResolveQuotes();
			historyContext.AddRange(quotes);
			historyContext.SaveChanges();

			System.Threading.Thread.Sleep(3000);

			var dataList = ImportQuotesDataHelper.ResolveData();

			foreach (var data in dataList)
			{
				var exist = historyContext.Data.Where(d => d.Date == data.Date && d.Time == data.Time).FirstOrDefault();
				if (exist == null)
				{
					var quote = historyContext.Quotes.Where(q => q.Date == data.Date && q.Time == data.Time).FirstOrDefault();
					data.QuoteId = quote.Id;

					historyContext.Data.Add(data);
				}
			}

			historyContext.SaveChanges();


		}

		public void ResetHistoryDB()
		{
			historyContext.Database.ExecuteSqlCommand("DELETE FROM [Quotes]");
			historyContext.Database.ExecuteSqlCommand("DBCC CHECKIDENT('Quotes', RESEED, 0)");
			historyContext.Database.ExecuteSqlCommand("DBCC CHECKIDENT('Data', RESEED, 0)");
		}

		Quote CopyQuoteValues(Quote source)
		{
			var type = typeof(Quote);
			var properties = type.GetProperties();

			Quote result = new Quote();

			foreach (var property in properties)
			{
				if (property.Name != nameof(Quote.Id) && property.Name != nameof(Quote.DataList))
				{
					property.SetValue(result, property.GetValue(source));
					var prop = result.GetType().GetProperty(property.Name);
				}
			}

			if(source.DataList.IsNullOrEmpty()) return result;

			foreach (var data in source.DataList)
			{
				result.DataList.Add(CopyDataValues(data));
			}

			return result;

		}

		Data CopyDataValues(Data source)
		{
			var type = typeof(Data);
			var properties = type.GetProperties();

			Data result = new Data();

			foreach (var property in properties)
			{
				if (property.Name != nameof(Data.Id) && property.Name != nameof(Data.QuoteId))
				{
					property.SetValue(result, property.GetValue(source));
					var prop = result.GetType().GetProperty(property.Name);
				}
			}

			return result;
		}

		async Task SaveQuotesAsync(List<Quote> quotes)
		{
			foreach (var item in quotes)
			{
				var exist = historyContext.Quotes.Where(q => q.Date == item.Date && q.Time == item.Time).FirstOrDefault();
				if (exist == null)
				{
					var quote = CopyQuoteValues(item);
					
					historyContext.Quotes.Add(CopyQuoteValues(item));
					await historyContext.SaveChangesAsync();

				}
				
			}
			
		}

	}
}
