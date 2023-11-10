const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  productName: String,
  productImages: [String],
  productDescription: String,
  // ... (other fields)
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
