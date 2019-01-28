using ApplicationCore.Helpers;
using ApplicationCore.Models;
using Infrastructure.DataAccess;
using System;
using System.Collections.Generic;
using System.Linq.Expressions;
using System.Text;

namespace ApplicationCore.Specifications
{
	public class SubscribeFilterSpecification : BaseSpecification<Subscribe>
	{
		public SubscribeFilterSpecification() : base(s => !s.Removed)
		{
			AddInclude(subscribe => subscribe.Bill.Pays);
			AddInclude(subscribe => subscribe.Plan);
			AddInclude(subscribe => subscribe.User.Profile);
		}
		public SubscribeFilterSpecification(int id) : base(s => !s.Removed && s.Id == id)
		{
			AddInclude(subscribe => subscribe.Bill.Pays);
			AddInclude(subscribe => subscribe.Plan);
			AddInclude(subscribe => subscribe.User.Profile);
		}

		public SubscribeFilterSpecification(string userId) : base(s => !s.Removed && s.UserId == userId)
		{
			AddInclude(subscribe => subscribe.Bill.Pays);
			AddInclude(subscribe => subscribe.Plan);
			AddInclude(subscribe => subscribe.User.Profile);
		}

	}

	public class SubscribeKeywordFilterSpecification : BaseSpecification<Subscribe>
	{
		public SubscribeKeywordFilterSpecification(string keyword) : base(s => !s.Removed && s.User.Profile.Fullname.CaseInsensitiveContains(keyword))
		{
			AddInclude(subscribe => subscribe.Bill.Pays);
			AddInclude(subscribe => subscribe.Plan);
			AddInclude(subscribe => subscribe.User.Profile);

		}
	}
}
