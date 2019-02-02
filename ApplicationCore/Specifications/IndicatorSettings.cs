using ApplicationCore.Helpers;
using ApplicationCore.Models;
using Infrastructure.DataAccess;
using System;
using System.Collections.Generic;
using System.Linq.Expressions;
using System.Text;

namespace ApplicationCore.Specifications
{
	
	public class IndicatorSettingsFilterSpecification : BaseSpecification<IndicatorSettings>
	{
		public IndicatorSettingsFilterSpecification(Strategy strategy)
			: base(s => s.StrategyId == strategy.Id)
		{

		}


		public IndicatorSettingsFilterSpecification(Strategy strategy, int indicatorId) 
			: base(s => s.StrategyId == strategy.Id && s.IndicatorId == indicatorId)
		{
			
		}

		public IndicatorSettingsFilterSpecification(List<int> ids)
			: base(s => ids.Contains(s.Id))
		{

		}

	}


}
