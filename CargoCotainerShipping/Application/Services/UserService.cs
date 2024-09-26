using Core.Entities;
using Core.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Application.Services
{
    public class UserService 
    {
        private readonly IUserRepository _userRepository;

        public UserService(IUserRepository userRepository)
        {
            _userRepository = userRepository;
        }

        public async Task<User> RegisterUser(string name, string email, string password, string phoneNo)
        {
            var user = new User
            {
                Name = name,
                Email = email,
                Password = password,
                Phone = phoneNo
            };

            user.HashPassword(); // Hash the password before saving
            await _userRepository.CreateUser(user);
            return user;
        }

        public async Task<User> LoginUser(string email, string password)
        {
            var user = await _userRepository.GetUserByEmail(email);

            if (user == null || !user.VerifyPassword(password))
            {
                throw new UnauthorizedAccessException("Invalid Email or Password");
            }

            return user;
        }
    }
}
