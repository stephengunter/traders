using Infrastructure.Views;
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



		//public UploadFile MapToEntity(string updatedBy, UploadFile entity = null)
		//{
		//	if (entity == null) entity = new UploadFile();

		//	entity.PostId = postId;
		//	entity.Name = name;
		//	entity.Title = title;
		//	entity.Order = order;

		//	entity.SetUpdated(updatedBy);


		//	return entity;
		//}



	}
}
