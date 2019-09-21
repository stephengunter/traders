using System;
using System.Collections.Generic;
using System.Text;
using ApplicationCore.Models;
using System.ComponentModel.DataAnnotations;
using Infrastructure.Views;

namespace ApplicationCore.Views
{
	public class StrategyViewModel
	{
		public int id { get; set; }

		public string userId { get; set; }

		public string name { get; set; }

		public string description { get; set; }
		
		public bool isDefault { get; set; }

        public decimal cost { get; set; } //交易成本

        public int stpl { get; set; } //停損

		public int stpw { get; set; } //停利

		public ICollection<IndicatorSettingsView> indicatorSettings { get; set; } = new List<IndicatorSettingsView>();


		public bool noStop => stpl == 0 && stpw == 0;


		public void SetValues(Strategy entity, string userId)
		{
			entity.Name = name;
			entity.Description = description;
			entity.STPW = stpw;
			entity.STPL = stpl;
            entity.Cost = cost;

            entity.Default = isDefault;
			entity.UserId = userId;
		}
	}

	public class IndicatorSettingsView
	{
		public int id { get; set; }

		public int strategyId { get; set; }

		public int indicatorId { get; set; }

		public int arg { get; set; }

		public int order { get; set; }

		public void SetValues(IndicatorSettings entity)
		{
			entity.IndicatorId = indicatorId;
			entity.StrategyId = strategyId;
			entity.Arg = arg;
			entity.Order = order;
		}
	}


	public class StrategyEditForm
	{
		public StrategyViewModel strategy { get; set; }

		public ICollection<int> selectedIndicators { get; set; }

		public ICollection<IndicatorViewModel> indicators { get; set; }
	}

}
