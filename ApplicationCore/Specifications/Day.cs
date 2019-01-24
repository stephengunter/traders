using ApplicationCore.Helpers;
using ApplicationCore.Models;
using Infrastructure.DataAccess;
using System;
using System.Collections.Generic;
using System.Linq.Expressions;


namespace ApplicationCore.Specifications
{

	public class DayFilterSpecification : BaseSpecification<Day>
	{
		public DayFilterSpecification(int year, DayType type)
			: base(day => day.Year == year && day.Type == type)
		{

		}

	}



}
