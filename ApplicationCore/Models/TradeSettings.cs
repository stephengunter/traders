using System;
using System.Collections.Generic;
using System.Text;
using Infrastructure.Entities;

namespace ApplicationCore.Models
{
	public class TradeSettings : BaseEntity
	{
		public string UserId { get; set; }

		public int StrategyId { get; set; }

		public string Name { get; set; }

		public bool Default { get; set; }

		public int STPL { get; set; } //停損

		public int STPW { get; set; } //停利


		public bool CanIgnore()
		{
			return STPL == 0 && STPW == 0;
		}

	}
}
