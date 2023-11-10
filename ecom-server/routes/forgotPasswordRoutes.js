const express = require('express');
const router = express.Router();
const forgotPasswordController = require('../controllers/forgotPasswordController'); // Update the controller import

// API endpoint to add a new password and confirm it
router.post('/insert', forgotPasswordController.insertPassword);

module.exports = router;
