import { useSelector, useDispatch } from "react-redux";
import { addTask } from "../redux/actions";
import TaskItem from "./TaskItem";

const TaskList = () => {
  const tasks = useSelector(state => state.tasks);
  const dispatch = useDispatch();

  const handleAddTask = () => {
    const taskText = prompt("Enter task:");
    if (taskText) {
      dispatch(addTask(taskText));
    }
  };

  return (
    <div>
      <button onClick={handleAddTask}>Add Task</button>
      <ul>
        {tasks.map(task => (
          <TaskItem key={task.id} task={task} />
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
