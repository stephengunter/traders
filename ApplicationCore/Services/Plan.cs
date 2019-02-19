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
	public interface IPlanService
	{
		Task<IEnumerable<Plan>> FetchAsync(bool active);

		Task<IEnumerable<Plan>> FetchByIdsAsync(IList<int> ids);

		Task<IEnumerable<Plan>> GetActivePlansAsync();
		

		Task<Plan> GetByIdAsync(int id);

		Task<Plan> CreateAsync(Plan plan);

		Task UpdateAsync(Plan plan);

		Task RemoveAsync(Plan plan);

		Task OrdersAsync(IList<int> ids);
	}
	public class PlanService : IPlanService
	{
		private readonly IDefaultRepository<Plan> planRepository;

		public PlanService(IDefaultRepository<Plan> planRepository)
		{
			this.planRepository = planRepository;
		}

		public async Task<Plan> CreateAsync(Plan plan)
		{
			plan.Order = GetNewOrder();
			return await planRepository.AddAsync(plan);
		}

		public async Task UpdateAsync(Plan plan) => await planRepository.UpdateAsync(plan);

		public async Task OrdersAsync(IList<int> ids)
		{
			var plans = await FetchByIdsAsync(ids);
			foreach (var plan in plans)
			{
				plan.Order = ids.IndexOf(plan.Id);
			}

			planRepository.UpdateRange(plans);
		}


		public async Task<IEnumerable<Plan>> FetchAsync(bool active)
		{
			var spec = new PlanFilterSpecifications(active);
			return await planRepository.ListAsync(spec);
		}

		public async Task<IEnumerable<Plan>> FetchByIdsAsync(IList<int> ids)
		{
			var filter = new PlanFilterSpecifications(ids);

			return await planRepository.ListAsync(filter);
		}

		public async Task<IEnumerable<Plan>> GetActivePlansAsync()
		{
			var spec = new PlanFilterSpecifications(active: true);
			return await planRepository.ListAsync(spec);
		}


		public async Task<Plan> GetByIdAsync(int id) => await planRepository.GetByIdAsync(id);

		public async Task RemoveAsync(Plan plan)
		{
			plan.Removed = true;
			await planRepository.UpdateAsync(plan);
		}

		int GetNewOrder()
		{
			if (planRepository.DbSet.IsNullOrEmpty()) return 0;

			var maxOrder = planRepository.DbSet.Max(i => i.Order);
			return maxOrder + 1;
		}

		

	}
}
