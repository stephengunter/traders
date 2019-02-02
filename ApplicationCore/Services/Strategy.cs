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
	public interface IStrategyService
	{
		Task<IEnumerable<Strategy>> FetchByUserAsync(string userId);
		Strategy GetById(int id);


		Task<Strategy> GetByIdAsync(int id);
		Task<Strategy> CreateAsync(Strategy strategy);
		Task UpdateAsync(Strategy strategy, ICollection<IndicatorSettings> indicatorSettings);

	}


	public class StrategyService : IStrategyService
	{
		private readonly IDefaultRepository<Strategy> strategyRepository;
		private readonly IDefaultRepository<IndicatorSettings> indicatorSettingsRepository;

		public StrategyService(IDefaultRepository<Strategy> strategyRepository, IDefaultRepository<IndicatorSettings> indicatorSettingsRepository)
		{
			this.strategyRepository = strategyRepository;
			this.indicatorSettingsRepository = indicatorSettingsRepository;
		}

		public async Task<IEnumerable<Strategy>> FetchByUserAsync(string userId)
		{
			var spec = new StrategyFilterSpecification(userId);
			return await strategyRepository.ListAsync(spec);
		}

		public Strategy GetById(int id)
		{
			var spec = new StrategyFilterSpecification(id);
			return strategyRepository.GetSingleBySpec(spec);
		}

		public async Task<Strategy> GetByIdAsync(int id) => await strategyRepository.GetByIdAsync(id);

		public async Task<Strategy> CreateAsync(Strategy strategy)
		{
			await CheckNameAsync(strategy);
			return await strategyRepository.AddAsync(strategy);
		}

		public async Task UpdateAsync(Strategy strategy, ICollection<IndicatorSettings> indicatorSettings)
		{
			await CheckNameAsync(strategy);
			await strategyRepository.UpdateAsync(strategy);

			var currentSettings = await GetIndicatorSettingsAsync(strategy);

			var needRemoveSettingsIds = GetNeedRemoveSettings(currentSettings, indicatorSettings);

			foreach (var newItem in indicatorSettings)
			{
				var existSettings = currentSettings.Where(s => s.IndicatorId == newItem.IndicatorId).FirstOrDefault();
				if (existSettings == null)
				{
					newItem.StrategyId = strategy.Id;
					indicatorSettingsRepository.Add(newItem);
				}
				else
				{
					existSettings.Arg = newItem.Arg;
					indicatorSettingsRepository.Update(existSettings);
				}
			}

			RemoveIndicatorSettings(needRemoveSettingsIds);			

		}


		List<int> GetNeedRemoveSettings(IEnumerable<IndicatorSettings> currentSettings, IEnumerable<IndicatorSettings> newSettings)
		{
			List<int> needRemoveIds = new List<int>();
			foreach (var item in currentSettings)
			{
				var exist = newSettings.Where(s => s.IndicatorId == item.IndicatorId).FirstOrDefault();
				if (exist == null)
				{
					needRemoveIds.Add(item.Id);
				}
			}
			return needRemoveIds;
		}


		void RemoveIndicatorSettings(List<int> ids)
		{
			if (ids.IsNullOrEmpty()) return;

			var spec = new IndicatorSettingsFilterSpecification(ids);
			var records = indicatorSettingsRepository.List(spec);
			indicatorSettingsRepository.DeleteRange(records);
		}

		async Task<IEnumerable<IndicatorSettings>> GetIndicatorSettingsAsync(Strategy strategy)
		{
			var spec = new IndicatorSettingsFilterSpecification(strategy);
			return await indicatorSettingsRepository.ListAsync(spec);
		}

		async Task<IEnumerable<Strategy>> FetchByNameAsync(string userId ,string name)
		{
			var strategies = await FetchByUserAsync(userId);
			if (strategies.IsNullOrEmpty()) return strategies;

			return strategies.Where(s => s.Name == name);
		}

		async Task CheckNameAsync(Strategy strategy)
		{
			var strategies = await FetchByUserAsync(strategy.UserId);
			if (strategies.IsNullOrEmpty()) return;

			strategies = strategies.Where(s => s.Name == strategy.Name && s.Id!= strategy.Id);

			if (strategies.IsNullOrEmpty()) return;

			strategy.Name = $"{strategy.Name}{strategies.Count()}";

		}
		
	}
}
