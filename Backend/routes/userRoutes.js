const express = require("express");
const router = express.Router();

// Controller functions
const {
  signupUser,
  loginUser,
  createUser,
} = require("../controllers/userController");

// Login route
router.post("/login", loginUser);

// Signup route
router.post("/signup", signupUser);
router.post("/register", createUser);
module.exports = router;

// Just for streak
