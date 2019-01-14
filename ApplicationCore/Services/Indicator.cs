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

		async Task<IEnumerable<Indicator>> GetAllAsync() => await indicatorRepository.ListAllAsync();

		async Task<IEnumerable<Indicator>> GetByKeywordAsync(string keyword)
		{
			var filter = new IndicatorFilterSpecifications(keyword);

			return await indicatorRepository.ListAsync(filter);
		}
	}
}
