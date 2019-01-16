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
	}

	public class DBKeepler : IDBKeepler
	{
		private readonly DefaultContext defaultContext;
		private readonly RealTimeContext realTimeContext;
		private readonly DataContext dataContext;


		public DBKeepler(DefaultContext defaultContext, RealTimeContext realTimeContext, DataContext dataContext)			
		{
			this.defaultContext = defaultContext;
			this.realTimeContext = realTimeContext;
			this.dataContext = dataContext;
		}

		public async Task MoveRealTimeToDataAsync()
		{
			var quotes = await realTimeContext.Quotes.Include(q => q.DataList).ToListAsync();
			if (quotes.IsNullOrEmpty()) return;

			await SaveQuotesAsync(quotes);

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
				var exist = dataContext.Quotes.Where(q => q.Date == item.Date && q.Time == item.Time).FirstOrDefault();
				if (exist == null)
				{
					var quote = CopyQuoteValues(item);
					
					dataContext.Quotes.Add(CopyQuoteValues(item));
					await dataContext.SaveChangesAsync();

				}
				
			}
			
		}

	}
}
