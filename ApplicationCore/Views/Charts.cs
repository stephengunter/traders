using System;
using System.Collections.Generic;
using System.Text;

namespace ApplicationCore.Views
{
	public class ChartsViewModel
	{
		public bool realTime { get; set; }

		public ICollection<QuoteViewModel> quotes { get; set; } = new List<QuoteViewModel>();
	}
}
