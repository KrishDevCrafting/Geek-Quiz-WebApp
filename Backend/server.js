const express = require("express");
const mongoose = require("mongoose");
// Express App
const app = express();

const userModules = require("./modules/userModel");
require("dotenv").config();
app.get("/", (req, res) => {
  res.send("Quiz-App-Server is Running!");
});
// Listen for Server
app.listen(process.env.PORT, () => {
  console.log("Example app listening on port", process.env.PORT);
});

// MongoDB connection URI
const mongoURI="mongodb+srv://krishgeek777:hacker7750@krish001.shs51el.mongodb.net/?retryWrites=true&w=majority&appName=Krish001";
mongoose
  .connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log(err));
