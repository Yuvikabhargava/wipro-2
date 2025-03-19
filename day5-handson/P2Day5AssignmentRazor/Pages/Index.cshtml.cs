using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using Microsoft.EntityFrameworkCore;
using P2Day5AssignmentRazor.Models;

namespace P2Day5AssignmentRazor.Pages
{
    public class IndexModel : PageModel
    {
        private readonly P2Day5AssignmentRazor.Models.AppDbContext _context;

        public IndexModel(P2Day5AssignmentRazor.Models.AppDbContext context)
        {
            _context = context;
        }

        public IList<Customer> Customer { get;set; } = default!;

        public async Task OnGetAsync()
        {
            Customer = await _context.Customers.ToListAsync();
        }
    }
}
