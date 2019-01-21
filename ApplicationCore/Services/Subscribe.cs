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
	public interface ISubscribeService
	{
		Task<IEnumerable<Subscribe>> FetchByUserAsync(string userId);
		Task<bool> HasActiveSubscribeAsync(string userId);
	}

	public class SubscribeService : ISubscribeService
	{
		private readonly IDefaultRepository<Subscribe> subscribeRepository;

		public SubscribeService(IDefaultRepository<Subscribe> subscribeRepository)
		{
			this.subscribeRepository = subscribeRepository;
		}

		public async Task<IEnumerable<Subscribe>> FetchByUserAsync(string userId)
		{
			var spec = new SubscribeFilterSpecification(userId);
			return await subscribeRepository.ListAsync(spec);
		}

		public async Task<bool> HasActiveSubscribeAsync(string userId)
		{
			var subscribes = await FetchByUserAsync(userId);

			if (subscribes.IsNullOrEmpty()) return false;

			subscribes = subscribes.Where(s => s.Active);
			return subscribes.IsNullOrEmpty() ? false : true;
		}
	}
}
