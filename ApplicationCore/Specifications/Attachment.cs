using ApplicationCore.Helpers;
using ApplicationCore.Models;
using Infrastructure.DataAccess;
using System;
using System.Collections.Generic;
using System.Linq.Expressions;
using System.Text;


namespace ApplicationCore.Specifications
{
	public class AttachmentFilterSpecifications : BaseSpecification<UploadFile>
	{
		public AttachmentFilterSpecifications(PostType PostType, int postId) 
			: base(a => a.PostType == PostType &&  a.PostId == postId)
		{
			
		}
		
	}

}
