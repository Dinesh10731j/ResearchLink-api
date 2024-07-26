const UserModel = require("../models/signup.model");

const Userdetails = async (req, res) => {
  const { userid } = req.params;
  try {
    // Populate the profile field in the user details
    const userdetails = await UserModel.findById(userid).populate('profile');

    if (!userdetails) {
      return res.status(404).json({ msg: 'User not found', success: false });
    }

    res.status(200).json({ msg: 'User details fetched successfully', success: true, data: userdetails });
  } catch (err) {
    res.status(500).json({ msg: 'Internal server error', success: false, error: err.message });
  }
};

module.exports = Userdetails;
