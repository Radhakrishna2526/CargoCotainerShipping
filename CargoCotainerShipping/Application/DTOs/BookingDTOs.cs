using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Application.DTOs
{
    public class BookingRequest
    {
        public int UserId { get; set; }
        public int ContainerId { get; set; }
        public int SourcePortId { get; set; }
        public int DestinationPortId { get; set; }
        public DateOnly ShippingDate { get; set; }
    }

    public class BookingResponse
    {
        public int BookingId { get; set; }
        public string Message { get; set; }
    }


    //Displaying Booking Details

    public class BookingDetailsResponse
    {
        public int BookingId { get; set; }

        public int UserId { get; set; }

        public string UserName { get; set; }
        public string ContainerType { get; set; }

        public int ContainerSize { get; set; }

        public DateOnly BookingDate { get; set; }

        public DateOnly OutOfDelivery{get;set;}
        public DateOnly DeliveryDate { get; set; }

        public string SourceportLocation {  get; set; } 

        public string DestinationportLocation { get; set; }


    }
}
