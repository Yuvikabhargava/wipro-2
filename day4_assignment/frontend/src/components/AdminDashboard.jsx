import { useEffect, useState } from "react";
import axios from "axios";
import { Table, Button, Container } from "react-bootstrap";

export default function AdminDashboard() {
  const [tasks, setTasks] = useState([]);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get("/api/tasks").then((res) => setTasks(res.data));
    axios.get("/api/users").then((res) => setUsers(res.data));
  }, []);

  const assignTask = async (taskId, userId) => {
    await axios.put(`/api/tasks/${taskId}/assign`, { userId });
    alert("Task Assigned Successfully!");
  };

  const removeUser = async (userId) => {
    await axios.delete(`/api/users/${userId}`);
    setUsers((prev) => prev.filter((user) => user.id !== userId));
    alert("User Removed!");
  };

  return (
    <Container>
      <h2 className="my-4">Admin Dashboard</h2>

      {/* Task List */}
      <h4>Tasks</h4>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Task</th>
            <th>Assigned User</th>
            <th>Assign</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((task) => (
            <tr key={task.id}>
              <td>{task.title}</td>
              <td>{task.assignedTo || "Not Assigned"}</td>
              <td>
                <select onChange={(e) => assignTask(task.id, e.target.value)}>
                  <option>Select User</option>
                  {users.map((user) => (
                    <option key={user.id} value={user.id}>
                      {user.name}
                    </option>
                  ))}
                </select>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      {/* User List */}
      <h4>Users</h4>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Remove</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>
                <Button variant="danger" onClick={() => removeUser(user.id)}>
                  Remove
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
}
