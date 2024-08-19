const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

// Importing userController for handling user operations
// const userController = require("./controllers/userController");
const userRoutes = require("./routes/userRoutes");
const userQuiz = require("./routes/QuizRouter");
// Express App
const app = express();

// Middleware
app.use(cors()); // Enable CORS for all routes
app.use(express.json()); // Middleware to parse JSON

// Routes
app.use("/user", userRoutes);
app.use("/user", userQuiz);
// Example test route

// app.post("/register", userController.createUser); // Handle user registration
// app.post("/login", userController.loginUser); // Handle user login

// Default route
app.get("/", (req, res) => {
  res.send("Quiz-App-Server is Running!");
});

// MongoDB Connection
mongoose
  .connect(process.env.MONGODB_URL, {})
  .then(() => {
    console.log("Connected to MongoDB");

    // Start the server
    const port = process.env.PORT || 3000;
    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error.message);
  });
