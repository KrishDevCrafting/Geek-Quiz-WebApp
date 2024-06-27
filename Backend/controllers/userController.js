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
      return res.status(400).send({ message: "Invalid email or password" });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).send({ message: "Invalid email or password" });
    }

    res.status(200).send({ message: "Login successful", user });
  } catch (error) {
    res.status(500).send({ message: "Server error", error });
  }
};

// Signup User
const signupUser = async (req, res) => {
  res.json({
    messg: "signup user",
  });
};

module.exports = { signupUser, loginUser, createUser };
