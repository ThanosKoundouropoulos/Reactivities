using Domain;
using Microsoft.AspNetCore.Mvc;
using Application.Activities;
using Application;
using Microsoft.AspNetCore.Authorization;
using Application.Core;

namespace API.Controllers
{

    public class ActivitiesController : BaseApiController
    {
    
        //xrhsimopoiw ton mediator gia ta querys
    
        [HttpGet]
        public async Task<IActionResult> GetActivities([FromQuery] ActivityParams param)
        {
            return HandlePagedResult(await Mediator.Send(new List.Query { Params = param }));
        }

       
        [HttpGet("{id}")]
        public async Task<IActionResult> GetActivity(Guid id)
        {
            return HandleResult(await Mediator.Send(new Details.Query{Id = id}));
        }

        //neo endpoint gia thn create
        [HttpPost]

        public async Task<IActionResult> CreateActivity(Activity activity)
        {//                                                  Object initializer syntax
            return HandleResult(await Mediator.Send(new Create.Command {Activity = activity}));
        }
        
        [Authorize(Policy ="IsActivityHost")]
        [HttpPut("{id}")]
        public async Task<IActionResult> EditActivity(Guid id,Activity activity)
        {      
            activity.Id = id;                                           //Object initializer syntax
            return HandleResult(await Mediator.Send(new Edit.Command {Activity = activity}));
        }

        [Authorize(Policy ="IsActivityHost")]
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteActivity(Guid id)
        {                                                //Object initializer syntax
            return HandleResult(await Mediator.Send(new Delete.Command {Id = id}));
        }

        
        [HttpPost("{id}/attend")]
        public async Task<IActionResult> Attend(Guid id)
        {                                                
            return HandleResult(await Mediator.Send(new UpdateAttendance.Command {Id = id}));
        }
    }
}