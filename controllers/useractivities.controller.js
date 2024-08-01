
const UploadResearchPaperModel = require("../models/uploadpaper.model");

const UserActivities = async (req, res) => {
  try {
    const { userid } = req.params;


    const activities = await UploadResearchPaperModel.findOne({userId:userid});
    if (activities.length === 0) {

      return res.status(400).json({ msg: "User activities not found" });
    }

  
    return res.status(200).json({
      msg: "User activities fetched successfully",
      data: activities,
      success: true,
    });
  } catch (err) {
  
    return res.status(500).json({ msg: "Internal server error", error: err.message });
  }
};

module.exports = UserActivities;
