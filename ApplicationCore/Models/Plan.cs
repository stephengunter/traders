using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using ApplicationCore.Helpers;
using Infrastructure.Entities;

namespace ApplicationCore.Models
{
	public class Plan : BaseRecord
	{
		public string Name { get; set; }

		public string Description { get; set; }

		public int Month { get; set; }

		public decimal Money { get; set; }

		public ICollection<Subscribe> Subscribes { get; set; }


	}
}
