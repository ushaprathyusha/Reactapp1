// routes/productRoutes.js
const express = require("express");
const router = express.Router();
const productController = require("../controllers/productFormBeController");

router.get("/products", productController.getProducts);
router.post("/products", productController.createProduct);

module.exports = router;
