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

		Task<IEnumerable<Indicator>> GetAllAsync();

		Indicator GetByEntity(string entity);

		Task<Indicator> GetByIdAsync(int id);

		Task<Indicator> CreateAsync(Indicator indicator, ICollection<UploadFile> medias = null);

		Task UpdateAsync(Indicator indicator, ICollection<UploadFile> medias);

		Task RemoveAsync(Indicator indicator);

		Task OrdersAsync(IList<int> ids);
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
			indicator.Order = GetNewOrder();
			indicator = await indicatorRepository.AddAsync(indicator);

			if (!medias.IsNullOrEmpty())
			{
				foreach (var item in medias)
				{
					item.PostId = indicator.Id;
					item.PostType = PostType.Indicator;
				}

				uploadFileRepository.AddRange(medias);

				var attachments = await GetIndicatorAttachmentsAsync(indicator.Id);
				indicator.CoverId = attachments.OrderBy(a => a.Order).FirstOrDefault().Id;

				await indicatorRepository.UpdateAsync(indicator);
			}

			return indicator;
		}

		public async Task UpdateAsync(Indicator indicator, ICollection<UploadFile> medias)
		{
			var currentAttachments = await GetIndicatorAttachmentsAsync(indicator.Id);

			if (medias.IsNullOrEmpty())
			{
				if (!currentAttachments.IsNullOrEmpty())
				{
					uploadFileRepository.DeleteRange(currentAttachments);
				}

				indicator.CoverId = 0;
				await indicatorRepository.UpdateAsync(indicator);
			}
			else
			{
				
				var needRemoveItems = new List<UploadFile>();

				foreach (var item in currentAttachments)
				{
					var exist = medias.Where(m => m.Id == item.Id).FirstOrDefault();
					if (exist == null)
					{
						needRemoveItems.Add(item);
					}
					else
					{
						uploadFileRepository.Update(exist);
					}
				}

				if (!needRemoveItems.IsNullOrEmpty()) uploadFileRepository.DeleteRange(needRemoveItems);

				var newItems = medias.Where(m => m.Id < 1);
				foreach (var item in newItems)
				{
					item.PostId = indicator.Id;
					item.PostType = PostType.Indicator;
				}
				if (!newItems.IsNullOrEmpty()) uploadFileRepository.AddRange(newItems);


				indicator.CoverId = medias.FirstOrDefault().Id;
				await indicatorRepository.UpdateAsync(indicator);

			}

		}

		public async Task OrdersAsync(IList<int> ids)
		{
			var indicators = await FetchByIdsAsync(ids);
			foreach (var indicator in indicators)
			{
				indicator.Order = ids.IndexOf(indicator.Id);
			}

			indicatorRepository.UpdateRange(indicators);
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

		public async Task<IEnumerable<Indicator>> GetAllAsync()
		{
			var filter = new IndicatorFilterSpecifications();
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

		async Task<IEnumerable<UploadFile>> GetIndicatorAttachmentsAsync(int id)
		{
			var filter = new AttachmentFilterSpecifications(PostType.Indicator, id);

			return await uploadFileRepository.ListAsync(filter);
		}

		int GetNewOrder()
		{
			if (indicatorRepository.DbSet.IsNullOrEmpty()) return 0;

			var maxOrder = indicatorRepository.DbSet.Max(i => i.Order);
			return maxOrder + 1;
		}

		

	}
}
