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
}
