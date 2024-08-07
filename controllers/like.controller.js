const LikeModel = require("../models/like.model");
const DisLikeModel = require("../models/dislike.model");

const UserLikes = async (req, res) => {
  try {
    const { userid, like } = req.body;

    // Check if the user already liked the research paper
    const existingLike = await LikeModel.findOne({ userid, likeid: like });
    if (existingLike) {
      return res
        .status(400)
        .json({ msg: "You already liked this research paper", success: false });
    }

    // Remove dislike if it exists
    await DisLikeModel.findOneAndDelete({ userid, likeid: like });

    // Create a new like
    const userlike = await LikeModel.create({ userid, likeid: like });

    res
      .status(201)
      .json({ msg: "Liked successfully", success: true, userlike });
  } catch (err) {
    res
      .status(500)
      .json({
        msg: "Internal server error",
        error: err.message,
        success: false,
      });
  }
};

module.exports = UserLikes;
