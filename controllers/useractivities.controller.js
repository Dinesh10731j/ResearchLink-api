const UploadResearchPaperModel = require("../models/uploadpaper.model");
const UserActivities = async (req, res) => {
  try {
    const { userid } = req.params;
 

    const Activities = await UploadResearchPaperModel.find({userId:userid})
  
    if (Activities.length === 0) {
      return res.status(400).json({ msg: "User activities not found" });
    }

    return res
      .send(200)
      .json({
        msg: "User activities fetch successfully",
        data: Activities,
        success: true,
      });
  } catch (err) {
    return res
      .status(500)
      .json({ msg: "Internal server error", error: err.message });
  }
};

module.exports = UserActivities;
