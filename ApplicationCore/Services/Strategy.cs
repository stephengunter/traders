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
	}


	public class StrategyService : IStrategyService
	{
		private readonly IDefaultRepository<Strategy> strategyRepository;

		public StrategyService(IDefaultRepository<Strategy> strategyRepository)
		{
			this.strategyRepository = strategyRepository;
		}

		public async Task<IEnumerable<Strategy>> FetchByUserAsync(string userId)
		{
			var spec = new StrategyFilterSpecification(userId);
			return await strategyRepository.ListAsync(spec);
		}
	}
}
