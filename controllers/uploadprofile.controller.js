const UploadProfileModel = require('../models/uploadprofile.model');

const UploadProfile = async (req, res) => {
  try {
    const { profile } = req.body;

    const UserProfile = await UploadProfileModel.create({ profile });

    res.status(201).json({ msg: 'User profile uploaded successfully', data: UserProfile, success: true });
  } catch (err) {
    res.status(500).json({ msg: 'Internal server error', success: false, error: err.message });
  }
};

module.exports = UploadProfile;
