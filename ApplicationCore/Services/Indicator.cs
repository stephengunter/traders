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

		Task<Indicator> GetByIdAsync(int id);

		Task<Indicator> CreateAsync(Indicator indicator, ICollection<UploadFile> medias = null);

		Task UpdateAsync(Indicator indicator, ICollection<UploadFile> medias);

		Task RemoveAsync(Indicator indicator);
	}
	public class IndicatorService : IIndicatorService
	{
		private readonly IDefaultRepository<Indicator> indicatorRepository;
		private readonly IDefaultRepository<UploadFile> uploadFileRepository;

		public IndicatorService(IDefaultRepository<Indicator> indicatorRepository, IDefaultRepository<UploadFile> uploadFileRepository)
		{
			this.indicatorRepository = indicatorRepository;
			this.uploadFileRepository = uploadFileRepository;
		}

		public async Task<Indicator> CreateAsync(Indicator indicator, ICollection<UploadFile> medias = null)
		{
			indicator = await indicatorRepository.AddAsync(indicator);

			if (!medias.IsNullOrEmpty())
			{
				foreach (var item in medias)
				{
					item.PostId = indicator.Id;
					item.PostType = PostType.Indicator;
				}

				uploadFileRepository.AddRange(medias);
			}

			return indicator;
		}

		public async Task UpdateAsync(Indicator indicator, ICollection<UploadFile> medias)
		{
			await indicatorRepository.UpdateAsync(indicator);

			if (medias.IsNullOrEmpty()) return;

			var existMedias = medias.Where(m => m.Id > 0);
			if (!existMedias.IsNullOrEmpty()) uploadFileRepository.UpdateRange(existMedias);

			var newMedias = medias.Where(m => m.Id < 1);
			if (!newMedias.IsNullOrEmpty()) uploadFileRepository.AddRange(newMedias);

		}


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
			var spec = new IndicatorFilterSpecifications(active: true);
			return await indicatorRepository.ListAsync(spec);
		}



		public Indicator GetByEntity(string entity)
		{
			var filter = new IndicatorFilterSpecifications(entity);

			return indicatorRepository.GetSingleBySpec(filter);
		}


		public async Task<Indicator> GetByIdAsync(int id) => await indicatorRepository.GetByIdAsync(id);

		public async Task RemoveAsync(Indicator indicator)
		{
			indicator.Removed = true;
			await indicatorRepository.UpdateAsync(indicator);
		}
	}
}
