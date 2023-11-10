const mongoose = require('mongoose');

const productFormBeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  description: String,
  productImages: [{ type: String }],
});

const ProductFormBe = mongoose.model('ProductForBe', productFormBeSchema);

module.exports = ProductFormBe;
