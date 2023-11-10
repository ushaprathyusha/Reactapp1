// models/Product.js
const mongoose = require('mongoose');

const productListSchema = new mongoose.Schema({
  productName: String,
  productImage: String, // Change to store a single image path
  // ... (other fields)
});

const ProductList = mongoose.model('Product', productListSchema);

module.exports = ProductList;
