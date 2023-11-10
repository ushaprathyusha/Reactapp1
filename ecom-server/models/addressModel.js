const mongoose = require('mongoose');

const addressSchema = new mongoose.Schema({
  fullName: { type: String, required: true },
  mobileNumber: { type: String, required: true },
  addressLine: { type: String, required: true },
  area: { type: String, required: true },
  town: { type: String, required: true },
  state: { type: String, required: true },
  country: { type: String, required: true },
  pincode: { type: String, required: true },
  isDefaultAddress: { type: Boolean, default: false },
});

const Address = mongoose.model('Address', addressSchema);

module.exports = Address;

