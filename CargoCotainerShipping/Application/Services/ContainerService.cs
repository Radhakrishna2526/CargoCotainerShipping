using Core.Entities;
using Core.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Application.Services
{
    public class ContainerService
    {
        private readonly IContainerRepository _containerRepository;

        public ContainerService(IContainerRepository containerRepository)
        {
            _containerRepository = containerRepository;
        }

        public async Task<List<Container>> GetAvailableContainers(int portId, DateOnly availableFrom)
        {
            return await _containerRepository.GetAvailableContainersByPortAndDateAsync(portId, availableFrom);
        }
    }
}