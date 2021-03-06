﻿using Infrastructure.Entities;
using System;

namespace ApplicationCore.Models
{
	public class Profile : BaseEntity
	{
		public string UserId { get; set; }

		public string SID { get; set; }

		public DateTime DOB { get; set; }

		public string Fullname { get; set; }

		public bool Gender { get; set; }


		public User User { get; set; }

	}
}
