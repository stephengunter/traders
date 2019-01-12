using System;
using System.Collections.Generic;
using System.Text;

namespace ApplicationCore.Views
{
	public abstract class BaseAdminViewModel
	{
		public bool canDelete { get; set; }
		public bool canEdit { get; set; }
	}
}
