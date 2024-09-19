﻿using Application.DTOs;
using Core.Entities;
using Core.Interfaces;
using Infrastructure.Persistence;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Infrastructure.Repositories
{
    
    public class BookingRepository : IBookingRepository
    {
        private readonly ShippingDbContext _dbContext;

        public BookingRepository(ShippingDbContext dbContext)
        {
            _dbContext = dbContext;
        }

        public async Task AddAsync(Booking booking)
        {
            _dbContext.Bookings.Add(booking);
            await _dbContext.SaveChangesAsync();
        }

        public  Task<List<Booking>> GetBookingDetailAsync(int userId)
        {

            return  _dbContext.Bookings.Where(x => x.UserId == userId)
                .Include(x=>x.User)
                .Include(x=>x.Container)
                .Include(x=>x.SourcePort)
                .Include(x=>x.DestinationPort)
                .ToListAsync();
                   


        }

        public User GetUserDetails(int userID)
        {
            var result=_dbContext.Users.FirstOrDefault(x=>x.Id == userID);
          
            return result;
        }
    }
}
