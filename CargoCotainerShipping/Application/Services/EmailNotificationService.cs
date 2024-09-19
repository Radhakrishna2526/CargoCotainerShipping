using Core.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Xml.Serialization;

namespace Application.Services
{
    public class EmailNotificationService
    {
        private readonly IEmailNotification _emailNotification;

        public EmailNotificationService(IEmailNotification emailNotification)
        { 
            _emailNotification = emailNotification;
        }

        public void SendEmailNotification(string toEmail,string subject,string body)
        {
             _emailNotification.SendMailNotification(toEmail, subject, body);
            
        }
    }
}
