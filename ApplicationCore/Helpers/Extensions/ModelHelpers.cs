using System;
using System.Collections.Generic;
using System.Text;
using ApplicationCore.Models;

namespace ApplicationCore.Helpers
{

	public static class ModelHelpers
	{
		public static PostType ToPostType(this string value)
		{
			PostType postType;
			Enum.TryParse(value, out postType);

			return postType;
		}
	}

}
