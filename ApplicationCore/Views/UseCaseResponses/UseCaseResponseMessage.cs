using System;
using System.Collections.Generic;
using System.Text;

namespace ApplicationCore.Views
{
	public abstract class UseCaseResponseMessage
	{
		public bool success { get; }
		public string message { get; }

		protected UseCaseResponseMessage(bool success = false, string message = null)
		{
			this.success = success;
			this.message = message;
		}
	}
}
