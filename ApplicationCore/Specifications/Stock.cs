using ApplicationCore.Helpers;
using ApplicationCore.Models;
using Infrastructure.DataAccess;
using System;
using System.Collections.Generic;
using System.Linq.Expressions;
using System.Text;


namespace ApplicationCore.Specifications
{
	public class StockCodeSpecifications : BaseSpecification<Stock>
	{
		public StockCodeSpecifications(string code):base(s => s.Code == code)
		{
			
		}
	}

	public class StockFilterSpecifications : BaseSpecification<Stock>
	{
		public StockFilterSpecifications(string keyword):base(s => s.Code.CaseInsensitiveContains(keyword) ||
																	s.Name.CaseInsensitiveContains(keyword))
		{
			
		}
	}
}
