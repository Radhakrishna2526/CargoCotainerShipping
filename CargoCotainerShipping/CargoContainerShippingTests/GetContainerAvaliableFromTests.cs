using Application.Services;
using Core.Entities;
using Core.Interfaces;
using Infrastructure.Persistence;
using Infrastructure.Repositories;
using Microsoft.EntityFrameworkCore;
using Moq;

namespace CargoContainerShippingTests
{
    public class GetContainerAvaliableFromTests
    {
        private ShippingDbContext _context;
        private ContainerService _containerService;
        private IContainerRepository _containerRepository;
        [SetUp]
        public void Setup()
        {
            var options = new DbContextOptionsBuilder<ShippingDbContext>()
                .UseInMemoryDatabase(databaseName: "ShippingDbTest")
                .Options;

            _context = new ShippingDbContext(options);

            // Seed the database with test data
            SeedDatabase();
            _containerRepository = new ContainerRepository(_context);
            _containerService = new ContainerService(_containerRepository);
        }

        [TearDown]
        public void TearDown()
        {

            _context.Database.EnsureDeleted();
            _context.Dispose();
        }


        //temparary data 
        private void SeedDatabase()
        {
            var containers = new List<Container>
        {
            new Container { Id = 1, CurrentPortId = 1, AvailableFrom = DateOnly.FromDateTime(DateTime.Now.AddDays(-2)),Type="Soild" },
            new Container {Id = 2, CurrentPortId = 1, AvailableFrom = DateOnly.FromDateTime(DateTime.Now),Type = "Soild" },
            new Container {Id = 3, CurrentPortId = 2, AvailableFrom = DateOnly.FromDateTime(DateTime.Now.AddDays(1)) ,Type="solid"}
        };

            _context.Containers.AddRange(containers);
            _context.SaveChanges();
        }

        [Test]
        public async Task GetTheListOfcontainersBaseOnPortAndDate_returnList()
        {
            var portId = 1;
            var availableFrom = DateOnly.FromDateTime(DateTime.Now);

            // Act
            var result = await _containerService.GetAvailableContainers(portId, availableFrom);

            // Assert
            Assert.AreEqual(2, result.Count);
        }

        [Test]
        public async Task ShouldReturnEmptyList_WhenNoContainersAreAvailable()
        {

            var portId = 3;
            var availableFrom = DateOnly.FromDateTime(DateTime.Now);


            var result = await _containerService.GetAvailableContainers(portId, availableFrom);


            Assert.AreEqual(0, result.Count);  // No containers should be returned
        }

        [Test]
        public async Task GetAvailableContainersByPortAndDateAsync_ShouldReturnAvailableContainers_OnExactAvailableDate()
        {

            var portId = 1;
            var availableFrom = DateOnly.FromDateTime(DateTime.Now); // There is a container with exact match


            var result = await _containerService.GetAvailableContainers(portId, availableFrom);


            Assert.AreEqual(2, result.Count);
            Assert.IsTrue(result.All(c => c.AvailableFrom <= availableFrom));
        }

        [Test]
        public async Task ShouldReturnEmptyList_WhenPortIdIsInvalid()
        {
            var invalidPortId = -1; // Invalid port ID
            var availableFrom = DateOnly.FromDateTime(DateTime.Now);

            var result= await _containerService.GetAvailableContainers(invalidPortId, availableFrom);
            Assert.AreEqual(0, result.Count);

            Assert.That(result.All(c=>c.CurrentPortId != invalidPortId));
        }
    }
}