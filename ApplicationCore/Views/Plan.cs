using System;
using System.Collections.Generic;
using System.Text;
using ApplicationCore.Models;
using System.ComponentModel.DataAnnotations;
using Infrastructure.Views;

namespace ApplicationCore.Views
{
	public class PlanViewModel : BaseRecordView
	{
		public int id { get; set; }

		public string name { get; set; }

		public string description { get; set; }

		public int month { get; set; }

		public decimal money { get; set; }

	}
}
