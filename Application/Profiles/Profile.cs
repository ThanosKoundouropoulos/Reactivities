using Domain;

namespace Application.Profiles
{
    public class Profile
    {
        public String Username { get; set; }
        public String DisplayName { get; set; }
        public String Bio { get; set; }
        public String Image { get; set; }
        public ICollection<Photo> Photos { get; set; }

    }
}