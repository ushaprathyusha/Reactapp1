const express = require('express');
const router = express.Router();
const cartController = require('../controllers/CartController');

// API endpoint to add products to the cart
router.post('/add', cartController.addToCart);

// API endpoint to fetch the user's cart
router.get('/:userId', cartController.getCart);

module.exports = router;
