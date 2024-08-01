const mongoose = require('mongoose');
const UploadResearchPaperModel = require("../models/uploadpaper.model");

const UserActivities = async (req, res) => {
  try {
    const { userid } = req.params;
    console.log('Received request for userid:', userid);

    // Validate and convert userid to ObjectId
    if (!mongoose.Types.ObjectId.isValid(userid)) {
      return res.status(400).json({ msg: "Invalid user ID format" });
    }
    const objectId = new mongoose.Schema.ObjectId(userid);

    const activities = await UploadResearchPaperModel.find({ userId: objectId });
    if (activities.length === 0) {
      console.log('No activities found for userid:', userid);
      return res.status(400).json({ msg: "User activities not found" });
    }

    console.log('Activities found for userid:', userid, activities);
    return res.status(200).json({
      msg: "User activities fetched successfully",
      data: activities,
      success: true,
    });
  } catch (err) {
    console.error('Error fetching activities:', err);
    return res.status(500).json({ msg: "Internal server error", error: err.message });
  }
};

module.exports = UserActivities;
