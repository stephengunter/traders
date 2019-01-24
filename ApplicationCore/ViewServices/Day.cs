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
	public static class DayViewService
	{
		public static DayViewModel MapViewModel(this Day day)
		{
			var model = new DayViewModel()
			{
				id = day.Id,
				year = day.Year,
				date = day.Date,
				type = day.Type.ToString(),
				text = day.Text
			};
			return model;
		}

		public static IEnumerable<Day> GetOrdered(this IEnumerable<Day> indicators)
		{
			return indicators.OrderBy(d => d.Date);
		}

	}
}
