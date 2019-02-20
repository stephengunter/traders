using System;
using System.Collections.Generic;
using System.Text;
using ApplicationCore.Models;
using System.ComponentModel.DataAnnotations;
using Infrastructure.Views;

namespace ApplicationCore.Views
{
	public class PayViewModel : BaseRecordView
	{
		public int id { get; set; }

		public string code { get; set; }

		public int billId { get; set; }

		public decimal money { get; set; }

		public string payWay { get; set; }

		public string date { get; set; }

	}
}
