// models/Payment.js
const mongoose = require("mongoose");

const PaymentSchema = new mongoose.Schema({
  orderId: String,
  amount: Number,
});

const Payment = mongoose.model("Payment", PaymentSchema);

module.exports = Payment;
