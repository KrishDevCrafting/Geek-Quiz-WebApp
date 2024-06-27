// Require Mongoose
const mongoose = require('mongoose');

// Define the schema
const userSchema = new mongoose.Schema({
  name: {
    type: String,        // Data type for name is a string
    required: true       // The name field is required
  },
  email: {
    type: String,        // Data type for email is a string
    required: true,      // The email field is required
    unique: true         // The email field must be unique
  },
  password: {
    type: String,        // Data type for password is a string
    required: true       // The password field is required
  }
});

// Create the model
const User = mongoose.model('User', userSchema);

// Export the model
module.exports = User;
