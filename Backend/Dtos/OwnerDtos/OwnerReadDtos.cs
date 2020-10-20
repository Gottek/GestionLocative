using System.ComponentModel.DataAnnotations;

namespace Backend.Dtos
{
    public class OwnerReadDtos
    {
        public int id { get; set; }
        public string name { get; set; }
        public int age { get; set; }
    }
}