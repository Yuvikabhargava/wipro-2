import { createSlice } from "@reduxjs/toolkit";

const initialState = { tasks: [] }; // ✅ Ensure state is an object with a "tasks" array

const taskSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    addTask: (state, action) => {
      console.log("Adding Task:", action.payload);
      state.tasks.push(action.payload);
    },
    editTask: (state, action) => {
      console.log("Editing Task:", action.payload);
      state.tasks = state.tasks.map((task) =>
        task.Taskid === action.payload.Taskid ? action.payload : task
      );
    },
    deleteTask: (state, action) => {
      console.log("Deleting Task ID:", action.payload);
      state.tasks = state.tasks.filter((task) => task.Taskid !== action.payload);
    },
  },
});

export const { addTask, editTask, deleteTask } = taskSlice.actions;
export default taskSlice.reducer;


