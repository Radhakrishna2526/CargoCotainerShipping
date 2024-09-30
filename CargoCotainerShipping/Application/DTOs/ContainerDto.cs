using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Application.DTOs
{
    public class ContainerDto
    {
        public int Id { get; set; }
        public string Type { get; set; }
        public int Size { get; set; }                   
        public int CurrentPortId { get; set; }          
        public DateOnly? AvailableFrom { get; set; }  
        public int? ShippingCompanyId { get; set; }      
        public double Capacity { get; set; }
    }
}
