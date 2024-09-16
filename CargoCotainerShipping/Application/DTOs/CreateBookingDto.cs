using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Application.DTOs
{
    public class CreateBookingDto
    {
        public int UserId { get; set; }
        public int ContainerId { get; set; }
        public int SourcePortId { get; set; }
        public int DestinationPortId { get; set;}
    }
}
