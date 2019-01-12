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
			var model = new IndicatorViewModel();
			model.id = indicator.Id;
			model.name = indicator.Name;
			model.entity = indicator.Entity;
			model.defaultParam = indicator.DefaultParam;
			model.main = indicator.Main;
			model.type = indicator.Type.ToString();

			model.begin = indicator.Begin;
			model.end = indicator.End;

			model.paramList = indicator.ResolveParamsValues().ToList();

			return model;
		}



	}
}
