const User = require("../models/userModel");

// Create the Users
const createUser = async (req, res) => {
  const { name, email, password } = req.body;
  try {
    const user = new User({ name, email, password });
    await user.save();
    res.status(201).send({
      message: "User created successfully",
      user,
    });
  } catch (error) {
    res.status(400).send({
      message: "error creating user",
      error,
    });
  }
};

// Login User
const loginUser = async (req, res) => {
  res.json({
    mess: "login user",
  });
};

// Signup User
const signupUser = async (req, res) => {
  res.json({
    messg: "signup user",
  });
};

module.exports = { signupUser, loginUser, createUser };
