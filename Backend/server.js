const express = require("express");
const mongoose = require("mongoose");
// Express App
const app = express();
const cors  = require("cors")
const userModules = require("./modules/userModel");
require("dotenv").config();
app.get("/", (req, res) => {
  res.send("Quiz-App-Server is Running!");
});


// middleware 
// app.use((red,req,next)=>{
// console.log(req.path, req.method);
// next()
// })


// Middleware
app.use(express.json());
app.use(cors());


// MongoDB connection URI

mongoose.connect(process.env.MONGODB_URL) 
   .then(()=>{
    console.log('Connected to MongoDB');

// Listen for Server
app.listen(process.env.PORT, () => {
  console.log("Example app listening on port", process.env.PORT);
})
   })
.catch((error)=>{
console.log(error)



})
   
  

  
