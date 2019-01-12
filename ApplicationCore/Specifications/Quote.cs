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
		public QuoteFilterSpecification(int date)
			: base(quote => quote.Date == date)
		{

		}

		public QuoteFilterSpecification(int date, int time)
			: base(quote => quote.Date == date && quote.Time == time)
		{

		}

	}



}
