
using Microsoft.EntityFrameworkCore;

namespace P2Day5AssignmentRazor.Models
{
    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options) { }
        public DbSet<Customer> Customers{ get; set; }
    }
}