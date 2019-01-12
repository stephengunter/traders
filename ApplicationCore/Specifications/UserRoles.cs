using Microsoft.AspNetCore.Identity;
using System;
using System.Collections.Generic;
using System.Text;
using Infrastructure.DataAccess;

namespace ApplicationCore.Specifications
{
	public class UserRoleFilterSpecifications : BaseSpecification<IdentityUserRole<string>>
	{
		public UserRoleFilterSpecifications(IdentityRole role) : base(ur => ur.RoleId == role.Id)
		{
			
		}

		public UserRoleFilterSpecifications(string userId) : base(ur => ur.UserId == userId)
		{
			
		}

	}
}
