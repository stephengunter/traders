using System.Collections.Generic;
using ApplicationCore.Models;
using ApplicationCore.Paging;
using System.Linq;
using Infrastructure.Views;

namespace ApplicationCore.Views
{
	public static class PlanViewService
	{
		public static PlanViewModel MapViewModel(this Plan plan)
		{
			var model = new PlanViewModel
			{
				id = plan.Id,
				name = plan.Name,
				description = plan.Description,
				month = plan.Month,
				money = plan.Money				
			};


			model.SetBaseRecordValues(plan);

			return model;

		}

		public static IEnumerable<Plan> GetOrdered(this IEnumerable<Plan> plans)
		{
			return plans.OrderByDescending(p => p.Order);
		}

		public static PagedList<Plan, PlanViewModel> GetPagedList(this IEnumerable<Plan> plans, int page = 1, int pageSize = 999)
		{
			var pageList = new PagedList<Plan, PlanViewModel>(plans, page, pageSize);

			pageList.ViewList = plans.Select(s => MapViewModel(s)).ToList();

			pageList.List = null;

			return pageList;
		}
		

	}


	
}
