const LikeModel = require("../models/like.model");
const DisLikeModel = require("../models/dislike.model");
const UploadResearchPaperModel = require("../models/uploadpaper.model"); // Assuming you have a model for research papers

const UserLikes = async (req, res) => {
  try {
    const { userid, like } = req.body;

    const existingLike = await LikeModel.findOne({ userid, likeid: like });
    if (existingLike) {
      return res
        .status(400)
        .json({ msg: "You already liked this research paper", success: false });
    }

    // Remove dislike if it exists
    await DisLikeModel.findOneAndDelete({ userid, likeid: like });

    const userlike = await LikeModel.create({ userid, likeid: like });

    // Increment of like count on the research paper
    await UploadResearchPaperModel.findByIdAndUpdate(like, { $inc: { likeCount: 1 } });

   // updated total number of likes for the research paper
    const researchPaper = await UploadResearchPaperModel.findById(like);
    const totalLikes = researchPaper.likeCount;

    res.status(201).json({
      msg: "Liked successfully",
      success: true,
      data: userlike,
      totallikes:totalLikes, // total likes in the response
    });
  } catch (err) {
    res.status(500).json({
      msg: "Internal server error",
      error: err.message,
      success: false,
    });
  }
};

module.exports = UserLikes;
