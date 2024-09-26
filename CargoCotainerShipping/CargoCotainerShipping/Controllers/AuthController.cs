﻿using Core.Entities;
using Application.DTOs;
using Microsoft.AspNetCore.Http;
//using Microsoft.AspNetCore.Identity.Data;
using Microsoft.AspNetCore.Mvc;
using Application.Services;

namespace CargoCotainerShipping.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AuthController : ControllerBase
    {
        private readonly UserService _userService;

        public AuthController(UserService userService)
        {
            _userService = userService;
        }

        [HttpPost("register")]
        public async Task<IActionResult> Register([FromBody] RegisterRequest request)
        {
            var user = await _userService.RegisterUser(request.Name, request.Email, request.Password, request.PhoneNo);
            return SendTokenResponse(user, 200);
        }

        [HttpPost("login")]
        public async Task<IActionResult> Login([FromBody] LoginRequest request)
        {
            var user = await _userService.LoginUser(request.Email, request.Password);
            return SendTokenResponse(user, 200);
        }

        private IActionResult SendTokenResponse(User user, int statusCode)
        {
            string token = user.GenerateJwtToken("your_jwt_secretahfghfsgdhjgshhfjkshfjkhjkfhsjkdhgjsdhgjkshdjkfghsjhfjs", 24);

            var options = new CookieOptions
            {
                Expires = DateTime.Now.AddDays(7), // Set your desired expiration
                HttpOnly = true
            };

            Response.Cookies.Append("token", token, options);

            return Ok(new
            {
                success = true,
                token,
                user
            });
        }
    }
}
