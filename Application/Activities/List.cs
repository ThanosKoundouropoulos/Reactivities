using Application.Core;
using AutoMapper;
using AutoMapper.QueryableExtensions;
using Domain;
using MediatR;
using Microsoft.EntityFrameworkCore;
using Persistence;

namespace Application.Activities
{
    public class List
    {

        // to query ftiaxnei ena request gia to db kai to passaroume ston handler
        public class Query : IRequest<Result<List<ActivityDto>>> { }


        //o handler apistrefei ta dedomena pou zhthsame typou IRequest<List<Activity>>
        public class Handler : IRequestHandler<Query, Result<List<ActivityDto>>>
        {

            //kanoume inject to datacontext apo to domain gia na paroume pragmata apo thn vash
            private readonly DataContext _contex;
            private readonly IMapper _mapper;

            public Handler(DataContext context, IMapper mapper)
            {
                _mapper = mapper;
                _contex = context;
            }

            public async Task<Result<List<ActivityDto>>> Handle(Query request, CancellationToken cancellationToken)
            {
                var activities = await _contex.Activities
                    .ProjectTo<ActivityDto>(_mapper.ConfigurationProvider)
                    .ToListAsync(cancellationToken);
                
                return Result<List<ActivityDto>>.Success(activities);
            }

            //telos epeidh einai logikh sto application project den mporei o kwdikas autos monos tou
        }   //na metaferei plhrofories sto api controller 
    }
}