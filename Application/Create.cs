using Domain;
using MediatR;
using Persistence;

namespace Application
{
    public class Create
    {
        //command oxi query giati dn epistrefei kati 
        public class Command : IRequest
        {
            //pernei  orisma typou  activity pou tha ftuiaksei
            public Activity Activity { get; set; }
        }

        public class Handler : IRequestHandler<Command>
        {
            private readonly DataContext _context;
            public Handler(DataContext context)
            {
                _context = context;
            }

            public async Task<Unit> Handle(Command request, CancellationToken cancellationToken)
            {
                //then xreiazetai async giati den peirazoume thn vash
                //to framework apla parakolouthei oti vazoume ena activity sto context sthn mnhmh
                _context.Activities.Add(request.Activity);

                //edw pou kanei save sthn bash xreiazetai async
                await _context.SaveChangesAsync();

                //to comamnd nthen epistrefei kati alla to handle epistrefei ena task type unit
                //vazoume unit value to opoio den einai tipota 
                //apla kserei etsi o API controller oti  ginetai mesa sto handler teleiwse
                return Unit.Value;

            }
        }
    }
}