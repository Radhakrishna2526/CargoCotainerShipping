using Core.Entities;
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
    public class PortRepository : IPortRepository
    {
        private readonly ShippingDbContext _context;
        public PortRepository(ShippingDbContext context)
        {
            _context = context;
        }

        public async Task<List<Port>> GetListOfPorts()
        {
           return await _context.Ports.ToListAsync();
        }

        public async Task<Port> GetPortLocationById(int id)
        {
            var port=  _context.Ports.Find(id);
            return port;
        }
    }
}
