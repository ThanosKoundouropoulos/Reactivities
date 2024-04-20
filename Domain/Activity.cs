namespace Domain
{
    public class Activity
    {
        public Guid Id { get; set; }

        public String Title { get; set; }
        public DateTime Date { get; set; }
        public String Description { get; set; }
        public String Category { get; set; }
        public String City { get; set; }
        public String Venue { get; set; }
        public bool IsCancelled { get; set; }
        public ICollection<ActivityAttendee> Attendees { get; set;} = new List<ActivityAttendee>();
        public ICollection<Comment> Comments { get; set;} = new List<Comment>();
    }
}