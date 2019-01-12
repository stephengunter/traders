using ApplicationCore.Helpers;
using ApplicationCore.Models;
using Infrastructure.DataAccess;
using System;
using System.Collections.Generic;
using System.Linq.Expressions;
using System.Text;


namespace ApplicationCore.Specifications
{
	public class UserFilterSpecification : BaseSpecification<User>
	{
		public UserFilterSpecification(Expression<Func<User, bool>> criteria = null) : base(criteria)
		{
			AddInclude(u => u.Profile);
		}
	}

	public class UserEmailFilterSpecifications : UserFilterSpecification
	{
		public UserEmailFilterSpecifications(string email) : base(u => u.Email == email)
		{
			
		}
	}

	public class UserIdFilterSpecifications : UserFilterSpecification
	{
		public UserIdFilterSpecifications(string id) : base(u => u.Id == id)
		{
		
		}
	}

	public class UserKeywordFilterSpecifications : UserFilterSpecification
	{
		public UserKeywordFilterSpecifications(string keyword)
		{
			Criteria = u => u.Profile.Fullname.CaseInsensitiveContains(keyword) ||
						   u.UserName.CaseInsensitiveContains(keyword);
		}
	}

	public class UserNameFilterSpecifications : UserFilterSpecification
	{
		public UserNameFilterSpecifications(string username)
		{
			Criteria = u => u.UserName == username;
		}
	}

}
