using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Mail;
using System.Net;
using System.Text;
using System.Threading.Tasks;
using Core.Entities;
using Core.Interfaces;


namespace Infrastructure.Repositories
{
    public class EmailNotificationRepositories : IEmailNotificationRepository
    {
        public void SendMailNotification(string toEmail, string subject, string body)
        {
            SmtpClient smtpClient = new SmtpClient("smtp.gmail.com", 587);
            smtpClient.EnableSsl = true;
            smtpClient.UseDefaultCredentials = false;
            smtpClient.Credentials = new NetworkCredential("radhakrishnasriram020@gmail.com", GetPassword());

            MailMessage mailMessage = new MailMessage();
            mailMessage.From = new MailAddress("radhakrishnasriram020@gmail.com");
            mailMessage.To.Add(toEmail);
            mailMessage.Subject = subject;
            mailMessage.Body = body;
            mailMessage.IsBodyHtml = true;
            smtpClient.Send(mailMessage);
        }

        public async Task<string> GenerateEmailBodyAsync(User user, Booking booking)
        {

            // Check for null values in booking properties
            var sourcePortName = booking?.SourcePort?.Name ?? "Not specified";
            var destinationPortName = booking?.DestinationPort?.Name ?? "Not specified";
            var deliveryDate = booking?.DeliveryDate != null ? booking.DeliveryDate.ToString("MMMM dd, yyyy") : "Not specified";

            // Generate the email body using the booking and user details
            return $@"
            <h1>Booking Confirmation</h1>
            <p>Dear {user.Name},</p>
            <p>Your booking has been successfully confirmed with the following details:</p>
            <p><strong>Booking ID:</strong> {booking.BookingId}</p>            
            <p><strong>Source Port:</strong> {sourcePortName}</p>
            <p><strong>Destination Port:</strong> {destinationPortName}</p>
            <p><strong>Delivery Date:</strong> {deliveryDate}</p>
            <p>Thank you for choosing our service.</p>";
        }


        private string GetPassword()
        {
            return "dbimbekamnluprgi";
        }
    }
}
