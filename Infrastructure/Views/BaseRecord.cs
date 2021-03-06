﻿using Infrastructure.Entities;
using System;
using System.Collections.Generic;
using System.Text;

namespace Infrastructure.Views
{
	public abstract class BaseRecordView
	{
		public DateTime createdAt { get; set; }
		public DateTime lastUpdated { get; set; }
		public string updatedBy { get; set; }

		public int order { get; set; }
		public bool removed { get; set; }

		public bool active { get; set; }

		public virtual void SetValues(BaseRecord entity)
		{
			entity.CreatedAt = createdAt;
			entity.LastUpdated = lastUpdated;
			entity.UpdatedBy = updatedBy;

			entity.Order = order;
			entity.Removed = removed;

		}


	}
}
