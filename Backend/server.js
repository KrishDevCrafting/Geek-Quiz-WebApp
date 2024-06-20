const express = require("express");
const mongoose = require("mongoose")
const app = express();
const port = 8000;
const userModules = require("./modules/userModel")
app.get("/", (req, res) => {
  res.send("Quiz-App-Server is Running!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

// MongoDB connection URI
const mongoURI = 'mongodb+srv://krishgeek777:hacker7750@krish001.shs51el.mongodb.net/?retryWrites=true&w=majority&appName=Krish001';

mongoose.connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log('MongoDB connected'))
.catch(err => console.log(err));




