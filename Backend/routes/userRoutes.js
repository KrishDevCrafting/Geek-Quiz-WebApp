const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");
// Controller functions
// const {
//   signupUser,
//   loginUser,
//   createUser,
// } = require("../controllers/userController");

// Login route
router.post("/login", userController.loginUser);
router.get("/getdata",userController.getUsers)
// Signup route
router.post("/signup", userController.signupUser);
router.post("/register", userController.createUser);
module.exports = router;

// Just for streak
