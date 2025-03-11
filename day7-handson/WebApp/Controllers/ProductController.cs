using System.Reflection.Metadata;
using Microsoft.AspNetCore.Mvc;
using WebApp.Models;

namespace WebApp.Controllers
{
    public class ProductController : Controller
    {
        public IActionResult SingleProductViewBag()
        {
            Product product = new Product
            {
                PCode = 1,
                Name = "Laptop",
                QtyInStock = 40,
                Details = "Kuch nahi",
                Price = 60000
            };
            ViewBag.Product = product;
            return View();

        }
        public IActionResult MultipleProductsViewBag()
        {
            List<Product> products = new List<Product>
            {
                new Product { PCode = 101, Name = "Mobile", QtyInStock = 100, Details = "Bht acccha mobile hai", Price = 100000 },
                new Product { PCode = 102, Name = "SmartWatch", QtyInStock = 50, Details = "Accha hai", Price = 10000 },
                new Product { PCode = 103, Name = "Shoes", QtyInStock = 30, Details = "Sundar shoes sb hai", Price = 2000 },
                new Product { PCode = 104, Name = "EarPhones", QtyInStock = 60, Details = "wire , airpods sb kuch badhiya hai", Price = 3000 },
                new Product { PCode = 105, Name = "Fabric", QtyInStock = 300, Details = "Sundar Sasta Tikau", Price = 1000 }

            };
            ViewBag.Products = products;
            return View();
        }
        public IActionResult SingleProductDirect()
        {
            Product product = new Product
            {
                PCode = 200,
                Name = "Refrigerator",
                QtyInStock = 20,
                Details = "Comapny -Samsung",
                Price = 40000
            };
            return View(product);
        }
        public IActionResult MultipleProductsDirect()
        {
            List<Product> products = new List<Product>
            {
                new Product { PCode = 101, Name = "Mobile", QtyInStock = 100, Details = "Bht acccha mobile hai", Price = 100000 },
                new Product { PCode = 102, Name = "SmartWatch", QtyInStock = 50, Details = "Accha hai", Price = 10000 },
                new Product { PCode = 103, Name = "Shoes", QtyInStock = 30, Details = "Sundar shoes sb hai", Price = 2000 },
                new Product { PCode = 104, Name = "EarPhones", QtyInStock = 60, Details = "wire , airpods sb kuch badhiya hai", Price = 3000 },
                new Product { PCode = 105, Name = "Fabric", QtyInStock = 300, Details = "Sundar Sasta Tikau", Price = 1000 }

            };
            return View(products);
        }
    }
}
