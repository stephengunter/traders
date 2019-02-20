using System;
using System.Collections.Generic;
using System.Text;
using ApplicationCore.Models;
using ApplicationCore.Paging;
using System.Linq;
using ApplicationCore.Helpers;
using Infrastructure.Views;

namespace ApplicationCore.Views
{
	public static class SubscribeViewService
	{
		public static SubscribeViewModel MapViewModel(this Subscribe subscribe)
		{
			var model = new SubscribeViewModel
			{
				id = subscribe.Id,
				billId = subscribe.BillId,
				planId =subscribe.PlanId,
				startDate = subscribe.EndDate.HasValue ? subscribe.StartDate.ToDateString() : "",
				endDate = subscribe.EndDate.HasValue ? subscribe.EndDate.ToDateString() : "",
				userId = subscribe.UserId
			};

			if (subscribe.Before)
			{
				model.status = 0;
				model.statusText = "尚未開始";
			}
			else if (subscribe.Active)
			{
				model.status = 1;
				model.statusText = "期間內";
			}
			else if (subscribe.Ended)
			{
				model.status = 2;
				model.statusText = "已結束";
			}

		
			if (subscribe.User != null) model.user = subscribe.User.MapViewModel();

			if (subscribe.Plan != null) model.plan = subscribe.Plan.MapViewModel();

			if (subscribe.Bill != null) model.bill = subscribe.Bill.MapViewModel();


			return model;

		}

		public static IEnumerable<Subscribe> GetOrdered(this IEnumerable<Subscribe> subscribes)
		{
			return subscribes.OrderByDescending(s => s.EndDate);
		}

		public static PagedList<Subscribe, SubscribeViewModel> GetPagedList(this IEnumerable<Subscribe> subscribes, int page = 1, int pageSize = 999)
		{
			var pageList = new PagedList<Subscribe, SubscribeViewModel>(subscribes, page, pageSize);

			pageList.ViewList = subscribes.Select(s => MapViewModel(s)).ToList();

			pageList.List = null;

			return pageList;
		}

		

		public static void LoadOptions(this SubscribeEditForm form)
		{
			var paywayList = EnumHelpers.ToList<PayWay>();
			form.paywayOptions = paywayList.Select(t => new BaseOption(t.ToString(), t.ToText())).ToList();

		}



	}



}
