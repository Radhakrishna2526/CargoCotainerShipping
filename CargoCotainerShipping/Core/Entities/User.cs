using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Microsoft.IdentityModel.Tokens;
using BCrypt.Net;
using System.IdentityModel.Tokens;
using System.Security.Claims;

namespace Core.Entities
{
    public class User
    {
        public int Id { get; set; }

        [Required]
        [StringLength(30, ErrorMessage = "Your name cannot exceed 30 characters")]
        public string Name { get; set; }

        [Required]
        [EmailAddress(ErrorMessage = "Please enter a valid email address")]
        public string Email { get; set; }

        [Required]
        [StringLength(100, MinimumLength = 6, ErrorMessage = "Your password must be longer than 6 characters")]
        public string Password { get; set; }

        public string? Phone { get; set; }

        //public string? AvatarPublicId { get; set; }
        //public string? AvatarUrl { get; set; }

        public string Role { get; set; } = "user";

        public DateTime CreatedAt { get; set; } = DateTime.Now;

        public string? ResetPasswordToken { get; set; }
        public DateTime? ResetPasswordExpire { get; set; }

        // Navigation property for related bookings
        public ICollection<Booking>? Bookings { get; set; }

        //// Additional methods for password handling and token generation

        // Hash password before saving
        public void HashPassword()
        {
            Password = BCrypt.Net.BCrypt.HashPassword(Password);
        }

        // Verify password
        public bool VerifyPassword(string password)
        {
            return BCrypt.Net.BCrypt.Verify(password, Password);
        }

        // Generate JWT token
        public string GenerateJwtToken(string secret, int expiresInHours)
        {
            var tokenHandler = new System.IdentityModel.Tokens.Jwt.JwtSecurityTokenHandler();
            var key = System.Text.Encoding.ASCII.GetBytes(secret);
            var tokenDescriptor = new SecurityTokenDescriptor
            {
                Subject = new System.Security.Claims.ClaimsIdentity(new[]
                {
                    new System.Security.Claims.Claim(System.Security.Claims.ClaimTypes.Name, Id.ToString())
                }),
                Expires = DateTime.UtcNow.AddHours(expiresInHours),
                SigningCredentials = new SigningCredentials(new SymmetricSecurityKey(key), SecurityAlgorithms.HmacSha256Signature)
            };

            var token = tokenHandler.CreateToken(tokenDescriptor);
            return tokenHandler.WriteToken(token);
        }

        // Generate password reset token
        public string GenerateResetPasswordToken()
        {
            using var rng = new System.Security.Cryptography.RNGCryptoServiceProvider();
            var randomBytes = new byte[20];
            rng.GetBytes(randomBytes);
            var resetToken = BitConverter.ToString(randomBytes).Replace("-", "").ToLower();

            ResetPasswordToken = HashToken(resetToken);
            ResetPasswordExpire = DateTime.Now.AddMinutes(30);

            return resetToken;
        }

        private string HashToken(string token)
        {
            using var sha256 = System.Security.Cryptography.SHA256.Create();
            var hash = sha256.ComputeHash(Encoding.UTF8.GetBytes(token));
            return BitConverter.ToString(hash).Replace("-", "").ToLower();
        }
    }
}
