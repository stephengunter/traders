using System;
using System.Collections.Generic;
using System.Text;
using ApplicationCore.Views;
using ApplicationCore.Models;
using ApplicationCore.Paging;
using System.Threading.Tasks;
using System.Linq;
using ApplicationCore.Helpers;
using Microsoft.AspNetCore.Identity;
using Infrastructure.Views;

namespace ApplicationCore.Views
{
	public static class StrategyViewService
	{
		public static StrategyViewModel MapViewModel(this Strategy strategy)
		{
			var model = new StrategyViewModel
			{
				id = strategy.Id,
				name = strategy.Name,
				description = strategy.Description,
				userId = strategy.UserId,
				isDefault = strategy.Default,
				stpl = strategy.STPL,
				stpw = strategy.STPW
			};

			if (!strategy.IndicatorSettings.IsNullOrEmpty())
			{
				model.indicatorSettings = strategy.IndicatorSettings.Select(s => s.MapViewModel()).ToList();
			}

			return model;

		}

		public static IEnumerable<Strategy> GetOrdered(this IEnumerable<Strategy> strategies)
		{
			return strategies.OrderByDescending(s => s.Default);
		}

		public static PagedList<Strategy, StrategyViewModel> GetPagedList(this IEnumerable<Strategy> strategies, int page = 1, int pageSize = 999)
		{
			var pageList = new PagedList<Strategy, StrategyViewModel>(strategies, page, pageSize);

			pageList.ViewList = strategies.Select(s => MapViewModel(s)).ToList();

			pageList.List = null;

			return pageList;
		}


		public static IndicatorSettingsView MapViewModel(this IndicatorSettings entity)
		{
			var model = new IndicatorSettingsView
			{
				 id = entity.Id,
				 strategyId = entity.StrategyId,
				 arg = entity.Arg,
				 indicatorId = entity.IndicatorId
			};

			return model;
		}

	}


	
}
