﻿using Core.Entities;
using Core.Interfaces;
using Infrastructure.Persistence;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Infrastructure.Repositories
{
    public class ContainerRepository : IContainerRepository
    {
        private readonly ShippingDbContext _context;

        public ContainerRepository(ShippingDbContext context)
        {
            _context = context;
        }

        public async Task<List<Container>> GetAvailableContainersByPortAndDateAsync(int portId, DateOnly availableFrom)
        {
            return await _context.Containers
                .Where(c => c.CurrentPortId == portId && c.AvailableFrom <= availableFrom)
                .ToListAsync();
        }
        public async Task<Container> GetByIdAsync(int id)
        {
            return await _context.Containers.FirstOrDefaultAsync(x=>x.Id==id);
        }

        public async Task UpdateAsync(Container container)
        {
            _context.Containers.Update(container);
            await _context.SaveChangesAsync();
        }
    }
}
