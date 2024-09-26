using Core.Interfaces;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace CargoCotainerShipping.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PortController : ControllerBase
    {

        private readonly IPortRepository _portRepository;
        public PortController(IPortRepository portRepository)
        {
            _portRepository = portRepository;
        }

        [HttpGet]
        public async Task<IActionResult> GetListOfPorts()
        {
            var response= await _portRepository.GetListOfPorts();
            return Ok(response);
        }
    }
}
