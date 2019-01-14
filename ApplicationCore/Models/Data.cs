using System;
using System.Collections.Generic;
using System.Text;
using Infrastructure.Entities;

namespace ApplicationCore.Models
{
	public class Data : BaseEntity
	{
		public int IndicatorId { get; set; }

		public int QuoteId { get; set; }

		public int Date { get; set; }

		public int Time { get; set; }

		public string Text { get; set; }

		public int Signal { get; set; }

		public Quote Quote { get; set; }

	}
}
