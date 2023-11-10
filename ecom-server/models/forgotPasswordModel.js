const mongoose = require('mongoose');

const forgotPasswordSchema = new mongoose.Schema({
  newpassword: { type: String, required: true },
  confirmpassword: { type: String, required: true },
});

const ForgotPassword = mongoose.model('ForgotPassword', forgotPasswordSchema);

module.exports = ForgotPassword;
