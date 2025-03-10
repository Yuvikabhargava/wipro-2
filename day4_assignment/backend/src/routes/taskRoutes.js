const express = require("express");
const { getTasks, createTask, updateTask, deleteTask } = require("../controllers/taskController");
const { protect, admin } = require("../middleware/authMiddleware");

const router = express.Router();

router.get("/", protect, admin, getTasks);  // Only Admin can see all tasks
router.post("/", protect, createTask);  // Team members can create tasks
router.put("/:id", protect, updateTask);  // Assigned user/Admin can update
router.delete("/:id", protect, deleteTask);  // Assigned user/Admin can delete

module.exports = router;
