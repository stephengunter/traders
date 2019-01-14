using ApplicationCore.Models;
using ApplicationCore.Paging;
using Infrastructure.Views;
using System;
using System.Collections.Generic;
using System.Text;

namespace ApplicationCore.Views
{
	public class IndicatorViewModel
	{
		public int id { get; set; }

		public string name { get; set; }

		public int order { get; set; }

		public string entity { get; set; }

		public int begin { get; set; } //盤中產生信號開始時間  例如 90000

		public int end { get; set; } //盤中產生信號結束時間  例如 133000


		public List<int> paramList { get; set; }

		public string defaultParam { get; set; }

		public bool removed { get; set; }

		public bool active { get; set; }

		public bool main { get; set; }

		public string type { get; set; }
	}

}
