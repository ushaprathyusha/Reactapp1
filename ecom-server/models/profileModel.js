// models/profileModel.js
const mongoose = require('mongoose');

const profileSchema = new mongoose.Schema({
  profilename: String,
  // Add other profile properties here
});

const profile = mongoose.model('profile', profileSchema);

module.exports = profile;
