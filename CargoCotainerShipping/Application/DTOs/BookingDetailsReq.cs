using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Application.DTOs
{
    public class BookingDetailsReq
    {
        public int BookingId { get; set; }
        public string? UserName { get; set; }
        public string? ContainerType { get; set; }
        public string? StartingFrom { get; set; }
        public string? Destination { get; set; }
        public DateOnly StartingDate { get; set; }
        public DateOnly DeliveryDate { get; set; }



        
    }
}
