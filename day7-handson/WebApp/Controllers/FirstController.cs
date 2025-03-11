using Microsoft.AspNetCore.Mvc;

namespace WebApp.Controllers
{
    public class FirstController : Controller
    {
        public IActionResult Index1()
        {
            return Content("This is Index1 of First Controller");
        }

        public IActionResult Index2()
        {
            return Content("This is Index2 of First Controller");
        }
        public IActionResult Index3()
        {
            return Content("This is Index3 of First Controller");
        }
    }
}
