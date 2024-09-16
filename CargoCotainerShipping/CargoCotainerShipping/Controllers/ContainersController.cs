using Application.Services;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace CargoCotainerShipping.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ContainersController : ControllerBase
    {
        private readonly ContainerService _containerService;

        public ContainersController(ContainerService containerService)
        {
            _containerService = containerService;
        }

        [HttpGet("available")]
        public async Task<IActionResult> GetAvailableContainers([FromQuery] int portId, [FromQuery] DateOnly availableFrom)
        {
            var containers = await _containerService.GetAvailableContainers(portId, availableFrom);

            if (containers == null || !containers.Any())
                return NotFound("No containers found for the specified port and date.");

            return Ok(containers);
        }
    }
}
