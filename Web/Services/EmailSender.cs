using ApplicationCore.Logging;
using Microsoft.Extensions.Options;
using System;
using System.Net;
using System.Net.Mail;
using System.Threading.Tasks;


namespace Web.Services
{
	public interface IEmailSender
	{
		Task SendEmailAsync(string email, string subject, string message);
	}

	// This class is used by the application to send email for account confirmation and password reset.
	// For more details see https://go.microsoft.com/fwlink/?LinkID=532713

	public class EmailSender : IEmailSender
	{
		private readonly IOptions<EmailSettings> settings;
		private readonly ILogger logger;

		public EmailSender(IOptions<EmailSettings> settings, ILogger logger)
		{
			this.settings = settings;
			this.logger = logger;
		}


		public Task SendEmailAsync(string email, string subject, string message)
		{
			return Execute(subject, message, email);
		}

		public async Task Execute(string subject, string message, string email)
		{
			string siteEmail = settings.Value.Email;
			string siteTitle = settings.Value.Title;

			MailMessage mail = new MailMessage()
			{
				From = new MailAddress(siteEmail, siteTitle)
			};
			mail.To.Add(new MailAddress(email));
			mail.Subject = subject;
			mail.Body = message;
			mail.IsBodyHtml = true;
			mail.Priority = MailPriority.High;

			try
			{
				using (SmtpClient smtp = new SmtpClient(settings.Value.Host, settings.Value.Port))
				{
					smtp.Credentials = new NetworkCredential(settings.Value.UserName, settings.Value.Password);
					smtp.EnableSsl = true;
					await smtp.SendMailAsync(mail);
				}
			}
			catch (Exception ex)
			{
				logger.LogError($"發送Email時發生錯誤: {ex}");
			}
			
		}

		//public Task Execute(string subject, string message, string email)
		//{
		//	string apiKey = settings.Value.EmailApiKey;
		//	var client = new SendGridClient(apiKey);

		//	string siteEmail = settings.Value.Email;
		//	string siteTitle = settings.Value.Title;

		//	var msg = new SendGridMessage()
		//	{
		//		From = new EmailAddress(siteEmail, siteTitle),
		//		Subject = subject,
		//		PlainTextContent = message,

		//		HtmlContent = message
		//	};
		//	msg.AddTo(new EmailAddress(email));
		//	return client.SendEmailAsync(msg);
		//}
	}
}
