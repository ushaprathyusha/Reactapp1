const express = require('express');
const profileController = require('../controllers/profileController');
const router = express.Router();

// Define the route to get a profile's profile
router.get('/profile', profileController.getprofileProfile);

module.exports = router;
