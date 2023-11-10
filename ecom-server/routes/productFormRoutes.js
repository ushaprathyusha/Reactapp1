const express = require('express');
const router = express.Router();
const productController = require('../controllers/productFormController'); // Update the controller name if needed
const multer = require('multer'); // Import Multer

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/');
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' + file.originalname);
  },
});

const upload = multer({ storage: storage }); // Define Multer middleware

// Create a new product
router.post('/products', upload.array('productImages'), productController.createProduct);

module.exports = router;

