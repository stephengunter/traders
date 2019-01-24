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
	public interface IDayService
	{
		Task<IEnumerable<Day>> FetchHolidaysAsync(int year);

		Task<IEnumerable<Day>> FetchExtraDaysAsync(int year);
	}

	public class DayService : IDayService
	{
		private readonly IDefaultRepository<Day> dayRepository;

		public DayService(IDefaultRepository<Day> dayRepository)
		{
			this.dayRepository = dayRepository;
		}

		public async Task<IEnumerable<Day>> FetchHolidaysAsync(int year)
		{
			var spec = new DayFilterSpecification(year, DayType.Holiday);

			return await dayRepository.ListAsync(spec);
		}

		public async Task<IEnumerable<Day>> FetchExtraDaysAsync(int year)
		{
			var spec = new DayFilterSpecification(year, DayType.Extra);

			return await dayRepository.ListAsync(spec);
		}
	}
}
