using Backend.Models;
using Microsoft.EntityFrameworkCore;

namespace Backend.Data
{
    public class CommanderContexte : DbContext
    {
        public CommanderContexte(DbContextOptions<CommanderContexte> options): base(options)
        {
            
        }

        public DbSet<Owner> Owners { get; set; }
        public DbSet<Lease> Leases { get; set; }
        public DbSet<Home> Homes { get; set; }
    }
}