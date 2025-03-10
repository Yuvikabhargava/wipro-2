import { useState } from "react";
import axios from "axios";

export default function TaskForm({ onTaskAdded }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevents page refresh

    if (!title || !description) {
      alert("Please enter title and description.");
      return;
    }

    try {
      const response = await axios.post("http://localhost:5000/api/tasks", {
        title,
        description,
      });

      if (response.status === 201) {
        alert("Task added successfully!");
        setTitle("");
        setDescription("");
        onTaskAdded(); // Refresh the task list
      }
    } catch (error) {
      console.error("Error adding task:", error);
      alert("Failed to add task.");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Task Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="text"
        placeholder="Task Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button type="submit">Add Task</button>
    </form>
  );
}
