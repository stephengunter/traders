using System;
using System.Collections.Generic;
using System.Text;
using ApplicationCore.Views;
using ApplicationCore.Models;
using ApplicationCore.Paging;
using ApplicationCore.Helpers;
using System.Threading.Tasks;
using System.Linq;
using Infrastructure.Views;

namespace ApplicationCore.Views
{
	public static class IndicatorViewService
	{
		public static IndicatorViewModel MapViewModel(this Indicator indicator, IEnumerable<UploadFile> medias = null)
		{
			var paramList = indicator.ResolveParamsValues().ToList();

			var model = new IndicatorViewModel()
			{
				id = indicator.Id,
				name = indicator.Name,
				entity = indicator.Entity,
				description = indicator.Description,
				end = indicator.End,
				begin = indicator.Begin,
				main = indicator.Main,
				type = indicator.Type.ToString(),
				source = indicator.Source.ToString(),
				withAvg = indicator.WithAvg,

				defaultParam = indicator.DefaultParam,
				minParam = paramList.Min(),
				maxParam = paramList.Max(),
				paramList = paramList,

				coverId = indicator.CoverId
			};

			model.SetBaseRecordValues(indicator);

			if (!medias.IsNullOrEmpty())
			{
				model.medias = medias.Select(m => m.MapViewModel()).ToList();
			}

			return model;
		}

		public static IEnumerable<Indicator> GetOrdered(this IEnumerable<Indicator> indicators)
		{
			return indicators.OrderBy(i => i.Order);
		}

		public static PagedList<Indicator, IndicatorViewModel> GetPagedList(this IEnumerable<Indicator> indicators, int page = 1, int pageSize = 999)
		{
			var pageList = new PagedList<Indicator, IndicatorViewModel>(indicators, page, pageSize);

			pageList.ViewList = indicators.Select(i => MapViewModel(i)).ToList();

			pageList.List = null;

			return pageList;
		}

		public static void LoadOptions(this IndicatorEditForm form)
		{
			form.sourceOptions = new List<BaseOption>()
			{
				new BaseOption( SourceType.Futures.ToString() ,"期貨" ),
				new BaseOption( SourceType.Stock.ToString() ,"股票" ),
				new BaseOption( SourceType.Complex.ToString() ,"複合" ),
				new BaseOption( SourceType.Market.ToString() ,"市場" )
			};

			form.typeOptions = new List<BaseOption>()
			{
				new BaseOption( IndicatorType.Bar.ToString() ,"柱狀圖" ),
				new BaseOption( IndicatorType.Curve.ToString() ,"折線圖" ),
				new BaseOption( IndicatorType.None.ToString() ,"無" )
			};

		}



	}
}
