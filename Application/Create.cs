using Application.Activities;
using Application.Core;
using Domain;
using FluentValidation;
using MediatR;
using Persistence;

namespace Application
{
    public class Create
    {
        //command se sxesh me to  query  den epistrefei kati 
        // h create kanonika den epistrefei kati alla vazoume <Result<Unit>> gia na epistrepsoume to error
        public class Command : IRequest<Result<Unit>>
        {
            //pernei  orisma typou  activity pou tha ftuiaksei
            public Activity Activity { get; set; }
        }

        public class CommandValidator : AbstractValidator<Command>
        {
            public CommandValidator()
            {
                RuleFor(x => x.Activity).SetValidator(new ActivityValidator());
            }
        }

        public class Handler : IRequestHandler<Command, Result<Unit>>
        {
            private readonly DataContext _context;
            public Handler(DataContext context)
            {
                _context = context;
            }

            public async Task<Result<Unit>> Handle(Command request, CancellationToken cancellationToken)
            {
                //then xreiazetai async giati den peirazoume thn vash
                //to framework apla parakolouthei oti vazoume ena activity sto context sthn mnhmh
                _context.Activities.Add(request.Activity);

                //edw pou kanei save sthn bash xreiazetai async
                var result = await _context.SaveChangesAsync() >0;

                //to comamnd nthen epistrefei kati alla to handle epistrefei ena task type unit
                //vazoume unit value to opoio den einai tipota 
                //apla kserei etsi o API controller oti  ginetai mesa sto handler teleiwse
                
                if(!result) return Result<Unit>.Failure("Failed to create activity");
                
                return Result<Unit>.Success(Unit.Value);

            }
        }
    }
}