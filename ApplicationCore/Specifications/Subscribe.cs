using ApplicationCore.Helpers;
using ApplicationCore.Models;
using Infrastructure.DataAccess;
using System;
using System.Collections.Generic;
using System.Linq.Expressions;
using System.Text;

namespace ApplicationCore.Specifications
{
	public abstract class BaseSubscribeFilterSpecification : BaseSpecification<Subscribe>
	{
		protected BaseSubscribeFilterSpecification() : base(s => !s.Removed)
		{
			AddInclude(subscribe => subscribe.Bill.Pays);
			AddInclude(subscribe => subscribe.Plan);
			AddInclude(subscribe => subscribe.User.Profile);
		}
	}

	public class SubscribeFilterSpecification : BaseSubscribeFilterSpecification
	{
		public SubscribeFilterSpecification()
		{

		}
		public SubscribeFilterSpecification(int id)
		{
			var compiled = Criteria.Compile();
			Criteria = s => compiled(s) && s.Id == id;

		}

		public SubscribeFilterSpecification(string userId)
		{
			var compiled = Criteria.Compile();
			Criteria = s => compiled(s) && s.UserId == userId;
		}

	}

	public class SubscribeKeywordFilterSpecification : BaseSubscribeFilterSpecification
	{
		public SubscribeKeywordFilterSpecification(string keyword)
		{
			var compiled = Criteria.Compile();
			Criteria = subscribe => compiled(subscribe) &&
						subscribe.User.Profile.Fullname.CaseInsensitiveContains(keyword);

		}
	}
}
