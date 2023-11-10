const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController'); // Update the controller import

// Define the route for user login
router.post('/login', authController.login);

module.exports = router;
