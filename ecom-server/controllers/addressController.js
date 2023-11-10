const Address = require('../models/addressModel');

// Controller for adding an address
const addAddress = async (req, res) => {
  const {
    fullName,
    mobileNumber,
    addressLine,
    area,
    town,
    state,
    country,
    pincode,
    isDefaultAddress
  } = req.body;

  try {
    const address = new Address({
      fullName,
      mobileNumber,
      addressLine,
      area,
      town,
      state,
      country,
      pincode,
      isDefaultAddress
    });

    const savedAddress = await address.save();

    res.status(201).json({ message: 'Address added successfully.', address: savedAddress });
  } catch (error) {
    console.error('Error adding address:', error);
    res.status(500).json({ error: 'Failed to add address.' });
  }
};

// Controller for fetching user's addresses
const getAddresses = async (req, res) => {
  try {
    const addresses = await Address.find();

    res.status(200).json(addresses);
  } catch (error) {
    console.error('Error fetching addresses:', error);
    res.status(500).json({ error: 'Failed to fetch addresses.' });
  }
};

module.exports = {
  addAddress,
  getAddresses,
};
