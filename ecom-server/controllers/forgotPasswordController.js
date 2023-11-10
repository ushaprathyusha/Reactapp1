const forgotPasswordModel = require('../models/forgotPasswordModel');

// Controller for adding a new password and confirming it
const insertPassword = async (req, res) => {
  const { newpassword, confirmpassword } = req.body;

  try {
    const result = await forgotPasswordModel.insertData(newpassword, confirmpassword);
    res.status(201).json({ message: 'Password inserted successfully.', insertedId: result.insertedId });
  } catch (error) {
    console.error('Error inserting password:', error);
    res.status(500).json({ error: 'Failed to insert password.' });
  }
};

module.exports = {
  insertPassword,
};
