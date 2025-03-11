import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { editTask } from "../Store/taskSlice";
import { useNavigate, useParams } from "react-router-dom";

const EditTask = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // ✅ Ensure state.taskState.tasks is an array
  const task = useSelector((state) =>
    state.taskState.tasks.find((t) => t.Taskid === id)
  );

  const [updatedTask, setUpdatedTask] = useState(task || {
    Taskid: "",
    TaskName: "",
    Description: "",
    Date: "",
    CreatedByUser: "",
  });

  if (!task) {
    return <p>Task not found</p>;
  }

  const handleChange = (e) => {
    setUpdatedTask({ ...updatedTask, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(editTask(updatedTask));
    navigate("/");
  };

  return (
    <div>
      <h2>Edit Task</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="TaskName" value={updatedTask.TaskName} onChange={handleChange} required />
        <input type="text" name="Description" value={updatedTask.Description} onChange={handleChange} required />
        <input type="date" name="Date" value={updatedTask.Date} onChange={handleChange} required />
        <input type="text" name="CreatedByUser" value={updatedTask.CreatedByUser} onChange={handleChange} required />
        <button type="submit">Update Task</button>
      </form>
    </div>
  );
};

export default EditTask;
