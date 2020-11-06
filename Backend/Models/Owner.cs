using System.ComponentModel.DataAnnotations;

namespace Backend.Models
{
    public class Owner
    {
        [Key]
        public int id { get; set; }
        [Required]
        public string civility { get; set; }
        [Required]
        public string gender { get; set; }
        [Required]
        public string lastName { get; set; }
        [Required]
        public string firstName { get; set; }
        [Required]
        public string address { get; set; }
        [Required]
        public int zipCode { get; set; }
        [Required]
        public string city { get; set; }
        [Required]
        public string country { get; set; }
        public string birthDate { get; set; }
        public int age { get; set; }
        public string placeOfBirth { get; set; }
        public string nationalRegister { get; set; }
        [Required]
        public string email { get; set; }
        [Required]
        public string phoneNumber { get; set; }
        public int ownerInCharge { get; set; }
        
    }
}
