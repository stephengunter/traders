using ApplicationCore.Models;
using System;
using System.Collections.Generic;
using System.Text;
using ApplicationCore.Helpers;
using System.Linq;

namespace ApplicationCore.Views
{
	public class QuoteViewModel
	{
		public int date { get; set; }
		public int time { get; set; }
		public int price { get; set; }
		public int open { get; set; }
		public int high { get; set; }
		public int low { get; set; }

		public List<DataViewModel> dataList { get; set; } = new List<DataViewModel>();

		
		public void SetValues(Quote entity)
		{
			entity.Date = date;
			entity.High = high;
			entity.Low = low;
			entity.Price = price;
			entity.Open = open;
			entity.Time = time;
		}

	}


	
}
