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
		public UserFilterSpecification()
		{
			AddInclude(u => u.Profile);
		}
	}

	public class UserEmailFilterSpecifications : BaseSpecification<User>
	{
		public UserEmailFilterSpecifications(string email) : base(u => u.Email == email)
		{
			AddInclude(u => u.Profile);
		}
	}

	public class UserIdFilterSpecifications : BaseSpecification<User>
	{
		public UserIdFilterSpecifications(string id) : base(u => u.Id == id)
		{

		}
	}

	public class UserKeywordFilterSpecifications : BaseSpecification<User>
	{
		public UserKeywordFilterSpecifications(string keyword)
			: base(u => u.Profile.Fullname.CaseInsensitiveContains(keyword)
						|| u.UserName.CaseInsensitiveContains(keyword))
		{

		}
	}

	public class UserNameFilterSpecifications : BaseSpecification<User>
	{
		public UserNameFilterSpecifications(string username) : base(u => u.UserName == username)
		{

		}
	}

}
