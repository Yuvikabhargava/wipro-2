const { v4: uuidv4 } = require("uuid");

let employees = [
    { id: 1, name: "Prachi", address: "Noida", dept: "IT", manager: "ABC" },
    { id: 2, name: "Radha", address: "xyz", dept: "HR", manager: "DEF" }
];


const getEmployees = (req, res) => {
    res.json(employees);
};


const getEmployeeById = (req, res) => {
    const employeeId = Number(req.params.id); 
    const employee = employees.find(emp => emp.id === employeeId);
    
    if (!employee) {
        return res.status(404).json({ message: "Employee not found" });
    }

    res.json(employee);
};


const createEmployee = (req, res) => {
    const { name, address, dept, manager } = req.body;
    if (!name || !address || !dept || !manager) {
        return res.status(400).json({ message: "All fields are required" });
    }

    
    const newEmployee = { id: employees.length + 1, name, address, dept, manager };
    employees.push(newEmployee);
    res.status(201).json(newEmployee);
};


const updateEmployee = (req, res) => {
    const employeeId = Number(req.params.id);
    const index = employees.findIndex(emp => emp.id === employeeId);

    if (index === -1) {
        return res.status(404).json({ message: "Employee not found" });
    }

    employees[index] = { ...employees[index], ...req.body };
    res.json(employees[index]);
};


const deleteEmployee = (req, res) => {
    const employeeId = Number(req.params.id);
    const initialLength = employees.length;
    employees = employees.filter(emp => emp.id !== employeeId);

    if (employees.length === initialLength) {
        return res.status(404).json({ message: "Employee not found" });
    }

    res.json({ message: "Employee deleted successfully" });
};

module.exports = { getEmployees, getEmployeeById, createEmployee, updateEmployee, deleteEmployee };
