using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using ApplicationCore.Helpers;
using Infrastructure.Entities;

namespace ApplicationCore.Models
{
	public enum IndicatorType
	{
		None,
		Curve,
		Bar
	}

	public class Indicator : BaseRecord
	{
		public string Name { get; set; }

		public int Order { get; set; }

		public int Begin { get; set; } //盤中產生信號開始時間  例如 90000

		public int End { get; set; } //盤中產生信號結束時間  例如 133000

		public string Entity { get; set; }

		public string Params { get; set; }

		public string DefaultParam { get; set; }

		public bool Main { get; set; }

		public IndicatorType Type { get; set; }

		public bool Removed { get; set; }


		public bool Active => Order >= 0 && !Removed;

		public IEnumerable<int> ResolveParamsValues()
		{
			if (this.Params.IsNullOrEmpty()) return null;

			int min = Params.Split(',')[0].ToInt();
			int max = Params.Split(',')[1].ToInt();

			var result = new List<int>();
			for (int i = min; i <= max; i++)
			{
				result.Add(i);
			}
			return result;
		}


	}
	
}
