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
		public QuoteFilterSpecification()
		{
			AddInclude(q => q.DataList);
		}

		public QuoteFilterSpecification(int date) : base(quote => quote.Date == date)
		{
			AddInclude(q => q.DataList);
		}

		public QuoteFilterSpecification(int date, int time) : base(quote => quote.Date == date && quote.Time == time)
		{
			AddInclude(q => q.DataList);
		}
	}

    public class QuoteFilterByRangeSpecification : BaseSpecification<Quote>
    {
        public QuoteFilterByRangeSpecification(int begin, int end) : base(quote => quote.Date >= begin && quote.Date <= end)
        {
            AddInclude(q => q.DataList);
        }
    }


    public class QuoteLatestFilterSpecification : BaseSpecification<Quote>
	{
		public QuoteLatestFilterSpecification(int time) : base(quote => quote.Time >= time)
		{
			AddInclude(q => q.DataList);
		}
		
	}


}
