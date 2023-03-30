using AutoMapper;
using Domain;
using MediatR;
using Persistence;

namespace Application
{
    public class Edit
    {
        public class Command : IRequest
        {
            public Activity Activity { get; set; }
        }

        public class Handler : IRequestHandler<Command>
        {
            private readonly DataContext _context;
            private readonly IMapper _mapper;
           
            public Handler(DataContext context, IMapper mapper)
            {
                _mapper = mapper;
                _context = context;
            }

            public async Task<Unit> Handle(Command request, CancellationToken cancellationToken)
            {
                var activity = await _context.Activities.FindAsync(request.Activity.Id);

                // pairnei ola ta properties apo to request.activity kai ta kanei update sto activity
                _mapper.Map(request.Activity,activity);
                await _context.SaveChangesAsync();

                return Unit.Value;

            }
        }
    }
}