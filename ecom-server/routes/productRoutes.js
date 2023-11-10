const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');

// Create a new product
router.post('/products', productController.createProduct);

// Get a product by ID
router.get('/products/:productId', productController.getProductById);

module.exports = router;
