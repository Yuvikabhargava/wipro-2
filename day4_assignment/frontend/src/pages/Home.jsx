import { useState, useEffect } from "react";
import axios from "axios";
import TaskList from "../components/TaskList";
import TaskForm from "../components/TaskForm";
import { Container } from "react-bootstrap";

export default function Home() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    axios.get("/api/tasks").then((res) => setTasks(res.data));
  }, []);

  return (
    <Container>
      <h2 className="my-4">Team Member Dashboard</h2>
      <TaskForm setTasks={setTasks} />
      <TaskList tasks={tasks} setTasks={setTasks} />
    </Container>
  );
}
