using ApplicationCore.Helpers;
using ApplicationCore.Models;
using Infrastructure.DataAccess;
using System;
using System.Collections.Generic;
using System.Linq.Expressions;
using System.Text;

namespace ApplicationCore.Specifications
{
	public class QuoteFilterSpecification : BaseSpecification<Quote>
	{
		public QuoteFilterSpecification(Expression<Func<Quote, bool>> criteria = null) : base(criteria)
		{
			AddInclude(q => q.DataList);
		}
	}

	public class QuoteDateTimeFilterSpecifications : QuoteFilterSpecification
	{
		public QuoteDateTimeFilterSpecifications(int date) : base(quote => quote.Date == date)
		{

		}

		public QuoteDateTimeFilterSpecifications(int date, int time) : base(quote => quote.Date == date && quote.Time == time)
		{

		}
	}




}
