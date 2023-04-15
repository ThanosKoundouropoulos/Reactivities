using Application.Core;
using Domain;
using MediatR;
using Persistence;

namespace Application.Activities
{
    public class Details
    {
        public class Query : IRequest<Result<Activity>>
        {
            public Guid Id { get; set; }
        }

        public class Handler : IRequestHandler<Query, Result<Activity>>
        {

            private readonly DataContext _contex;

            public Handler(DataContext context)
            {
                _contex = context;
            }

            public async Task<Result<Activity>> Handle(Query request, CancellationToken cancellationToken)
            {

                var activity = await _contex.Activities.FindAsync(request.Id);

                return Result<Activity>.Success(activity);
            }
        }


    }

}