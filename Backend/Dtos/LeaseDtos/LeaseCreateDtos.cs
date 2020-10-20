using System.ComponentModel.DataAnnotations;

namespace Backend.Dtos
{
    public class LeaseCreateDtos
    {
        [Required]
        public string name { get; set; }
        [Required]
        public int age { get; set; }
        [Required]
        public string phoneNumber { get; set; }
    }
}