const mongoose = require('mongoose');

// Define the user schema
const userSchema = new mongoose.Schema({
  email: { type: String, required: true },
  password: { type: String, required: true },
  // Add other user-related fields here
});

// Create a User model based on the user schema
const User = mongoose.model('User', userSchema);

module.exports = User;
