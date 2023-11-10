// routes/userRoutes.js
const express = require('express');
const userController = require('../controllers/RegisterController');
const router = express.Router();

// Define the route for user registration
router.post('/register', userController.registerUser);

module.exports = router;
