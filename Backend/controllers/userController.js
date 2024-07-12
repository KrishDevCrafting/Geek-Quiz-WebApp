const User = require("../models/userModel");
const bcrypt = require("bcrypt");

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
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) {
      console.log("User not found:", email);
      return res.status(400).send({ message: "Invalid email or password" });
    }

    if (password !== user.password) {
      console.log("Password mismatch for user:", email);
      return res.status(400).send({ message: "Invalid email or password" });
    }

    res.status(200).send({ message: "Login successful", user });
    console.log(user);
  } catch (error) {
    console.error("Error during login:", error);
    res.status(500).send({ message: "Server error", error });
  }
};
// Signup User
const signupUser = async (req, res) => {
  res.json({
    messg: "signup user",
  });
};

//get all User data
const getUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).send(users);
  } catch (err) {
    res.status(500).send({
      message: "error Fetching the Users",
      err,
    });
  }
};

module.exports = { signupUser, loginUser, createUser, getUsers };
