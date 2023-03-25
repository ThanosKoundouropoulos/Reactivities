using Domain;
using MediatR;
using Microsoft.EntityFrameworkCore;
using Persistence;

namespace Application.Activities
{
    public class List
    {
       
        // to query ftiaxnei ena request gia to db kai to passaroume ston handler
        public class Query : IRequest<List<Activity>> { }
       
       
        //o handler apistrefei ta dedomena pou zhthsame typou IRequest<List<Activity>>
        public class Handler : IRequestHandler<Query, List<Activity>>
        {
           
            //kanoume inject to datacontext apo to domain gia na paroume pragmata apo thn vash
            private readonly DataContext _contex;

            public Handler(DataContext context)
            {
                _contex = context;
            }

            public async Task<List<Activity>> Handle(Query request, CancellationToken cancellationToken)
            {
                //kai epistrefoume thn lista activities
                return await _contex.Activities.ToListAsync();
            }

            //telos epeidh einai logikh sto application project den mporei o kwdikas autos monos tou
        }   //na metaferei plhrofories sto api controller 
    }
}