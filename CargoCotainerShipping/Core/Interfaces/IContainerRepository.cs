using Core.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Core.Interfaces
{
    public interface IContainerRepository
    {
        Task<List<Container>> GetAvailableContainersByPortAndDateAsync(int portId, DateOnly availableFrom);
        Task<Container> GetByIdAsync(int id);
        Task UpdateAsync(Container container);

        Task<Container> AddContainer(Container container);
    }
}
