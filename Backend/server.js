const express = require("express");
const app = express();
const port = 8000;
const userModules = require("./modules/userModel")
app.get("/", (req, res) => {
  res.send("Quiz-App-Server is Running!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

const mongoose = require('mongoose');

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb+srv://krishgeek777:hacker7750@krish001.shs51el.mongodb.net/?retryWrites=true&w=majority&appName=Krish001');

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}





