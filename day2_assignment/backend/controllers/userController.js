let users = [
    { id: 1, name: "ABC", address: "XY", dept: "HR", manager: "Shyam" },
    { id: 2, name: "DEF", address: "ZA", dept: "IT", manager: "Ram" }
];

exports.getUsers = (req, res) => {
    res.json(users);
};

exports.addUser = (req, res) => {
    const newUser = { id: users.length + 1, ...req.body };
    users.push(newUser);
    res.json(newUser);
};
