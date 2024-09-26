﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Application.DTOs
{
    
        public class RegisterRequest
        {
            public string Name { get; set; }
            public string Email { get; set; }
            public string Password { get; set; }
            public string PhoneNo { get; set; }
    }

        public class LoginRequest
        {
            public string Email { get; set; }
            public string Password { get; set; }
        }
    
}
