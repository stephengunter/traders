using System.Collections.Generic;
using ApplicationCore.DataAccess;
using ApplicationCore.Models;
using ApplicationCore.Specifications;
using Microsoft.AspNetCore.Identity;
using System;
using System.Threading.Tasks;
using System.Linq;
using Microsoft.EntityFrameworkCore;
using ApplicationCore.Helpers;


namespace ApplicationCore.Services
{
	public interface IIndicatorService
	{
		Task<IEnumerable<Indicator>> FetchIndicators(string keyword = "");

		Task<IEnumerable<Indicator>> FetchByIdsAsync(IList<int> ids);
	}
	public class IndicatorService : IIndicatorService
	{
		private readonly IDefaultRepository<Indicator> indicatorRepository;

		public IndicatorService(IDefaultRepository<Indicator> indicatorRepository)
		{
			this.indicatorRepository = indicatorRepository;
		}

		public async Task<IEnumerable<Indicator>> FetchIndicators(string keyword = "")
		{
			Task<IEnumerable<Indicator>> getIndicatorsTask;
			if (String.IsNullOrEmpty(keyword))
			{
				getIndicatorsTask = GetAllAsync();
			}
			else
			{
				getIndicatorsTask = GetByKeywordAsync(keyword);
			}

			var indicators = await getIndicatorsTask;

			return indicators;
		}

		public async Task<IEnumerable<Indicator>> FetchByIdsAsync(IList<int> ids)
		{
			var filter = new IndicatorFilterSpecifications(ids);

			return await indicatorRepository.ListAsync(filter);
		}

		async Task<IEnumerable<Indicator>> GetAllAsync() => await indicatorRepository.ListAllAsync();

		async Task<IEnumerable<Indicator>> GetByKeywordAsync(string keyword)
		{
			var filter = new IndicatorFilterSpecifications(keyword);

			return await indicatorRepository.ListAsync(filter);
		}
	}
}
