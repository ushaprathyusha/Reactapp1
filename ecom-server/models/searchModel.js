// models/ProductModel.js
const mongoose = require('mongoose');

const searchSchema = new mongoose.Schema({
  productName: String,
  category: String,
  // Add more fields as needed
});

const searchModel = mongoose.model('search', searchSchema);

module.exports = searchModel;
