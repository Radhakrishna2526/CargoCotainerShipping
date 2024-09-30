using NUnit.Framework;
using Moq;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;

using Application.Services;
using Core.Entities;
using Core.Interfaces;
using System.Linq;

[TestFixture]
public class BookingServiceTests
{
    private Mock<IBookingRepository> _bookingRepositoryMock;
    private BookingService _bookingService;

    [SetUp]
    public void SetUp()
    {
        
        _bookingRepositoryMock = new Mock<IBookingRepository>();

      
        _bookingService = new BookingService(_bookingRepositoryMock.Object,null,null,null);
    }

   
    private int CalculateNoOfDaysToReach(int sourcePortId, int destinationPortId)
    {
        return 5;
    }

    [Test]
    public async Task ValidUserID_ReturnList()
    {
        
        var mockBookings = new List<Booking>
        {
            new Booking
            {
                BookingId = 1,
                User = new User { Name = "Radha" },
                Container = new Container { Type = "solid", Size = 40 },
                SourcePort = new Port { Name = "Port Abc" },
                DestinationPort = new Port { Name = "Port Def" },
                Created = DateTime.Now,
                DeliveryDate = DateOnly.FromDateTime(DateTime.Now.AddDays(5)),
                SourcePortId = 1,
                DestinationPortId = 2
            }
        };

       
        _bookingRepositoryMock.Setup(x => x.GetAllBookingsByUserIdAsync(1))
                              .ReturnsAsync(mockBookings);
       
        var result = await _bookingService.GetBookingDetailsByUserId(1);
        Assert.AreEqual(1, result.Count);

      
    }

    [Test]
    public async Task InvalidUserID_ReturnNull()
    {
       
        var mockBookings = new List<Booking>
        {
            new Booking
            {
                BookingId = 1,
                User = new User { Name = "Radha" },
                Container = new Container { Type = "solid", Size = 40 },
                SourcePort = new Port { Name = "Port Abc" },
                DestinationPort = new Port { Name = "Port Def" },
                Created = DateTime.Now,
                DeliveryDate = DateOnly.FromDateTime(DateTime.Now.AddDays(5)),
                SourcePortId = 1,
                DestinationPortId = 2
            }
        };

        _bookingRepositoryMock.Setup(x=>x.GetAllBookingsByUserIdAsync(0)).ReturnsAsync(mockBookings);

        var result = await _bookingService.GetBookingDetailsByUserId(2);
        Assert.IsNull(result);
           
    }
}
