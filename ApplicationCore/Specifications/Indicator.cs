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
		public IndicatorFilterSpecifications()
		{
			Criteria = s => !s.Removed;
		}
		public IndicatorFilterSpecifications(string keyword)
		{
			Criteria = s => !s.Removed && s.Name.CaseInsensitiveContains(keyword);

		}
	}
}
