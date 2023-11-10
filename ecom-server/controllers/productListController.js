// controllers/productController.js
const ProductList = require('../models/productModel');

// Controller function to insert a product
const insertProduct = async (req, res) => {
  try {
    const { productName } = req.body;
    const productImage = req.file.filename; // Get the uploaded image filename

    // Create a new product document
    const newProduct = new ProductList({
      productName,
      productImage,
    });

    // Save the product to the database
    await newProduct.save();

    res.status(201).json({ message: 'Product added successfully.' });
  } catch (error) {
    console.error('Error inserting product:', error);
    res.status(500).json({ error: 'Failed to add product.' });
  }
};

module.exports = {
  insertProduct,
};
