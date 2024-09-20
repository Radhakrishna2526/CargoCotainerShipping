using Core.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Core.Interfaces
{
    public interface IEmailNotificationRepository
    {
        void SendMailNotification(string toEmail, string subject, string body);
        Task<string> GenerateEmailBodyAsync(User user, Booking booking);

    }
}
