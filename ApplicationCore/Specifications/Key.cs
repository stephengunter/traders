using ApplicationCore.Helpers;
using ApplicationCore.Models;
using Infrastructure.DataAccess;
using System;
using System.Collections.Generic;
using System.Linq.Expressions;
using System.Text;

namespace ApplicationCore.Specifications
{
	public class KeyFilterSpecification : BaseSpecification<Key>
	{
		public KeyFilterSpecification(string userId)
			: base(key => key.UserId == userId)
		{

		}

		public KeyFilterSpecification(string userId, int date)
			: base(key => key.UserId == userId && key.Date == date)
		{

		}
	}


}
