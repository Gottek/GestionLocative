using System.ComponentModel.DataAnnotations;

namespace Backend.Dtos
{
    public class HomeCreateDtos
    {
        [Required]
        public string type { get; set; }
        [Required]
        public int roomNumber { get; set; }
        [Required]
        public int totalArea { get; set; }
        [Required]
        public int roomArea { get; set; }
    }
}