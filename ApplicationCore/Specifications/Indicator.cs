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
		public IndicatorFilterSpecifications():base(s => !s.Removed)
		{
			
		}
		public IndicatorFilterSpecifications(string keyword) : base(s => !s.Removed && s.Name.CaseInsensitiveContains(keyword))
		{
		

		}

		public IndicatorFilterSpecifications(IList<int> ids) : base(s => !s.Removed && ids.Contains(s.Id))
		{
			

		}
	}
}
