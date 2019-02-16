using Infrastructure.Entities;
using System;
using System.Collections.Generic;
using System.Text;

namespace ApplicationCore.Models
{
	public enum PostType
	{
		Indicator
	}

	public class UploadFile : BaseUploadFile
	{
		public PostType PostType { get; set; }
		public int PostId { get; set; }

	}
}
