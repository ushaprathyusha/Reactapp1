// routes/reviewRoutes.js
const express = require('express');
const router = express.Router();
const reviewController = require('../controllers/productReviewsController');

// Route to get reviews
router.get('/reviews', reviewController.getReviews);

// Route to create a new review
router.post('/reviews', reviewController.createReview);

// Route to update review likes/dislikes
router.post('/reviews/:reviewId/:action', reviewController.updateReviewLikes);

module.exports = router;
