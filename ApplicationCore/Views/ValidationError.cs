﻿using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.ModelBinding;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace ApplicationCore.Views
{
	public class ValidationFailedResult : ObjectResult
	{
		public ValidationFailedResult(ModelStateDictionary modelState)
			: base(new ValidationResultModel(modelState))
		{
			StatusCode = StatusCodes.Status422UnprocessableEntity;
		}
	}

	public class ValidationResultModel
	{
		public string Message { get; set; }

		public List<ValidationError> Errors { get; }

		public ValidationResultModel(ModelStateDictionary modelState, string msg = "")
		{
			Message = msg;
			Errors = modelState.Keys
					.SelectMany(key => modelState[key].Errors.Select(x => new ValidationError(key, x.ErrorMessage)))
					.ToList();
		}
	}

	public class ValidationError
	{
		[JsonProperty(NullValueHandling = NullValueHandling.Ignore)]
		public string Field { get; }

		public string Message { get; }

		public ValidationError(string field, string message)
		{
			Field = field != string.Empty ? field : null;
			Message = message;
		}
	}
}
