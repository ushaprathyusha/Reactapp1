const Product = require('../models/productModel');

// Create a new product
const createProduct = async (req, res) => {
  try {
    const {
      productName,
      productImages,
      productDescription,
      // ... (other fields)
    } = req.body;

    const newProduct = new Product({
      productName,
      productImages,
      productDescription,
      // ... (other fields)
    });

    const savedProduct = await newProduct.save();

    res.status(201).json(savedProduct);
  } catch (error) {
    console.error('Error creating product:', error);
    res.status(500).json({ error: 'Failed to create product.' });
  }
};

// Get a product by ID
const getProductById = async (req, res) => {
  try {
    const { productId } = req.params;
    const product = await Product.findById(productId);

    if (!product) {
      return res.status(404).json({ error: 'Product not found.' });
    }

    res.status(200).json(product);
  } catch (error) {
    console.error('Error fetching product:', error);
    res.status(500).json({ error: 'Failed to fetch product.' });
  }
};

module.exports = {
  createProduct,
  getProductById,
};
