const Cart = require('../models/CartModel');

// Controller for adding products to the cart
const addToCart = async (req, res) => {
  const { userId, productId, quantity } = req.body;

  try {
    let cartItem = await Cart.findOne({ userId, productId });

    if (cartItem) {
      cartItem.quantity += quantity;
    } else {
      cartItem = new Cart({ userId, productId, quantity });
    }

    await cartItem.save();

    res.status(200).json({ message: 'Product added to cart.' });
  } catch (error) {
    console.error('Error adding to cart:', error);
    res.status(500).json({ error: 'Failed to add product to cart.' });
  }
};

// Controller for fetching the user's cart
const getCart = async (req, res) => {
  const userId = req.params.userId;

  try {
    const cartItems = await Cart.find({ userId }).populate('productId');

    res.status(200).json(cartItems);
  } catch (error) {
    console.error('Error fetching cart:', error);
    res.status(500).json({ error: 'Failed to fetch cart items.' });
  }
};

module.exports = {
  addToCart,
  getCart,
};
