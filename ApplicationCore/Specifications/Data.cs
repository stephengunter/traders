using ApplicationCore.Helpers;
using ApplicationCore.Models;
using Infrastructure.DataAccess;
using System;
using System.Collections.Generic;
using System.Linq.Expressions;


namespace ApplicationCore.Specifications
{

	public class DataFilterSpecification : BaseSpecification<Data>
	{
		public DataFilterSpecification(int indicatorId, int param)
			: base(data => data.IndicatorId == indicatorId && data.Param == param)
		{

		}

		public DataFilterSpecification(int indicatorId, int date, int param)
			: base(data => data.IndicatorId == indicatorId && data.Date == date && data.Param == param)
		{

		}

		public DataFilterSpecification(int indicator, Quote quote, int param)
			: base(data => data.IndicatorId == indicator && data.Date == quote.Date
							&& data.Time == quote.Time && data.Param == param)
		{

		}



	}



}
