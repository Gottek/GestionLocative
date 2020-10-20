using System.ComponentModel.DataAnnotations;

namespace Backend.Dtos
{
    public class LeaseReadDtos
    {
        public int id { get; set; }
        public string name { get; set; }
        public int age { get; set; }
    }
}