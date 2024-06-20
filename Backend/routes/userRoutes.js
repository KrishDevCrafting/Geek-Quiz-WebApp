const express = require("express");
const router = express.Router();
const { createUser } = require("../controllers/userController");
const User = require("../modules/userModel");

// @route   GET api/users
// @desc    Get all users
// @access  Public
router.get("/", async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// @route   POST api/users
// @desc    Create a user
// @access  Public
router.post("/", createUser);

module.exports = router;
