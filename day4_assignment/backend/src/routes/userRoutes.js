const express = require("express");
const { registerUser, loginUser, getUserProfile, getUsers, deleteUser } = require("../controllers/userController");
const { protect, admin } = require("../middleware/authMiddleware");

const router = express.Router();

/**
 * @route POST /api/users/register
 * @desc Register a new user
 * @access Public
 */
router.post("/register", registerUser);

/**
 * @route POST /api/users/login
 * @desc Authenticate user and get token
 * @access Public
 */
router.post("/login", loginUser);

/**
 * @route GET /api/users/profile
 * @desc Get user profile
 * @access Private (Logged-in users only)
 */
router.get("/profile", protect, getUserProfile);

/**
 * @route GET /api/users
 * @desc Get all users (Admin only)
 * @access Private (Admin)
 */
router.get("/", protect, admin, getUsers);

/**
 * @route DELETE /api/users/:id
 * @desc Delete a user (Admin only)
 * @access Private (Admin)
 */
router.delete("/:id", protect, admin, deleteUser);

module.exports = router;
