using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Backend.Models
{
    public class Lease
    {
        [Key]
        public int LeaseId { get; set; }
        [Required]
        public string leaseStartDate { get; set; }
        [Required]
        public string leaseEndDate { get; set; }
        [Required]
        public string leaseTerm { get; set; }
        [Required] 
        public string adress { get; set; }
        [Required]
        public string type { get; set; }
        [Required]
        public string floor { get; set; }
        [Required]
        public string rentPrice { get; set; }
        [Required]
        public string baseIndex { get; set; }
        [Required]
        public string charges { get; set; }
        [Required]
        public string garanteeAmount { get; set; }
        [Required]
        public string signatureDate { get; set; }
        [Required]
        public string waterMeterIndexInput { get; set; }
        [Required]
        public string gazMeterIndexInput { get; set; }
        [Required]
        public string electricityMeterIndexInput { get; set; }
        [Required]
        public string depositPaid { get; set; }
        [Required]
        public string depositPaymentDate { get; set; }
        [Required]
        public string firstMonthPaid { get; set; }
        [Required]
        public string entryDate { get; set; }
        [Required]
        public string releaseDate { get; set; }
        [Required]
        public string waterMeterIndexOutput { get; set; }
        [Required]
        public string gazMeterIndexOutput { get; set; }
        [Required]
        public string electricityMeterIndexOutput { get; set; }
        [ForeignKey("Home")]
        public int homeId { get; set; }
        [ForeignKey("Owner")]
        public int personId { get; set; }
        
    }
}