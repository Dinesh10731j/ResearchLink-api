const LikeModel = require("../models/like.model");
const DisLikeModel = require("../models/dislike.model");
const UploadResearchPaperModel = require("../models/uploadpaper.model"); // Assuming you have a model for research papers

const UserDisLikes = async (req, res) => {
  try {
    const { userid, dislike } = req.body;

    // Check if the user already disliked the research paper
    const existingDislike = await DisLikeModel.findOne({ userid, likeid: dislike });
    if (existingDislike) {
      return res.status(400).json({
        msg: "You already disliked this research paper",
        success: false,
      });
    }

    // Remove like if it exists
    await LikeModel.findOneAndDelete({ userid, likeid: dislike });

    // Create a new dislike
    const userDislike = await DisLikeModel.create({ userid, likeid: dislike });

    // Increment the dislike count on the research paper
    await UploadResearchPaperModel.findByIdAndUpdate(dislike, { $inc: { dislikeCount: 1 } });

    // Get the updated total number of dislikes for the research paper
    const researchPaper = await UploadResearchPaperModel.findById(dislike);
    const totalDislikes = researchPaper.dislikeCount;

    res.status(201).json({
      msg: "Disliked successfully",
      success: true,
      data: userDislike,
      totalduslikes:totalDislikes, // Include the total dislikes in the response
    });
  } catch (err) {
    res.status(500).json({
      msg: "Internal server error",
      error: err.message,
      success: false,
    });
  }
};

module.exports = UserDisLikes;
