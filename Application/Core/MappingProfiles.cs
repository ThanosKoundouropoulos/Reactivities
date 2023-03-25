using AutoMapper;
using Domain;

namespace Application.Core
{
    public class MappingProfiles : Profile
    {
        public MappingProfiles()
        {
            //ston mapper koitame pou theloume na pame kai apo pou dld sthn periptwsh mas apo activity tou request sto activity ths vashs pou kanoume edit
            CreateMap<Activity , Activity>();
        }
    }
}