using ApplicationCore.Helpers;
using ApplicationCore.Models;
using Infrastructure.DataAccess;
using System;
using System.Collections.Generic;
using System.Linq.Expressions;
using System.Text;


namespace ApplicationCore.Specifications
{
	public class StockFilterSpecifications : BaseSpecification<Stock>
	{
		public StockFilterSpecifications(string keyword)
		{
			Criteria = s => s.Code.CaseInsensitiveContains(keyword) ||
						   s.Name.CaseInsensitiveContains(keyword);
		}
	}
}
