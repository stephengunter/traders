using System;
using System.Collections.Generic;
using System.Text;
using ApplicationCore.Views;
using ApplicationCore.Models;
using ApplicationCore.Paging;
using ApplicationCore.Helpers;
using System.Threading.Tasks;
using System.Linq;
using Infrastructure.Views;

namespace ApplicationCore.Views
{
	public static class IndicatorViewService
	{
		public static IndicatorViewModel MapViewModel(this Indicator indicator)
		{
			var paramList = indicator.ResolveParamsValues().ToList();

			var model = new IndicatorViewModel()
			{
				id = indicator.Id,
				name = indicator.Name,
				entity = indicator.Entity,
				end = indicator.End,
				begin = indicator.Begin,
				main = indicator.Main,
				type = indicator.Type.ToString(),
				source = indicator.Source.ToString(),
				withAvg = indicator.WithAvg,

				defaultParam = indicator.DefaultParam,
				minParam = paramList.Min(),
				maxParam = paramList.Max(),
				paramList = paramList
			};

			model.SetBaseRecordValues(indicator);
			return model;
		}

		public static IEnumerable<Indicator> GetOrdered(this IEnumerable<Indicator> indicators)
		{
			return indicators.OrderBy(i => i.Order);
		}

	}
}
