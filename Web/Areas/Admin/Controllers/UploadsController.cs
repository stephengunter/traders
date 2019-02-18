using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ApplicationCore.Models;
using ApplicationCore.Services;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using ApplicationCore.Views;
using ApplicationCore.Helpers;
using Microsoft.AspNetCore.Http;
using System.Drawing;
using SixLabors.ImageSharp;
using System.IO;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Options;
using System.Diagnostics;

namespace Web.Areas.Admin.Controllers
{
	public class UploadsController : BaseAdminController
	{
		private readonly IAttachmentService attachmentService;
		private readonly IHostingEnvironment environment;
		private readonly AppSettings appSettings;

		public UploadsController(IHostingEnvironment environment, IOptions<AppSettings> appSettings, IAttachmentService attachmentService)
		{
			this.environment = environment;
			this.appSettings = appSettings.Value;
			this.attachmentService = attachmentService;
		}

		string UploadFilesPath => Path.Combine(environment.WebRootPath, appSettings.UploadPath);

		string FFmpegPath => Path.Combine(environment.ContentRootPath, "ffmpeg.exe");

		[HttpPost("")]
		public async Task<IActionResult> Store([FromForm] UploadForm form)
		{
			var attachments = new List<UploadFile>();

			foreach (var file in form.files)
			{
				if (file.Length > 0)
				{
					PostType postType = form.postType.ToPostType();
					var attachment = await attachmentService.FindByNameAsync(file.FileName, postType, form.postId);
					if (attachment == null) throw new Exception(String.Format("attachmentService.FindByName({0},{1})", file.FileName, form.postId));

					var upload = await SaveFile(file);
					attachment.PostType = postType;
					attachment.Type = upload.Type;
					attachment.Path = upload.Path;

					switch (upload.Type)
					{
						case ".jpg":
						case ".jpeg":
						case ".png":
						case ".gif":
							var image = Image.Load(file.OpenReadStream());
							attachment.Width = image.Width;
							attachment.Height = image.Height;
							attachment.PreviewPath = upload.Path;
							break;
						case ".mp4":
							//截取影片預覽圖
							string imgPath = Path.ChangeExtension(upload.Path, ".jpg");


							string videoFullPath = Path.Combine(UploadFilesPath, upload.Path);
							string imgFullPath = Path.Combine(UploadFilesPath, imgPath);

							SaveVideoImage(videoFullPath, imgFullPath);

							attachment.PreviewPath = imgPath;

							break;
					}

					attachments.Add(attachment);
				}
			}


			attachmentService.UpdateRange(attachments);
			return Ok();

		}


		private async Task<UploadFile> SaveFile(IFormFile file)
		{
			//檢查檔案路徑
			string folderName = DateTime.Now.ToString("yyyyMMdd");
			string folderPath = Path.Combine(this.UploadFilesPath, folderName);
			if (!Directory.Exists(folderPath)) Directory.CreateDirectory(folderPath);

			string extension = Path.GetExtension(file.FileName).ToLower();

			string fileName = String.Format("{0}{1}", Guid.NewGuid(), extension);
			string filePath = Path.Combine(folderPath, fileName);
			using (var fileStream = new FileStream(filePath, FileMode.Create))
			{
				await file.CopyToAsync(fileStream);
			}


			var entity = new UploadFile()
			{
				Type = extension,
				Path = folderName + "/" + fileName
			};

			return entity;
		}



		//截取影片預覽圖
		public void SaveVideoImage(string videoPath, string imgPath)
		{
			Process process = new Process();
			process.StartInfo.RedirectStandardOutput = true;
			process.StartInfo.RedirectStandardError = true;
			process.StartInfo.FileName = FFmpegPath;
			process.StartInfo.Arguments = "-i " + videoPath + " -y -f image2 -t 0.010 -s 480x360 -ss 00:00:05 " + imgPath;
			process.StartInfo.UseShellExecute = false;
			process.StartInfo.CreateNoWindow = true;

			try
			{
				process.Start();
				process.WaitForExit();
			}
			catch (Exception ex)
			{
				throw ex;
			}
			finally
			{
				process.Close();
			}

		}
	}
}