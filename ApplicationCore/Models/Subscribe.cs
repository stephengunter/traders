using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using ApplicationCore.Helpers;
using Infrastructure.Entities;

namespace ApplicationCore.Models
{
	public class Subscribe : BaseRecord, IBaseContract
	{
		public string UserId { get; set; }

		public int PlanId { get; set; }

		public int BillId { get; set; }

		public DateTime? StartDate { get; set; }

		public DateTime? EndDate { get; set; }


		public User User { get; set; }

		public Plan Plan { get; set; }

		public Bill Bill { get; set; }



		public void OnPayed(Subscribe activeSubscribe = null)
		{
			DateTime dateStart = DateTime.Now;
			if (activeSubscribe != null) dateStart = activeSubscribe.EndDate.Value.AddDays(1);

			StartDate = new DateTime(dateStart.Year, dateStart.Month, dateStart.Day, 0, 0, 1);

			var dateEnd = StartDate.Value.AddMonths(Plan.Month);
			EndDate = new DateTime(dateEnd.Year, dateEnd.Month, dateEnd.Day, 23, 59, 59);
		}


		public bool Payed => StartDate.HasValue;

		public override bool Active
		{
			get
			{
				if (!Payed) return false;
				if (!EndDate.HasValue) return false;

				return (DateTime.Now >= StartDate.Value) && DateTime.Now <= EndDate.Value;
			}

		}

		public bool Before
		{
			get
			{
				if (!Payed) return false;

				return DateTime.Now < StartDate.Value;
			}

		}

		public bool Ended
		{
			get
			{
				if (!EndDate.HasValue) return false;

				return DateTime.Now > EndDate.Value;
			}

		}
	}
}
