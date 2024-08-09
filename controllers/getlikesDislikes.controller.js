const LikeModel = require("../models/like.model");
const DisLikeModel = require("../models/dislike.model");
const UploadResearchPaperModel = require("../models/uploadpaper.model");

const getLikesAndDisLikes = async (req, res) => {
  try {
    const { paperId } = req.params; 
 

    if (!paperId) {
      return res.status(400).json({ msg: "Research paper ID is required", success: false });
    }

    // Get the research paper
    const researchPaper = await UploadResearchPaperModel.findById(paperId);
    if (!researchPaper) {
      return res.status(404).json({ msg: "Research paper not found", success: false });
    }

    // Count likes and dislikes for the specific research paper
    const totalLikes = await LikeModel.countDocuments({likes:paperId});
    const totalDislikes = await DisLikeModel.countDocuments({dislikes:paperId });

    return res.status(200).json({
      msg: "Likes and Dislikes fetched successfully",
      success: true,
      data: {
        researchPaperId: paperId,
        title: researchPaper.title,
        totallikes:totalLikes,
        totaldislikes:totalDislikes,
      },
    });
  } catch (err) {
    res.status(500).json({
      msg: "Internal server error",
      success: false,
      error: err.message,
    });
  }
};

module.exports = getLikesAndDisLikes;
