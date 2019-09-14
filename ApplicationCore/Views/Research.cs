using System;
using System.Collections.Generic;
using System.Text;

namespace ApplicationCore.Views
{
	public class ResearchIndexViewModel
	{
        public string minDate { get; set; }

        public string maxDate { get; set; }

        public string key { get; set; }

		public ICollection<StrategyViewModel> strategies { get; set; } = new List<StrategyViewModel>();
		
	}

    public class ResearchViewModel
    {
        public int strategy { get; set; }

        public int beginDate { get; set; }

        public int endDate { get; set; }

    }
}
