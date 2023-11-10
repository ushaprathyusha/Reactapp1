// controllers/profileController.js
const profile = require('../models/profileModel');

async function getprofileProfile(req, res) {
  try {
    const profile = await profile.findById(req.profileId);

    if (!profile) {
      return res.status(404).json({ error: 'profile not found' });
    }

    res.status(200).json({ profile });
  } catch (error) {
    console.error('Error fetching profile profile:', error);
    res.status(500).json({ error: 'Failed to fetch profile profile' });
  }
}

module.exports = { getprofileProfile };
