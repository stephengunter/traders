using ApplicationCore.Helpers;
using ApplicationCore.Models;
using Infrastructure.DataAccess;
using System;
using System.Collections.Generic;
using System.Linq.Expressions;
using System.Text;


namespace ApplicationCore.Specifications
{
	public class IndicatorFilterSpecifications : BaseSpecification<Indicator>
	{
		public IndicatorFilterSpecifications() : base(i => !i.Removed)
		{

		}

		public IndicatorFilterSpecifications(bool active) : base(i => !i.Removed && i.Active == active)
		{
			
		}

		public IndicatorFilterSpecifications(string entitiy) : base(i => !i.Removed && i.Entity == entitiy)
		{


		}

		public IndicatorFilterSpecifications(IList<int> ids) : base(i => !i.Removed && ids.Contains(i.Id))
		{
			

		}

		public IndicatorFilterSpecifications(IList<string> entities) : base(i => !i.Removed && entities.Contains(i.Entity))
		{


		}

		
	}
}
