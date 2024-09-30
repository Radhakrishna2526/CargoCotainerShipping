using Application.DTOs;
using Core.Entities;
using Core.Interfaces;
using System;
using System.Collections.Generic;
using System.Collections.Specialized;
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

        public async Task<ContainerDto> AddContainer(ContainerDto containerDto)
        {
            // Map ContainerDto to Container entity
            var container = new Container
            {
                Id = containerDto.Id,
                Capacity = containerDto.Capacity,
                Type = containerDto.Type,
                CurrentPortId = containerDto.CurrentPortId,
                AvailableFrom = containerDto.AvailableFrom,
                ShippingCompanyId = containerDto.ShippingCompanyId
            };

            // Call repository to add the container
            var result = await _containerRepository.AddContainer(container);

            if (result != null)
            {
                // Map back to ContainerDto from result
                return new ContainerDto
                {
                    Id = result.Id,
                    Capacity = result.Capacity,
                    Type = result.Type,
                    CurrentPortId = result.CurrentPortId,
                    AvailableFrom = result.AvailableFrom,
                    ShippingCompanyId = result.ShippingCompanyId
                };
            }
            else
            {
                throw new Exception("Failed to Add Container");
            }
        }



    }
}