const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    require: [true, "Name is import"],
    default: "name",
  },
  email: {
    type: String,
    require: [true, "Email is mandatory"],
    allownull: false,
  },
  password: {
    type: Number,
    require: [true, "Password is mandatory"],
    allownull: false,
  },
  gender: {
    type: String,
    require: [true, "Gender is required"],
    allownull: false,
  },
});

const user = mongoose.model("User", UserSchema);

module.exports = user;
