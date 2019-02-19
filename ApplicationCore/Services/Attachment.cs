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
	public interface IAttachmentService
	{
		Task<IEnumerable<UploadFile>> FetchAsync(PostType postType, int postId);

		Task<UploadFile> FindByNameAsync(string name, PostType postType, int postId);

		Task<IEnumerable<UploadFile>> FetchByIdsAsync(IList<int> ids);

		Task<UploadFile> GetByIdAsync(int id);

		Task UpdateAsync(UploadFile attachment);

		void UpdateRange(IEnumerable<UploadFile> attachments);

		void DeleteRange(IEnumerable<UploadFile> attachments);

		Task DeleteAsync(UploadFile attachment);
	}

	public class AttachmentService : IAttachmentService
	{
		private readonly IDefaultRepository<UploadFile> uploadFileRepository;

		public AttachmentService(IDefaultRepository<UploadFile> uploadFileRepository)
		{
			this.uploadFileRepository = uploadFileRepository;
		}

		public async Task<IEnumerable<UploadFile>> FetchAsync(PostType postType, int postId)
		{
			var filter = new AttachmentFilterSpecifications(postType, postId);

			return await uploadFileRepository.ListAsync(filter);
		}

		public async Task<UploadFile> FindByNameAsync(string name, PostType postType, int postId)
		{
			var attachments = await FetchAsync(postType, postId);
			if (attachments.IsNullOrEmpty()) return null;

			return attachments.Where(a => a.Name == name).FirstOrDefault();
		}

		public async Task<IEnumerable<UploadFile>> FetchByIdsAsync(IList<int> ids)
		{
			var filter = new AttachmentFilterSpecifications(ids);

			return await uploadFileRepository.ListAsync(filter);
		}

		public async Task<UploadFile> GetByIdAsync(int id) => await uploadFileRepository.GetByIdAsync(id);

		public async Task UpdateAsync(UploadFile attachment) => await uploadFileRepository.UpdateAsync(attachment);

		public async Task DeleteAsync(UploadFile attachment) => await uploadFileRepository.DeleteAsync(attachment);
		
		public void UpdateRange(IEnumerable<UploadFile> attachments) => uploadFileRepository.UpdateRange(attachments);

		public void DeleteRange(IEnumerable<UploadFile> attachments) => uploadFileRepository.DeleteRange(attachments);


	}
}
