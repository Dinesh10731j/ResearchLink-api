const UploadResearchPaperModel = require("../models/uploadpaper.model");
const deleteActivity = async (req, res) => {
  try {
    const { activityId } = req.params;

    if (!activityId) {
      return res
        .status(400)
        .json({ msg: "ActivityId is missing", success: false });
    }

    const deletedActivity = await UploadResearchPaperModel.findByIdAndDelete(
      activityId
    );

    if (!deletedActivity) {
      return res
        .status(404)
        .json({ msg: "Delete activity not found", success: false });
    }

    res
      .status(200)
      .json({ msg: "Activity deleted successfully", success: true });
  } catch (err) {
    res
      .status(500)
      .json({
        msg: "Internal server error",
        success: false,
        error: err?.message,
      });
  }
};

module.exports = deleteActivity;
