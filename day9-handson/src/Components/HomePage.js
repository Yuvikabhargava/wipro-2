import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const HomePage = () => {
  const tasks = useSelector((state) => state.taskState.tasks); // ✅ Updated state access

  return (
    <div>
      <h2>Task List</h2>
      <Link to="/add">Add New Task</Link>
      <table border="1">
        <thead>
          <tr>
            <th>Task ID</th>
            <th>Task Name</th>
            <th>Description</th>
            <th>Date</th>
            <th>Created By</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((task) => (
            <tr key={task.Taskid}>
              <td>{task.Taskid}</td>
              <td>{task.TaskName}</td>
              <td>{task.Description}</td>
              <td>{task.Date}</td>
              <td>{task.CreatedByUser}</td>
              <td>
                <Link to={`/edit/${task.Taskid}`}>Edit</Link> | 
                <Link to={`/delete/${task.Taskid}`}>Delete</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default HomePage;


