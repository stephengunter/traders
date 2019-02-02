using ApplicationCore.Helpers;
using ApplicationCore.Models;
using Infrastructure.DataAccess;
using System;
using System.Collections.Generic;
using System.Linq.Expressions;
using System.Text;

namespace ApplicationCore.Specifications
{
	 
	public class StrategyFilterSpecification : BaseSpecification<Strategy>
	{
		public StrategyFilterSpecification()
		{
			AddInclude(s => s.IndicatorSettings);
		}
		public StrategyFilterSpecification(int id) : base(s => s.Id == id)
		{
			AddInclude(s => s.IndicatorSettings);
		}

		public StrategyFilterSpecification(string userId) : base(s => s.UserId == userId)
		{
			AddInclude(s => s.IndicatorSettings);
		}

	}


}
