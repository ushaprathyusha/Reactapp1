const Razorpay = require("razorpay");
const crypto = require("crypto");
const Payment = require("../models/payment1Model");
const Cart = require("../models/CartModel");

const instance = new Razorpay({
  key_id: process.env.RAZORPAY_API_KEY,
  key_secret: process.env.RAZORPAY_APT_SECRET,
});

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

    res.status(200).json({ message: "Product added to cart." });
  } catch (error) {
    console.error("Error adding to cart:", error);
    res.status(500).json({ error: "Failed to add product to cart." });
  }
};

// Controller for fetching the user's cart
const getCart = async (req, res) => {
  const userId = req.params.userId;

  try {
    const cartItems = await Cart.find({ userId }).populate("productId");

    res.status(200).json(cartItems);
  } catch (error) {
    console.error("Error fetching cart:", error);
    res.status(500).json({ error: "Failed to fetch cart items." });
  }
};

// Other controllers related to Razorpay can be added here

module.exports = {
  addToCart,
  getCart,
  // Add other Razorpay-related controllers here
};
