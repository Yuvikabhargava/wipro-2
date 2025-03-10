import { useEffect, useState } from "react";
import axios from "axios";

export default function Admin() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/api/tasks") // 🔹 Ensure correct API URL
      .then((res) => {
        if (Array.isArray(res.data)) {
          setTasks(res.data);
        } else {
          setTasks([]); // 🔹 Fallback if response isn't an array
        }
      })
      .catch((error) => {
        console.error("Error fetching tasks:", error);
        setTasks([]); // 🔹 Prevent .map() error by setting an empty array
      });
  }, []);

  return (
    <div>
      <h3>Task List</h3>
      <ul>
        {tasks.length > 0 ? (
          tasks.map((task) => <li key={task.id}>{task.title}</li>)
        ) : (
          <p>No tasks available</p>
        )}
      </ul>
    </div>
  );
}
