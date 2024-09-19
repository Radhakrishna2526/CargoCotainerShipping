﻿using Application.DTOs;
using AutoMapper;
using Core.Entities;
using Core.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Application.Services
{

    public class BookingRequest
    {
        public int UserId { get; set; }
        public int ContainerId { get; set; }
        public int SourcePortId { get; set; }
        public int DestinationPortId { get; set; }
        public DateOnly StartingDate { get; set; }
    }

    public class BookingResponse
    {
        public int BookingId { get; set; }
        public string Message { get; set; }
    }

    public class BookingService
    {
        private readonly IBookingRepository _bookingRepository;
        private readonly IContainerRepository _containerRepository;
        private readonly IMapper _mapper;
        private IEmailNotification _emailNotification;
        public List<List<int>> DISTANCE_GRAPH = new List<List<int>>
        {
            new List<int>() { 0 , 1 , 5 , 5 , 7 , 7 , 3 , 2 , 3 , 6 },
            new List<int>() { 1 , 0 , 5 , 5 , 7 , 7 , 3 , 2 , 3 , 6 },
            new List<int>() { 5 , 5 , 0 , 1 , 6 , 6 , 4 , 6 , 7 , 3 },
            new List<int>() { 5 , 5 , 1 , 0 , 6 , 6 , 4 , 6 , 7 , 3 },
            new List<int>() { 7 , 7 , 6 , 6 , 0 , 1 , 8 , 9 , 10 , 5 },
            new List<int>() { 7 , 7 , 6 , 6 , 1 , 0 , 8 , 9 , 10 , 5 },
            new List<int>() { 3 , 3 , 4 , 4 , 8 , 8 , 0 , 4 , 5 , 6 },
            new List<int>() { 2 , 2 , 6 , 6 , 9 , 9 , 4 , 0 , 1 , 7 },
            new List<int>() { 3 , 3 , 7 , 7 , 10 , 10 , 5 , 1 , 0 , 8 },
            new List<int>() { 6 , 6 , 3 , 3 , 5 , 5 , 6 , 7 , 8 , 0 }
        };

        public BookingService(
            IBookingRepository bookingRepository,
            IContainerRepository containerRepository,IMapper mapper, IEmailNotification emailNotification)
        {
            _bookingRepository = bookingRepository;
            _containerRepository = containerRepository;
            _mapper = mapper;
            _emailNotification = emailNotification;
        }

        public async Task<BookingResponse> BookContainerAsync(int userId, int containerId, int sourcePortId, int destinationPortId,DateOnly startingDate)
        {
            // Check if the container, user, and ports exist
            var container = await _containerRepository.GetByIdAsync(containerId);
            if (container == null) throw new Exception("Container not found.");

            //var user = await _userRepository.GetByIdAsync(userId);
            //if (user == null) throw new Exception("User not found.");

            //var sourcePort = await _portRepository.GetByIdAsync(sourcePortId);
            //if (sourcePort == null) throw new Exception("Source Port not found.");

            //var destinationPort = await _portRepository.GetByIdAsync(destinationPortId);
            //if (destinationPort == null) throw new Exception("Destination Port not found.");


            DateOnly deliveryDate = container.AvailableFrom.Value.AddDays(CalculateNoOfDaysToReach(sourcePortId, destinationPortId));

            // Create a new Booking
            var booking = new Booking
            {
                UserId = userId,
                ContainerId = containerId,
                SourcePortId = sourcePortId,
                DestinationPortId = destinationPortId,
                Created = DateTime.Now,
                DeliveryDate = deliveryDate
            };

            // Save booking to the repository
            await _bookingRepository.AddAsync(booking);

            // Update container's current port and available date
           /* container.Capacity = container.Size;
            container.Capacity = container.Capacity;*/
            
            container.CurrentPortId = destinationPortId;
            container.AvailableFrom = deliveryDate;

            await _containerRepository.UpdateAsync(container);
            var user =  _bookingRepository.GetUserDetails(userId);

            if (user.Email == null)
            {
                throw new Exception("Email sholud not be null");
            }



            string emailBody = await _emailNotification.GenerateEmailBodyAsync(user, booking);
           
            _emailNotification.SendMailNotification(user.Email, "Booking Confirmation", emailBody);

            return new BookingResponse
            {
                BookingId = booking.BookingId,
                Message = "Container booked successfully."
            };
            
        }

        public int CalculateNoOfDaysToReach(int sourcePortId, int destinationPortId)
        {
            return DISTANCE_GRAPH[sourcePortId - 1][destinationPortId - 1];
        }

        public async Task<List<BookingDetailsReq>> GetBookingDetailsByUserId(int userId)
        {
            if (userId <= 0)
            {
                throw new ArgumentException("Invalid UserId");
            }
            try
            {
                // Fetch the list of bookings from the repository
                var listOfBookings = await _bookingRepository.GetBookingDetailAsync(userId);

                // Map the list of bookings to BookingDetailsReq
                var bookingDetailsReq = _mapper.Map<List<BookingDetailsReq>>(listOfBookings);

                return bookingDetailsReq;
            }
            catch (Exception ex)
            {
                throw new ApplicationException("An error occurred while retrieving booking details.", ex);
            }
        }


        
    }
}
