﻿using System;
using System.Collections.Generic;
using System.Text;

namespace ApplicationCore.Views
{
	public class WatchViewModel
	{
		public string key { get; set; }

		public int date { get; set; }

		public ICollection<StrategyViewModel> strategies { get; set; } = new List<StrategyViewModel>();
		
	}
}