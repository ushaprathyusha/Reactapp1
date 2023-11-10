// routes/productRoutes.js
const express = require('express');
const productController = require('../controllers/searchController');
const router = express.Router();

// Define the route for searching products
router.get('/search', productController.searchProducts);

module.exports = router;
