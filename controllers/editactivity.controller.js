const UploadResearchPaperModel = require("../models/uploadpaper.model");

const editActivity = async (req, res) => {
  try {
    const { activityId, description, title } = req.body;

 
    if (!activityId || !description || !title) {
      return res.status(400).json({
        msg: "ActivityId, Description, and Title are required.",
        success: false,
      });
    }


    const editedData = await UploadResearchPaperModel.findByIdAndUpdate(
      activityId,
      { title, description },
      { new: true }
    );


    if (!editedData) {
      return res.status(404).json({
        msg: "Activity not found",
        success: false,
      });
    }

  
    return res.status(200).json({
      msg: "Activity edited successfully",
      success: true,
     
    });

  } catch (err) {
   
    return res.status(500).json({
      msg: "Internal server error",
      success: false,
      error: err?.message,
    });
  }
};



module.exports = editActivity;
