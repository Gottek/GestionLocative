using System.ComponentModel.DataAnnotations;

namespace Backend.Models
{
    public class Home
    {
        [Key]
        public int id { get; set; }
        [Required]
        public string adress { get; set; }
        public int floor { get; set; }
        [Required]
        public string type { get; set; }
        [Required]
        public int roomNumber { get; set; }
        [Required]
        public int totalArea { get; set; }
        [Required]
        public int roomArea { get; set; }
        [Required]
        public int livingRoomArea { get; set; }
        [Required]
        public int diningRoomArea { get; set; }
        [Required]
        public int rentPrice { get; set; }
        [Required]
        public int flatRateCharges { get; set; }
    }
}