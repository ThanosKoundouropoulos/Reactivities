using Domain;
using MediatR;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Persistence;
using Application.Activities;
using Application;

namespace API.Controllers
{
    public class ActivitiesController : BaseApiController
    {
    
        //xrhsimopoiw ton mediator gia ta querys
    
        [HttpGet] //api/activities
        public async Task<ActionResult<List<Activity>>> GetActivities()
        {
            //xrhsimopoiw ton mediator gia to quer anti gia apeytheias :_context.Activities.ToListAsync();
            //Mediator anti gia _mediator dld auton pou exei o base controller
            return await Mediator.Send(new List.Query());
            //prin omws to testarw preipei na valw ton mediator san service sto programm class
            
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<Activity>> GetActivity(Guid id)
        {
            return await Mediator.Send(new Details.Query{Id = id});
        }

        //neo endpoint gia thn create
        [HttpPost]

        public async Task<IActionResult> CreateActivity(Activity activity)
        {//                                                  Object initializer syntax
            return Ok(await Mediator.Send(new Create.Command {Activity = activity}));
        }
        
        [HttpPut("{id}")]
        public async Task<IActionResult> EditActivity(Guid id,Activity activity)
        {      
            activity.Id = id;                                           //Object initializer syntax
            return Ok(await Mediator.Send(new Edit.Command {Activity = activity}));
        }

         [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteActivity(Guid id)
        {                                                //Object initializer syntax
            return Ok(await Mediator.Send(new Delete.Command {Id = id}));
        }

    }
}