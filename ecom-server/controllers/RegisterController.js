// controllers/UserController.js
const RegisterModel = require('../models/RegisterModel');
const bcrypt = require('bcrypt');
const SALT_ROUNDS = 10;

const registerUser = async (req, res) => {
  const { username, email, contact, address, password } = req.body;

  try {
    // Hash the password using bcrypt
    const hashedPassword = await bcrypt.hash(password, SALT_ROUNDS);

    // Create a new user document
    const Register = new RegisterModel({
      username,
      email,
      contact,
      address,
      password: hashedPassword,
    });

    // Save the user to the database
    await Register.save();

    res.status(201).json({ message: 'Registration successful.' });
  } catch (error) {
    console.error('Error registering user:', error);
    res.status(500).json({ error: 'Failed to register.' });
  }
};

module.exports = {
  registerUser,
};
