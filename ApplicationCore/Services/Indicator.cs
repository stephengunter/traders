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
		Task<IEnumerable<Indicator>> FetchAsync(bool active);

		Task<IEnumerable<Indicator>> FetchByIdsAsync(IList<int> ids);

		Task<IEnumerable<Indicator>> FetchByEntitiesAsync(IList<string> entities);

		Task<IEnumerable<Indicator>> GetActiveIndicatorsAsync();

		Indicator GetByEntity(string entity);

		Task<Indicator> CreateAsync(Indicator indicator);
	}
	public class IndicatorService : IIndicatorService
	{
		private readonly IDefaultRepository<Indicator> indicatorRepository;

		public IndicatorService(IDefaultRepository<Indicator> indicatorRepository)
		{
			this.indicatorRepository = indicatorRepository;
		}

		public async Task<Indicator> CreateAsync(Indicator indicator) => await indicatorRepository.AddAsync(indicator);

		public async Task<IEnumerable<Indicator>> FetchAsync(bool active)
		{
			var spec = new IndicatorFilterSpecifications(active);
			return await indicatorRepository.ListAsync(spec);
		}

		public async Task<IEnumerable<Indicator>> FetchByIdsAsync(IList<int> ids)
		{
			var filter = new IndicatorFilterSpecifications(ids);

			return await indicatorRepository.ListAsync(filter);
		}

		public async Task<IEnumerable<Indicator>> FetchByEntitiesAsync(IList<string> entities)
		{
			var filter = new IndicatorFilterSpecifications(entities);

			return await indicatorRepository.ListAsync(filter);
		}


		public async Task<IEnumerable<Indicator>> GetActiveIndicatorsAsync()
		{
			var spec = new IndicatorFilterSpecifications(active:true);
			return await indicatorRepository.ListAsync(spec);
		}

		

		public Indicator GetByEntity(string entity)
		{
			var filter = new IndicatorFilterSpecifications(entity);

			return  indicatorRepository.GetSingleBySpec(filter);
		}
	}
}
