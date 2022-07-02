using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Mail;
using DPO.Common;

namespace DPO.Domain
{
    public static class WebImportError
    {
        public static void NotifyErrorViaEmail(string errorMessage, string serviceName, string value, string subject)
        {
            try
            {
                var host = Utilities.Config("dpo.sys.email.host");
                var emailFrom = Utilities.Config("dpo.sys.email.from");
                var emailToList = new List<string>();
                var mail = new MailMessage();

                using (var SmtpServer = new SmtpClient(host))
                {
                    mail.From = new MailAddress(emailFrom);

                    if (!string.IsNullOrEmpty(value))
                    {
                        if (!value.Contains(";"))
                            mail.To.Add(value);
                        else
                        {
                            var emailArr = value.Split(';');
                            emailToList = emailArr.ToList();

                            foreach (var email in emailToList)
                                mail.To.Add(email);
                        }
                    }

                    mail.Subject = subject;
                    mail.Body = errorMessage;
                    SmtpServer.Port = int.Parse(Utilities.Config("dpo.sys.email.port"));
                    SmtpServer.EnableSsl = Utilities.Config("dpo.sys.email.port") == "true";

                    SmtpServer.Send(mail);
                }
            }
            catch (Exception ex)
            {
                var errMessage = "Exeption: " + ex.Message + Environment.NewLine + "StackTrace: " + ex.StackTrace + Environment.NewLine + "for Service: " + serviceName;
                Console.WriteLine(errMessage);
            }
        }
    }
}
