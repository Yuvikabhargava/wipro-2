import { configureStore } from "@reduxjs/toolkit";
import taskReducer from "./taskSlice";

const store = configureStore({
  reducer: {
    taskState: taskReducer, // ✅ Updated key to "taskState" to match slice structure
  },
});

export default store;
