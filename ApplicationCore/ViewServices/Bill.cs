using System.Collections.Generic;
using ApplicationCore.Models;
using ApplicationCore.Paging;
using System.Linq;
using Infrastructure.Views;
using ApplicationCore.Helpers;

namespace ApplicationCore.Views
{
	public static class BillViewService
	{
		public static BillViewModel MapViewModel(this Bill bill)
		{
			var model = new BillViewModel
			{
				id = bill.Id,
				amount = bill.Amount,
				bankCode = bill.BankCode,
				bankName = bill.BankName,
				deadLine = bill.DeadLine.ToShortDateString()				    
			};

			if (!bill.Pays.IsNullOrEmpty())
			{
				model.pays = bill.Pays.Select(p => p.MapViewModel()).ToList();
			}

			model.SetBaseRecordValues(bill);

			return model;

		}

		public static IEnumerable<Bill> GetOrdered(this IEnumerable<Bill> bills)
		{
			return bills.OrderByDescending(p => p.Order);
		}

		public static PagedList<Bill, BillViewModel> GetPagedList(this IEnumerable<Bill> bills, int page = 1, int pageSize = 999)
		{
			var pageList = new PagedList<Bill, BillViewModel>(bills, page, pageSize);

			pageList.ViewList = bills.Select(s => MapViewModel(s)).ToList();

			pageList.List = null;

			return pageList;
		}


	}



}
