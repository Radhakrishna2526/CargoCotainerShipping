using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Core.Entities;
using Application.DTOs;
using Application.Services;
using Core.Interfaces;

namespace CargoCotainerShipping.Controllers
{
    
    [ApiController]
    [Route("api/[controller]")]
    public class BookingController : ControllerBase
    {
        private readonly BookingService _bookingService;

        public BookingController(BookingService bookingService)
        {
            _bookingService = bookingService;
        }

        [HttpPost]
        [Route("book")]
        public async Task<IActionResult> BookContainer([FromBody] BookingRequest request)
        {            
            try
            {
                var response = await _bookingService.BookContainerAsync(
                    request.UserId, request.ContainerId, request.SourcePortId, request.DestinationPortId,request.StartingDate);
               
             
                return Ok(response);
            }
            catch (Exception ex)
            {
                return BadRequest(new { message = ex.Message });
            }
        }

        
        [HttpGet("GetBookingDetails/{userId:int}")]
        public async Task<IActionResult> GetBookingDetailsByUserID(int userId)
        {
            var response = await _bookingService.GetBookingDetailsByUserId(userId);
            if (response != null)
            {
                return Ok(response);
            }
            else
            {
                return BadRequest();
            }
        }
    }
}
