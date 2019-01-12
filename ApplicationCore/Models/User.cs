using ApplicationCore.Helpers;
using Microsoft.AspNetCore.Identity;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;

namespace ApplicationCore.Models
{
	public class User : IdentityUser
	{
		public string NickName { get; set; }

		public Profile Profile { get; set; }

		public string FacebookId { get; set; }

		public string GoogleId { get; set; }

		public RefreshToken RefreshToken { get; set; }


		public DateTime CreatedAt { get; set; } = DateTime.Now;
		public DateTime LastUpdated { get; set; } = DateTime.Now;
		public string UpdatedBy { get; set; }

	
		public void SetUpdated(string updatedBy)
		{
			this.UpdatedBy = updatedBy;
			this.LastUpdated = DateTime.Now;
		}
	}
}
