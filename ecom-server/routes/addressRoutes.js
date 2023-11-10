const express = require('express');
const router = express.Router();
const addressController = require('../controllers/addressController'); // Update the controller import

// API endpoint to add an address
router.post('/add', addressController.addAddress);

// API endpoint to fetch all addresses
router.get('/all', addressController.getAddresses);

module.exports = router;
