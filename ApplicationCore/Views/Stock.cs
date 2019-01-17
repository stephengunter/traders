using System;
using System.Collections.Generic;
using System.Text;
using ApplicationCore.Models;
using System.ComponentModel.DataAnnotations;

namespace ApplicationCore.Views
{
	public class StockViewModel
	{
		public int id { get; set; }

		[Required(ErrorMessage = "請填寫名稱")]
		public string name { get; set; }

		[Required(ErrorMessage = "請填寫代碼")]
		public string code { get; set; }

		[Required(ErrorMessage = "請填寫價格")]
		public double price { get; set; }

		[Required(ErrorMessage = "請填寫權重")]
		public double weight { get; set; }

		public bool isBase { get; set; }

		public bool ignore { get; set; }


		public void SetValues(Stock entity)
		{
			entity.Name = name;
			entity.Code = code;
			entity.Price = price;
			entity.Weight = weight;
			entity.Base = isBase;
			entity.Ignore = ignore;
		}
	}
}
