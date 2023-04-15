using Application.Core;
using MediatR;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]

    //tha vaoume ton mediator ston vasiko contoller gia na xrhsimopoieitai apo olous
    //dld den xreiazetai na ton ylopoioume se kathe controller
    public class BaseApiController : ControllerBase
    {
        private IMediator _mediator;

        //protected gia na xrhsimopoieitai apo oles tis derived klaseis
        // ??= ean den exei mediator kane assign enan
        protected IMediator Mediator => _mediator ??=
            HttpContext.RequestServices.GetService<IMediator>();


    protected ActionResult HandleResult<T>(Result<T> result)
    {
        if( result == null) return NotFound();
        if( result.IsSuccess && result.Value != null)
            return Ok(result.Value);
        if( result.IsSuccess && result.Value == null)
            return NotFound();
        return BadRequest(result.Error);
    }
    }
}