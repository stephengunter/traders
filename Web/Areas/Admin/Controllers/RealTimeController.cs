using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ApplicationCore.Models;
using ApplicationCore.Services;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using ApplicationCore.Views;
using ApplicationCore.Helpers;

namespace Web.Areas.Admin.Controllers
{
    public class RealTimeController : BaseAdminController
	{
		private readonly IRealTimeService realTimeService;

		public RealTimeController(IRealTimeService realTimeService)
		{
			this.realTimeService = realTimeService;
		}

		[HttpPost("")]
		public async Task<ActionResult> Store([FromBody] QuoteViewModel model)
		{
			var existQuote = realTimeService.GetQuote(model.date, model.time);
			if (existQuote == null)
			{
				var quote = new Quote();
				model.SetValues(quote);
				foreach (var item in model.dataList)
				{
					var data = new Data();
					item.SetValues(data);
					quote.DataList.Add(data);
				}
				await realTimeService.CreateAsync(quote);
			}
			else
			{
				UpdateQuoteValues(model, existQuote);
				await realTimeService.UpdateAsync(existQuote);
			}

			return Ok();
		}


		#region  Helper

		void UpdateQuoteValues(QuoteViewModel model, Quote existQuote)
		{
			model.SetValues(existQuote);
			if (existQuote.DataList.IsNullOrEmpty())
			{
				existQuote.DataList = MapNewDataList(model);
			}
			else
			{
				UpdateQuoteDataList(model, existQuote);
			}


			
		}

		List<Data> MapNewDataList(QuoteViewModel model)
		{
			var dataList = new List<Data>();
			foreach (var item in model.dataList)
			{
				var data = new Data();
				item.SetValues(data);
				dataList.Add(data);
			}
			return dataList;
		}

		void UpdateQuoteDataList(QuoteViewModel model, Quote existQuote)
		{
			foreach (var item in model.dataList)
			{
				var exist = existQuote.DataList.Where(d => d.Indicator == item.indicator).FirstOrDefault();
				if (exist == null)
				{
					var data = new Data();
					item.SetValues(data);
					existQuote.DataList.Add(data);
				}
				else
				{
					item.SetValues(exist);
				}

			}
		}


		#endregion


	}
}