using ApplicationCore.Models;
using System;
using System.Collections.Generic;
using System.Text;

namespace ApplicationCore.Views
{
	public class DataViewModel
	{
		public string indicator { get; set; }

		public int quoteId { get; set; }

		public int date { get; set; }

		public int time { get; set; }

		public string text { get; set; }

		public int signal { get; set; }

		public void SetValues(Data entity)
		{
			entity.Date = date;
			entity.Time = time;
			entity.Indicator = indicator;
			entity.Text = text;
			entity.Signal = signal;

		}

	}

}
