using System;
using System.Collections.Generic;
using System.Text;

namespace ApplicationCore.Views
{
	public class TradeSettingsViewModel
	{
		public int id { get; set; }

		public string userId { get; set; }

		public int strategyId { get; set; }

		public string name { get; set; }

		public bool isDefault { get; set; }

		public int stpl { get; set; } //停損

		public int stpw { get; set; } //停利
	}


	public class PositionViewModel
	{
		public string time { get; set; }

		public int price { get; set; }

		public int val { get; set; }

		public string text { get; set; }

		public string style { get; set; }
	}

	public class TradeViewModel
	{
		public string time { get; set; }

		public int price { get; set; }

		public string text { get; set; }

		public int val { get; set; }

		public int result { get; set; }


	}


	public class TradesResolveModel
	{
		public int strategy { get; set; }

		public int date { get; set; }

		public ICollection<PositionViewModel> signals { get; set; }

		public ICollection<PositionViewModel> positions { get; set; }
	}



}
