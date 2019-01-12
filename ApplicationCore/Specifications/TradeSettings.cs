using ApplicationCore.Helpers;
using ApplicationCore.Models;
using Infrastructure.DataAccess;
using System;
using System.Collections.Generic;
using System.Linq.Expressions;

namespace ApplicationCore.Specifications
{
	public class TradeSettingsFilterSpecification : BaseSpecification<TradeSettings>
	{

		public TradeSettingsFilterSpecification(string userId, int strategyId)
			: base(p => p.UserId == userId && p.StrategyId == strategyId)
		{

		}



	}
}
