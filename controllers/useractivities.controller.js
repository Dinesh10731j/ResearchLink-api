const mongoose = require("mongoose");
const UploadResearchPaperModel = require("../models/uploadpaper.model");

const UserActivities = async (req, res) => {
  try {
    const { userid } = req.params;
    console.log('Received userid:', userid); // Debug log

    // Validate and convert userid to ObjectId
    if (!mongoose.Types.ObjectId.isValid(userid)) {
      return res.status(400).json({ msg: "Invalid user ID format" });
    }

    const activities = await UploadResearchPaperModel.aggregate([
      {
        $match: {
          userId: new mongoose.Types.ObjectId(userid) // Convert userid to ObjectId
        }
      }
    ]);

    console.log('Fetched activities:', activities); // Debug log

    if (activities.length === 0) {
      return res.status(400).json({ msg: "User activities not found" });
    }

    return res.status(200).json({
      msg: "User activities fetched successfully",
      data: activities,
      success: true,
    });
  } catch (err) {
    console.error('Error:', err); // Debug log
    return res.status(500).json({ msg: "Internal server error", error: err.message });
  }
};

module.exports = UserActivities;
