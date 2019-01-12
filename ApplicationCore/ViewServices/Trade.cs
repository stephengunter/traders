using System;
using System.Collections.Generic;
using System.Text;
using ApplicationCore.Views;
using ApplicationCore.Models;
using ApplicationCore.Paging;
using System.Threading.Tasks;
using System.Linq;
using ApplicationCore.Helpers;

namespace ApplicationCore.Views
{
	public static class TradeViewService
	{
		public static TradeSettingsViewModel MapViewModel(this TradeSettings entity)
		{
			var model = new TradeSettingsViewModel()
			{
				id = entity.Id,
				isDefault = entity.Default,
				stpl = entity.STPL,
				stpw = entity.STPW,
				name = entity.Name,
				strategyId = entity.StrategyId,
				userId = entity.UserId
			};

			return model;
		}


		public static TradeSettings ToEntity(this TradeSettingsViewModel model, TradeSettings entity = null)
		{
			if (entity == null) entity = new TradeSettings();

			entity.StrategyId = model.strategyId;
			entity.UserId = model.userId;
			entity.Name = model.name;

			entity.Default = model.isDefault;
			entity.STPL = model.stpl;
			entity.STPW = model.stpw;

			return entity;

		}



	}


}
