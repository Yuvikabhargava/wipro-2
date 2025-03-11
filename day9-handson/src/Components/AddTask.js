import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../Store/taskSlice";
import { useNavigate } from "react-router-dom";

const AddTask = () => {
  const [task, setTask] = useState({
    Taskid: "",
    TaskName: "",
    Description: "",
    Date: "",
    CreatedByUser: "",
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setTask({ ...task, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addTask(task));
    navigate("/");
  };

  return (
    <div>
      <h2>Add Task</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="Taskid" placeholder="Task ID" onChange={handleChange} required />
        <input type="text" name="TaskName" placeholder="Task Name" onChange={handleChange} required />
        <input type="text" name="Description" placeholder="Description" onChange={handleChange} required />
        <input type="date" name="Date" onChange={handleChange} required />
        <input type="text" name="CreatedByUser" placeholder="Created By" onChange={handleChange} required />
        <button type="submit">Add Task</button>
      </form>
    </div>
  );
};

export default AddTask;
