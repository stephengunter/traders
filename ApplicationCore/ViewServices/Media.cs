using System;
using System.Collections.Generic;
using ApplicationCore.Models;
using ApplicationCore.Paging;
using System.Linq;
using Infrastructure.Views;

namespace ApplicationCore.Views
{
	public static class MediaViewService
	{
		public static MediaViewModel MapViewModel(this UploadFile entity)
		{
			var model = new MediaViewModel()
			{
				id = entity.Id,
				name = entity.Name,
				type = entity.Type,
				postId = entity.PostId,
				title = entity.Title,
				width = entity.Width,
				height = entity.Height,

				path = entity.Path,
				previewPath = entity.PreviewPath,
			};

			model.SetBaseRecordValues(entity);

			return model;
		}

		public static IEnumerable<UploadFile> GetOrdered(this IEnumerable<UploadFile> attachments)
		{
			return attachments.OrderBy(a => a.Order);
		}

	}
}
