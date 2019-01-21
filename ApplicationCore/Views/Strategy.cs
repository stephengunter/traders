using System;
using System.Collections.Generic;
using System.Text;
using ApplicationCore.Models;
using System.ComponentModel.DataAnnotations;
using Infrastructure.Views;

namespace ApplicationCore.Views
{
	public class StrategyViewModel
	{
		public int id { get; set; }

		public string userId { get; set; }

		public string name { get; set; }

		public string description { get; set; }
		
		public bool isDefault { get; set; }

		public int stpl { get; set; } //停損

		public int stpw { get; set; } //停利

		public ICollection<IndicatorSettingsView> indicatorSettings { get; set; } = new List<IndicatorSettingsView>();


		public bool noStop => stpl == 0 && stpw == 0;
	}

	public class IndicatorSettingsView : BaseRecordView
	{
		public int strategyId { get; set; }

		public int indicatorId { get; set; }

		public int arg { get; set; }
	}
}
