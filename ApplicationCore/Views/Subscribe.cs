using System;
using System.Collections.Generic;
using System.Text;
using ApplicationCore.Models;
using System.ComponentModel.DataAnnotations;
using Infrastructure.Views;

namespace ApplicationCore.Views
{
	public class SubscribeViewModel
	{
		public int id { get; set; }

		public string userId { get; set; }

		public int planId { get; set; }

		public int billId { get; set; }

		public string startDate { get; set; }

		public string endDate { get; set; }

		public int status { get; set; }

		public string statusText { get; set; }


		public UserViewModel user { get; set; }

		public PlanViewModel plan { get; set; }

		public BillViewModel bill { get; set; } = new BillViewModel();

	}


	public class SubscribeEditForm
	{
		public SubscribeViewModel subscribe { get; set; }

		public ICollection<PlanViewModel> plans { get; set; }

		public ICollection<BaseOption> paywayOptions { get; set; }
	}

}
