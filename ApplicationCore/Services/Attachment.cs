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
		Task<IEnumerable<UploadFile>> FetchAsync(PostType PostType, int postId);

		UploadFile FindByName(string name, int postId);

		Task<UploadFile> GetByIdAsync(int id);

		Task UpdateAsync(UploadFile attachment);

		void UpdateRange(IEnumerable<UploadFile> attachments);

		Task DeleteAsync(UploadFile attachment);
	}

	public class AttachmentService : IAttachmentService
	{
		private readonly IDefaultRepository<UploadFile> uploadFileRepository;

		public AttachmentService(IDefaultRepository<UploadFile> uploadFileRepository)
		{
			this.uploadFileRepository = uploadFileRepository;
		}

		public async Task<IEnumerable<UploadFile>> FetchAsync(PostType PostType, int postId)
		{
			var filter = new AttachmentFilterSpecifications(PostType, postId);

			return await uploadFileRepository.ListAsync(filter);
		}

		public UploadFile FindByName(string name, int postId)
		{
			var filter = new AttachmentFilterSpecifications(postId, name);

			return uploadFileRepository.GetSingleBySpec(filter);
		}

		public async Task<UploadFile> GetByIdAsync(int id) => await uploadFileRepository.GetByIdAsync(id);

		public async Task UpdateAsync(UploadFile attachment) => await uploadFileRepository.UpdateAsync(attachment);

		public async Task DeleteAsync(UploadFile attachment) => await uploadFileRepository.DeleteAsync(attachment);
		
		public void UpdateRange(IEnumerable<UploadFile> attachments) => uploadFileRepository.UpdateRange(attachments);


	}
}
