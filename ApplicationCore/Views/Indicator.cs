using ApplicationCore.Models;
using ApplicationCore.Paging;
using Infrastructure.Views;
using System;
using System.Collections.Generic;
using System.Text;

namespace ApplicationCore.Views
{
	public class IndicatorViewModel : BaseRecordView
	{
		public int id { get; set; }

		public string name { get; set; }

		public string entity { get; set; }

		public string description { get; set; }

		public int begin { get; set; } //盤中產生信號開始時間  例如 90000

		public int end { get; set; } //盤中產生信號結束時間  例如 133000

		public int minParam { get; set; }

		public int maxParam { get; set; }

		public int defaultParam { get; set; }

		public List<int> paramList { get; set; }

		public bool main { get; set; }

		public string source { get; set; }

		public string type { get; set; }

		public bool withAvg { get; set; }

		public int coverId { get; set; }

		public ICollection<MediaViewModel> medias { get; set; } = new List<MediaViewModel>();


		public void SetValues(Indicator entity, string updatedBy)
		{
			entity.Name = name;
			entity.Entity = this.entity;
			entity.Description = description;

			entity.Begin = begin;
			entity.End = end;

			entity.Params = String.Join(",", new string[] { minParam.ToString(), maxParam.ToString(), defaultParam.ToString() });

			entity.Main = main;
			entity.WithAvg = withAvg;

			entity.Type = (IndicatorType)Enum.Parse(typeof(IndicatorType), type);
			entity.Source = (SourceType)Enum.Parse(typeof(SourceType), source);

			entity.SetUpdated(updatedBy);


		}
	}


	public class IndicatorEditForm
	{
		public IndicatorViewModel indicator { get; set; }

		public int minParam { get; set; }

		public int maxParam { get; set; }

		public ICollection<BaseOption> typeOptions { get; set; }

		public ICollection<BaseOption> sourceOptions { get; set; }
	}

}
