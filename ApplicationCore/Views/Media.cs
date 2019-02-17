using ApplicationCore.Models;
using Infrastructure.Views;
using Microsoft.AspNetCore.Http;
using System;
using System.Collections.Generic;
using System.Text;

namespace ApplicationCore.Views
{
	public class MediaViewModel : BaseRecordView
	{
		public int id { get; set; }

		public int postId { get; set; }

		public string type { get; set; }

		public string path { get; set; }

		public string previewPath { get; set; }

		public string name { get; set; }

		public string title { get; set; }


		public int width { get; set; }

		public int height { get; set; }


		public void SetValues(UploadFile entity, string updatedBy)
		{
			entity.PostId = postId;
			entity.Name = name;
			entity.Title = title;
			entity.Order = order;

			entity.SetUpdated(updatedBy);
		}

	}

	public class UploadForm
	{
		public int postId { get; set; }
		public List<IFormFile> files { get; set; }
	}

}
