namespace Application.Comments
{
    public class CommentDto
    {
        public int Id { get; set; }
        public DateTime CreatedAt { get; set; }
        public String Body { get; set; }
        public String Username { get; set; }
        public String Displayname { get; set; }
        public String Image { get; set; }
    }
}