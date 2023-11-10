// controllers/productController.js
const ProductFormBe = require("../models/productFormBeModel");

exports.getProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (error) {
    res.status(500).json({ error: "Failed to retrieve products" });
  }
};

exports.createProduct = async (req, res) => {
  const { name, description, price } = req.body;
  const newProductFromBe = new ProductFormBe({ name, description, price });

  try {
    const savedProduct = await newProductFromBe.save();
    res.status(201).json(savedProduct);
  } catch (error) {
    res.status(500).json({ error: "Failed to create a product" });
  }
};
