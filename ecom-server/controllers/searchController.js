// controllers/ProductController.js
const searchModel = require('../models/searchModel');

const searchProducts = async (req, res) => {
  const { query } = req.query;

  try {
    // Use the searchModel to search for products
    const searchResults = await searchModel.find({
      $or: [
        { productName: { $regex: query, $options: 'i' } },
        { category: { $regex: query, $options: 'i' } },
      ],
    });

    res.json(searchResults);
  } catch (error) {
    console.error('Error searching products:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

module.exports = {
  searchProducts,
};
