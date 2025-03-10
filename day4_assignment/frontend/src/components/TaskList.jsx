import { useEffect, useState } from "react";
import axios from "axios";

export default function TaskList() {
  const [tasks, setTasks] = useState([]); // ✅ Ensure `tasks` starts as an empty array

  useEffect(() => {
    axios.get("/api/tasks")
      .then((res) => {
        if (Array.isArray(res.data)) {
          setTasks(res.data);
        } else {
          setTasks([]); // ✅ Fallback to empty array if data is not an array
        }
      })
      .catch((error) => {
        console.error("Error fetching tasks:", error);
        setTasks([]); // ✅ Handle errors by setting an empty array
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
