using System;
using System.Collections.Generic;
using System.Text;

namespace ApplicationCore.Views
{
	public class QuoteViewModel
	{
		public int date { get; set; }

		public int time { get; set; }

		public int price { get; set; }

		public int vol { get; set; }

		public List<DataViewModel> dataList { get; set; } = new List<DataViewModel>();

	}


	public class DataViewModel
	{
		public int indicatorId { get; set; }

		public int param { get; set; }

		public int time { get; set; }

		public string text { get; set; }

		public int signal { get; set; }

	}
}
