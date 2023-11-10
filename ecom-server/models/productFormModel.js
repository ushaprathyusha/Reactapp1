// models/Product.js
const mongoose = require("mongoose");

const productFormSchema = new mongoose.Schema({
  productName: String,
  productImages: [String],
  productDescription: String,
  occasion: String,
  primaryColor: String,
  material: String,
  borderType: String,
  colorFamily: String,
  fabric: String,
  secondaryColor: String,
  pattern: String,
  borderSize: String,
  type: String,
  review: String,
  starRating: Number,
  mrp: Number,
  sp: Number,
  // ... (other fields)
});

const ProductForm = mongoose.model("ProductForm", productFormSchema);

module.exports = ProductForm;
