using ApplicationCore.Helpers;
using Infrastructure.Entities;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace ApplicationCore.Models
{
	public class Quote : BaseEntity
	{
		public int Date { get; set; }

		public int Time { get; set; }

		public int Price { get; set; }

		public int Vol { get; set; }

		public int BC { get; set; }   // 累買成筆

		public int SC { get; set; }   // 累賣成筆

		public int FiftyBig { get; set; }   // 50大

	}
}
