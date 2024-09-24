using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Mail;
using System.Net;
using System.Text;
using System.Threading.Tasks;
using Core.Entities;
using Core.Interfaces;
using Microsoft.Extensions.Configuration;


namespace Infrastructure.Repositories
{
    public class EmailNotificationRepositories : IEmailNotificationRepository
    {
        private readonly IConfiguration  _configuration;
        private readonly IPortRepository _portRepository;
        public EmailNotificationRepositories(IConfiguration configuration,IPortRepository portRepository)
        {
            _configuration = configuration;
            _portRepository = portRepository;   
        }
        public void SendMailNotification(string toEmail, string subject, string body)
        {
            string smtpHost = _configuration["MailSettings:Host"];
            int smtpPort = Convert.ToInt32(_configuration["MailSettings:Port"]);
            bool enableSSL = Convert.ToBoolean(_configuration["MailSettings:UseSSL"]);
            string fromEmail = _configuration["MailSettings:EmailId"];
            string fromName = _configuration["MailSettings:Name"];
            string smtpUser = _configuration["MailSettings:EmailId"];
            string smtpPassword = GetPassword();  

            SmtpClient smtpClient = new SmtpClient(smtpHost, smtpPort);
            smtpClient.EnableSsl = true;
            smtpClient.UseDefaultCredentials = false;
            smtpClient.Credentials = new NetworkCredential(fromEmail, GetPassword());

            MailMessage mailMessage = new MailMessage();
            mailMessage.From = new MailAddress(fromEmail);
            mailMessage.To.Add(toEmail);
            mailMessage.Subject = subject;
            mailMessage.Body = body;
            mailMessage.IsBodyHtml = true;
            smtpClient.Send(mailMessage);
        }

        public async Task<string> GenerateEmailBodyAsync(User user, Booking booking)
        {

            // Check for null values in booking properties
            var sourcePortName = await _portRepository.GetPortLocationById((int)booking.SourcePortId);
            var destinationPortName = await _portRepository.GetPortLocationById((int)booking.DestinationPortId);
            var deliveryDate = booking?.DeliveryDate != null ? booking.DeliveryDate.ToString("MMMM dd, yyyy") : "Not specified";

            // Generate the email body using the booking and user details
            return $@"
            <h1>Booking Confirmation</h1>
            <p>Dear {user.Name},</p>
            <p>Your booking has been successfully confirmed with the following details:</p>
            <p><strong>Booking ID:</strong> {booking.BookingId}</p>            
            <p><strong>Source Port:</strong> {sourcePortName.Location}</p>
            <p><strong>Destination Port:</strong> {destinationPortName.Location}</p>
            <P><strong>Booking Date : </strong>{booking.Created}</p>
            <p><strong>Delivery Date:</strong> {deliveryDate}</p>
            <p>Thank you for choosing our service.</p>";
        }


        private string GetPassword()
        {
            return _configuration["MailSettings:Password"];
        }
    }
}
