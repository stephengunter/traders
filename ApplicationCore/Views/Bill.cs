using System;
using System.Collections.Generic;
using System.Text;
using ApplicationCore.Models;
using System.ComponentModel.DataAnnotations;
using Infrastructure.Views;

namespace ApplicationCore.Views
{
	public class BillViewModel : BaseRecordView
	{
		public int id { get; set; }

		public string code { get; set; }

		public decimal amount { get; set; }

		public string deadLine { get; set; }

		public string bankName { get; set; }

		public string bankCode { get; set; }

		public ICollection<PayViewModel> pays { get; set; } = new List<PayViewModel>();

	}
}
