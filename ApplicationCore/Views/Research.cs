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

    public class ResearchRequestModel
    {
        public int strategy { get; set; }

        public int beginDate { get; set; }

        public int endDate { get; set; }

    }

    public class ResearchViewModel
    {
        public ICollection<IndicatorViewModel> indicators { get; set; } = new List<IndicatorViewModel>();

        public ICollection<DateQuotesViewModel> dateQuotes { get; set; } = new List<DateQuotesViewModel>();

    }
    
}
