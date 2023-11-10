// routes/paymentRoutes.js
const express = require("express");
const router = express.Router();
const paymentController = require("../controllers/payment1Controller");

// Define your routes here, connecting them to the controller functions.
router.post("/create-order", paymentController.createOrder);
router.get("/get-payment-pref/:order_id", paymentController.getPaymentPreferences);

module.exports = router;
