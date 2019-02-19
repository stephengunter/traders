using ApplicationCore.Helpers;
using ApplicationCore.Models;
using Infrastructure.DataAccess;
using System;
using System.Collections.Generic;
using System.Linq.Expressions;
using System.Text;


namespace ApplicationCore.Specifications
{
	public class PlanFilterSpecifications : BaseSpecification<Plan>
	{
		public PlanFilterSpecifications(bool active) : base(p => !p.Removed && p.Active == active)
		{
			
		}

		public PlanFilterSpecifications(IList<int> ids) : base(p => !p.Removed && ids.Contains(p.Id))
		{
			

		}

		
	}
}
