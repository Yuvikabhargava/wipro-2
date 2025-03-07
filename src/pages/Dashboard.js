import { useDispatch, useSelector } from "react-redux";
import { addTask, deleteTask } from "../redux/actions";
import { useState } from "react";

const Dashboard = () => {
  const dispatch = useDispatch();
  const tasks = useSelector((state) => state.tasks);
  const [taskText, setTaskText] = useState("");

  const handleAddTask = () => {
    if (taskText.trim() !== "") {
      dispatch(addTask({ id: Date.now(), text: taskText }));
      setTaskText("");
    }
  };

  return (
    <div>
      <h2>Task Dashboard</h2>
      <input value={taskText} onChange={(e) => setTaskText(e.target.value)} placeholder="New Task" />
      <button onClick={handleAddTask}>Add Task</button>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            {task.text} <button onClick={() => dispatch(deleteTask(task.id))}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Dashboard;
