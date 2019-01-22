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
		Task CreateKeysAsync(string userId, string ip);
		bool CheckKey(string userId, string ip);
	}

	public class SubscribeService : ISubscribeService
	{
		private readonly IDefaultRepository<Subscribe> subscribeRepository;
		private readonly IDefaultRepository<Key> keyRepository;

		public SubscribeService(IDefaultRepository<Subscribe> subscribeRepository, IDefaultRepository<Key> keyRepository)
		{
			this.subscribeRepository = subscribeRepository;
			this.keyRepository = keyRepository;
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

		public async Task CreateKeysAsync(string userId, string ip)
		{
			var date = DateTime.Today.ToDateNumber();
			var exit = await FindKeyAsync(userId);
			if (exit == null)
			{
				await keyRepository.AddAsync(new Key
				{
					Date = date,
					IP = ip,
					UserId = userId
				});
			}
			else
			{
				exit.IP = ip;
				exit.Date = date;
				await keyRepository.UpdateAsync(exit);
			}
		}

		public bool CheckKey(string userId, string ip)
		{
			var key = FindKey(userId, DateTime.Today.ToDateNumber());
			if (key == null) return false;
			return ip == key.IP;
		}

		Key FindKey(string userId, int date)
		{
			var spec = new KeyFilterSpecification(userId, date);
			return keyRepository.GetSingleBySpec(spec);
		}

		async Task<Key> FindKeyAsync(string userId)
		{
			var spec = new KeyFilterSpecification(userId);
			var keys = await keyRepository.ListAsync(spec);

			if (keys.IsNullOrEmpty()) return null;

			return keys.OrderByDescending(k => k.Date).FirstOrDefault();

		}
	}
}
