using Infrastructure.Entities;
using System;
using System.Collections.Generic;
using System.Text;

namespace ApplicationCore.Models
{
	public class Pay : BaseRecord
	{
		public string Code { get; set; }

		public int BillId { get; set; }

		public decimal Money { get; set; }

		public PayWay PayWay { get; set; }

		public Bill Bill { get; set; }
	}

	public enum PayWay
	{
		Seven,
		Bank,
		Credit
	}
}
