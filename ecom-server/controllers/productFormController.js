const ProductForm = require('../models/productFormModel');
const multer = require('multer');

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'upload/');
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' + file.originalname);
  },
});

const upload = multer({ storage: storage });

// Handler for creating a new product
const createProduct = async (req, res) => {
  try {
    const {
      productName,
      productDescription,
      occasion,
      primaryColor,
      material,
      borderType,
      colorFamily,
      fabric,
      secondaryColor,
      pattern,
      borderSize,
      type,
      review,
      starRating,
      mrp,
      sp,
    } = req.body;

    const productImages = req.files.map((file) => file.filename);

    const placeholderImages = [
      'placeholder-image-1.jpg',
      'placeholder-image-2.jpg',
      'placeholder-image-3.jpg',
    ];

    // Remove the placeholders from the array before inserting
    const imagesToInsert = productImages.filter(
      (image) => !placeholderImages.includes(image)
    );

    const newProductForm = new ProductForm({
      productName,
      productImages: imagesToInsert,
      productDescription,
      occasion,
      primaryColor,
      material,
      borderType,
      colorFamily,
      fabric,
      secondaryColor,
      pattern,
      borderSize,
      type,
      review,
      starRating: parseFloat(starRating),
      mrp: parseFloat(mrp),
      sp: parseFloat(sp),
    });

    const savedProduct = await newProductForm.save();

    res.status(201).json({ message: 'Product added successfully.', product: savedProduct });
  } catch (error) {
    console.error('Error creating product:', error);
    res.status(500).json({ error: 'Failed to add product.' });
  }
};

module.exports = {
  createProduct,
};

