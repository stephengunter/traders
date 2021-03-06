﻿using System.Collections.Generic;
using ApplicationCore.Models;
using ApplicationCore.Paging;
using System.Linq;
using Infrastructure.Views;

namespace ApplicationCore.Views
{
	public static class PayViewService
	{
		public static PayViewModel MapViewModel(this Pay pay)
		{
			var model = new PayViewModel
			{
				id = pay.Id,
				billId = pay.BillId,
				code = pay.Code,
				money = pay.Money,
				payway = pay.PayWay.ToText(),
				date = pay.CreatedAt.ToString("yyyy/m/d   HH:mm:ss")
			};


			model.SetBaseRecordValues(pay);

			return model;

		}

		public static IEnumerable<Pay> GetOrdered(this IEnumerable<Pay> pays)
		{
			return pays.OrderByDescending(p => p.CreatedAt);
		}

		public static PagedList<Pay, PayViewModel> GetPagedList(this IEnumerable<Pay> pays, int page = 1, int pageSize = 999)
		{
			var pageList = new PagedList<Pay, PayViewModel>(pays, page, pageSize);

			pageList.ViewList = pays.Select(s => MapViewModel(s)).ToList();

			pageList.List = null;

			return pageList;
		}

		public static string ToText(this PayWay payWay)
		{
			if (payWay == PayWay.Bank) return "ATM轉帳/匯款";
			else if (payWay == PayWay.Seven) return "便利商店繳費";
			else if (payWay == PayWay.Credit) return "線上刷卡";
			else return "";
		}

	}



}
