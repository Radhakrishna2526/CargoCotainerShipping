using Core.Entities;
using Core.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Application.Services
{
    public class PortServices
    {
        private readonly IPortRepository _portRepository;
        public PortServices(IPortRepository portRepository)
        {
            _portRepository = portRepository;   
        }
        public async Task<List<Port>> GetListOfPorts()
        {
           var response= await _portRepository.GetListOfPorts();
            return response.ToList();
        }

      
    }
}
