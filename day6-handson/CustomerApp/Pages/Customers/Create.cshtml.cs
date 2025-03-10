using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using CustomerApp.Data;
using CustomerApp.Models;

namespace CustomerApp.Pages.Customers
{
    public class CreateModel : PageModel
    {
        private readonly AppDbContext _context;

        public CreateModel(AppDbContext context) => _context = context;

        [BindProperty]
        public Customer Customer { get; set; }

        public async Task<IActionResult> OnPostAsync()
        {
            if (!ModelState.IsValid)
                return Page();

            _context.Customers.Add(Customer);
            await _context.SaveChangesAsync();
            return RedirectToPage("Index");
        }
    }
}
