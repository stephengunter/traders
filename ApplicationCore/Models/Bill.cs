using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using ApplicationCore.Helpers;
using Infrastructure.Entities;

namespace ApplicationCore.Models
{
	public class Bill : BaseRecord
	{
		public PayWay PayWay { get; set; }

		public string Code { get; set; }

		public decimal Amount { get; set; }

		public DateTime DeadLine { get; set; }

		public string BankName { get; set; }

		public string BankCode { get; set; }

		public ICollection<Subscribe> Subscribes { get; set; } = new List<Subscribe>();

		public ICollection<Pay> Pays { get; set; } = new List<Pay>();

		[NotMapped]
		public bool Payed
		{
			get
			{
				if (Pays.IsNullOrEmpty()) return false;
				return Pays.Where(p => !p.Removed).Sum(p => p.Money) >= Amount;
			}
		}

		[NotMapped]
		public DateTime? PayedDate
		{
			get
			{
				if (Pays.IsNullOrEmpty()) return null;
				return Pays.OrderByDescending(p => p.CreatedAt).FirstOrDefault().CreatedAt;
			}
		}
	}
}
