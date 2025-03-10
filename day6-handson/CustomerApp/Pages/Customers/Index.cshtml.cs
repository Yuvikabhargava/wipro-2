using Microsoft.AspNetCore.Mvc.RazorPages;
using Microsoft.EntityFrameworkCore;
using CustomerApp.Data;
using CustomerApp.Models;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace CustomerApp.Pages.Customers
{
    public class IndexModel : PageModel
    {
        private readonly AppDbContext _context;

        public IndexModel(AppDbContext context)
        {
            _context = context;
        }

        public IList<Customer> Customers { get; set; }

        public async Task OnGetAsync()
        {
            Customers = await _context.Customers.ToListAsync();
        }
    }
}
