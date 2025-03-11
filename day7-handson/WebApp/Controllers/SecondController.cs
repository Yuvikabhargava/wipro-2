using Microsoft.AspNetCore.Mvc;

namespace WebApp.Controllers
{
    public class SecondController : Controller
    {
        public IActionResult Index1()
        {
            return Content("This is Index1 of second controller");
        }
        public IActionResult Index2()
        {
            return Content("This is Index2 of second controlller");
        }
        public IActionResult Index3()
        {
            return Content("This is Index3 of second controller");
        }
    }
}
