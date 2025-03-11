using Microsoft.AspNetCore.Mvc;
using p2_day8_assignment.Models;
using System.Linq;

namespace p2_day8_assignment.Controllers
{
    public class EmployeeController : Controller
    {
        private readonly AppDbContext _context;

        public EmployeeController(AppDbContext context)
        {
            _context = context;
        }

        
        public IActionResult Index()
        {
            var employees = _context.Employees.ToList();
            return View(employees);
        }

        
        public IActionResult Create()
        {
            return View();
        }

        
        [HttpPost]
        public IActionResult Create(Employee employee)
        {
            if (ModelState.IsValid)
            {
                _context.Employees.Add(employee);
                _context.SaveChanges();
                return RedirectToAction("Index");  /
            }
            return View(employee);
        }

        
        public IActionResult Edit(int id)
        {
            var employee = _context.Employees.FirstOrDefault(x => x.ID == id);
            if (employee == null)
            {
                return NotFound();
            }
            return View(employee);
        }

        
        [HttpPost]
        public IActionResult Edit(int id, Employee employee)
        {
            var existingEmployee = _context.Employees.FirstOrDefault(x => x.ID == id);
            if (existingEmployee == null)
            {
                return NotFound();
            }

            existingEmployee.Name = employee.Name;
            existingEmployee.Salary = employee.Salary;
            existingEmployee.DateOfBirth = employee.DateOfBirth;
            existingEmployee.DateOfJoining = employee.DateOfJoining;
            

            _context.SaveChanges();
            return RedirectToAction("Index"); 
        }

        
        public IActionResult Delete(int id)
        {
            var employee = _context.Employees.FirstOrDefault(x => x.ID == id);
            if (employee == null)
            {
                return NotFound();
            }
            return View(employee);
        }

        [HttpPost]
        public IActionResult DeleteConfirmed(int id)
        {
            var employee = _context.Employees.FirstOrDefault(x => x.ID == id);
            if (employee == null)
            {
                return NotFound();
            }

            _context.Employees.Remove(employee);
            _context.SaveChanges();
            return RedirectToAction("Index"); 
        }
    }
}



